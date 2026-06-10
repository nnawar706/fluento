import { createClerkClient } from "@clerk/backend";
import { StreamClient } from "@stream-io/node-sdk";

// Server-side only — secrets never reach the React Native bundle
const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY!,
});

export async function POST(request: Request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sessionToken = authHeader.slice(7);

  let userId: string;
  try {
    // Verify the Clerk session JWT and derive the user ID server-side.
    // Never accept a client-supplied user_id — this is the security boundary.
    const payload = await clerkClient.verifyToken(sessionToken);
    userId = payload.sub;
  } catch {
    return Response.json({ error: "Invalid session" }, { status: 401 });
  }

  const apiKey = process.env.STREAM_API_KEY;
  const apiSecret = process.env.STREAM_API_SECRET;

  if (!apiKey || !apiSecret) {
    return Response.json(
      { error: "Stream credentials not configured" },
      { status: 500 }
    );
  }

  const streamClient = new StreamClient(apiKey, apiSecret);

  const token = streamClient.generateUserToken({
    user_id: userId,
    validity_in_seconds: 60 * 60 * 4, // 4-hour token; SDK refreshes via tokenProvider
  });

  // Accept display name from the client — it is not security-sensitive
  const body = await request.json().catch(() => ({})) as { userName?: string };

  return Response.json({
    token,
    apiKey,
    userId,
    userName: body.userName ?? userId,
  });
}
