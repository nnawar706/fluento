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
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { images } from "@/constants/images";
import { colors, fontFamily, fontSize } from "@/constants/theme";
import VerificationModal from "@/components/VerificationModal";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.canvas }}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Back button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color={colors.ink} />
        </TouchableOpacity>

        {/* Heading */}
        <Text style={styles.title}>Create your account</Text>
        <Text style={styles.subtitle}>Start your language journey today ✨</Text>

        {/* Mascot */}
        <View className="items-center my-6">
          <Image
            source={images.mascotAuth}
            style={styles.mascot}
            resizeMode="contain"
          />
        </View>

        {/* Email field */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor={colors.border}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        {/* Password field */}
        <View style={[styles.inputContainer, styles.passwordContainer]}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={[styles.textInput, { flex: 1 }]}
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor={colors.border}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword((v) => !v)}
              activeOpacity={0.7}
              style={styles.eyeBtn}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color={colors.inkMuted}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Up button */}
        <TouchableOpacity
          style={styles.primaryBtn}
          activeOpacity={0.85}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.primaryBtnText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-border" />
          <Text style={styles.dividerText}>or continue with</Text>
          <View className="flex-1 h-px bg-border" />
        </View>

        {/* Social auth buttons */}
        <View className="gap-3">
          <SocialButton
            icon={<Ionicons name="logo-google" size={20} color="#EA4335" />}
            label="Continue with Google"
          />
          <SocialButton
            icon={<Ionicons name="logo-facebook" size={20} color="#1877F2" />}
            label="Continue with Facebook"
          />
          <SocialButton
            icon={<Ionicons name="logo-apple" size={20} color={colors.ink} />}
            label="Continue with Apple"
          />
        </View>

        {/* Footer */}
        <View className="flex-row justify-center mt-8 mb-2">
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => router.replace("/sign-in")}
            activeOpacity={0.7}
          >
            <Text style={styles.footerLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

function SocialButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
      <View style={styles.socialIconWrap}>{icon}</View>
      <Text style={styles.socialBtnText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  backBtn: {
    marginTop: 4,
    marginBottom: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 26,
    color: colors.ink,
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyMd,
    color: colors.inkMuted,
    lineHeight: 22,
  },
  mascot: {
    width: 160,
    height: 160,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  passwordContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 11,
    color: colors.inkMuted,
    marginBottom: 4,
  },
  textInput: {
    fontFamily: fontFamily.medium,
    fontSize: 15,
    color: colors.ink,
    padding: 0,
    margin: 0,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeBtn: {
    padding: 4,
  },
  primaryBtn: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.canvas,
  },
  dividerText: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    color: colors.inkMuted,
    marginHorizontal: 12,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingVertical: 14,
    backgroundColor: colors.canvas,
    gap: 10,
  },
  socialIconWrap: {
    width: 22,
    alignItems: "center",
  },
  socialBtnText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.ink,
  },
  footerText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.inkMuted,
  },
  footerLink: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: colors.primary,
  },
});
