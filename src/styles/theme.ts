import type { CSSProperties } from "react";

export const colors = {
  background: "transparent",
  text: "white",
  muted: "#aaa",
  mutedLight: "#bbb",
  mutedDark: "#888",
  line: "#444",
  dotBorder: "#666",
  border: "#333",
  hover: "hsla(0, 0%, 0%, 1)",
  glass: "var(--glass-bg)",
} as const;

export const radius = "var(--radius)";

export const cardStyle: CSSProperties = {
  borderRadius: radius,
  border: `1px solid ${colors.border}`,
  background: colors.glass,
  backdropFilter: "blur(var(--blur))",
  WebkitBackdropFilter: "blur(var(--blur))",
};

export const layout = {
  sidebarWidth: "30%",
  mainWidth: "70%",
  mainPadding: "80px 150px 150px",
  sectionGap: "40px",
  sidebarPadding: "24px 0",
} as const;

export const boxStyle: CSSProperties = {
  ...cardStyle,
  padding: "40px",
  minHeight: "620px",
  height: "auto",
  boxSizing: "border-box",
  color: colors.text,
};

export const sectionLabelStyle: CSSProperties = {
  margin: 0,
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

export const sectionTitleStyle: CSSProperties = {
  margin: "80px 0 16px",
  fontSize: "clamp(28px, 4vw, 52px)",
  fontWeight: "bold",
  lineHeight: 1.1,
  maxWidth: "600px",
};

export const sectionSubtitleStyle: CSSProperties = {
  margin: 0,
  fontSize: "14px",
  color: colors.muted,
  maxWidth: "480px",
  lineHeight: 1.6,
};

export const bodyTextStyle: CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.6,
};
