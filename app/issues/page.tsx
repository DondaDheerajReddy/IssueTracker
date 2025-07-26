import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import IssueStatusBadge from "../components/IssueStatusBadge";
import Link from "../components/Link";
import IssueButton from "./IssueButton";
import Pagination from "../Pagination";

interface Props {
  searchParams?: Promise<{
    status?: "OPEN" | "CLOSED" | "IN_PROGRESS" | "ALL";
    page?: string;
  }>;
}

const PageFile = async ({ searchParams }: Props) => {
  const sp = await searchParams;
  const pageSize = 10;
  let rawStatus = !sp?.status ? "ALL" : sp!.status;
  let issuePage = !sp?.page ? 1 : parseInt(sp.page);
  let issues, issueCount;
  if (rawStatus === "ALL") {
    issueCount = await prisma.issue.count();
    if (issuePage > Math.ceil(issueCount / pageSize)) issuePage = 1;
    issues = await prisma.issue.findMany({
      skip: (issuePage - 1) * pageSize,
      take: pageSize,
    });
  } else {
    issueCount = await prisma.issue.count({ where: { status: rawStatus } });
    if (issuePage > Math.ceil(issueCount / pageSize)) issuePage = 1;
    issues = await prisma.issue.findMany({
      where: { status: rawStatus },
      skip: (issuePage - 1) * pageSize,
      take: pageSize,
    });
  }
  return (
    <>
      <div className="mb-3">
        <div className="mb-5">
          <IssueButton />
        </div>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Status
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Created
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {issues.map((issue) => {
              return (
                <Table.Row key={issue.id}>
                  <Table.Cell>
                    <Link href={`/issues/${issue.id}`} label={issue.title} />
                    <div className="block md:hidden">
                      <IssueStatusBadge status={issue.status} />
                    </div>
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    <IssueStatusBadge status={issue.status} />
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    {issue.createdAt.toDateString()}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </div>
      <Pagination
        totalIssues={issueCount}
        issuesPerPage={pageSize}
        currentPage={issuePage}
      />
    </>
  );
};

export const dynamic = "force-dynamic";

export default PageFile;
