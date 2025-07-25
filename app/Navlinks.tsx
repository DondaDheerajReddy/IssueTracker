import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa6";
import classnames from "classnames";

const Navlinks = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  return (
    <Flex align="center" gap="5">
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
    </Flex>
  );
};

export default Navlinks;
