import { useTheme } from "@/theme";
import {
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";

type ButtonProps = Omit<PressableProps, "style" | "children"> & {
  children: string;
  variant?: ButtonVariant;
  full?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function Button({
  children,
  variant = "primary",
  full = false,
  disabled = false,
  style,
  ...rest
}: ButtonProps) {
  const { colors, spacing, radius, shadows, text } = useTheme();

  const variants: Record<ButtonVariant, { container: ViewStyle; label: TextStyle }> = {
    primary: {
      container: {
        backgroundColor: disabled ? colors.muted2 : colors.lime,
        ...(disabled ? null : shadows.lime),
      },
      label: {
        ...text.button,
        color: disabled ? colors.muted : colors.onAccent,
      },
    },
    secondary: {
      container: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
      },
      label: {
        ...text.buttonSecondary,
        color: colors.text,
      },
    },
    ghost: {
      container: {
        backgroundColor: colors.overlay,
      },
      label: {
        ...text.buttonSecondary,
        color: colors.text,
      },
    },
    link: {
      container: {
        backgroundColor: "transparent",
        paddingHorizontal: 0,
        paddingVertical: spacing[1],
      },
      label: {
        ...text.bodySemibold,
        color: colors.lime,
      },
    },
  };

  const selected = variants[variant];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: Boolean(disabled) }}
      disabled={disabled}
      hitSlop={variant === "link" ? { top: 8, bottom: 8, left: 4, right: 4 } : undefined}
      style={({ pressed }) => [
        styles.base,
        {
          paddingHorizontal: spacing[6],
          paddingVertical: spacing[3.5],
          borderRadius: radius.lg,
        },
        full && styles.full,
        selected.container,
        disabled && styles.disabled,
        pressed && styles.pressed,
        style,
      ]}
      {...rest}
    >
      <Text style={selected.label}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
  },
  full: {
    alignSelf: "stretch",
  },
  disabled: {
    opacity: 0.4,
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});
