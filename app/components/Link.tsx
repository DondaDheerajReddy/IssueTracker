import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  label: string;
  href: string;
}

const Link = ({ label, href }: Props) => {
  return (
    <RadixLink asChild>
      <NextLink href={href}>{label}</NextLink>
    </RadixLink>
  );
};

export default Link;
