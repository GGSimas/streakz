import i18n, { resolveLanguage } from "@/i18n";
import { ThemeProvider, useTheme } from "@/theme";
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
    <>
      <AppLocalization />
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
