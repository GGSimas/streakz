import { EmptyState, Screen, Text } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { View } from "react-native";
import {
  HomeFeedCard,
  HomeGroupCard,
  HomeHeader,
  HomeProgressCard,
} from "../components";
import { mockHomeData } from "../data/mock";

type HomeScreenProps = {
  onGroup?: (groupId: string) => void;
  onNotifications?: () => void;
  onCheckin?: (groupId: string) => void;
  onExplore?: () => void;
};

export function HomeScreen({
  onGroup,
  onNotifications,
  onCheckin,
  onExplore,
}: HomeScreenProps) {
  const { colors, spacing } = useTheme();
  const { t } = useAppTranslation();
  const { user, unreadNotifications, groups, feed } = mockHomeData;
  const myGroups = groups.filter((group) => group.isMember);

  return (
    <Screen scroll style={{ paddingBottom: spacing[14] }}>
      <View style={{ paddingTop: spacing[2], paddingBottom: spacing[4], gap: spacing[4] }}>
        <HomeHeader
          user={user}
          unreadCount={unreadNotifications}
          onNotifications={() => onNotifications?.()}
        />
        <HomeProgressCard user={user} />
      </View>

      <View style={{ gap: spacing[3] }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text variant="section">{t("home.challenges.title")}</Text>
          <Text style={{ color: colors.lime, fontSize: 12, lineHeight: 16 }}>
            {t("home.challenges.activeCount", { count: myGroups.length })}
          </Text>
        </View>

        {myGroups.length > 0 ? (
          myGroups.map((group) => (
            <HomeGroupCard
              key={group.id}
              group={group}
              onOpen={() => onGroup?.(group.id)}
              onCheckin={() => onCheckin?.(group.id)}
            />
          ))
        ) : (
          <EmptyState
            icon="🏋️"
            title={t("home.empty.challengesTitle")}
            description={t("home.empty.challengesDescription")}
            cta={t("home.empty.challengesCta")}
            onCta={() => onExplore?.()}
          />
        )}
      </View>

      <View style={{ gap: spacing[3], marginTop: spacing[6] }}>
        <Text variant="section">{t("home.feed.title")}</Text>
        {feed.length > 0 ? (
          feed.map((item) => <HomeFeedCard key={item.id} item={item} />)
        ) : (
          <EmptyState
            icon="📸"
            title={t("home.feed.emptyTitle")}
            description={t("home.feed.emptyDescription")}
          />
        )}
      </View>
    </Screen>
  );
}
