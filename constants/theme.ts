/**
 * Lingua Design Tokens
 * Mirror of global.css @theme values — use these in StyleSheet contexts
 * (SafeAreaView, dynamic styles, Animated values, platform-specific code)
 */

export const colors = {
  // Primary brand
  primary: "#6c4ef5",
  primaryDeep: "#5b3bf6",
  linguaBlue: "#4d88ff",
  linguaGreen: "#21c16b",

  // Semantic
  success: "#21c16b",
  warning: "#ffcb00",
  streak: "#ff8a00",
  error: "#ff4d4f",
  info: "#4d88ff",

  // Neutrals
  ink: "#001328",
  inkMuted: "#6b7280",
  border: "#e5e7eb",
  surface: "#f6f7fb",
  canvas: "#ffffff",
} as const;

export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLg: 16,
  bodyMd: 14,
  bodySm: 13,
  caption: 11,
} as const;

export const lineHeight = {
  h1: 38,   // 32 × 1.2
  h2: 31,   // 24 × 1.3
  h3: 26,   // 20 × 1.3
  h4: 22,   // 16 × 1.4
  bodyLg: 26, // 16 × 1.6
  bodyMd: 22, // 14 × 1.6
  bodySm: 21, // 13 × 1.6
  caption: 15, // 11 × 1.4
} as const;
