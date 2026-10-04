/** Matches Tailwind rounded-xl (12), rounded-2xl (16) and rounded-3xl (24). */
export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export type Radius = keyof typeof radius;
