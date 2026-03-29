import IndustryPage from "../../components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for E-Commerce & Retail — OhanaWorkflow",
  description: "Automate order processing, inventory sync, customer support, and review management. Scale your store without scaling your team.",
};

export default function EcommercePage() {
  return (
    <IndustryPage
      industry="E-Commerce & Retail"
      headline="You're scaling orders,"
      subheadline="not your operations."
      heroDescription="We build AI automation systems that handle order processing, inventory management, customer support triage, and review collection — so you can grow without the growing pains."
      stats={[
        { value: "42%", label: "of support tickets auto-resolved" },
        { value: "0", label: "oversold products" },
        { value: "3x", label: "faster order processing" },
        { value: "5h", label: "saved daily on manual tasks" },
      ]}
      painPoints={[
        { title: "Inventory gets out of sync", desc: "You sell on Shopify, Amazon, and your own site. A product sells out on one channel but stays live on the others. Oversells and angry customers follow." },
        { title: "Customer support can't keep up", desc: "Where's my order? How do I return this? The same questions, over and over. Your team drowns in tickets instead of solving real problems." },
        { title: "Order processing has too many manual steps", desc: "Orders come in from multiple channels. Someone has to consolidate, check inventory, create shipping labels, and update tracking — manually." },
        { title: "Reviews and feedback go uncollected", desc: "Happy customers don't leave reviews unless you ask. And you never ask because there's no system." },
        { title: "Returns and exchanges are a headache", desc: "Every return requires manual inspection, inventory update, refund processing, and customer communication." },
        { title: "Marketing campaigns run behind schedule", desc: "Product launches, sales, and email campaigns require coordination across tools. Someone always drops the ball." },
      ]}
      workflows={[
        {
          title: "Multi-Channel Inventory Sync",
          desc: "Real-time inventory updates across all your sales channels — Shopify, Amazon, WooCommerce, and more.",
          before: "Manual inventory counts. Oversells happen weekly. Staff spends hours reconciling numbers.",
          after: "Single source of truth synced in real-time. Low stock alerts. Auto-pause listings when inventory hits zero.",
        },
        {
          title: "AI Customer Support Triage",
          desc: "An AI assistant that handles common questions instantly and routes complex issues to the right team member.",
          before: "Every ticket goes to the same inbox. Simple questions wait behind complex issues. Response time: 12+ hours.",
          after: "AI answers FAQs instantly (tracking, returns, sizing). Complex issues auto-routed to specialists. Avg response: 2 minutes.",
        },
        {
          title: "Automated Order Processing",
          desc: "From order received to shipped — consolidated, verified, and tracked across all channels.",
          before: "Orders from 3 channels copied into one system. Labels created manually. Tracking sent by hand.",
          after: "Orders auto-consolidated. Labels generated. Tracking numbers sent to customers. All channels updated.",
        },
        {
          title: "Smart Review Collection",
          desc: "Automated post-purchase sequences that turn happy customers into 5-star reviews.",
          before: "No systematic review collection. Review rate: under 2%. Occasional manual email blast.",
          after: "Timed post-delivery emails with one-click review links. Review rate jumps to 8-12%. Negative feedback routed privately.",
        },
      ]}
    />
  );
}
