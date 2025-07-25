"use client";

import { Container, Flex } from "@radix-ui/themes";
import NavAuthStatus from "./NavAuthStatus";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="px-5 border-b border-b-zinc-600 py-3 mb-5">
      <Container>
        <Flex justify="between">
          <Navlinks />
          <NavAuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
