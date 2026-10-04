/**
 * 4px grid, matching the Tailwind spacing scale in streakz_ui_resources.
 * Screen horizontal padding in the prototype is `5` (20).
 */
export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
} as const;

export type Spacing = keyof typeof spacing;
