import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, website } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    // Send to Telegram (Navigator gets notified instantly)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    const message = `🚀 NEW LEAD — ohanaworkflow.com\n\n👤 Name: ${name}\n🏢 Company: ${company || "not provided"}\n📧 Email: ${email}\n🌐 Website: ${website || "not provided"}\n\n⏰ ${new Date().toLocaleString("en-CA", { timeZone: "America/Vancouver" })} PST`;

    if (telegramToken && telegramChatId) {
      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: telegramChatId, text: message }),
      });
    }

    // Also forward to n8n webhook when it's live
    const n8nWebhook = process.env.N8N_LEAD_WEBHOOK;
    if (n8nWebhook) {
      await fetch(n8nWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, website, source: "ohanaworkflow.com", timestamp: new Date().toISOString() }),
      }).catch(() => {}); // non-blocking
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
