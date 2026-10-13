import { Screen } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { useState } from "react";
import { View } from "react-native";
import {
  HomeHeader,
  HomeProgressCard,
  HomeSectionTabs,
  type HomeSectionTab,
} from "../components";
import { mockHomeData } from "../data/mock";
import { ChallengesTab, FeedTabs } from "./tabs";

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
  const { spacing } = useTheme();
  const { t } = useAppTranslation();
  const { user, unreadNotifications, groups, feed } = mockHomeData;
  const myGroups = groups.filter((group) => group.isMember);
  const [activeTab, setActiveTab] = useState<HomeSectionTab>("challenges");

  return (
    <Screen scroll style={{ paddingBottom: spacing[14] }}>
      <View style={{ paddingTop: spacing[2], paddingBottom: spacing[4], gap: spacing[4] }}>
        <HomeHeader
          user={user}
          unreadCount={unreadNotifications}
          onNotifications={() => onNotifications?.()}
        />
        <HomeProgressCard user={user} />
        <HomeSectionTabs
          activeTab={activeTab}
          challengesLabel={t("home.challenges.title")}
          feedLabel={t("home.feed.title")}
          challengesBadge={String(myGroups.length)}
          onChange={setActiveTab}
        />
      </View>

      {activeTab === "challenges" ? (
        <ChallengesTab
          groups={myGroups}
          onGroup={onGroup}
          onCheckin={onCheckin}
          onExplore={onExplore}
        />
      ) : (
        <FeedTabs feed={feed} />
      )}
    </Screen>
  );
}
