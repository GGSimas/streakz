import { colors, medalColors, statusColors } from "./colors";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { fontSize, fonts, lineHeight, text } from "./typography";

export const theme = {
  colors,
  statusColors,
  medalColors,
  spacing,
  radius,
  shadows,
  fonts,
  fontSize,
  lineHeight,
  text,
} as const;

export type Theme = typeof theme;
