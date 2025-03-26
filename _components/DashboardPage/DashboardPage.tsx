import AirplaneTilt from "@/icons/AirplaneTilt";
import Clock from "@/icons/Clock";
import CoinIn from "@/icons/CoinIn";
import HouseLine from "@/icons/HouseLine";
import PlusCircle from "@/icons/PlusCircle";
import Symbol2 from "@/icons/Symbol2";
import Union from "@/icons/Union";
import Warning from "@/icons/Warning";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import StatisticsCard from "../ui/Charts/StatisticsCard";
import RecentActivity from "../ui/RecentActivity";
import SummaryCards from "../ui/SummaryCard";
import CashflowChart from "../ui/Charts/CashflowChart";
import TransactionsTable from "../ui/TransactionsTable";

const savingsPlans = [
  {
    title: "Emergency Fund",
    icon: <Warning />,
    saved: 5000,
    target: 10000,
  },
  {
    title: "Vacation Fund",
    icon: <AirplaneTilt />,
    saved: 3000,
    target: 5000,
  },
  {
    title: "Home Down Payment",
    icon: <HouseLine />,
    saved: 7250,
    target: 20000,
  },
];
const expenseCategories = [
  {
    name: "Rent & Living",
    percentage: 60,
    amount: 2100,
    bgColor: "#065f46",
    color: "#ECF4E9",
  },
  {
    name: "Investment",
    percentage: 15,
    amount: 525,
    bgColor: "#bef264",
    color: "#242E2C",
  },
  {
    name: "Education",
    percentage: 12,
    amount: 420,
    bgColor: "#e5e7eb",
    color: "#242E2C",
  },
  {
    name: "Food & Drink",
    percentage: 8,
    amount: 280,
    bgColor: "#9ca3af",
    color: "#242E2C",
  },
  {
    name: "Entertainment",
    percentage: 5,
    amount: 175,
    bgColor: "#6b7280",
    color: "#242E2C",
  },
];

const DashboardPage = () => {
  return (
    <>
      <div className="flex h-full gap-5">
        <div className="flex h-full w-[25%] flex-col gap-y-5">
          <div className="bg-green-dark text-green-bg w-full rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <Symbol2 />
              <Union />
            </div>
            <h2 className="mt-7 text-xl font-bold">Andrew Forbist</h2>
            <div className="mt-7 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-normal">Balance Amount</p>
                <h1 className="mt-0.5 text-[22px] font-bold">$562,000</h1>
              </div>
              <div className="flex items-center gap-[18px]">
                <div>
                  <p className="text-[10px] font-normal uppercase">EXP</p>
                  <p className="text-xs font-semibold">11/29</p>
                </div>
                <div>
                  <p className="text-[10px] font-normal uppercase">EXP</p>
                  <p className="text-xs font-semibold">11/29</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-bg flex items-center justify-center rounded-2xl px-2 py-4">
            <div className="border-white-bg flex w-[25%] flex-col items-center justify-center border-r">
              <PlusCircle />
              <p className="text-green-dark mt-1.5 text-xs font-semibold">
                Top Up{" "}
              </p>
            </div>
            <div className="border-white-bg flex w-[25%] flex-col items-center justify-center border-r">
              <CoinIn />
              <p className="text-green-dark mt-1.5 text-xs font-semibold">
                Transfer
              </p>
            </div>
            <div className="border-white-bg flex w-[25%] flex-col items-center justify-center border-r">
              <CoinIn />
              <p className="text-green-dark mt-1.5 text-xs font-semibold">
                Request
              </p>
            </div>
            <div className="flex w-[25%] flex-col items-center justify-center">
              <Clock />
              <p className="text-green-dark mt-1.5 text-xs font-semibold">
                History
              </p>
            </div>
          </div>
          <div className="border-gray-line rounded-2xl border p-4">
            <div className="flex items-center justify-between text-black">
              <h3 className="text-base font-bold">Daily Limit</h3>
              <BsThreeDotsVertical className="cursor-pointer text-lg" />
            </div>
            <div className="mt-5 flex items-center justify-between text-black">
              <p className="text-xs font-semibold">
                $2,500.00
                <span className="pl-2 text-[10px] font-normal">
                  spent of $20,000.00
                </span>
              </p>
              <p className="text-xs font-semibold">12.5%</p>
            </div>
            <div className="bg-green-light relative mt-3 h-2 w-full overflow-hidden rounded-full">
              <div className="bg-green-dark h-full w-[25%] rounded-full transition-all duration-300"></div>
            </div>
          </div>

          <div className="border-gray-line rounded-2xl border p-4 text-black">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold">Saving Plans</h3>
              <button className="text-green-dark text-sm font-medium">
                + Add Plan
              </button>
            </div>

            {/* Total Savings */}
            <div className="mt-5">
              <p className="text-xs">Total Savings</p>
              <h1 className="text-green-dark text-2xl font-bold">$84,500</h1>
            </div>

            {/* Saving Plan Cards */}
            <div className="mt-5 space-y-4">
              {savingsPlans.map((plan, index) => {
                const progress = (plan.saved / plan.target) * 100;

                return (
                  <div
                    key={index}
                    className="border-gray-line rounded-lg border bg-white p-[14px]"
                  >
                    <div className="flex items-center space-x-3">
                      {/* Icon */}
                      <div className="bg-green-bg rounded-lg p-2">
                        {plan.icon}
                      </div>
                      {/* Title */}
                      <h3 className="text-sm font-medium">{plan.title}</h3>
                      <BsThreeDotsVertical className="ml-auto cursor-pointer text-lg" />
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="bg-green-light relative h-2 w-full overflow-hidden rounded-full">
                        <div
                          className="bg-green-dark h-full rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Savings & Target Info */}
                    <div className="mt-2 flex justify-between text-sm">
                      <p className="font-semibold">
                        <span className="text-black">
                          ${plan.saved.toLocaleString()}
                        </span>{" "}
                        <span className="text-gray-30 text-xs">
                          {progress.toFixed(2)}%
                        </span>
                      </p>
                      <p className="text-gray-30">
                        Target:{" "}
                        <span className="text-black">
                          {" "}
                          ${plan.target.toLocaleString()}{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-[50%] flex-col gap-y-5">
          <SummaryCards />
          <CashflowChart />
          <TransactionsTable />
        </div>
        <div className="flex w-[25%] flex-col gap-y-5">
          <StatisticsCard
            period="This Month"
            income={4800}
            totalExpense={3500}
            categories={expenseCategories}
          />
          <RecentActivity />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
