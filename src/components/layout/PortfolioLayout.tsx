import type { ReactNode } from "react";

type PortfolioLayoutProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

export function PortfolioLayout({ sidebar, children }: PortfolioLayoutProps) {
  return (
    <div className="portfolio-layout">
      {sidebar}
      {children}
    </div>
  );
}
