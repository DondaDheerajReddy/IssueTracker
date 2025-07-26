import React from "react";
import { Button, Flex, Text } from "@radix-ui/themes";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

interface Props {
  totalIssues: number;
  issuesPerPage: number;
  currentPage: number;
}

const Pagination = ({ totalIssues, issuesPerPage, currentPage }: Props) => {
  const pageCount = Math.ceil(totalIssues / issuesPerPage);
  if (pageCount <= 1) return null;
  return (
    <Flex align="center" gap="2">
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </Button>
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Button color="gray" variant="soft" disabled={currentPage === pageCount}>
        <DoubleArrowRightIcon />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === pageCount}>
        <ChevronRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
