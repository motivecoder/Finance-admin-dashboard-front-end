"use client";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import { BiChevronDown } from "react-icons/bi";

// Dynamically import ApexCharts with no SSR to avoid hydration issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type ExpenseCategory = {
  name: string;
  percentage: number;
  amount: number;
  bgColor: string;
  color: string;
};

type StatisticsCardProps = {
  period: string;
  income: number;
  totalExpense: number;
  categories: ExpenseCategory[];
};

export default function StatisticsCard({
  period = "This Month",
  income = 4800,
  totalExpense = 3500,
  categories = [
    {
      name: "Rent & Living",
      percentage: 60,
      amount: 2100,
      bgColor: "#1e4841",
      color: "#ECF4E9",
    },
    {
      name: "Investment",
      percentage: 15,
      amount: 525,
      bgColor: "#bbf49c",
      color: "#242E2C",
    },
    {
      name: "Education",
      percentage: 12,
      amount: 420,
      bgColor: "#ecf4e9",
      color: "#242E2C",
    },
    {
      name: "Food & Drink",
      percentage: 8,
      amount: 280,
      bgColor: "#e5e6e6",
      color: "#242E2C",
    },
    {
      name: "Entertainment",
      percentage: 5,
      amount: 175,
      bgColor: "#bcbebd",
      color: "#242E2C",
    },
  ],
}: StatisticsCardProps) {
  // Calculate the progress percentage for the income/expense bar
  const progressPercentage = (totalExpense / income) * 100;

  // Prepare data for ApexCharts
  const chartSeries = categories.map((category) => category.percentage);
  const chartLabels = categories.map((category) => category.name);
  const chartColors = categories.map((category) => category.bgColor);

  // ApexCharts options with proper typing
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut" as const,
      fontFamily: "inherit",
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total Expense",
              fontSize: "14px",
              fontWeight: 400,
              color: "#6b7280",
              formatter: () => `$${totalExpense.toLocaleString()}`,
            },
          },
        },
      },
    },
    colors: chartColors,
    labels: chartLabels,
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="border-gray-line mx-auto max-w-md rounded-2xl border p-4 text-black">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-base font-bold">Statistic</h3>
        <button className="flex cursor-pointer items-center text-sm font-medium">
          {period}
          <BiChevronDown className="ml-1 h-5 w-5" />
        </button>
      </div>

      <div className="mb-5">
        <div className="mb-1 flex justify-between text-sm">
          <div className="text-gray-600">
            Income{" "}
            <span className="text-gray-500">(${income.toLocaleString()})</span>
          </div>
          <div className="text-gray-600">
            Expense{" "}
            <span className="text-gray-500">
              (${totalExpense.toLocaleString()})
            </span>
          </div>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full bg-emerald-800"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8 flex h-48 justify-center">
        {/* ApexCharts Donut Chart */}
        {typeof window !== "undefined" && (
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="donut"
            height="100%"
            width="100%"
          />
        )}
      </div>

      <div className="space-y-3">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="flex h-[25px] w-8 items-center justify-center rounded-lg p-1.5 text-xs text-white"
                style={{
                  backgroundColor: category.bgColor,
                  color: category.color,
                }}
              >
                {category.percentage}%
              </div>
              <span className="ml-3 text-sm font-medium">{category.name}</span>
            </div>
            <div className="font-semibold">
              ${category.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
