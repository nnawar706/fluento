import { useState, useMemo } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { languages } from "@/data/languages";
import { images } from "@/constants/images";
import { colors, fontFamily } from "@/constants/theme";
import { useLanguageStore } from "@/store/languageStore";

export default function LanguageSelection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const setSelectedLanguage = useLanguageStore((s) => s.setSelectedLanguage);
  const canGoBack = router.canGoBack();

  const filtered = useMemo(
    () =>
      search.trim()
        ? languages.filter((l) =>
            l.name.toLowerCase().includes(search.toLowerCase())
          )
        : languages,
    [search]
  );

  const selectedLanguage = languages.find((l) => l.id === selectedId);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.canvas }}>
      {/* Header */}
      <View style={styles.header}>
        {canGoBack ? (
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={24} color={colors.ink} />
          </TouchableOpacity>
        ) : (
          <View style={styles.backBtn} />
        )}
        <Text style={styles.headerTitle}>Choose a language</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons
            name="search-outline"
            size={18}
            color={colors.inkMuted}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search languages"
            placeholderTextColor={colors.inkMuted}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Section Label */}
        <Text style={styles.sectionLabel}>Popular</Text>

        {/* Language Cards */}
        {filtered.map((lang) => {
          const isSelected = lang.id === selectedId;
          return (
            <TouchableOpacity
              key={lang.id}
              style={[styles.card, isSelected && styles.cardSelected]}
              activeOpacity={0.75}
              onPress={() => setSelectedId(isSelected ? null : lang.id)}
            >
              <Image
                source={{ uri: lang.flag }}
                style={styles.flag}
                resizeMode="cover"
              />
              <View style={styles.cardBody}>
                <Text style={styles.langName}>{lang.name}</Text>
                {lang.learners ? (
                  <Text style={styles.learners}>{lang.learners} learners</Text>
                ) : null}
              </View>
              {isSelected ? (
                <View style={styles.checkCircle}>
                  <Ionicons name="checkmark" size={15} color={colors.canvas} />
                </View>
              ) : (
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.border}
                />
              )}
            </TouchableOpacity>
          );
        })}

        {/* Earth Illustration */}
        <Image
          source={images.earth}
          style={styles.earthImage}
          resizeMode="contain"
        />
      </ScrollView>

      {/* Confirm Button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.confirmBtn, !selectedId && styles.confirmBtnDisabled]}
          activeOpacity={0.85}
          disabled={!selectedId}
          onPress={() => {
            if (selectedLanguage) {
              setSelectedLanguage(selectedLanguage);
              router.replace("/");
            }
          }}
        >
          <Text style={styles.confirmBtnText}>
            {selectedLanguage
              ? `Start learning ${selectedLanguage.name}`
              : "Select a language to continue"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const CARD_BORDER_RADIUS = 16;
const PRIMARY_LIGHT = "#ede8ff";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    color: colors.ink,
  },
  headerRight: {
    width: 36,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: colors.surface,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.ink,
    padding: 0,
  },
  sectionLabel: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    color: colors.ink,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: CARD_BORDER_RADIUS,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.canvas,
  },
  cardSelected: {
    borderColor: colors.primary,
    backgroundColor: PRIMARY_LIGHT,
  },
  flag: {
    width: 42,
    height: 30,
    borderRadius: 6,
    backgroundColor: colors.surface,
  },
  cardBody: {
    flex: 1,
    marginLeft: 14,
  },
  langName: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    color: colors.ink,
  },
  learners: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.inkMuted,
    marginTop: 2,
  },
  checkCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  earthImage: {
    width: "100%",
    height: 200,
    marginTop: 16,
  },
  btnContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: colors.canvas,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  confirmBtn: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmBtnDisabled: {
    backgroundColor: "#c4b8f7",
  },
  confirmBtnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.canvas,
  },
});
