import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { LeadStatus } from "@/app/generated/prisma/enums";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(req: NextRequest, context: RouteContext) {
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey || apiKey !== process.env.API_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const lead = await prisma.lead.findUnique({
    where: { id },
    select: { id: true, status: true, sequenceStep: true, contactedAt: true, closedAt: true },
  });

  if (!lead) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json(lead);
}

export async function PATCH(req: NextRequest, context: RouteContext) {
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey || apiKey !== process.env.API_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const body = await req.json();
  const { status, sequenceStep, contactedAt, closedAt, closedReason } = body;

  const data: Record<string, unknown> = {};
  if (status !== undefined) data.status = status as LeadStatus;
  if (sequenceStep !== undefined) data.sequenceStep = sequenceStep;
  if (contactedAt !== undefined) data.contactedAt = new Date(contactedAt);
  if (closedAt !== undefined) data.closedAt = new Date(closedAt);
  if (closedReason !== undefined) data.closedReason = closedReason;

  try {
    const lead = await prisma.lead.update({ where: { id }, data });
    return NextResponse.json(lead);
  } catch {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }
}
