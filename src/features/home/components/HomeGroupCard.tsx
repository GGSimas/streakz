import { ProgressBar, Text } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Users } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";
import type { HomeGroup } from "../types";

type HomeGroupCardProps = {
  group: HomeGroup;
  onOpen: () => void;
  onCheckin: () => void;
};

export function HomeGroupCard({
  group,
  onOpen,
  onCheckin,
}: HomeGroupCardProps) {
  const { colors, fonts, radius, spacing } = useTheme();
  const { t } = useAppTranslation();

  const statusColor =
    group.status === "ACTIVE"
      ? colors.lime
      : group.status === "SCHEDULED"
        ? colors.orange
        : colors.muted;

  const statusLabel =
    group.status === "ACTIVE" && group.daysLeft != null
      ? t("home.group.daysLeft", { count: group.daysLeft })
      : group.status === "ACTIVE"
        ? t("status.active")
        : group.status === "SCHEDULED" && group.daysLeft != null
          ? t("home.group.startsIn", { count: group.daysLeft })
          : group.status === "SCHEDULED"
            ? t("status.scheduled")
            : t("home.group.finished");

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.divider,
          borderRadius: radius.lg,
        },
      ]}
    >
      <View style={[styles.cover, { backgroundColor: colors.surface2 }]}>
        <Image
          source={{ uri: group.coverUrl }}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
          accessibilityLabel={group.name}
        />
        <LinearGradient
          colors={["rgba(22,22,31,0.85)", "rgba(22,22,31,0.2)"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={StyleSheet.absoluteFill}
        />

        <View style={[styles.coverContent, { padding: spacing[4] }]}>
          <View style={styles.coverTop}>
            <View style={{ flex: 1, paddingRight: spacing[3] }}>
              <Text
                style={{
                  color: colors.text,
                  fontFamily: fonts.jakarta.extraBold,
                  fontSize: 16,
                  lineHeight: 24,
                }}
              >
                {group.name}
              </Text>
              <View
                style={[
                  styles.statusRow,
                  { gap: spacing[1.5], marginTop: spacing[0.5] },
                ]}
              >
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: statusColor, borderRadius: radius.full },
                  ]}
                />
                <Text style={{ color: statusColor, fontSize: 12, lineHeight: 16 }}>
                  {statusLabel}
                </Text>
              </View>
            </View>

            <View style={[styles.members, { gap: spacing[1] }]}>
              <Users color="rgba(255,255,255,0.6)" size={12} strokeWidth={2} />
              <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                {group.memberCount}
              </Text>
            </View>
          </View>

          {group.status !== "FINISHED" && group.myPosition != null ? (
            <View style={[styles.stats, { gap: spacing[4] }]}>
              <View>
                <Text style={styles.statLabel}>{t("home.group.position")}</Text>
                <Text
                  style={{
                    color: colors.text,
                    fontFamily: fonts.jakarta.extraBold,
                    fontSize: 14,
                    lineHeight: 20,
                  }}
                >
                  #{group.myPosition}
                </Text>
              </View>
              <View>
                <Text style={styles.statLabel}>{t("home.group.checkins")}</Text>
                <Text
                  style={{
                    color: colors.text,
                    fontFamily: fonts.jakarta.extraBold,
                    fontSize: 14,
                    lineHeight: 20,
                  }}
                >
                  {group.myCheckins}
                </Text>
              </View>
            </View>
          ) : null}

          {group.status === "FINISHED" ? (
            <View style={[styles.finishedRow, { gap: spacing[1] }]}>
              <Text style={{ fontSize: 16 }}>🏆</Text>
              <Text
                style={{
                  color: colors.text,
                  fontFamily: fonts.jakarta.bold,
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                {group.myPosition === 1
                  ? t("home.group.champion")
                  : t("home.group.finishedPlace", {
                      position: group.myPosition,
                      checkins: group.myCheckins,
                    })}
              </Text>
            </View>
          ) : null}
        </View>
      </View>

      {group.status === "ACTIVE" ? (
        <View style={{ padding: spacing[3] }}>
          <View style={[styles.progressHeader, { marginBottom: spacing[2] }]}>
            <Text variant="caption">{t("home.group.progress")}</Text>
            <Text
              style={{
                color: colors.lime,
                fontFamily: fonts.inter.semibold,
                fontSize: 12,
                lineHeight: 16,
              }}
            >
              {Math.round(group.myProgress * 100)}%
            </Text>
          </View>
          <ProgressBar value={group.myProgress} />
          <View style={[styles.actions, { gap: spacing[2], marginTop: spacing[3] }]}>
            <Pressable
              accessibilityRole="button"
              onPress={onCheckin}
              style={({ pressed }) => [
                styles.actionButton,
                {
                  backgroundColor: colors.lime,
                  borderRadius: radius.md,
                  paddingVertical: spacing[2.5],
                },
                pressed && styles.pressed,
              ]}
            >
              <Text
                style={{
                  color: colors.onAccent,
                  fontFamily: fonts.jakarta.bold,
                  fontSize: 12,
                  lineHeight: 16,
                }}
              >
                {t("home.group.checkin")}
              </Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              onPress={onOpen}
              style={({ pressed }) => [
                styles.actionButton,
                {
                  backgroundColor: colors.overlay,
                  borderRadius: radius.md,
                  paddingVertical: spacing[2.5],
                },
                pressed && styles.pressed,
              ]}
            >
              <Text
                style={{
                  color: colors.text,
                  fontFamily: fonts.inter.semibold,
                  fontSize: 12,
                  lineHeight: 16,
                }}
              >
                {t("home.group.view")}
              </Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View
          style={{
            paddingHorizontal: spacing[3],
            paddingBottom: spacing[3],
            paddingTop: spacing[2],
          }}
        >
          <Pressable
            accessibilityRole="button"
            onPress={onOpen}
            style={({ pressed }) => [
              styles.actionButton,
              {
                backgroundColor: colors.overlay,
                borderRadius: radius.md,
                paddingVertical: spacing[2.5],
              },
              pressed && styles.pressed,
            ]}
          >
            <Text
              style={{
                color: colors.text,
                fontFamily: fonts.inter.semibold,
                fontSize: 12,
                lineHeight: 16,
              }}
            >
              {t("home.group.view")}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    overflow: "hidden",
  },
  cover: {
    height: 112,
  },
  coverContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  coverTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
  },
  members: {
    flexDirection: "row",
    alignItems: "center",
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
  },
  statLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
    lineHeight: 16,
  },
  finishedRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actions: {
    flexDirection: "row",
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});
