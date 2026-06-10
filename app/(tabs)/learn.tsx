import { LessonCard } from "@/components/LessonCard";
import { images } from "@/constants/images";
import { colors, fontFamily } from "@/constants/theme";
import { getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";
import type { Lesson } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ActiveTab = "lessons" | "practice";

export default function LearnScreen() {
  const { selectedLanguage } = useLanguageStore();
  const { completedLessonIds } = useProgressStore();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ActiveTab>("lessons");

  const units = selectedLanguage
    ? getUnitsByLanguage(selectedLanguage.code)
    : [];
  const currentUnit = units[0] ?? null;
  const lessons = currentUnit ? getLessonsByUnit(currentUnit.id) : [];

  const completedCount = lessons.filter((l) =>
    completedLessonIds.includes(l.id),
  ).length;
  const firstIncompleteIndex = lessons.findIndex(
    (l) => !completedLessonIds.includes(l.id),
  );

  const getLessonStatus = (lesson: Lesson, index: number) => {
    if (completedLessonIds.includes(lesson.id)) return "completed" as const;
    if (index === firstIncompleteIndex) return "in-progress" as const;
    return "not-started" as const;
  };

  if (!selectedLanguage) {
    return (
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <View style={styles.emptyState}>
          <Ionicons name="globe-outline" size={52} color={colors.inkMuted} />
          <Text style={styles.emptyTitle}>No language selected</Text>
          <Text style={styles.emptySubtitle}>
            Go to your profile to pick a language and start learning.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Unit Header ──────────────────────────────────────── */}
        <View style={styles.header}>
          {/* Top bar: language + bookmark */}
          <View style={styles.headerTopBar}>
            <View style={styles.languageRow}>
              <Image
                source={{ uri: selectedLanguage.flag }}
                style={styles.flagImage}
              />
              <Text style={styles.languageLabel}>{selectedLanguage.name}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons name="bookmark-outline" size={22} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Mascot illustration */}
          <View style={styles.mascotWrapper}>
            {/* <Image
              source={images.palace}
              style={styles.heroImage}
              resizeMode="contain"
            /> */}
            <Image
              source={images.mascotWelcome}
              style={styles.mascotImage}
              resizeMode="contain"
            />
          </View>

          {/* Unit info */}
          {currentUnit ? (
            <View style={styles.unitInfoBox}>
              <Text style={styles.unitTitle}>{currentUnit.title}</Text>
              <Text style={styles.unitSubtitle}>
                Unit {currentUnit.order} · {completedCount}/{lessons.length}{" "}
                lessons
              </Text>
            </View>
          ) : (
            <View style={styles.unitInfoBox}>
              <Text style={styles.unitTitle}>No lessons available</Text>
            </View>
          )}
        </View>

        {/* ── Tab Bar ──────────────────────────────────────────── */}
        <View className="flex-row bg-canvas border-b border-border">
          {(["lessons", "practice"] as ActiveTab[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                className="flex-1 items-center py-3.5 border-b-2"
                style={{
                  borderBottomColor: isActive ? colors.primary : "transparent",
                }}
                onPress={() => setActiveTab(tab)}
                activeOpacity={0.7}
              >
                <Text
                  className={
                    isActive
                      ? "ff-semibold text-sm text-primary"
                      : "ff-medium text-sm text-ink-muted"
                  }
                >
                  {tab === "lessons" ? "Lessons" : "Practice"}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ── Content ──────────────────────────────────────────── */}
        <View style={styles.lessonList}>
          {activeTab === "lessons" ? (
            lessons.length > 0 ? (
              lessons.map((lesson, index) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  lessonNumber={index + 1}
                  status={getLessonStatus(lesson, index)}
                  onPress={() =>
                    router.push({
                      pathname: "/lesson/[id]",
                      params: { id: lesson.id },
                    })
                  }
                />
              ))
            ) : (
              <View style={styles.placeholder}>
                <Ionicons
                  name="book-outline"
                  size={44}
                  color={colors.inkMuted}
                />
                <Text style={styles.placeholderTitle}>No lessons yet</Text>
                <Text style={styles.placeholderSub}>
                  Lessons for this language are coming soon.
                </Text>
              </View>
            )
          ) : (
            <View style={styles.placeholder}>
              <Ionicons
                name="barbell-outline"
                size={44}
                color={colors.inkMuted}
              />
              <Text style={styles.placeholderTitle}>Practice coming soon</Text>
              <Text style={styles.placeholderSub}>
                Complete lessons first to unlock practice exercises.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  scrollContent: {
    paddingBottom: 32,
  },

  // ── Header ──────────────────────────────────────────────────────────────
  header: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingBottom: 28,
    overflow: "hidden",
  },
  headerTopBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 4,
  },
  languageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  flagImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  languageLabel: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    color: "#fff",
  },
  mascotWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingTop: 12,
  },
  heroImage: {
    width: 120,
    height: 150,
    marginRight: -18,
  },
  mascotImage: {
    width: "100%",
    height: 168,
  },
  unitInfoBox: {
    paddingHorizontal: 20,
    paddingTop: 4,
  },
  unitTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    color: "#fff",
    marginBottom: 4,
  },
  unitSubtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    color: "rgba(255,255,255,0.75)",
  },

  // ── Lesson List ──────────────────────────────────────────────────────────
  lessonList: {
    paddingTop: 20,
  },

  // ── Empty / Placeholder ──────────────────────────────────────────────────
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    color: colors.ink,
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.inkMuted,
    textAlign: "center",
    lineHeight: 22,
  },
  placeholder: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  placeholderTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    color: colors.ink,
    marginTop: 14,
    marginBottom: 8,
  },
  placeholderSub: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    color: colors.inkMuted,
    textAlign: "center",
    lineHeight: 20,
  },
});
