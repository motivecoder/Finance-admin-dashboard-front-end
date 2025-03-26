import type React from "react";

import CoinIn from "@/icons/CoinIn";
import Clock from "@/icons/Clock";
import PlusCircle from "@/icons/PlusCircle";

// export default function NavIcons() {
//   return (
//     <div className="flex justify-between py-4">
//       <NavIcon
//         icon={<ArrowUpRight className="h-5 w-5" />}
//         label="Transfer"
//         active
//       />
//       <NavIcon icon={<CreditCard className="h-5 w-5" />} label="Payment" />
//       <NavIcon icon={<Wallet className="h-5 w-5" />} label="Virtual Acc" />
//       <NavIcon icon={<TrendingUp className="h-5 w-5" />} label="Top Up" />
//     </div>
//   );
// }

// interface NavIconProps {
//   icon: React.ReactNode;
//   label: string;
//   active?: boolean;
// }

export function NavIcon() {
  return (
    <div className="bg-green-bg flex items-center justify-center rounded-2xl px-2 py-4">
      <div className="border-white-bg flex w-[25%] flex-col items-center justify-center border-r">
        <PlusCircle />
        <p className="text-green-dark mt-1.5 text-xs font-semibold">
          Transfer{" "}
        </p>
      </div>
      <div className="border-white-bg flex w-[25%] flex-col items-center justify-center border-r">
        <CoinIn />
        <p className="text-green-dark mt-1.5 text-xs font-semibold">Payment</p>
      </div>
      <div className="border-white-bg flex w-[25%] flex-col items-center justify-center border-r">
        <CoinIn />
        <p className="text-green-dark mt-1.5 text-xs font-semibold">
          Virtual Acc
        </p>
      </div>
      <div className="flex w-[25%] flex-col items-center justify-center">
        <Clock />
        <p className="text-green-dark mt-1.5 text-xs font-semibold">Top Up </p>
      </div>
    </div>
  );
}
