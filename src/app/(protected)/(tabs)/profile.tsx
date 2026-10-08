import { Button, Screen, Text } from "@/components/ui";
import { useAccountLogout } from "@/features/auth/screens/hooks";

export default function ProfileRoute() {
  const { logout } = useAccountLogout();

  return (
    <Screen style={{ justifyContent: "center", alignItems: "center" }}>
      <Text variant="header">Perfil</Text>

      <Button full onPress={() => logout()} variant="secondary">
        Sair
      </Button>
    </Screen>
  );
}
