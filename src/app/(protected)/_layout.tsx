import { useTheme } from "@/theme";
import { Stack } from "expo-router";

export default function ProtectedLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.bg },
      }}
    />
  );
}
