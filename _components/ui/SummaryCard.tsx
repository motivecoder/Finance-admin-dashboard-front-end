import type React from "react";
import { ArrowUpRight, ArrowDownRight, MoreVertical } from "lucide-react";
import CoinIn from "@/icons/CoinIn";

interface SummaryCardProps {
  title: string;
  amount: string;
  icon: React.ReactNode;
  trend: "up" | "down" | "neutral";
  trendValue: string;
}

function SummaryCard({
  title,
  amount,
  icon,
  trend,
  trendValue,
}: SummaryCardProps) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="bg-green-bg flex size-9 items-center justify-center rounded-lg">
          {icon}
        </div>
        <button className="cursor-pointer text-black">
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="mt-7">
        <div
          className={`inline-flex items-center rounded-full px-1 py-0.5 text-xs ${
            trend === "up"
              ? "bg-green-light text-black"
              : trend === "down"
                ? "text-red bg-[#FDCED1]"
                : "bg-green-light text-black"
          }`}
        >
          {trend === "up" ? (
            <ArrowUpRight size={12} className="mr-1" />
          ) : trend === "down" ? (
            <ArrowDownRight size={12} className="mr-1" />
          ) : null}
          {trendValue}
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-2xl font-bold text-black">{amount}</h3>
        <p className="text-sm text-black">{title}</p>
      </div>
    </div>
  );
}

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <SummaryCard
        title="Total Income"
        amount="$78,000"
        icon={<CoinIn />}
        trend="up"
        trendValue="+17.8%"
      />
      <SummaryCard
        title="Total Expense"
        amount="$43,000"
        icon={<CoinIn />}
        trend="down"
        trendValue="-12.3%"
      />
      <SummaryCard
        title="Total Savings"
        amount="$56,000"
        icon={<CoinIn />}
        trend="up"
        trendValue="+9.4%"
      />
    </div>
  );
}
