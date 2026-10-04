import { ThemeProvider, useTheme } from "@/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

function RootNavigator() {
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView
      style={[styles.root, { backgroundColor: colors.bg }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.bg },
        }}
      />
    </KeyboardAvoidingView>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
