import { EmptyState } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { View } from "react-native";
import { HomeFeedCard } from "../../components";
import type { HomeFeedItem } from "../../types";

type FeedTabsProps = {
  feed: HomeFeedItem[];
};

export function FeedTabs({ feed }: FeedTabsProps) {
  const { spacing } = useTheme();
  const { t } = useAppTranslation();

  return (
    <View style={{ gap: spacing[3] }}>
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
  );
}
