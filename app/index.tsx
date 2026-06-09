import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { colors, fontFamily } from "@/constants/theme";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-canvas">
      <Text className="type-h1 text-primary">Fluento</Text>
      <TouchableOpacity
        style={styles.link}
        activeOpacity={0.8}
        onPress={() => router.push("/onboarding")}
      >
        <Text style={styles.linkText}>View Onboarding →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 24,
    backgroundColor: colors.primary,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
  },
  linkText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.canvas,
  },
});
