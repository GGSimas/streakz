import { Button, Screen, Text } from "@/components/ui";
import { useTheme } from "@/theme";
import { View } from "react-native";

type RegisterScreenProps = {
  onBack: () => void;
};

export function RegisterScreen({ onBack }: RegisterScreenProps) {
  const { spacing } = useTheme();

  return (
    <Screen style={{ gap: spacing[4] }}>
      <Button variant="link" onPress={onBack}>
        Voltar
      </Button>
      <View style={{ gap: spacing[2] }}>
        <Text variant="header">Criar conta</Text>
        <Text variant="subtitle">Comece sua jornada agora</Text>
      </View>
    </Screen>
  );
}
