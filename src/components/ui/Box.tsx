import type { CSSProperties, ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export function Box({ children, style }: BoxProps) {
  return (
    <div className="portfolio-box" style={style}>
      {children}
    </div>
  );
}
