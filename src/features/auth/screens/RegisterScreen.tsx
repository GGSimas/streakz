import { BackButton, Button, Input, Screen, Text } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { Eye, EyeClosed } from "lucide-react-native";
import { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useRegisterAccount } from "./hooks";

type RegisterAccount = {
  name: string;
  email: string;
  password: string;
};

type RegisterScreenProps = {
  onBack: () => void;
  onNext: (account: Omit<RegisterAccount, "password">) => void;
  onLogin: () => void;
};

export function RegisterScreen({
  onBack,
  onNext,
  onLogin,
}: RegisterScreenProps) {
  const { spacing, colors } = useTheme();
  const { t } = useAppTranslation();
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { register, isLoading } = useRegisterAccount({
    onSuccess: () => {
      onNext({ name: name.trim(), email: email.trim() });
    },
  });

  const canSubmit =
    name.trim().length > 0 && email.trim().length > 0 && password.length >= 8;

  function submit() {
    if (!canSubmit) {
      return;
    }

    register({ fullName: name.trim(), email: email.trim(), password });
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
          <Text variant="header">{t("register.title")}</Text>
          <Text variant="subtitle">{t("register.subtitle")}</Text>
        </View>

        <View style={{ gap: spacing[4] }}>
          <Input
            label={t("register.fullName")}
            value={name}
            onChangeText={setName}
            placeholder={t("register.namePlaceholder")}
            autoCapitalize="words"
            autoComplete="name"
            textContentType="name"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
          />
          <Input
            ref={emailRef}
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
            placeholder={t("register.passwordPlaceholder")}
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
        </View>

        <View
          style={{ marginTop: "auto", gap: spacing[3], paddingTop: spacing[8] }}
        >
          <Button full disabled={!canSubmit || isLoading} onPress={submit}>
            {t("register.continue")}
          </Button>
          <View style={styles.loginRow}>
            <Text variant="subtitle">{t("register.hasAccount")} </Text>
            <Button variant="link" onPress={onLogin} style={styles.inlineLink}>
              {t("common.signIn")}
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
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inlineLink: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});
