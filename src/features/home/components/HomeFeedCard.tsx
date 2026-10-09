import { Avatar, StatusBadge, Text } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme, type StatusName } from "@/theme";
import { Image } from "expo-image";
import { Heart, MessageCircle } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";
import type { HomeCheckinStatus, HomeFeedItem } from "../types";

const CHECKIN_STATUS_TONE: Record<HomeCheckinStatus, StatusName> = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  CANCELLED: "finished",
};

type HomeFeedCardProps = {
  item: HomeFeedItem;
};

export function HomeFeedCard({ item }: HomeFeedCardProps) {
  const { colors, fonts, radius, spacing } = useTheme();
  const { t } = useAppTranslation();

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
      <View style={[styles.header, { gap: spacing[3], padding: spacing[3] }]}>
        <Avatar uri={item.userAvatarUrl} name={item.userName} size={40} />
        <View style={{ flex: 1, minWidth: 0 }}>
          <Text
            numberOfLines={1}
            style={{
              color: colors.text,
              fontFamily: fonts.inter.semibold,
              fontSize: 14,
              lineHeight: 20,
            }}
          >
            {item.userName}
          </Text>
          <Text variant="caption" numberOfLines={1}>
            {item.groupName} · {item.timeLabel}
          </Text>
        </View>
        <StatusBadge status={CHECKIN_STATUS_TONE[item.status]} />
      </View>

      {item.photoUrl ? (
        <View style={[styles.photo, { backgroundColor: colors.surface2 }]}>
          <Image
            source={{ uri: item.photoUrl }}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
            accessibilityLabel={t("home.feed.photo")}
          />
        </View>
      ) : null}

      {item.caption ? (
        <View
          style={{
            paddingHorizontal: spacing[3],
            paddingVertical: spacing[2.5],
          }}
        >
          <Text style={{ color: "#C0C0CC", fontSize: 14, lineHeight: 20 }}>
            {item.caption}
          </Text>
        </View>
      ) : null}

      <View
        style={[
          styles.actions,
          {
            gap: spacing[4],
            paddingHorizontal: spacing[3],
            paddingBottom: spacing[3],
            paddingTop: spacing[1],
          },
        ]}
      >
        <Pressable
          accessibilityRole="button"
          style={[styles.action, { gap: spacing[1.5] }]}
        >
          <Heart color={colors.muted} size={16} strokeWidth={1.8} />
          <Text variant="caption">{t("home.feed.like")}</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          style={[styles.action, { gap: spacing[1.5] }]}
        >
          <MessageCircle color={colors.muted} size={16} strokeWidth={1.8} />
          <Text variant="caption">{t("home.feed.comment")}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    height: 200,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
});
