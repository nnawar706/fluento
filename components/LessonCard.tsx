import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontFamily } from "@/constants/theme";
import type { Lesson } from "@/types/learning";

export type LessonStatus = "completed" | "in-progress" | "not-started";

// Maps lesson number suffix (e.g. "1-3") to a Picsum seed for a consistent image.
const THUMBNAIL_SEEDS: Record<string, string> = {
  "1-1": "greet42",
  "1-2": "intro42",
  "1-3": "numbers42",
  "1-4": "colors42",
  "1-5": "family42",
  "1-6": "dining42",
};

function getThumbnailUri(lessonId: string): string {
  const match = lessonId.match(/(\d+-\d+)$/);
  const key = match?.[1] ?? "1-1";
  const seed = THUMBNAIL_SEEDS[key] ?? "lesson42";
  return `https://picsum.photos/seed/${seed}/120/120`;
}

interface Props {
  lesson: Lesson;
  lessonNumber: number;
  status: LessonStatus;
  onPress: () => void;
}

export function LessonCard({ lesson, lessonNumber, status, onPress }: Props) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in-progress";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[styles.card, isInProgress && styles.cardInProgress]}
    >
      <View style={styles.content}>
        {/* Left: text info */}
        <View style={styles.textSection}>
          <Text style={styles.lessonLabel}>Lesson {lessonNumber}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {lesson.title}
          </Text>

          {isInProgress ? (
            <View style={styles.inProgressBadge}>
              <Text style={styles.inProgressText}>In progress</Text>
            </View>
          ) : (
            <Text style={styles.meta}>
              {lesson.xpReward} XP · {lesson.vocabulary.length} words
            </Text>
          )}
        </View>

        {/* Right: status indicator */}
        {isCompleted && (
          <View style={styles.completedIcon}>
            <Ionicons name="checkmark" size={18} color="#fff" />
          </View>
        )}

        {isInProgress && (
          <Image
            source={{ uri: getThumbnailUri(lesson.id) }}
            style={styles.thumbnail}
            resizeMode="cover"
          />
        )}

        {!isCompleted && !isInProgress && (
          <View style={styles.notStartedIcon}>
            <Ionicons name="chevron-forward" size={15} color={colors.inkMuted} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const CARD_SHADOW = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
  },
  android: { elevation: 2 },
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.canvas,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    ...CARD_SHADOW,
  },
  cardInProgress: {
    backgroundColor: "#ede9fe",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  textSection: {
    flex: 1,
    marginRight: 12,
  },
  lessonLabel: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.inkMuted,
    marginBottom: 3,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    color: colors.ink,
    marginBottom: 6,
  },
  meta: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.inkMuted,
  },
  inProgressBadge: {
    alignSelf: "flex-start",
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  inProgressText: {
    fontFamily: fontFamily.medium,
    fontSize: 11,
    color: "#fff",
  },
  completedIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.linguaGreen,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  notStartedIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: 12,
    flexShrink: 0,
  },
});
