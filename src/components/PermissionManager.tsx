import React from "react";
import { PermissionName, usePermission } from "@/services/permissions";
import { useAppTranslation } from "@/i18n";
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
  const { t } = useAppTranslation();

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
        <Text>{t("permissions.unavailable")}</Text>
      )}
      {permissionStatus === "blocked" && (
        <>
          <Text>{t("permissions.blocked")}</Text>
          <Button variant="primary" onPress={Linking.openSettings}>
            {t("permissions.openSettings")}
          </Button>
        </>
      )}
    </Screen>
  );
}
