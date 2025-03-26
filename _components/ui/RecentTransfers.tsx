interface Transfer {
  id: string;
  name: string;
  accountNumber: string;
  amount: string;
  status: "Successful" | "Pending" | "Failed";
}

export default function RecentTransfers() {
  const transfers: Transfer[] = [
    {
      id: "1",
      name: "Bob Johnson",
      accountNumber: "1209876543124",
      amount: "$560",
      status: "Successful",
    },
    {
      id: "2",
      name: "Abe Reeves",
      accountNumber: "1209876543212",
      amount: "$1,000",
      status: "Pending",
    },
    {
      id: "3",
      name: "Miles Sanders",
      accountNumber: "1209876543126",
      amount: "$750",
      status: "Successful",
    },
  ];

  return (
    <div className="mb-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium">Recent Transfer</h2>
        <button className="text-sm text-gray-500">Show More</button>
      </div>

      <div className="flex gap-4">
        {transfers.map((transfer) => (
          <div
            key={transfer.id}
            className="border-gray-line flex flex-1 items-center gap-3 rounded-lg border p-3"
          >
            <div className="bg-green-light flex size-[38px] items-center justify-center rounded-full"></div>
            <div className="flex-1">
              <p className="font-medium">{transfer.name}</p>
              <p className="text-xs text-gray-500">{transfer.accountNumber}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{transfer.amount}</p>
              <p
                className={`text-xs ${
                  transfer.status === "Successful"
                    ? "text-green-500"
                    : transfer.status === "Pending"
                      ? "text-orange-500"
                      : "text-red-500"
                }`}
              >
                {transfer.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
