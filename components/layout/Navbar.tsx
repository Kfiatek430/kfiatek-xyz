"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavbarItem from "../ui/NavbarItem";

const Navbar = () => {
  const pathname = usePathname();

  const items = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Blog",
      href: "/blog",
    },
  ];

  return (
    <div className="flex flex-col fixed top-0 left-0 z-50 justify-center items-center md:flex-row md:justify-around w-full px-5 py-2 bg-background">
      <div className="text-2xl md:text-lg font-bold p-2">Kfiatek</div>
      <div className="flex gap-10">
        {items.map((item, idx) => {
          let isActive = false;
          if (
            (pathname.includes("/blog/") && item.href === "/blog") ||
            pathname === item.href
          ) {
            isActive = true;
          }

          return (
            <NavbarItem
              key={idx}
              text={item.text}
              href={item.href}
              isActive={isActive}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
