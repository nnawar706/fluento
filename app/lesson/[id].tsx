import { images } from "@/constants/images";
import { colors, fontFamily } from "@/constants/theme";
import { getLessonById } from "@/data/lessons";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AudioLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const lesson = getLessonById(id ?? "");

  const [isMicActive, setIsMicActive] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSessionSeconds((s) => s + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

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

  const handleNextPhrase = () => {
    setCurrentPhraseIndex((i) => (i + 1) % phrases.length);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      {/* ── Header ────────────────────────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="chevron-back" size={20} color={colors.ink} />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Buddy</Text>
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <Ionicons
            name="videocam-outline"
            size={20}
            color={colors.inkMuted}
          />
          <Text style={styles.sessionTime}>{sessionMinutes} min</Text>
          <Ionicons
            name="notifications-outline"
            size={20}
            color={colors.inkMuted}
          />
        </View>
      </View>

      {/* ── Teaching Area ──────────────────────────────────────── */}
      <View style={styles.teachingArea}>
        {/* Mascot area fills available space */}
        <View style={styles.mascotArea}>
          <Image
            source={images.mascotLogo}
            style={styles.mascot}
            resizeMode="contain"
          />
          {/* User thumbnail overlaid top-right */}
          <View style={styles.userThumbnail}>
            <Ionicons name="person" size={28} color="#9880f0" />
          </View>
        </View>

        {/* Teacher response bubble pinned to bottom */}
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
            onPress={handleNextPhrase}
            activeOpacity={0.7}
          >
            <Ionicons name="volume-high" size={18} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Controls ──────────────────────────────────────────── */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.controlBtn, isCameraOn && styles.controlBtnActive]}
          onPress={() => setIsCameraOn((v) => !v)}
          activeOpacity={0.75}
          disabled
        >
          <Ionicons
            name={isCameraOn ? "videocam" : "videocam-outline"}
            size={22}
            color={isCameraOn ? "#fff" : colors.inkMuted}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlBtn, isMicActive && styles.controlBtnActive]}
          onPress={() => setIsMicActive((v) => !v)}
          activeOpacity={0.75}
        >
          <Ionicons
            name={isMicActive ? "mic" : "mic-off"}
            size={22}
            color={isMicActive ? "#fff" : colors.inkMuted}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlBtn, showSubtitles && styles.controlBtnActive]}
          onPress={() => setShowSubtitles((v) => !v)}
          activeOpacity={0.75}
        >
          <Ionicons
            name="text"
            size={22}
            color={showSubtitles ? "#fff" : colors.inkMuted}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.endCallBtn}
          onPress={() => router.back()}
          activeOpacity={0.75}
        >
          <View style={styles.endCallIconWrap}>
            <Ionicons name="call" size={22} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      {/* ── Lesson Feedback ────────────────────────────────────── */}
      <View style={styles.feedback}>
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Speaking</Text>
          <Text style={[styles.feedbackValue, { color: colors.linguaGreen }]}>
            Excellent
          </Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Pronunciation</Text>
          <Text style={[styles.feedbackValue, { color: colors.linguaGreen }]}>
            Great
          </Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Grammar</Text>
          <Text style={[styles.feedbackValue, { color: colors.warning }]}>
            Good
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

  // ── Header ──────────────────────────────────────────────────────
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
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.linguaGreen,
  },
  onlineText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.linguaGreen,
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

  // ── Teaching Area ────────────────────────────────────────────────
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

  // ── Controls ─────────────────────────────────────────────────────
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

  // ── Feedback ─────────────────────────────────────────────────────
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
