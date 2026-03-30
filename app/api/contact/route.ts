import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, website } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    // Determine after-hours (before 6am or after 8pm PST)
    const pstHour = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "numeric",
      hour12: false,
    });
    const afterHours = parseInt(pstHour) < 6 || parseInt(pstHour) >= 20;

    // Dedup: if same email submitted in last 24h, return existing lead
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const existing = await prisma.lead.findFirst({
      where: {
        email,
        createdAt: { gte: oneDayAgo },
      },
      orderBy: { createdAt: "desc" },
    });

    if (existing) {
      return NextResponse.json({ success: true, leadId: existing.id, deduplicated: true });
    }

    // Save lead to DB (blocking)
    const lead = await prisma.lead.create({
      data: { name, company, email, website, afterHours },
    });

    // Fire async notifications (non-blocking)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    const n8nWebhook = process.env.N8N_LEAD_WEBHOOK;

    const asyncTasks: Promise<unknown>[] = [];

    if (telegramToken && telegramChatId) {
      const hoursIndicator = afterHours ? "🌙 AFTER HOURS" : "☀️ Business hours";
      const message = `🚀 NEW LEAD — ohanaworkflow.com\n\n👤 Name: ${name}\n🏢 Company: ${company || "not provided"}\n📧 Email: ${email}\n🌐 Website: ${website || "not provided"}\n${hoursIndicator}\n\n⏰ ${new Date().toLocaleString("en-CA", { timeZone: "America/Vancouver" })} PST`;

      asyncTasks.push(
        fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: telegramChatId, text: message }),
        }).catch(() => {})
      );
    }

    if (n8nWebhook) {
      asyncTasks.push(
        fetch(n8nWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadId: lead.id,
            name,
            company,
            email,
            website,
            afterHours,
            source: "ohanaworkflow.com",
            timestamp: new Date().toISOString(),
          }),
        }).catch(() => {})
      );
    }

    // Non-blocking — don't await completion before responding
    Promise.allSettled(asyncTasks);

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
