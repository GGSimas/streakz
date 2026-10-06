import { BackButton, Button, Input, Screen, Text } from "@/components/ui";
import { useTheme } from "@/theme";
import { Eye, EyeClosed } from "lucide-react-native";
import { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

type LoginCredentials = {
  email: string;
  password: string;
};

type LoginScreenProps = {
  onBack: () => void;
  onLogin: (credentials: LoginCredentials) => void;
  onRegister: () => void;
  onForgot: () => void;
};

export function LoginScreen({
  onBack,
  onLogin,
  onRegister,
  onForgot,
}: LoginScreenProps) {
  const { colors, spacing } = useTheme();
  const passwordRef = useRef<TextInput>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const canSubmit = email.trim().length > 0 && password.length > 0;

  function submit() {
    if (!canSubmit) {
      return;
    }

    onLogin({ email: email.trim(), password });
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
          <Text variant="header">Bem-vindo de volta</Text>
          <Text variant="subtitle">Entre na sua conta Streakz</Text>
        </View>

        <View style={{ gap: spacing[4] }}>
          <Input
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
            placeholder="••••••••"
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
            Esqueci minha senha
          </Button>
        </View>

        <View
          style={{
            marginTop: "auto",
            gap: spacing[3],
            paddingTop: spacing[8],
          }}
        >
          <Button full disabled={!canSubmit} onPress={submit}>
            Entrar
          </Button>
          <View style={styles.signupRow}>
            <Text variant="subtitle">Não tem conta? </Text>
            <Button
              variant="link"
              onPress={onRegister}
              style={styles.inlineLink}
            >
              Criar agora
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
