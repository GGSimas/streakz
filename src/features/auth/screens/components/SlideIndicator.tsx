import { useTheme } from "@/theme";
import { Pressable, StyleSheet, View } from "react-native";

type SlideIndicatorProps = {
  count: number;
  index: number;
  onChange: (index: number) => void;
  labels?: readonly string[];
};

export function SlideIndicator({ count, index, onChange, labels }: SlideIndicatorProps) {
  const { colors, spacing, radius } = useTheme();

  return (
    <View style={[styles.dots, { gap: spacing[1.5] }]}>
      {Array.from({ length: count }, (_, itemIndex) => {
        const selected = itemIndex === index;

        return (
          <Pressable
            key={itemIndex}
            accessibilityRole="button"
            accessibilityLabel={labels?.[itemIndex] ?? `Imagem ${itemIndex + 1}`}
            accessibilityState={{ selected }}
            hitSlop={8}
            onPress={() => onChange(itemIndex)}
            style={{
              height: 4,
              width: selected ? 20 : 6,
              borderRadius: radius.full,
              backgroundColor: selected ? colors.lime : "rgba(255,255,255,0.15)",
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dots: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
