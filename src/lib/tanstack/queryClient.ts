import { focusManager, QueryClient } from "@tanstack/react-query";
import { AppState, Platform } from "react-native";

function bindAppFocus() {
  if (Platform.OS === "web") {
    return;
  }

  focusManager.setEventListener((handleFocus) => {
    const subscription = AppState.addEventListener("change", (status) => {
      handleFocus(status === "active");
    });

    return () => subscription.remove();
  });
}

bindAppFocus();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
    mutations: {
      retry: false,
    },
  },
});
