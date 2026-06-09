import { useAuth, useClerk } from "@clerk/expo";
import { Redirect, router } from "expo-router";
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";
import { colors, fontFamily } from "@/constants/theme";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Fluento</Text>
      <TouchableOpacity
        style={styles.chooseLanguageBtn}
        activeOpacity={0.85}
        onPress={() => router.push("/language-selection")}
      >
        <Text style={styles.chooseLanguageText}>Choose a Language</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signOutBtn}
        activeOpacity={0.85}
        onPress={() => signOut()}
      >
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.canvas,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    color: colors.primary,
  },
  chooseLanguageBtn: {
    marginTop: 24,
    backgroundColor: colors.primary,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
  },
  chooseLanguageText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.canvas,
  },
  signOutBtn: {
    marginTop: 12,
    backgroundColor: colors.surface,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
  },
  signOutText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.inkMuted,
  },
});
