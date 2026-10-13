import { Text } from "@/components/ui";
import { useTheme } from "@/theme";
import { Pressable, View } from "react-native";

export type HomeSectionTab = "challenges" | "feed";

type HomeSectionTabsProps = {
  activeTab: HomeSectionTab;
  challengesLabel: string;
  feedLabel: string;
  challengesBadge?: string;
  onChange: (tab: HomeSectionTab) => void;
};

export function HomeSectionTabs({
  activeTab,
  challengesLabel,
  feedLabel,
  challengesBadge,
  onChange,
}: HomeSectionTabsProps) {
  const { colors, spacing, radius, text } = useTheme();

  const tabs: { id: HomeSectionTab; label: string; badge?: string }[] = [
    { id: "challenges", label: challengesLabel, badge: challengesBadge },
    { id: "feed", label: feedLabel },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        padding: spacing[1],
        borderRadius: radius.md,
        backgroundColor: colors.overlaySoft,
        borderWidth: 1,
        borderColor: colors.border,
        gap: spacing[1],
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <Pressable
            key={tab.id}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            onPress={() => onChange(tab.id)}
            style={({ pressed }) => [
              {
                flex: 1,
                minHeight: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: spacing[1.5],
                paddingHorizontal: spacing[2],
                paddingVertical: spacing[2],
                borderRadius: radius.sm,
                backgroundColor: isActive ? colors.limeDim : "transparent",
              },
              pressed && !isActive && { opacity: 0.7 },
            ]}
          >
            <Text
              numberOfLines={1}
              style={{
                ...text.bodySemibold,
                color: isActive ? colors.lime : colors.muted,
                textAlign: "center",
              }}
            >
              {tab.label}
            </Text>
            {tab.badge ? (
              <View
                style={{
                  minWidth: 20,
                  paddingHorizontal: spacing[1.5],
                  paddingVertical: spacing[0.5],
                  borderRadius: radius.full,
                  backgroundColor: isActive ? colors.lime : colors.overlay,
                }}
              >
                <Text
                  style={{
                    ...text.captionSemibold,
                    color: isActive ? colors.onAccent : colors.label,
                    textAlign: "center",
                  }}
                >
                  {tab.badge}
                </Text>
              </View>
            ) : null}
          </Pressable>
        );
      })}
    </View>
  );
}
