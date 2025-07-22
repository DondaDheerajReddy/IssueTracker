import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa6";

const Navbar = () => {
  const links = [
    {label: "Dashboard", href: "/"},
    {label: "Issues", href: "/issues"}
  ]
  return (
    <nav className="flex space-x-6 px-5 border-b h-14 mb-5 items-center" >
      <Link href="/"><FaBug /></Link>
      <ul className="flex space-x-6" >
        {links.map((link, id) => {
          return <li key={id} >
            <Link className="text-zinc-600 hover:text-zinc-900 transition-colors "  href={link.href} >{link.label}</Link>
          </li>
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
