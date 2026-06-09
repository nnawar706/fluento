import {
  View,
  Text,
  Modal,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useRef, useState, useEffect } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontFamily, fontSize } from "@/constants/theme";

interface Props {
  visible: boolean;
  email: string;
  onClose: () => void;
}

export default function VerificationModal({ visible, email, onClose }: Props) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (!visible) {
      setCode(["", "", "", "", "", ""]);
    }
  }, [visible]);

  const handleChange = (text: string, index: number) => {
    if (!/^\d*$/.test(text)) return;

    const digit = text.slice(-1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    if (digit && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (newCode.every((d) => d !== "") && digit) {
      setTimeout(() => {
        onClose();
        router.replace("/");
      }, 250);
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputs.current[index - 1]?.focus();
    }
  };

  const handleOpen = () => {
    setTimeout(() => inputs.current[0]?.focus(), 100);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      onShow={handleOpen}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.overlay}
      >
        <TouchableOpacity
          style={styles.backdrop}
          onPress={onClose}
          activeOpacity={1}
        />
        <View style={styles.card}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={22} color={colors.inkMuted} />
          </TouchableOpacity>

          <View style={styles.iconWrap}>
            <Ionicons name="mail-outline" size={30} color={colors.primary} />
          </View>

          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.subtitle}>
            We sent a 6-digit code to{"\n"}
            <Text style={styles.emailText}>{email || "your email"}</Text>
          </Text>

          <View style={styles.codeRow}>
            {code.map((digit, i) => (
              <TextInput
                key={i}
                ref={(el) => {
                  inputs.current[i] = el;
                }}
                style={[styles.codeBox, digit ? styles.codeBoxActive : null]}
                value={digit}
                onChangeText={(t) => handleChange(t, i)}
                onKeyPress={({ nativeEvent }) =>
                  handleKeyPress(nativeEvent.key, i)
                }
                keyboardType="number-pad"
                maxLength={1}
                textAlign="center"
                returnKeyType="done"
                selectionColor={colors.primary}
              />
            ))}
          </View>

          <Text style={styles.resend}>
            Didn't receive it?{" "}
            <Text style={styles.resendLink}>Resend code</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  card: {
    backgroundColor: colors.canvas,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 48,
    alignItems: "center",
  },
  closeBtn: {
    alignSelf: "flex-end",
    padding: 4,
    marginBottom: 12,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#ede9fe",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 22,
    color: colors.ink,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.inkMuted,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
  },
  emailText: {
    fontFamily: fontFamily.semiBold,
    color: colors.ink,
  },
  codeRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },
  codeBox: {
    width: 46,
    height: 54,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    fontFamily: fontFamily.bold,
    fontSize: 22,
    color: colors.ink,
  },
  codeBoxActive: {
    borderColor: colors.primary,
    backgroundColor: "#ede9fe",
  },
  resend: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.inkMuted,
  },
  resendLink: {
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
  },
});
