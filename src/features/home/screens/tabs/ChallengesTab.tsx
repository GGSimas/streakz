import { EmptyState } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { View } from "react-native";
import { HomeGroupCard } from "../../components";
import type { HomeGroup } from "../../types";

type ChallengesTabProps = {
  groups: HomeGroup[];
  onGroup?: (groupId: string) => void;
  onCheckin?: (groupId: string) => void;
  onExplore?: () => void;
};

export function ChallengesTab({
  groups,
  onGroup,
  onCheckin,
  onExplore,
}: ChallengesTabProps) {
  const { spacing } = useTheme();
  const { t } = useAppTranslation();

  return (
    <View style={{ gap: spacing[3] }}>
      {groups.length > 0 ? (
        groups.map((group) => (
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
  );
}
