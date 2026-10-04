import { useTheme } from "@/theme";
import { ScrollView, StyleSheet, type ScrollViewProps, type ViewProps } from "react-native";
import { SafeAreaView, type Edge } from "react-native-safe-area-context";

type ScreenProps = ViewProps & {
  edges?: Edge[];
  scroll?: boolean;
  keyboardShouldPersistTaps?: ScrollViewProps["keyboardShouldPersistTaps"];
};

export function Screen({
  children,
  style,
  edges = ["top"],
  scroll = false,
  keyboardShouldPersistTaps,
  ...rest
}: ScreenProps) {
  const { colors, spacing } = useTheme();

  const screenStyle = [styles.screen, { backgroundColor: colors.bg }];
  const contentStyle = [{ paddingHorizontal: spacing[5] }, style];

  if (scroll) {
    return (
      <SafeAreaView edges={edges} style={screenStyle} {...rest}>
        <ScrollView
          contentContainerStyle={[styles.content, contentStyle]}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={edges} style={[screenStyle, contentStyle]} {...rest}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});
