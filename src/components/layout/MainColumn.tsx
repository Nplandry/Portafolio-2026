import type { ReactNode } from "react";

type MainColumnProps = {
  children: ReactNode;
};

export function MainColumn({ children }: MainColumnProps) {
  return <main className="main-column">{children}</main>;
}
