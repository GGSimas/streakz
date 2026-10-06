import React from "react";
import { PermissionName, usePermission } from "@/services/permissions";
import { ActivityIndicator, Linking } from "react-native";
import { useTheme } from "@/theme";
import { Button, Screen, Text } from "./ui";

type PermissionManagerProps = React.PropsWithChildren & {
  permissionName: PermissionName;
  permissionDescription: string;
};

export function PermissionManager({
  permissionName,
  permissionDescription,
  children,
}: PermissionManagerProps) {
  const { isLoading, permissionStatus } = usePermission(permissionName);
  const { colors } = useTheme();

  if (isLoading) {
    return <ActivityIndicator color={colors.lime} />;
  }

  if (permissionStatus === "granted") {
    return <>{children}</>;
  }

  return (
    <Screen>
      <Text variant="header">{permissionDescription}</Text>

      {permissionStatus === "unavailable" && (
        <Text>Este recurso não esta disponivel no seu dispositivo</Text>
      )}
      {permissionStatus === "blocked" && (
        <>
          <Text>
            É necessario abrir as configurações do seu dispositivo para permitir
            o acesso a este recurso
          </Text>
          <Button variant="primary" onPress={Linking.openSettings}>
            Abrir configurações
          </Button>
        </>
      )}
    </Screen>
  );
}
