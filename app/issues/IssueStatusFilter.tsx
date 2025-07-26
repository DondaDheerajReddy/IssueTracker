"use client";

import { Select } from "@radix-ui/themes";
import React from "react";
import { Status } from "../generated/prisma";

const list: { value?: Status; label: string }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by status" />
      <Select.Content>
        {list.map((item) => (
          <Select.Item key={item.value || "all"} value={item.value || "all"}>
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
