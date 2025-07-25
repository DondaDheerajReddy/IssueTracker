import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import {schema} from "./schema";
import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";

// Post an Issue
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      { error: "User Authentication required" },
      { status: 401 }
    );
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
