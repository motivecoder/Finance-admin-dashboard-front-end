interface Contact {
  id: string;
  name: string;
  accountNumber: string;
}

export default function ContactList() {
  const contacts: Contact[] = [
    { id: "1", name: "Abe Reeves", accountNumber: "1209876543212" },
    { id: "2", name: "Audrey Murphy", accountNumber: "1209876543128" },
    { id: "3", name: "Bob Johnson", accountNumber: "1209876543124" },
    { id: "4", name: "Cho Won Kim", accountNumber: "1209876543127" },
    { id: "5", name: "Cynthia Watson", accountNumber: "1209876543121" },
    { id: "6", name: "Edna Connors", accountNumber: "1209876543131" },
    { id: "7", name: "Jade Brown", accountNumber: "1209876543125" },
    { id: "8", name: "Miles Sanders", accountNumber: "1209876543126" },
  ];

  return (
    <div className="max-h-[calc(100vh-240px)] space-y-4 overflow-y-auto pr-2">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex cursor-pointer items-center gap-3 rounded p-1 hover:bg-gray-50"
        >
          <div className="bg-green-light flex size-[38px] items-center justify-center rounded-full"></div>
          <div>
            <p className="text-sm font-medium text-black">{contact.name}</p>
            <p className="text-gray-30 text-xs">{contact.accountNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
