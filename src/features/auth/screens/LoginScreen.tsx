import { Button, Screen, Text } from "@/components/ui";
import { useTheme } from "@/theme";
import { View } from "react-native";

type LoginScreenProps = {
  onBack: () => void;
};

export function LoginScreen({ onBack }: LoginScreenProps) {
  const { spacing } = useTheme();

  return (
    <Screen style={{ gap: spacing[4] }}>
      <Button variant="link" onPress={onBack}>
        Voltar
      </Button>
      <View style={{ gap: spacing[2] }}>
        <Text variant="header">Bem-vindo de volta</Text>
        <Text variant="subtitle">Entre na sua conta Streakz</Text>
      </View>
    </Screen>
  );
}
