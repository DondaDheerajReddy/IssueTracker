"use client";

import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { Avatar, Box, Container, DropdownMenu, Flex } from "@radix-ui/themes";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  return (
    <nav className="px-5 border-b border-b-zinc-600 py-3 mb-5">
      <Container>
        <Flex justify="between">
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
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user!.image!}
                    fallback="?"
                    radius="full"
                    size="2"
                    className="cursor-pointer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>{session.user!.email}</DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Logout</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
