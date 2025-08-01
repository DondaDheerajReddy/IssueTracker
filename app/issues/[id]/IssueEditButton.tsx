import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueEditButton = ({id}: {id: number}) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${id}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default IssueEditButton;
