import { useTheme } from "@/theme";
import type { BottomTabBarProps } from "expo-router/tabs";
import { Activity, Home, Plus, Search, User } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ICON_SIZE = 22;
const CREATE_SIZE = 56;

const TAB_ICONS = {
  index: Home,
  explore: Search,
  create: Plus,
  ranking: Activity,
  profile: User,
} as const;

type TabName = keyof typeof TAB_ICONS;

function isTabName(name: string): name is TabName {
  return name in TAB_ICONS;
}

export function BottomNav({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  const { colors, fonts, radius, shadows, spacing, text } = useTheme();

  return (
    <View
      style={[
        styles.bar,
        {
          backgroundColor: colors.glass,
          borderTopColor: colors.divider,
          paddingBottom: Math.max(insets.bottom, spacing[3]),
          paddingTop: spacing[2],
        },
      ]}
    >
      <View style={[styles.row, { paddingHorizontal: spacing[2] }]}>
        {state.routes.map((route, index) => {
          if (!isTabName(route.name)) {
            return null;
          }

          const focused = state.index === index;
          const { options } = descriptors[route.key];
          const label =
            typeof options.title === "string" ? options.title : route.name;
          const isCreate = route.name === "create";
          const Icon = TAB_ICONS[route.name];
          const color = focused ? colors.lime : colors.muted;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          if (isCreate) {
            return (
              <Pressable
                key={route.key}
                accessibilityRole="button"
                accessibilityState={focused ? { selected: true } : {}}
                accessibilityLabel={label}
                onPress={onPress}
                style={({ pressed }) => [
                  styles.createTab,
                  pressed && styles.pressed,
                ]}
              >
                <View
                  style={[
                    styles.createButton,
                    {
                      backgroundColor: colors.lime,
                      borderRadius: radius.lg,
                      ...shadows.lime,
                    },
                  ]}
                >
                  <Plus color={colors.onAccent} size={24} strokeWidth={2.5} />
                </View>
                <Text
                  style={[
                    styles.label,
                    {
                      color: colors.muted,
                      fontFamily: fonts.inter.semibold,
                      marginTop: spacing[0.5],
                    },
                  ]}
                >
                  {label}
                </Text>
              </Pressable>
            );
          }

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={label}
              onPress={onPress}
              style={({ pressed }) => [
                styles.tab,
                { minWidth: 48, gap: spacing[1] },
                pressed && styles.pressed,
              ]}
            >
              <Icon
                color={color}
                fill={route.name === "index" && focused ? color : "none"}
                size={ICON_SIZE}
                strokeWidth={1.8}
              />
              <Text
                style={[
                  styles.label,
                  text.captionSemibold,
                  { color },
                ]}
              >
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  createTab: {
    flex: 1,
    alignItems: "center",
    marginTop: -20,
  },
  createButton: {
    width: CREATE_SIZE,
    height: CREATE_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 10,
    lineHeight: 14,
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});
