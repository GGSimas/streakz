import { useTheme } from "@/theme";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";

type ProgressBarProps = {
  value: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export function ProgressBar({ value, color, style }: ProgressBarProps) {
  const { colors, radius } = useTheme();
  const percent = Math.min(Math.max(value, 0) * 100, 100);

  return (
    <View
      style={[
        styles.track,
        { backgroundColor: colors.track, borderRadius: radius.full },
        style,
      ]}
    >
      <View
        style={[
          styles.fill,
          {
            backgroundColor: color ?? colors.lime,
            borderRadius: radius.full,
            width: `${percent}%`,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    overflow: "hidden",
    width: "100%",
  },
  fill: {
    height: "100%",
  },
});
