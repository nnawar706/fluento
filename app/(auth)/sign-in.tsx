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
import { router, type Href } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { useSignIn, useSSO } from "@clerk/expo";
import { images } from "@/constants/images";
import { colors, fontFamily, fontSize } from "@/constants/theme";
import VerificationModal from "@/components/VerificationModal";

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const { signIn, errors, fetchStatus } = useSignIn();

  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [verifyError, setVerifyError] = useState("");

  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => { void WebBrowser.coolDownAsync(); };
  }, []);

  const navigateHome = (decorateUrl: (url: string) => string) => {
    const url = decorateUrl("/");
    if (!url.startsWith("http")) {
      router.replace(url as Href);
    }
  };

  const handleSignIn = async () => {
    if (!signIn || fetchStatus === "fetching") return;
    setVerifyError("");

    const { error } = await signIn.password({ emailAddress: email, password });
    if (error) return;

    if (signIn.status === "complete") {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) return;
          navigateHome(decorateUrl);
        },
      });
    } else if (signIn.status === "needs_client_trust") {
      const emailCodeFactor = signIn.supportedSecondFactors?.find(
        (f) => f.strategy === "email_code"
      );
      if (emailCodeFactor) {
        await signIn.mfa.sendEmailCode();
        setModalVisible(true);
      }
    }
  };

  const handleVerify = async (code: string) => {
    if (!signIn) return;
    setVerifyError("");

    await signIn.mfa.verifyEmailCode({ code });

    if (signIn.status === "complete") {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) return;
          navigateHome(decorateUrl);
        },
      });
    } else {
      setVerifyError("Verification failed. Please try again.");
    }
  };

  const handleResend = async () => {
    if (!signIn) return;
    await signIn.mfa.sendEmailCode();
  };

  const handleOAuth = async (strategy: "oauth_google" | "oauth_apple") => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
        redirectUrl: Linking.createURL("/"),
      });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
      }
    } catch (err: any) {
      console.error(
        "OAuth error:",
        err?.errors?.[0]?.longMessage ?? err?.message ?? err
      );
    }
  };

  const isLoading = fetchStatus === "fetching";

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
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>Sign in to continue your journey ✨</Text>

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
            editable={!isLoading}
          />
        </View>
        {errors?.fields?.identifier ? (
          <Text style={styles.fieldError}>{errors.fields.identifier.message}</Text>
        ) : null}

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
              editable={!isLoading}
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
        {errors?.fields?.password ? (
          <Text style={styles.fieldError}>{errors.fields.password.message}</Text>
        ) : null}

        {/* Sign In button */}
        <TouchableOpacity
          style={[styles.primaryBtn, { marginTop: 12 }, (isLoading || !email || !password) && styles.primaryBtnDisabled]}
          activeOpacity={0.85}
          onPress={handleSignIn}
          disabled={isLoading || !email || !password}
        >
          <Text style={styles.primaryBtnText}>
            {isLoading ? "Please wait…" : "Sign In"}
          </Text>
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
            onPress={() => handleOAuth("oauth_google")}
          />
          <SocialButton
            icon={<Ionicons name="logo-apple" size={20} color={colors.ink} />}
            label="Continue with Apple"
            onPress={() => handleOAuth("oauth_apple")}
          />
        </View>

        {/* Footer */}
        <View className="flex-row justify-center mt-8 mb-2">
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => router.replace("/sign-up")}
            activeOpacity={0.7}
          >
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal shown only when MFA (email code 2FA) is required */}
      <VerificationModal
        visible={modalVisible}
        email={email}
        onClose={() => setModalVisible(false)}
        onVerify={handleVerify}
        onResend={handleResend}
        error={verifyError || errors?.fields?.code?.message}
        loading={isLoading}
      />
    </SafeAreaView>
  );
}

function SocialButton({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8} onPress={onPress}>
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
    marginBottom: 4,
  },
  passwordContainer: {
    marginTop: 8,
    marginBottom: 4,
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
  fieldError: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.error,
    marginBottom: 8,
    marginLeft: 4,
  },
  primaryBtn: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnDisabled: {
    opacity: 0.55,
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
