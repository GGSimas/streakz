/**
 * Colors taken from streakz_ui_resources/src/index.css and the shared UI components.
 * The reference is a single dark palette.
 */
export const colors = {
  bg: "#0D0D12",
  surface: "#16161F",
  surface2: "#1E1E2A",
  border: "rgba(255,255,255,0.07)",
  text: "#F0F0F5",
  muted: "#6B6B80",
  muted2: "#3A3A4A",
  label: "#9090A8",

  lime: "#B5F23D",
  limeDim: "rgba(181,242,61,0.15)",
  limeDeep: "#8FE020",
  onAccent: "#0D0D12",

  violet: "#7C3AED",
  violetDim: "rgba(124,58,237,0.2)",

  orange: "#F97316",
  orangeDim: "rgba(249,115,22,0.15)",

  danger: "#F87171",
  dangerDim: "rgba(239,68,68,0.15)",

  track: "rgba(255,255,255,0.08)",
  divider: "rgba(255,255,255,0.06)",
  overlay: "rgba(255,255,255,0.06)",
  overlaySoft: "rgba(255,255,255,0.04)",
  input: "rgba(255,255,255,0.05)",
  inputBorder: "rgba(255,255,255,0.08)",
  focus: "rgba(181,242,61,0.4)",
  glass: "rgba(22,22,31,0.85)",
  scrim: "rgba(0,0,0,0.6)",
  skeleton: "#2A2A38",

  silver: "#C0C0C0",
  bronze: "#CD7F32",
} as const;

export const statusColors = {
  active: { background: colors.limeDim, text: colors.lime },
  scheduled: { background: colors.orangeDim, text: colors.orange },
  finished: { background: "rgba(107,107,128,0.2)", text: colors.label },
  pending: { background: colors.orangeDim, text: colors.orange },
  approved: { background: colors.limeDim, text: colors.lime },
  rejected: { background: colors.dangerDim, text: colors.danger },
} as const;

export const medalColors = {
  1: colors.lime,
  2: colors.silver,
  3: colors.bronze,
} as const;

export type ColorName = keyof typeof colors;
export type StatusName = keyof typeof statusColors;
