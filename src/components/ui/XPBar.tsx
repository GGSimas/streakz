import { useTheme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";

type XPBarProps = {
  xp: number;
  xpNext: number;
  style?: StyleProp<ViewStyle>;
};

export function XPBar({ xp, xpNext, style }: XPBarProps) {
  const { colors, radius } = useTheme();
  const percent = xpNext > 0 ? Math.min((xp / xpNext) * 100, 100) : 0;

  return (
    <View
      style={[
        styles.track,
        { backgroundColor: colors.track, borderRadius: radius.full },
        style,
      ]}
    >
      <LinearGradient
        colors={[colors.limeDeep, colors.lime]}
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 0 }}
        style={[styles.fill, { width: `${percent}%`, borderRadius: radius.full }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 6,
    overflow: "hidden",
    width: "100%",
  },
  fill: {
    height: "100%",
  },
});
