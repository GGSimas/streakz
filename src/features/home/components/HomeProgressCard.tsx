import { Text, XPBar } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { StyleSheet, View } from "react-native";
import type { HomeUser } from "../types";

type HomeProgressCardProps = {
  user: HomeUser;
};

export function HomeProgressCard({ user }: HomeProgressCardProps) {
  const { colors, fonts, radius, spacing, text } = useTheme();
  const { t, i18n } = useAppTranslation();
  const xpFormatter = new Intl.NumberFormat(i18n.language);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.overlaySoft,
          borderColor: colors.divider,
          borderRadius: radius.lg,
          padding: spacing[4],
        },
      ]}
    >
      <View style={[styles.top, { marginBottom: spacing[3] }]}>
        <View style={[styles.levelRow, { gap: spacing[2] }]}>
          <View
            style={[
              styles.levelBadge,
              {
                backgroundColor: "rgba(181,242,61,0.12)",
                borderRadius: radius.md,
              },
            ]}
          >
            <Text
              style={{
                color: colors.lime,
                fontFamily: fonts.jakarta.extraBold,
                fontSize: 14,
                lineHeight: 20,
              }}
            >
              {user.level}
            </Text>
          </View>
          <View>
            <Text variant="caption">{t("home.progress.currentLevel")}</Text>
            <Text style={[text.bodySemibold, { color: colors.text }]}>
              {user.title}
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.streak,
            {
              backgroundColor: "rgba(249,115,22,0.12)",
              borderRadius: radius.full,
              gap: spacing[1],
              paddingHorizontal: spacing[3],
              paddingVertical: spacing[1.5],
            },
          ]}
        >
          <Text style={{ fontSize: 14 }}>🔥</Text>
          <Text
            style={{
              color: colors.orange,
              fontFamily: fonts.jakarta.bold,
              fontSize: 14,
              lineHeight: 20,
            }}
          >
            {user.streak}
          </Text>
        </View>
      </View>

      <XPBar xp={user.xp} xpNext={user.xpNext} />
      <View style={[styles.xpLabels, { marginTop: spacing[1.5] }]}>
        <Text variant="caption">
          {t("home.progress.xp", { value: xpFormatter.format(user.xp) })}
        </Text>
        <Text variant="caption">
          {t("home.progress.xp", { value: xpFormatter.format(user.xpNext) })}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  levelRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  levelBadge: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  streak: {
    flexDirection: "row",
    alignItems: "center",
  },
  xpLabels: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
