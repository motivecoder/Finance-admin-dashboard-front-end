// import NavIcons from "./NavIcons";
import Search from "@/icons/Search";
import ContactList from "./ContactList";
import { NavIcon } from "./NavIcons";

export default function SidebarTransfer() {
  return (
    <div className="border-gray-line w-[303px] border-r pr-2">
      <NavIcon />

      <div className="relative mt-6 mb-4">
        <div className="border-gray-line bg-gray-10 flex items-center rounded-full border">
          <input
            type="text"
            placeholder="Search account"
            className="w-full bg-transparent px-3 py-2 text-sm outline-none"
          />
          <div className="absolute top-[10px] right-4">
            <Search />
          </div>
        </div>
      </div>

      <ContactList />

      <button className="bg-green-dark mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg py-2 text-white">
        Add New Recipient
      </button>
    </div>
  );
}
