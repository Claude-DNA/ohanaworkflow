import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { LeadStatus } from "@/app/generated/prisma/enums";

export async function GET(req: NextRequest) {
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey || apiKey !== process.env.API_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const statusParam = req.nextUrl.searchParams.get("status");
  const where = statusParam ? { status: statusParam as LeadStatus } : {};

  const leads = await prisma.lead.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ leads });
}
