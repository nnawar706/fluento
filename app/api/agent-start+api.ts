import { verifyToken } from "@clerk/backend";
import { StreamClient } from "@stream-io/node-sdk";

interface AgentStartBody {
  callId: string;
  callType: string;
  language: string;
  lessonTitle: string;
  goals: string[];
  vocabulary: Array<{ word: string; translation: string; pronunciation: string }>;
  phrases: Array<{ phrase: string; translation: string; pronunciation: string }>;
  aiTeacherPrompt: {
    topic: string;
    systemPrompt: string;
    teachingPoints: string[];
    exampleDialogue?: string;
  };
}

export async function POST(request: Request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await verifyToken(authHeader.slice(7), {
      publishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!,
      secretKey: process.env.CLERK_SECRET_KEY ?? "",
    });
  } catch (err) {
    console.error("[agent-start] Clerk verification failed:", err);
    return Response.json({ error: "Invalid session" }, { status: 401 });
  }

  const body = await request.json().catch(() => null) as AgentStartBody | null;
  if (!body?.callId || !body.callType) {
    return Response.json({ error: "Missing callId or callType" }, { status: 400 });
  }

  const apiKey = process.env.STREAM_API_KEY;
  const apiSecret = process.env.STREAM_API_SECRET;
  const agentServerUrl = process.env.VISION_AGENT_SERVER_URL ?? "http://localhost:8000";

  if (!apiKey || !apiSecret) {
    return Response.json({ error: "Stream credentials not configured" }, { status: 500 });
  }

  try {
    const streamClient = new StreamClient(apiKey, apiSecret);
    const call = streamClient.video.call(body.callType, body.callId);

    // Pack lesson context into the call's custom data — agent reads this on join
    await call.update({
      custom: {
        language: body.language,
        lessonTitle: body.lessonTitle,
        goals: body.goals,
        vocabulary: body.vocabulary,
        phrases: body.phrases,
        aiTeacherPrompt: body.aiTeacherPrompt,
      },
    });

    // Ensure the agent user exists before adding them to the call.
    // updateCallMembers fails if the user doesn't exist in Stream yet.
    await streamClient.upsertUsers([
      { id: "fluento-teacher", name: "Fluento Teacher" },
    ]);

    // Grant the agent user admin role so it can publish audio without a permission request
    await call.updateCallMembers({
      update_members: [{ user_id: "fluento-teacher", role: "admin" }],
    });

    // Ask the Vision Agent server to join the call.
    // Endpoint: POST /calls/{call_id}/sessions  body: { call_type }
    const agentRes = await fetch(
      `${agentServerUrl}/calls/${encodeURIComponent(body.callId)}/sessions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ call_type: body.callType }),
      }
    );

    if (!agentRes.ok) {
      const text = await agentRes.text().catch(() => "");
      console.error("[agent-start] Agent server error:", agentRes.status, text);
      return Response.json({ error: `Agent server error: ${agentRes.status}` }, { status: 502 });
    }

    const data = await agentRes.json() as { session_id?: string };
    return Response.json({ sessionId: data.session_id ?? "unknown" });
  } catch (err) {
    console.error("[agent-start]", err);
    return Response.json(
      { error: err instanceof Error ? err.message : "Internal error" },
      { status: 500 }
    );
  }
}
