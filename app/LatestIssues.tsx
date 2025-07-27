import { prisma } from "@/prisma/client";
import { Card, Flex, Heading, Table } from "@radix-ui/themes";
import React from "react";
import IssueStatusBadge from "./components/IssueStatusBadge";
import Link from "next/link";

const LatestIssues = async () => {
  const latestIssues = await prisma.issue.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });
  return (
    <Card>
      <Heading size="4">Latest Issues</Heading>
      <Table.Root>
        <Table.Body>
          {latestIssues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <div className="mb-2">
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                </div>
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
