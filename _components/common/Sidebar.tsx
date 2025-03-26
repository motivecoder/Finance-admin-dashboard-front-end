"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import Image from "next/image";

import { navItems } from "@/data/SidebarItems";

export function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string[]>(["/transfer"]);

  const toggleExpand = (href: string) => {
    setExpanded((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href],
    );
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  const isExpanded = (href: string) => expanded.includes(href);

  return (
    <>
      <Link
        href="/"
        className="flex cursor-pointer items-center justify-center px-2 font-bold text-[#0a3a2a]"
      >
        <Image
          width={125}
          height={40}
          src="/images/Logo.svg"
          alt="logo"
          className="h-full w-full object-contain"
        />
      </Link>
      <nav className="mt-5 flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.title}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleExpand(item.href)}
                    className={`flex h-10 w-full shrink-0 cursor-pointer items-center justify-between rounded-md px-4 py-2 transition-colors ${
                      isActive(item.href) ? "bg-green-light text-black" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-semibold">
                        {item.title}
                      </span>
                    </div>
                    <div className="text-xl">
                      {isExpanded(item.href) ? (
                        <MdExpandLess />
                      ) : (
                        <MdExpandMore />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded(item.href)
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {/* Vertical line on the left */}
                    <ul className="relative mt-1 space-y-1 pl-5">
                      <div className="bg-gray-20 absolute top-0 left-4 h-full w-[1px]"></div>
                      {item.children.map((child) => (
                        <li key={child.title}>
                          <Link
                            href={child.href}
                            className={`flex h-10 items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                              isActive(child.href)
                                ? "bg-green-light font-medium text-black"
                                : ""
                            }`}
                          >
                            <span className="text-lg">
                              {React.isValidElement(item.icon)
                                ? React.cloneElement(
                                    item.icon as React.ReactElement<{
                                      color?: string;
                                    }>,
                                    {
                                      color: isActive(item.href)
                                        ? "#242e2c"
                                        : "#6B7271",
                                    },
                                  )
                                : item.icon}
                            </span>

                            <span>{child.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`flex h-10 shrink-0 items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive(item.href) ? "bg-green-light text-black" : ""
                  }`}
                >
                  <span className="text-lg">
                    {React.isValidElement(item.icon)
                      ? React.cloneElement(
                          item.icon as React.ReactElement<{ color?: string }>,
                          {
                            color: isActive(item.href) ? "#242e2c" : "#6B7271",
                          },
                        )
                      : item.icon}
                  </span>

                  <span className="flex-1">{item.title}</span>
                  {item.badge && (
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="bg-green-dark relative rounded-lg p-4 text-white">
        <div className="absolute top-0 right-0">
          <Image width={65} height={65} src="/images/symbol.svg" alt="symbol" />
        </div>
        <div className="">
          <Image width={32} height={32} src="/images/lock.png" alt="symbol" />
        </div>
        <p className="text-green-bg mt-8 mb-5 text-sm font-normal">
          Gain full access to your finances with detailed analytics and graphs
        </p>
        <button className="bg-green-light flex cursor-pointer items-center justify-center rounded-lg px-[14px] py-2.5 text-sm font-medium text-black">
          Get Pro
        </button>
      </div>
    </>
  );
}
