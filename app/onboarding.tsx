import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { colors, fontFamily, fontSize } from "@/constants/theme";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.canvas }}>
      <View className="flex-1 px-6">
        {/* Logo Row */}
        <View className="flex-row items-center justify-center mt-4 mb-8">
          <Image source={images.mascotLogo} style={styles.logoImage} resizeMode="contain" />
          <Text style={styles.appName}>Fluento</Text>
        </View>

        {/* Headline */}
        <Text style={styles.headlineBlack}>Your AI Language</Text>
        <Text style={styles.headlinePurple}>Buddy.</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle} className="mt-3">
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>

        {/* Mascot + Speech Bubbles */}
        <View style={styles.illustrationContainer}>
          {/* Hello! bubble — left */}
          <View style={[styles.bubble, styles.bubbleLeft]}>
            <Text style={styles.bubbleText}>Hello!</Text>
            <View style={styles.tailRight} />
          </View>

          {/* ¡Hola! bubble — top right */}
          <View style={[styles.bubble, styles.bubbleTopRight]}>
            <Text style={styles.bubbleTextBold}>¡Hola!</Text>
            <View style={styles.tailBottom} />
          </View>

          {/* 你好! bubble — right */}
          <View style={[styles.bubble, styles.bubbleRight]}>
            <Text style={styles.bubbleTextChinese}>你好!</Text>
            <View style={styles.tailLeft} />
          </View>

          {/* Mascot */}
          <Image
            source={images.mascotWelcome}
            style={styles.mascotImage}
            resizeMode="contain"
          />
        </View>

        {/* CTA Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Ionicons name="chevron-forward" size={20} color={colors.canvas} style={{ marginLeft: 6 }} />
        </TouchableOpacity>

        <View style={{ height: 12 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: 40,
    height: 40,
  },
  appName: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h3,
    color: colors.ink,
    marginLeft: 10,
  },
  headlineBlack: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 40,
    color: colors.ink,
  },
  headlinePurple: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 40,
    color: colors.primary,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 22,
    color: colors.inkMuted,
  },
  illustrationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 8,
  },
  mascotImage: {
    width: 260,
    height: 260,
  },
  bubble: {
    position: "absolute",
    backgroundColor: colors.canvas,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  bubbleLeft: {
    left: 0,
    top: "30%",
  },
  bubbleTopRight: {
    right: 0,
    top: "8%",
  },
  bubbleRight: {
    right: 4,
    top: "60%",
  },
  bubbleText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.ink,
  },
  bubbleTextBold: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.ink,
  },
  bubbleTextChinese: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.error,
  },
  // Tail triangles
  tailRight: {
    position: "absolute",
    right: -8,
    top: "50%",
    marginTop: -6,
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderLeftWidth: 8,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: colors.canvas,
  },
  tailBottom: {
    position: "absolute",
    bottom: -8,
    left: "30%",
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: colors.canvas,
  },
  tailLeft: {
    position: "absolute",
    left: -8,
    top: "50%",
    marginTop: -6,
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderRightWidth: 8,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: colors.canvas,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.canvas,
  },
});
