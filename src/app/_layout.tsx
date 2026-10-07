import "react-native-url-polyfill/auto";

import i18n, { resolveLanguage } from "@/i18n";
import { queryClient } from "@/lib/tanstack";
import { ThemeProvider, useTheme } from "@/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { useLocales } from "expo-localization";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

function AppLocalization() {
  const [locale] = useLocales();

  useEffect(() => {
    const nextLanguage = resolveLanguage(locale.languageTag, locale.languageCode);

    if (i18n.language !== nextLanguage) {
      void i18n.changeLanguage(nextLanguage);
    }
  }, [locale.languageCode, locale.languageTag]);

  return null;
}

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
    <QueryClientProvider client={queryClient}>
      <AppLocalization />
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
