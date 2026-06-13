import { verifyToken } from "@clerk/backend";
import { StreamClient } from "@stream-io/node-sdk";

export async function POST(request: Request) {
  // Read body first — request body can only be read once
  const body = await request.json().catch(() => ({})) as { userName?: string };

  const authHeader = request.headers.get("Authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sessionToken = authHeader.slice(7);

  let userId: string;
  try {
    // verifyToken fetches the JWKS via publishableKey (public endpoint, no secret needed).
    // The user ID is derived from the verified payload — never from a client param.
    const payload = await verifyToken(sessionToken, {
      publishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!,
      secretKey: process.env.CLERK_SECRET_KEY ?? "",
    });
    userId = payload.sub;
  } catch (err) {
    console.error("[stream-token] Clerk verification failed:", err);
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

  return Response.json({
    token,
    apiKey,
    userId,
    userName: body.userName ?? userId,
  });
}
