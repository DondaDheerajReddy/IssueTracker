"use client";

import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" }, 
  ];
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 px-5 border-b border-b-zinc-600 h-14 mb-5 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, id) => {
          return (
            <li key={id}>
              <Link
                className={classnames({
                  "text-zinc-800": link.href === currentPath,
                  "text-zinc-500": link.href !== currentPath,
                  "hover:text-zinc-900 transition-colors": true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
