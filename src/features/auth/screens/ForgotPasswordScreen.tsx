import { Button, Screen, Text } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { View } from "react-native";

type ForgotPasswordScreenProps = {
  onBack: () => void;
};

export function ForgotPasswordScreen({ onBack }: ForgotPasswordScreenProps) {
  const { spacing } = useTheme();
  const { t } = useAppTranslation();

  return (
    <Screen style={{ gap: spacing[4] }}>
      <Button variant="link" onPress={onBack}>
        {t("common.back")}
      </Button>
      <View style={{ gap: spacing[2] }}>
        <Text variant="header">{t("forgotPassword.title")}</Text>
        <Text variant="subtitle">{t("forgotPassword.subtitle")}</Text>
      </View>
    </Screen>
  );
}
