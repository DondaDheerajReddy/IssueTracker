"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const handleClick = () => {
    async () => {
      try {
        await axios.delete("/api/issues/" + issueId);
        router.push("/issues");
        router.refresh();
      } catch (error) {
        setError(true);
      }
    };
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Delete Issue</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure you want to delete the issue? This action cannot be
            undone.
          </AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={handleClick}>
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This issue cannot be deleted.
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            mt="2"
            onClick={() => setError(false)}
          >
            OK
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
