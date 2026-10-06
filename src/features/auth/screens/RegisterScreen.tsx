import { BackButton, Button, Input, Screen, Text } from "@/components/ui";
import { useTheme } from "@/theme";
import { Eye, EyeClosed } from "lucide-react-native";
import { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

type RegisterAccount = {
  name: string;
  email: string;
  password: string;
};

type RegisterScreenProps = {
  onBack: () => void;
  onNext: (account: RegisterAccount) => void;
  onLogin: () => void;
};

export function RegisterScreen({
  onBack,
  onNext,
  onLogin,
}: RegisterScreenProps) {
  const { spacing, colors } = useTheme();
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const canSubmit =
    name.trim().length > 0 && email.trim().length > 0 && password.length >= 8;

  function submit() {
    if (!canSubmit) {
      return;
    }

    onNext({ name: name.trim(), email: email.trim(), password });
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
          <Text variant="header">Criar conta</Text>
          <Text variant="subtitle">Comece sua jornada agora</Text>
        </View>

        <View style={{ gap: spacing[4] }}>
          <Input
            label="Nome completo"
            value={name}
            onChangeText={setName}
            placeholder="Seu nome"
            autoCapitalize="words"
            autoComplete="name"
            textContentType="name"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
          />
          <Input
            ref={emailRef}
            label="E-mail"
            type="email"
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <Input
            ref={passwordRef}
            label="Senha"
            type="password"
            value={password}
            onChangeText={setPassword}
            placeholder="Mínimo 8 caracteres"
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
          <Button full disabled={!canSubmit} onPress={submit}>
            Continuar
          </Button>
          <View style={styles.loginRow}>
            <Text variant="subtitle">Já tem conta? </Text>
            <Button variant="link" onPress={onLogin} style={styles.inlineLink}>
              Entrar
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
