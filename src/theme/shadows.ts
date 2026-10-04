import type { ViewStyle } from "react-native";

/** Glow shadows from `.lime-glow` and `.violet-glow` in the UI resource. */
export const shadows = {
  lime: {
    boxShadow: "0px 0px 24px rgba(181, 242, 61, 0.25)",
  },
  violet: {
    boxShadow: "0px 0px 24px rgba(124, 58, 237, 0.3)",
  },
} as const satisfies Record<string, ViewStyle>;

export type Shadow = keyof typeof shadows;
