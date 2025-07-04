import Link from "next/link";
import React from "react";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

export const Navbar = () => {
  const navItems = [
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
  ];
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center gap-3">
        <HomeIcon size={24} />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
