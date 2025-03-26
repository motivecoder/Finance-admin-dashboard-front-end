import { MoreHorizontal, ChevronDown } from "lucide-react";
import PaymentCards from "./PaymentCards";

export default function TransferForm() {
  return (
    <div className="border-gray-line rounded-lg border">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-medium">Transfer Form</h2>
        <button>
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="bg-green-bg mx-4 mb-4 rounded-2xl p-6">
        {/* Transfer Type Tabs */}
        <div className="mb-6 grid grid-cols-2 gap-2">
          <button className="bg-green-dark cursor-pointer rounded-md py-2 text-white">
            Local
          </button>
          <button className="rounded-md bg-white py-2 text-gray-600">
            International
          </button>
        </div>

        {/* Payment Account */}
        <div className="mb-6">
          <label className="mb-2 block text-sm">Payment Account</label>
          <PaymentCards />
        </div>

        {/* Select Recipient */}
        <div className="mb-6">
          <label className="mb-2 block text-sm">Select Recipient</label>
          <div className="border-gray-line flex items-center justify-between rounded-md border bg-white p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-gray-200">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 4L5.5 12.5L2 9"
                    stroke="#555"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>Jade Brown - 1209876543125</span>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Amount and Transfer Method */}
        <div className="mb-6 flex items-center gap-4">
          <div className="w-[25%]">
            <label className="mb-2 block text-sm">Amount</label>
            <input
              defaultValue="$250.00"
              className="bg-white-bg border-gray-line rounded-lg border px-4 py-[14px] outline-none"
            />
          </div>
          <div className="w-[75%]">
            <label className="mb-2 block text-sm">Transfer Method</label>
            <div className="border-gray-line flex w-full items-center justify-between rounded-md border bg-white p-3">
              <span>Instant Transfer</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mb-6">
          <label className="mb-2 block text-sm text-black">Note</label>
          <textarea
            placeholder="Payment for shared vacation expenses"
            className="border-gray-line w-full rounded-lg border bg-white p-4 outline-none"
            rows={3}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button className="px-6">Cancel</button>
          <button className="bg-green-dark text-white-bg flex cursor-pointer items-center justify-center rounded-lg px-6 py-2">
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
}
