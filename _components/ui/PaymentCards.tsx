import { Copy } from "lucide-react";

interface Card {
  id: string;
  type: "mastercard" | "visa";
  name: string;
  balance: string;
  number: string;
}

export default function PaymentCards() {
  const cards: Card[] = [
    {
      id: "1",
      type: "mastercard",
      name: "Elite Transfer Mastercard",
      balance: "$643,000",
      number: "5489 9568 7765 4321",
    },
    {
      id: "2",
      type: "visa",
      name: "Platinum Plus Visa",
      balance: "$415,000",
      number: "4532 8723 0045 9087",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="flex gap-3 rounded-md bg-white p-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-md ${
              card.type === "mastercard" ? "bg-green-dark" : "border bg-white"
            }`}
          >
            {card.type === "mastercard" ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="12" r="6" fill="#EB001B" />
                <circle cx="15" cy="12" r="6" fill="#F79E1B" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 16.8C13.8075 15.4895 15 13.0107 15 10.2C15 7.38932 13.8075 4.91049 12 3.6C10.1925 4.91049 9 7.38932 9 10.2C9 13.0107 10.1925 15.4895 12 16.8Z"
                  fill="#FF5F00"
                />
              </svg>
            ) : (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 21H21V23H11V21Z" fill="#172B85" />
                <path
                  d="M12 9.5L9 16H12L12.5 14.5H14.5L15 16H18L15 9.5H12ZM13 12.5L13.5 11L14 12.5H13Z"
                  fill="#172B85"
                />
                <path d="M18.5 9.5L16 16H18.5L21 9.5H18.5Z" fill="#172B85" />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">{card.name}</p>
            <p className="font-semibold">{card.balance}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>{card.number}</span>
              <Copy className="h-3 w-3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
