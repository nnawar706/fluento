import Constants from "expo-constants";

export interface StreamTokenResponse {
  token: string;
  apiKey: string;
  userId: string;
  userName: string;
}

/**
 * Resolves the base URL for Expo API routes.
 * In dev, uses the Expo bundler host. In prod, uses EXPO_PUBLIC_API_URL.
 */
function getApiBaseUrl(): string {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  if (__DEV__) {
    // Expo Go / dev client: the dev server host is available here
    const debuggerHost = Constants.expoGoConfig?.debuggerHost;
    if (debuggerHost) {
      const host = debuggerHost.split(":")[0];
      return `http://${host}:8081`;
    }

    // Newer Expo SDK: hostUri includes port
    const hostUri = (Constants.expoConfig as { hostUri?: string } | undefined)?.hostUri;
    if (hostUri) {
      return `http://${hostUri}`;
    }
  }

  return "http://localhost:8081";
}

/**
 * Fetches a Stream user token from the Expo API route.
 * Sends the Clerk session JWT in the Authorization header so the server
 * can derive the user ID without trusting any client-supplied parameter.
 */
export async function fetchStreamToken(
  clerkSessionToken: string,
  userName: string
): Promise<StreamTokenResponse> {
  const baseUrl = getApiBaseUrl();

  const res = await fetch(`${baseUrl}/api/stream-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${clerkSessionToken}`,
    },
    body: JSON.stringify({ userName }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: "Unknown error" })) as { error?: string };
    throw new Error(body.error ?? `HTTP ${res.status}`);
  }

  return res.json() as Promise<StreamTokenResponse>;
}
