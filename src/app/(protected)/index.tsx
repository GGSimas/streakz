import { Button, Screen, Text } from "@/components/ui";
import { useAccountLogout } from "@/features/auth/screens/hooks/useAccountLogout";

export default function ProtectedHomeRoute() {
  const { logout } = useAccountLogout();
  return (
    <Screen style={{ justifyContent: "center", alignItems: "center" }}>
      <Text variant="header">Usuário autenticado</Text>
      <Button full onPress={() => logout()} variant="secondary">
        Sair
      </Button>
    </Screen>
  );
}
