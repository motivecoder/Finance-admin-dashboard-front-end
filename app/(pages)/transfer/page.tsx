import BankingLayout from "@/_components/layouts/BankingLayout";
import RecentTransfers from "@/_components/ui/RecentTransfers";
import SidebarTransfer from "@/_components/ui/SidebarTransfer";
import TransferForm from "@/_components/ui/TransferForm";

export default function Home() {
  return (
    <BankingLayout>
      <div className="flex h-full w-full gap-4">
        <SidebarTransfer />
        <div className="flex-1 p-4">
          <RecentTransfers />
          <TransferForm />
        </div>
      </div>
    </BankingLayout>
  );
}
