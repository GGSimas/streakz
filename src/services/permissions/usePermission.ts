import { useState, useEffect, useRef, useCallback } from "react";
import { AppState, type AppStateStatus } from "react-native";
import { permissionsService } from "./permissionService";
import type * as PermissionsTypes from "./types";

export function usePermission(permissionName: PermissionsTypes.PermissionName) {
  const [isLoading, setIsLoading] = useState(true);
  const [permissionStatus, setPermissionStatus] =
    useState<PermissionsTypes.PermissionStatus>("undetermined");

  const appState = useRef<AppStateStatus>(AppState.currentState);

  const checkPermission = useCallback(async () => {
    try {
      setIsLoading(true);
      const initialStatus = await permissionsService.check(permissionName);
      if (initialStatus === "undetermined" || initialStatus === "denied") {
        const result = await permissionsService.request(permissionName);
        setPermissionStatus(result);
      } else {
        setPermissionStatus(initialStatus);
      }
    } catch {
      setPermissionStatus("unavailable");
    } finally {
      setIsLoading(false);
    }
  }, [permissionName]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    checkPermission();

    const subscription = AppState.addEventListener("change", (nextStatus) => {
      if (appState.current.match(/inactive|background/) && nextStatus === "active") {
        checkPermission();
      }
      appState.current = nextStatus;
    });

    return () => {
      subscription.remove();
    };
  }, [checkPermission]);

  return { isLoading, permissionStatus };
}
