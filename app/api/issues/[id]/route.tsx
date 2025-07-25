import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { patchIssueSchema } from "../schema";
import { getServerSession } from "next-auth";
import authOptions from "../../auth/authOptions";
import { error } from "console";

interface Props {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      { error: "User Authentication required" },
      { status: 401 }
    );
  const { id } = await params;
  const body = await request.json();
  const { title, description, assignedToUserId } = body;
  const validation = patchIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });
  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user)
      return NextResponse.json({ error: "Invalid user" }, { status: 400 });
  }

  const updatedIssue = await prisma.issue.update({
    where: { id: parseInt(id) },
    data: {
      title,
      description,
      assignedToUserId,
    },
  });
  return NextResponse.json(updatedIssue, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      { error: "User Authentication required" },
      { status: 401 }
    );
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });
  await prisma.issue.delete({
    where: { id: parseInt(id) },
  });
  return NextResponse.json({});
}
