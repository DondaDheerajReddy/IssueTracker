import { Metadata } from "next";
import IssueForm from "../_components/IssueForm";

const NewIssuePage = () => {
  return <IssueForm />;
};

export const metadata: Metadata = {
  title: "New Issue",
  description: "Create a new Issue",
};

export default NewIssuePage;
