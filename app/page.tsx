import IssuesSummery from "./IssuesSummery";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  return <IssuesSummery open={7} inProgress={7} closed={6} />;
}
