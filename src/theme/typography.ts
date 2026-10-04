import type { TextStyle } from "react-native";

/**
 * Loaded font family names. Each weight is its own family because Expo SDK 57
 * loads one file per `fontFamily`. Plus Jakarta Sans stops at 800; the
 * reference's font-900 falls back to extraBold.
 */
export const fonts = {
  jakarta: {
    regular: "PlusJakartaSans_400Regular",
    medium: "PlusJakartaSans_500Medium",
    semibold: "PlusJakartaSans_600SemiBold",
    bold: "PlusJakartaSans_700Bold",
    extraBold: "PlusJakartaSans_800ExtraBold",
  },
  inter: {
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    semibold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
  },
} as const;

export const fontSize = {
  micro: 9,
  caption: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  display: 36,
} as const;

export const lineHeight = {
  micro: 12,
  caption: 14,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  display: 40,
} as const;

export const text = {
  display: {
    fontFamily: fonts.jakarta.extraBold,
    fontSize: fontSize.xl,
    lineHeight: lineHeight.xl,
  },
  title: {
    fontFamily: fonts.jakarta.extraBold,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.lg,
  },
  section: {
    fontFamily: fonts.jakarta.bold,
    fontSize: fontSize.md,
    lineHeight: lineHeight.md,
  },
  button: {
    fontFamily: fonts.jakarta.extraBold,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
  },
  buttonSecondary: {
    fontFamily: fonts.jakarta.bold,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
  },
  body: {
    fontFamily: fonts.inter.regular,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
  },
  bodyMedium: {
    fontFamily: fonts.inter.medium,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
  },
  bodySemibold: {
    fontFamily: fonts.inter.semibold,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
  },
  label: {
    fontFamily: fonts.inter.semibold,
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
  },
  caption: {
    fontFamily: fonts.inter.regular,
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
  },
  captionSemibold: {
    fontFamily: fonts.inter.semibold,
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
  },
  badge: {
    fontFamily: fonts.jakarta.extraBold,
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
  },
} as const satisfies Record<string, TextStyle>;

export type TextVariant = keyof typeof text;
