import React from "react";
import Message from "@/icons/Message";
import Notify from "@/icons/Notify";
import Search from "@/icons/Search";

const Header: React.FC = () => {
  return (
    <header className="bg-white-bg sticky top-0 z-[100] flex items-center justify-between py-[22px]">
      <h1 className="text-green-dark text-[22px] font-bold">Dashboard</h1>
      <div className="flex items-center gap-5">
        <div className="bg-gray-10 relative flex h-[38px] w-[283px] items-center rounded-full px-4">
          <input
            type="text"
            placeholder="Search placeholder"
            className="text-gray-30 placeholder-gray-30 flex-1 bg-transparent text-sm outline-none"
          />
          <div className="flex size-5 items-center justify-center">
            <Search />
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="bg-green-bg flex size-[38px] cursor-pointer items-center justify-center rounded-full">
            <Message />
          </div>
          <div className="bg-green-bg flex size-[38px] cursor-pointer items-center justify-center rounded-full">
            <Notify />
          </div>
        </div>
        <div className="flex cursor-pointer items-center gap-x-[14px]">
          <span className="text-green-dark pl-3 text-base font-bold">
            Andrew Forbist
          </span>
          <div className="bg-green-light flex size-[38px] items-center justify-center rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
