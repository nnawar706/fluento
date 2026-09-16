import { useCallback, useEffect, useRef, useState } from "react";
import {
  Call,
  CallingState,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-native-sdk";
import {
  AgentLessonContext,
  AgentStatus,
  fetchStreamToken,
  startAgent,
  stopAgent,
} from "@/lib/stream";

export type StreamCallState =
  | "idle"
  | "connecting"
  | "joined"
  | "error"
  | "ended";

export type { AgentStatus };

interface UseStreamCallOptions {
  /** Stable call identifier — unique per user per lesson. */
  callId: string;
  /** Display name shown to other participants. */
  userName: string;
  /** Avatar URL for the Stream user (optional). */
  userImage?: string;
  /** Returns the current Clerk session JWT; comes from useAuth().getToken(). */
  getClerkToken: () => Promise<string | null>;
  /**
   * Lesson context packed into the call's custom data so the Vision Agent
   * can read it on join. When provided the agent is started after joining.
   */
  lessonContext?: AgentLessonContext | null;
}

export interface UseStreamCallReturn {
  callState: StreamCallState;
  agentStatus: AgentStatus;
  errorMessage: string;
  isMuted: boolean;
  startCall: () => Promise<void>;
  toggleMute: () => Promise<void>;
  endCall: () => Promise<void>;
}

export function useStreamCall({
  callId,
  userName,
  userImage,
  getClerkToken,
  lessonContext,
}: UseStreamCallOptions): UseStreamCallReturn {
  const [callState, setCallState] = useState<StreamCallState>("idle");
  const [agentStatus, setAgentStatus] = useState<AgentStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMuted, setIsMuted] = useState(false);

  // Keep client, call, and agent session in refs so cleanup always sees latest values
  const clientRef = useRef<StreamVideoClient | null>(null);
  const callRef = useRef<Call | null>(null);
  const agentSessionIdRef = useRef<string | null>(null);
  // callId ref needed in cleanup so stopAgent always has the right value
  const callIdRef = useRef<string>(callId);

  // ── Agent cleanup ────────────────────────────────────────────────────────────
  const stopAgentSession = useCallback(async () => {
    const sessionId = agentSessionIdRef.current;
    if (!sessionId) return;
    agentSessionIdRef.current = null;

    const clerkToken = await getClerkToken().catch(() => null);
    if (clerkToken) {
      await stopAgent(clerkToken, callIdRef.current, sessionId);
    }
  }, [getClerkToken]);

  // ── Full cleanup ─────────────────────────────────────────────────────────────
  const cleanup = useCallback(async () => {
    await stopAgentSession();

    const call = callRef.current;
    const client = clientRef.current;

    if (call && call.state.callingState !== CallingState.LEFT) {
      await call.leave().catch(console.error);
    }
    if (client) {
      await client.disconnectUser().catch(console.error);
    }

    callRef.current = null;
    clientRef.current = null;
  }, [stopAgentSession]);

  // ── Start agent ──────────────────────────────────────────────────────────────
  const startAgentSession = useCallback(
    async (clerkToken: string) => {
      if (!lessonContext) return;

      setAgentStatus("connecting");
      try {
        const { sessionId } = await startAgent(clerkToken, lessonContext);
        agentSessionIdRef.current = sessionId;
        setAgentStatus("connected");
      } catch (err) {
        console.error("[useStreamCall] Agent start failed:", err);
        setAgentStatus("failed");
      }
    },
    [lessonContext]
  );

  // ── Start call ───────────────────────────────────────────────────────────────
  const startCall = useCallback(async () => {
    if (callState === "connecting" || callState === "joined") return;

    setCallState("connecting");
    setAgentStatus("idle");
    setErrorMessage("");
    setIsMuted(false);

    try {
      const clerkToken = await getClerkToken();
      if (!clerkToken) throw new Error("Not authenticated");

      const { token, apiKey, userId } = await fetchStreamToken(clerkToken, userName);

      const streamUser: User = { id: userId, name: userName, image: userImage };

      const tokenProvider = async () => {
        const freshClerkToken = await getClerkToken();
        if (!freshClerkToken) throw new Error("Session expired");
        const fresh = await fetchStreamToken(freshClerkToken, userName);
        return fresh.token;
      };

      const client = StreamVideoClient.getOrCreateInstance({
        apiKey,
        user: streamUser,
        token,
        tokenProvider,
      });
      clientRef.current = client;

      const callType = lessonContext?.callType ?? "default";
      const call = client.call(callType, callId, { reuseInstance: true });
      callRef.current = call;

      await call.join({ create: true });
      await call.camera.disable();

      setCallState("joined");

      // Start the Vision Agent now that we're in the call
      await startAgentSession(clerkToken);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not connect to session";
      setErrorMessage(msg);
      setCallState("error");
      await cleanup();
    }
  }, [
    callId,
    callState,
    cleanup,
    getClerkToken,
    lessonContext,
    startAgentSession,
    userName,
    userImage,
  ]);

  // ── Toggle mute ──────────────────────────────────────────────────────────────
  const toggleMute = useCallback(async () => {
    const call = callRef.current;
    if (!call) return;
    try {
      if (isMuted) {
        await call.microphone.enable();
        setIsMuted(false);
      } else {
        await call.microphone.disable();
        setIsMuted(true);
      }
    } catch (err) {
      console.error("Mute toggle failed:", err);
    }
  }, [isMuted]);

  // ── End call ─────────────────────────────────────────────────────────────────
  const endCall = useCallback(async () => {
    await cleanup();
    setCallState("ended");
    setAgentStatus("idle");
    setIsMuted(false);
  }, [cleanup]);

  // Keep callIdRef in sync — cleanup reads it without re-subscribing
  useEffect(() => {
    callIdRef.current = callId;
  }, [callId]);

  // ── Cleanup on unmount ───────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      cleanup().catch(console.error);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { callState, agentStatus, errorMessage, isMuted, startCall, toggleMute, endCall };
}
