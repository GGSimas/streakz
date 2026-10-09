import { useTheme } from "@/theme";
import { Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { Text } from "./Text";

type EmptyStateProps = {
  icon: string;
  title: string;
  description: string;
  cta?: string;
  onCta?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function EmptyState({
  icon,
  title,
  description,
  cta,
  onCta,
  style,
}: EmptyStateProps) {
  const { colors, fonts, radius, spacing } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          gap: spacing[4],
          paddingVertical: spacing[12],
          paddingHorizontal: spacing[6],
        },
        style,
      ]}
    >
      <View
        style={[
          styles.iconWrap,
          {
            backgroundColor: colors.overlaySoft,
            borderRadius: radius.xl,
          },
        ]}
      >
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <View style={styles.copy}>
        <Text
          style={{
            color: colors.text,
            fontFamily: fonts.jakarta.bold,
            fontSize: 16,
            lineHeight: 24,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: colors.muted,
            fontSize: 14,
            lineHeight: 20,
            marginTop: spacing[1],
            textAlign: "center",
          }}
        >
          {description}
        </Text>
      </View>

      {cta && onCta ? (
        <Pressable
          accessibilityRole="button"
          onPress={onCta}
          style={({ pressed }) => [
            styles.cta,
            {
              backgroundColor: colors.lime,
              borderRadius: radius.full,
              paddingHorizontal: spacing[6],
              paddingVertical: spacing[2.5],
            },
            pressed && styles.pressed,
          ]}
        >
          <Text
            style={{
              color: colors.onAccent,
              fontFamily: fonts.jakarta.bold,
              fontSize: 14,
              lineHeight: 20,
            }}
          >
            {cta}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrap: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 36,
    lineHeight: 44,
  },
  copy: {
    alignItems: "center",
  },
  cta: {
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});
