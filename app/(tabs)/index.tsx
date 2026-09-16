import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";
import { getLessonsByLanguage } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { images } from "@/constants/images";
import { colors, fontFamily } from "@/constants/theme";
import type { LanguageCode } from "@/types/learning";

const GREETINGS: Record<LanguageCode, string> = {
  es: "¡Hola",
  fr: "Bonjour",
  ja: "こんにちは",
  bn: "হ্যালো",
};

const BANNER_IMAGES: Record<LanguageCode, number> = {
  es: images.palace,
  fr: images.palace,
  ja: images.palace,
  bn: images.palace,
};

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguage } = useLanguageStore();
  const { dailyXp, dailyXpGoal, streak, completedLessonIds } =
    useProgressStore();

  const firstName = user?.firstName ?? "Learner";
  const greeting = selectedLanguage
    ? (GREETINGS[selectedLanguage.code] ?? "Hello")
    : "Hello";

  const languageLessons = selectedLanguage
    ? getLessonsByLanguage(selectedLanguage.code)
    : [];
  const languageUnits = selectedLanguage
    ? getUnitsByLanguage(selectedLanguage.code)
    : [];

  const firstUnit = languageUnits[0];
  const firstLesson = languageLessons[0];
  const progressPercent = dailyXpGoal > 0 ? dailyXp / dailyXpGoal : 0;

  const todaysPlan = [
    {
      id: "lesson",
      iconName: "book" as const,
      iconBg: colors.linguaBlue,
      title: "Lesson",
      subtitle: firstLesson?.title ?? "Hello & Goodbye",
      completed: firstLesson
        ? completedLessonIds.includes(firstLesson.id)
        : false,
    },
    {
      id: "ai-convo",
      iconName: "headset" as const,
      iconBg: colors.primary,
      title: "AI Conversation",
      subtitle: "Talk about your day",
      completed: false,
    },
    {
      id: "new-words",
      iconName: "chatbubble" as const,
      iconBg: colors.streak,
      title: "New words",
      subtitle: "10 words",
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ── */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-3">
          <View className="flex-row items-center gap-2">
            {selectedLanguage ? (
              <Image
                source={{ uri: selectedLanguage.flag }}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <View className="w-8 h-8 rounded-full bg-surface items-center justify-center">
                <Ionicons
                  name="globe-outline"
                  size={18}
                  color={colors.inkMuted}
                />
              </View>
            )}
            <Text className="ff-semibold text-base text-ink">
              {greeting}, {firstName}! 👋
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image source={images.streakFire} className="w-[22px] h-[22px]" />
              <Text className="ff-bold text-[15px] text-ink">{streak}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={colors.ink}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Daily Goal Card ── */}
        <View className="mx-5 mb-4">
          <View
            className="flex-row items-center bg-[#fff8ef] rounded-2xl p-4"
            style={styles.softShadow}
          >
            <View className="flex-1 pr-2">
              <Text className="ff-regular text-[13px] text-ink-muted mb-1">
                Daily goal
              </Text>
              <Text className="ff-bold text-[28px] text-ink mb-[10px] leading-[34px]">
                {dailyXp}{" "}
                <Text className="ff-regular text-base text-ink-muted">
                  / {dailyXpGoal} XP
                </Text>
              </Text>
              <View className="h-2 bg-[#ffe8cc] rounded overflow-hidden">
                <View
                  className="h-2 bg-streak rounded"
                  style={{ width: `${progressPercent * 100}%` }}
                />
              </View>
            </View>
            <Image source={images.treasure} className="w-20 h-20 ml-2" />
          </View>
        </View>

        {/* ── Continue Learning Banner ── */}
        {selectedLanguage && (
          <View className="mx-5 mb-5">
            <View
              className="bg-primary rounded-[20px] flex-row items-end overflow-hidden min-h-[168px]"
              style={styles.bannerShadow}
            >
              <View className="flex-1 p-5 justify-between">
                <View>
                  <Text className="ff-regular text-[13px] text-white/75 mb-0.5">
                    Continue learning
                  </Text>
                  <Text className="ff-bold text-[26px] text-white leading-8">
                    {selectedLanguage.name}
                  </Text>
                  <Text className="ff-regular text-[13px] text-white/70 mt-0.5 mb-[18px]">
                    A1 · {firstUnit ? `Unit ${firstUnit.order}` : "Unit 1"}
                  </Text>
                </View>
                <TouchableOpacity
                  className="bg-white rounded-[10px] px-[22px] py-[9px] self-start"
                  activeOpacity={0.85}
                >
                  <Text className="ff-semibold text-sm text-primary">
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                source={BANNER_IMAGES[selectedLanguage.code] ?? images.palace}
                className="w-[130px] h-[160px] self-end"
                resizeMode="contain"
              />
            </View>
          </View>
        )}

        {/* ── Today's Plan ── */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="ff-semibold text-lg text-ink">Today's plan</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="ff-medium text-sm text-primary">View all</Text>
            </TouchableOpacity>
          </View>

          <View
            className="bg-canvas rounded-2xl px-4"
            style={styles.softShadow}
          >
            {todaysPlan.map((item, idx) => (
              <View key={item.id}>
                <View className="flex-row items-center py-3">
                  <View
                    className="w-11 h-11 rounded-xl items-center justify-center mr-3"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Ionicons name={item.iconName} size={20} color="#fff" />
                  </View>
                  <View className="flex-1">
                    <Text className="ff-semibold text-sm text-ink">
                      {item.title}
                    </Text>
                    <Text className="ff-regular text-xs text-ink-muted mt-0.5">
                      {item.subtitle}
                    </Text>
                  </View>
                  {item.completed ? (
                    <View className="w-[26px] h-[26px] rounded-full bg-lingua-blue items-center justify-center">
                      <Ionicons name="checkmark" size={14} color="#fff" />
                    </View>
                  ) : (
                    <View className="w-[26px] h-[26px] rounded-full border-2 border-border" />
                  )}
                </View>
                {idx < todaysPlan.length - 1 && (
                  <View className="h-px bg-border" />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// StyleSheet is kept only for:
// 1. SafeAreaView — className not supported
// 2. ScrollView style / contentContainerStyle — RN-specific props
// 3. Platform shadows — iOS shadowColor/shadowOffset/shadowOpacity/shadowRadius + Android elevation
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.canvas },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 24 },

  softShadow: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.07,
      shadowRadius: 8,
    },
    android: { elevation: 2 },
  }),
  bannerShadow: Platform.select({
    ios: {
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.35,
      shadowRadius: 14,
    },
    android: { elevation: 8 },
  }),
});
