import { useTheme } from "@/theme";
import { Text as RNText, type TextProps, type TextStyle } from "react-native";

export type TextVariant =
  | "header"
  | "title"
  | "section"
  | "subtitle"
  | "paragraph"
  | "label"
  | "caption";

type Props = TextProps & {
  variant?: TextVariant;
};

export function Text({ variant = "paragraph", style, ...rest }: Props) {
  const { colors, text } = useTheme();

  const variants: Record<TextVariant, TextStyle> = {
    header: {
      ...text.display,
      color: colors.text,
    },
    title: {
      ...text.title,
      color: colors.text,
    },
    section: {
      ...text.section,
      color: colors.text,
    },
    subtitle: {
      ...text.body,
      color: colors.muted,
    },
    paragraph: {
      ...text.body,
      color: colors.text,
    },
    label: {
      ...text.label,
      color: colors.label,
    },
    caption: {
      ...text.caption,
      color: colors.muted,
    },
  };

  return (
    <RNText
      accessibilityRole={
        variant === "header" || variant === "title" || variant === "section" ? "header" : undefined
      }
      style={[variants[variant], style]}
      {...rest}
    />
  );
}
