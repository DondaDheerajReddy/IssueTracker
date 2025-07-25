"use client";

import { Issue, User } from "@/app/generated/prisma";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AssigneSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

  if (error) return null;
  if (isLoading) return <Skeleton />;

  return (
    <Select.Root
      defaultValue={issue.assignedToUserId || "none"}
      onValueChange={(userId) => {
        axios.patch("/api/issues/" + issue.id, {
          assignedToUserId: userId === "none" ? null : userId,
        });
      }}
    >
      <Select.Trigger placeholder="Assign Issue" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="none">Unassign Issue</Select.Item>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneSelect;
