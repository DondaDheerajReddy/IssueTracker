"use client";
import { schema } from "@/app/api/issues/schema";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@/app/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import { z } from "zod";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => <Skeleton height="21rem" className="mb-10" />,
});

type IssueFormData = z.infer<typeof schema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (issue) {
        await axios.patch("/api/issues/" + issue.id, data);
      } else {
        await axios.post("/api/issues", data);
      }
      router.push("/issues");
      router.refresh();
      setIsSubmitted(true);
    } catch (e) {
      setError("An unexpected error has occured");
      setIsSubmitted(false);
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3 mt-3" onSubmit={onSubmit}>
        <TextField.Root
          defaultValue={issue?.title}
          placeholder="Title"
          {...register("title")}
        ></TextField.Root>
        {errors.title && (
          <Text color="red" as="p">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          defaultValue={issue?.description}
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Type your description here..." {...field} />
          )}
        />
        {errors.description && (
          <Text color="red" as="p">
            {errors.description.message}
          </Text>
        )}
        <Button disabled={isSubmitted}>
          {issue ? "Update Issue" : "Submit New Issue"}{" "}
          {isSubmitted && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
