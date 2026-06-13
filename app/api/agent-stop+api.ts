import { verifyToken } from "@clerk/backend";

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
    console.error("[agent-stop] Clerk verification failed:", err);
    return Response.json({ error: "Invalid session" }, { status: 401 });
  }

  const body = await request
    .json()
    .catch(() => null) as { sessionId?: string; callId?: string } | null;

  const { sessionId, callId } = body ?? {};

  if (!sessionId || sessionId === "unknown" || !callId) {
    return Response.json({ ok: true });
  }

  const agentServerUrl = process.env.VISION_AGENT_SERVER_URL ?? "http://localhost:8000";

  try {
    // Endpoint: DELETE /calls/{call_id}/sessions/{session_id}
    const res = await fetch(
      `${agentServerUrl}/calls/${encodeURIComponent(callId)}/sessions/${encodeURIComponent(sessionId)}`,
      { method: "DELETE" }
    );
    // 404 = already stopped — treat as success
    if (!res.ok && res.status !== 404) {
      console.warn("[agent-stop] Agent server responded:", res.status);
    }
  } catch (err) {
    // Non-critical: agent may have already left the call
    console.warn("[agent-stop] Could not reach agent server:", err);
  }

  return Response.json({ ok: true });
}
