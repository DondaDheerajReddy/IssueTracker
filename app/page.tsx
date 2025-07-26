import Pagination from "./Pagination";

interface Props {
  searchParams: Promise<{
    page: string;
  }>;
}

export default async function Home({ searchParams }: Props) {
  const sp = await searchParams;
  return (
    <div>
      <Pagination
        totalIssues={100}
        issuesPerPage={10}
        currentPage={parseInt(sp.page)}
      />
    </div>
  );
}
