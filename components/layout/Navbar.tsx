"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex fixed top-0 left-0 z-50 justify-center items-center w-full px-5 py-2 bg-background border-b border-white/10">
      <Link href="/" className="text-4xl font-bold p-2">
        Kfiatek
      </Link>
    </div>
  );
};

export default Navbar;
