"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

interface Transaction {
  id: string;
  name: string;
  category: string;
  date: string;
  time: string;
  amount: string;
  note: string;
  status: "Failed" | "Completed" | "Pending";
}

export default function TransactionsTable() {
  const [timeframe, setTimeframe] = useState("This Month");

  const transactions: Transaction[] = [
    {
      id: "transaction-1",
      name: "Electricity Bill",
      category: "Utilities",
      date: "2028-03-01",
      time: "04:34:48",
      amount: "$210.81",
      note: "Payment for monthly electricity bill",
      status: "Failed",
    },
    {
      id: "transaction-2",
      name: "Weekly Groceries",
      category: "Food",
      date: "2028-03-04",
      time: "04:34:48",
      amount: "$204.02",
      note: "Groceries shopping at local supermarket",
      status: "Completed",
    },
    {
      id: "transaction-3",
      name: "Movie Night",
      category: "Entertainment",
      date: "2028-02-27",
      time: "04:34:48",
      amount: "$97.84",
      note: "Tickets for movies and snacks",
      status: "Pending",
    },
    {
      id: "transaction-4",
      name: "Medical Check-up",
      category: "Healthcare",
      date: "2028-02-07",
      time: "04:34:48",
      amount: "$323.33",
      note: "Routine health check-up and medications",
      status: "Pending",
    },
  ];

  const getStatusColor = (status: Transaction["status"]) => {
    switch (status) {
      case "Failed":
        return "bg-red-100 text-red-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="border-gray-line rounded-lg border p-4 text-black">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold">Recent Transactions</h2>

        <div className="flex items-center gap-2">
          <button className="border-gray-line text-green-dark flex items-center rounded-md border px-3 py-1.5 text-sm font-bold">
            {timeframe}
            <ChevronDown size={16} className="ml-2" />
          </button>
          <button className="border-gray-line text-green-dark rounded-md border p-1.5">
            <SlidersHorizontal size={16} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-green-bg">
              <th className="text-gray-30 rounded-l-md px-4 py-1 text-left text-xs font-medium tracking-wider uppercase">
                Transaction Name
              </th>
              <th className="text-gray-30 px-4 py-1 text-left text-xs font-medium tracking-wider uppercase">
                Date & Time
              </th>
              <th className="text-gray-30 px-4 py-1 text-left text-xs font-medium tracking-wider uppercase">
                Amount
              </th>
              <th className="text-gray-30 px-4 py-1 text-left text-xs font-medium tracking-wider uppercase">
                Note
              </th>
              <th className="text-gray-30 rounded-r-md px-4 py-1 text-left text-xs font-medium tracking-wider uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((transaction) => (
              <tr key={`row-${transaction.id}`}>
                <td className="px-4 py-1 whitespace-nowrap">
                  <div className="font-medium text-gray-900">
                    {transaction.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {transaction.category}
                  </div>
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {transaction.date.replace(
                      /(\d{4})-(\d{2})-(\d{2})/,
                      "$3-$2-$1",
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    {transaction.time}
                  </div>
                </td>
                <td className="px-4 py-1 text-sm whitespace-nowrap text-gray-900">
                  {transaction.amount}
                </td>
                <td className="line-clamp-2 px-4 py-1 text-sm break-all text-gray-500">
                  {transaction.note}
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${getStatusColor(transaction.status)}`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
