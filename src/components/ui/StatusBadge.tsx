import { useAppTranslation } from "@/i18n";
import { useTheme, type StatusName } from "@/theme";
import { StyleSheet, Text } from "react-native";

type StatusBadgeProps = {
  status: StatusName;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { statusColors, text } = useTheme();
  const { t } = useAppTranslation();
  const colors = statusColors[status];

  return (
    <Text
      style={[
        styles.badge,
        text.captionSemibold,
        {
          backgroundColor: colors.background,
          color: colors.text,
        },
      ]}
    >
      {t(`status.${status}`)}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    overflow: "hidden",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
  },
});
