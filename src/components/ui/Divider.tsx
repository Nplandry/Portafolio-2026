import { colors } from "@/styles/theme";

type DividerProps = {
  className?: string;
};

export function Divider({ className = "divider" }: DividerProps) {
  return (
    <hr
      className={className}
      style={{ border: "none", borderTop: `1px solid ${colors.border}` }}
    />
  );
}
