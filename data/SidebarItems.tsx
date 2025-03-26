import Dashboard from "@/icons/dashboard";
import Inbox from "@/icons/Inbox";
import Insights from "@/icons/insights";
import Invest from "@/icons/invest";
import Invoice from "@/icons/invoice";
import Payments from "@/icons/payments";
import Promo from "@/icons/promo";
import Saving from "@/icons/saving";
import Transfer from "@/icons/transfer";
import { ReactNode } from "react";

type NavItem = {
  title: string;
  href: string;
  icon: ReactNode;
  badge?: number;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { title: "Dashboard", href: "/", icon: <Dashboard /> },
  {
    title: "Payments",
    href: "/payments",
    icon: <Payments />,
    children: [
      {
        title: "Transfer",
        href: "/transfer",
        icon: <Transfer />,
      },
      {
        title: "Transactions",
        href: "/transactions",
        icon: <Transfer />,
      },
      {
        title: "Transactions",
        href: "/transactions",
        icon: <Transfer />,
      },
    ],
  },

  { title: "Invoices", href: "/invoices", icon: <Invoice /> },
  { title: "Saving Plans", href: "/saving-plans", icon: <Saving /> },
  { title: "Investments", href: "/investments", icon: <Invest /> },
  { title: "Inbox", href: "/inbox", icon: <Inbox />, badge: 2 },
  { title: "Promos", href: "/promos", icon: <Promo /> },
  { title: "Insights", href: "/insights", icon: <Insights /> },
];
