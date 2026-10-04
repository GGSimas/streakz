import { useTheme } from "@/theme";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, StyleSheet, type PressableProps, type StyleProp, type ViewStyle } from "react-native";

type BackButtonProps = Omit<PressableProps, "style" | "children"> & {
  style?: StyleProp<ViewStyle>;
};

export function BackButton({ style, ...rest }: BackButtonProps) {
  const { colors } = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Voltar"
      hitSlop={8}
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      {...rest}
    >
      <ArrowLeft color={colors.text} size={24} strokeWidth={2} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});
