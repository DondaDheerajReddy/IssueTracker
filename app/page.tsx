import Pagination from "./Pagination";

export default function Home() {
  return (
    <div>
      <Pagination totalIssues={100} issuesPerPage={10} currentPage={2} />
    </div>
  );
}
