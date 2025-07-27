import { Card, Flex, Heading } from "@radix-ui/themes";
import React from "react";
import { Text } from "@radix-ui/themes";
import { Status } from "./generated/prisma";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssuesSummery = ({ open, inProgress, closed }: Props) => {
  const array: { lable: string; count: number }[] = [
    { lable: "Open Issues", count: open },
    { lable: "In-progress Issues", count: inProgress },
    { lable: "Closed Issues", count: closed },
  ];
  return (
    <Flex direction="row" gap="4">
      {array.map((item) => (
        <Card key={item.lable}>
          <Flex direction="column" gap="3">
            <Text>{item.lable}</Text>
            <Heading size="4">{item.count}</Heading>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssuesSummery;
