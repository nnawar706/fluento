import { images } from "@/constants/images";
import { colors, fontFamily } from "@/constants/theme";
import { getLessonById } from "@/data/lessons";
import { useStreamCall } from "@/hooks/useStreamCall";
import { useAuth, useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ── Status indicator config keyed by call state ────────────────────────────────
const STATUS_CONFIG = {
  idle: { color: "#9ca3af", label: "Preparing..." },
  connecting: { color: "#f59e0b", label: "Connecting..." },
  joined: { color: colors.linguaGreen, label: "Connected" },
  error: { color: colors.error, label: "Connection failed" },
  ended: { color: "#9ca3af", label: "Session ended" },
} as const;

export default function AudioLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const lesson = getLessonById(id ?? "");

  const { user, isLoaded: userLoaded } = useUser();
  const { getToken } = useAuth();

  // ── Session timer (only ticks while joined) ──────────────────────────────────
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Current phrase cycling ───────────────────────────────────────────────────
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // ── Stream call ──────────────────────────────────────────────────────────────
  const callId = lesson
    ? `lesson-${lesson.id.replace(/[^a-z0-9-]/g, "-")}-${user?.id ?? "anon"}`
    : "lesson-default";

  const { callState, errorMessage, isMuted, startCall, toggleMute, endCall } =
    useStreamCall({
      callId,
      userName: user?.firstName ?? user?.username ?? "Student",
      userImage: user?.imageUrl,
      getClerkToken: () => getToken(),
    });

  // Auto-start the call once user + lesson are ready
  useEffect(() => {
    if (userLoaded && user && lesson) {
      startCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLoaded]);

  // Session timer — only counts while in the call
  useEffect(() => {
    if (callState === "joined") {
      timerRef.current = setInterval(() => {
        setSessionSeconds((s) => s + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callState]);

  // ── End call and navigate back ───────────────────────────────────────────────
  const handleEndCall = async () => {
    await endCall();
    router.back();
  };

  if (!lesson) {
    return (
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>Lesson not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const phrases = lesson.phrases;
  const currentPhrase = phrases[currentPhraseIndex % phrases.length];
  const sessionMinutes = Math.floor(sessionSeconds / 60);
  const status = STATUS_CONFIG[callState];
  const micActive = callState === "joined" && !isMuted;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleEndCall}
          activeOpacity={0.7}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="chevron-back" size={20} color={colors.ink} />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Buddy</Text>
          <View style={styles.onlineRow}>
            <View style={[styles.statusDot, { backgroundColor: status.color }]} />
            <Text style={[styles.statusText, { color: status.color }]}>
              {callState === "joined" && isMuted ? "Muted" : status.label}
            </Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          {callState === "connecting" ? (
            <ActivityIndicator size="small" color={colors.primary} />
          ) : (
            <Ionicons
              name="videocam-outline"
              size={20}
              color={colors.inkMuted}
            />
          )}
          <Text style={styles.sessionTime}>{sessionMinutes} min</Text>
          <Ionicons
            name="notifications-outline"
            size={20}
            color={colors.inkMuted}
          />
        </View>
      </View>

      {/* ── Teaching Area ────────────────────────────────────────────────────── */}
      <View style={styles.teachingArea}>
        <View style={styles.mascotArea}>
          <Image
            source={images.mascotLogo}
            style={styles.mascot}
            resizeMode="contain"
          />

          {/* User thumbnail — shows avatar or person icon */}
          <View style={styles.userThumbnail}>
            {user?.imageUrl ? (
              <Image
                source={{ uri: user.imageUrl }}
                style={styles.userAvatar}
                resizeMode="cover"
              />
            ) : (
              <Ionicons name="person" size={28} color="#9880f0" />
            )}

            {/* Muted indicator on thumbnail */}
            {isMuted && (
              <View style={styles.mutedBadge}>
                <Ionicons name="mic-off" size={10} color="#fff" />
              </View>
            )}
          </View>
        </View>

        {/* Error state overlay */}
        {callState === "error" && (
          <View style={styles.errorBanner}>
            <Ionicons name="warning-outline" size={14} color="#fff" />
            <Text style={styles.errorText} numberOfLines={1}>
              {errorMessage}
            </Text>
            <TouchableOpacity onPress={startCall} activeOpacity={0.8}>
              <Text style={styles.retryText}>Retry</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Phrase speech bubble pinned to the bottom of the teaching area */}
        <View style={styles.speechRow}>
          <View style={styles.speechBubble}>
            <Text style={styles.speechPhrase}>{currentPhrase.phrase}</Text>
            <Text style={styles.speechTranslation} numberOfLines={1}>
              {currentPhrase.translation}
            </Text>
            <Text style={styles.speechPronunciation} numberOfLines={1}>
              {currentPhrase.pronunciation}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.speakerBtn}
            onPress={() =>
              setCurrentPhraseIndex((i) => (i + 1) % phrases.length)
            }
            activeOpacity={0.7}
          >
            <Ionicons name="volume-high" size={18} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Controls ─────────────────────────────────────────────────────────── */}
      <View style={styles.controls}>
        {/* Camera — disabled for audio-only lessons */}
        <TouchableOpacity
          style={styles.controlBtn}
          activeOpacity={0.75}
          disabled
        >
          <Ionicons
            name="videocam-outline"
            size={22}
            color={colors.inkMuted}
          />
        </TouchableOpacity>

        {/* Microphone — wired to Stream call */}
        <TouchableOpacity
          style={[styles.controlBtn, micActive && styles.controlBtnActive]}
          onPress={toggleMute}
          activeOpacity={0.75}
          disabled={callState !== "joined"}
        >
          <Ionicons
            name={micActive ? "mic" : "mic-off"}
            size={22}
            color={micActive ? "#fff" : colors.inkMuted}
          />
        </TouchableOpacity>

        {/* Subtitles toggle (UI only for now) */}
        <TouchableOpacity style={styles.controlBtn} activeOpacity={0.75}>
          <Ionicons name="text" size={22} color={colors.inkMuted} />
        </TouchableOpacity>

        {/* End call */}
        <TouchableOpacity
          style={styles.endCallBtn}
          onPress={handleEndCall}
          activeOpacity={0.75}
        >
          <View style={styles.endCallIconWrap}>
            <Ionicons name="call" size={22} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      {/* ── Lesson Feedback ──────────────────────────────────────────────────── */}
      <View style={styles.feedback}>
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Speaking</Text>
          <Text style={[styles.feedbackValue, { color: colors.linguaGreen }]}>
            {callState === "joined" ? "Excellent" : "—"}
          </Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Pronunciation</Text>
          <Text style={[styles.feedbackValue, { color: colors.linguaGreen }]}>
            {callState === "joined" ? "Great" : "—"}
          </Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Grammar</Text>
          <Text style={[styles.feedbackValue, { color: colors.warning }]}>
            {callState === "joined" ? "Good" : "—"}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const CARD_SHADOW = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  android: { elevation: 2 },
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notFoundText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.inkMuted,
  },

  // ── Header ────────────────────────────────────────────────────────────────
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenter: {
    flex: 1,
    marginLeft: 12,
  },
  headerTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.ink,
    lineHeight: 22,
  },
  onlineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 2,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sessionTime: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: colors.inkMuted,
    minWidth: 18,
    textAlign: "center",
  },

  // ── Teaching Area ──────────────────────────────────────────────────────────
  teachingArea: {
    flex: 1,
    backgroundColor: "#ede9fe",
    marginHorizontal: 16,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 16,
    flexDirection: "column",
  },
  mascotArea: {
    flex: 1,
  },
  mascot: {
    flex: 1,
    width: "100%",
  },
  userThumbnail: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 72,
    height: 92,
    borderRadius: 14,
    backgroundColor: "#d4c8ff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: { elevation: 4 },
    }),
  },
  userAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 14,
  },
  mutedBadge: {
    position: "absolute",
    bottom: 6,
    right: 6,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.error,
    alignItems: "center",
    justifyContent: "center",
  },
  errorBanner: {
    position: "absolute",
    bottom: 68,
    left: 12,
    right: 52,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(239,68,68,0.9)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    zIndex: 3,
  },
  errorText: {
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 11,
    color: "#fff",
  },
  retryText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
    color: "#fff",
    textDecorationLine: "underline",
  },
  speechRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  speechBubble: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    ...CARD_SHADOW,
  },
  speechPhrase: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: colors.ink,
    lineHeight: 20,
  },
  speechTranslation: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.inkMuted,
    marginTop: 2,
  },
  speechPronunciation: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    color: colors.primary,
    marginTop: 1,
  },
  speakerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    ...CARD_SHADOW,
  },

  // ── Controls ───────────────────────────────────────────────────────────────
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 24,
    marginBottom: 14,
  },
  controlBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
      },
      android: { elevation: 1 },
    }),
  },
  controlBtnActive: {
    backgroundColor: colors.primary,
  },
  endCallBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.error,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: colors.error,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: { elevation: 3 },
    }),
  },
  endCallIconWrap: {
    transform: [{ rotate: "135deg" }],
  },

  // ── Feedback ───────────────────────────────────────────────────────────────
  feedback: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    marginHorizontal: 16,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  feedbackItem: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  feedbackLabel: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.inkMuted,
  },
  feedbackValue: {
    fontFamily: fontFamily.semiBold,
    fontSize: 13,
  },
  feedbackDivider: {
    width: 1,
    height: 28,
    backgroundColor: colors.border,
  },
});
