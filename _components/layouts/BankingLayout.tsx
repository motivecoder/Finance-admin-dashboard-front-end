import type { ReactNode } from "react";

interface BankingLayoutProps {
  children: ReactNode;
}

export default function BankingLayout({ children }: BankingLayoutProps) {
  return (
    <div className="h-full">
      <main>{children}</main>
    </div>
  );
}
