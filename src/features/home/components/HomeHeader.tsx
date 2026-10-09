import { Avatar, Text } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { Bell } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";
import type { HomeUser } from "../types";
import { getFirstName, getGreetingPeriod } from "../utils/greeting";

type HomeHeaderProps = {
  user: HomeUser;
  unreadCount: number;
  onNotifications: () => void;
};

export function HomeHeader({
  user,
  unreadCount,
  onNotifications,
}: HomeHeaderProps) {
  const { colors, fonts, radius, spacing } = useTheme();
  const { t } = useAppTranslation();
  const greeting = t(`home.greeting.${getGreetingPeriod()}`);

  return (
    <View style={styles.row}>
      <View style={{ flex: 1, gap: spacing[0.5] }}>
        <Text
          style={{
            color: colors.lime,
            fontFamily: fonts.inter.semibold,
            fontSize: 12,
            lineHeight: 16,
          }}
        >
          {greeting}
        </Text>
        <Text variant="header">{getFirstName(user.name)}</Text>
      </View>

      <View style={[styles.actions, { gap: spacing[3] }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t("home.notifications")}
          onPress={onNotifications}
          style={({ pressed }) => [
            styles.iconButton,
            {
              backgroundColor: colors.overlay,
              borderRadius: radius.full,
            },
            pressed && styles.pressed,
          ]}
        >
          <Bell color={colors.text} size={20} strokeWidth={1.8} />
          {unreadCount > 0 ? (
            <View
              style={[
                styles.badge,
                {
                  backgroundColor: colors.lime,
                  borderRadius: radius.full,
                },
              ]}
            >
              <Text
                style={{
                  color: colors.onAccent,
                  fontFamily: fonts.jakarta.bold,
                  fontSize: 9,
                  lineHeight: 12,
                }}
              >
                {unreadCount}
              </Text>
            </View>
          ) : null}
        </Pressable>

        <Avatar uri={user.avatarUrl} name={user.name} size={40} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    minWidth: 16,
    height: 16,
    paddingHorizontal: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});
