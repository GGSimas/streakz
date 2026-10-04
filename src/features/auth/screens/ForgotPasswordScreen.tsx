import { Button, Screen, Text } from "@/components/ui";
import { useTheme } from "@/theme";
import { View } from "react-native";

type ForgotPasswordScreenProps = {
  onBack: () => void;
};

export function ForgotPasswordScreen({ onBack }: ForgotPasswordScreenProps) {
  const { spacing } = useTheme();

  return (
    <Screen style={{ gap: spacing[4] }}>
      <Button variant="link" onPress={onBack}>
        Voltar
      </Button>
      <View style={{ gap: spacing[2] }}>
        <Text variant="header">Recuperar senha</Text>
        <Text variant="subtitle">Enviaremos um link para seu e-mail</Text>
      </View>
    </Screen>
  );
}
