"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown, Circle } from "lucide-react";
import type { ApexOptions } from "apexcharts";

// Import ApexCharts dynamically to avoid SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function CashflowChart() {
  const [timeframe, setTimeframe] = useState("This Year");

  // Chart data
  const chartData = {
    series: [
      {
        name: "Income",
        data: [
          3800, 3200, 3600, 4800, 4200, 5000, 3400, 3600, 5000, 3800, 3200,
          3800,
        ],
      },
      {
        name: "Expense",
        data: [
          -2200, -2800, -2400, -1800, -2600, -2000, -2800, -2400, -1800, -2600,
          -3000, -2200,
        ],
      },
    ],
    options: {
      chart: {
        type: "bar" as const,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["#1E4841", "#BBF49C"],
      plotOptions: {
        bar: {
          columnWidth: "60%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      grid: {
        borderColor: "#E5E6E6",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: (val: number) => Math.abs(val) + "k",
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val: number) => "$" + Math.abs(val).toFixed(0) + ",000",
        },
      },
      legend: {
        show: false,
      },
    } as ApexOptions,
  };

  return (
    <div className="border-gray-line rounded-2xl border bg-white p-4 text-black">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold">Cashflow</h2>
          <div className="mt-4">
            <p className="text-sm text-black">Total Balance</p>
            <p className="text-green-dark text-2xl font-bold">$562,000</p>
          </div>
        </div>

        <button className="border-gray-line flex items-center rounded-md border px-3 py-1.5 text-sm text-black">
          {timeframe}
          <ChevronDown size={16} className="ml-2" />
        </button>
      </div>

      <div className="flex items-center justify-end gap-4">
        <div className="flex items-center gap-1.5">
          <Circle size={8} className="fill-[#1e3a8a] text-[#1e3a8a]" />
          <span className="text-xs">Income</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Circle size={8} className="fill-[#a7f3d0] text-[#a7f3d0]" />
          <span className="text-xs">Expense</span>
        </div>
      </div>

      <div className="mt-2">
        <div className="h-[250px]">
          {typeof window !== "undefined" && (
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height="100%"
            />
          )}
        </div>
      </div>
    </div>
  );
}
