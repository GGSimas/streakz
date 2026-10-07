import { BackButton, Button, Input, Screen, Text } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { Eye, EyeClosed } from "lucide-react-native";
import { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useLoginAccount } from "./hooks";

type LoginScreenProps = {
  onBack: () => void;
  onRegister: () => void;
  onForgot: () => void;
};

export function LoginScreen({
  onBack,
  onRegister,
  onForgot,
}: LoginScreenProps) {
  const { colors, spacing } = useTheme();
  const { t } = useAppTranslation();
  const passwordRef = useRef<TextInput>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const canSubmit = email.trim().length > 0 && password.length > 0;

  const { login, isLoading } = useLoginAccount();
  function submit() {
    if (!canSubmit) {
      return;
    }
    login({ email: email.trim(), password });
  }

  const EyeIcon = showPassword ? EyeClosed : Eye;

  return (
    <Screen
      scroll
      edges={["top", "bottom"]}
      keyboardShouldPersistTaps="handled"
      style={{ paddingHorizontal: spacing[6] }}
    >
      <View style={styles.content}>
        <BackButton onPress={onBack} style={{ marginBottom: spacing[8] }} />

        <View style={{ gap: spacing[2], marginBottom: spacing[8] }}>
          <Text variant="header">{t("login.title")}</Text>
          <Text variant="subtitle">{t("login.subtitle")}</Text>
        </View>

        <View style={{ gap: spacing[4] }}>
          <Input
            label={t("common.email")}
            type="email"
            value={email}
            onChangeText={setEmail}
            placeholder={t("common.emailPlaceholder")}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <Input
            ref={passwordRef}
            label={t("common.password")}
            type="password"
            value={password}
            onChangeText={setPassword}
            placeholder={t("common.passwordPlaceholder")}
            returnKeyType="done"
            onSubmitEditing={submit}
            secureTextEntry={!showPassword}
            rightIcon={
              <EyeIcon
                size={20}
                color={colors.muted}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />

          <Button variant="link" onPress={onForgot} style={styles.forgot}>
            {t("login.forgotPassword")}
          </Button>
        </View>

        <View
          style={{
            marginTop: "auto",
            gap: spacing[3],
            paddingTop: spacing[8],
          }}
        >
          <Button full disabled={!canSubmit || isLoading} onPress={submit}>
            {t("common.signIn")}
          </Button>
          <View style={styles.signupRow}>
            <Text variant="subtitle">{t("login.noAccount")} </Text>
            <Button
              variant="link"
              onPress={onRegister}
              style={styles.inlineLink}
            >
              {t("login.createNow")}
            </Button>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
  forgot: {
    alignSelf: "flex-end",
  },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inlineLink: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});
