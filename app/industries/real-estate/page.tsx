import IndustryPage from "../../components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Real Estate — OhanaWorkflow",
  description: "Automate lead follow-up, listing updates, contract workflows, and client nurture sequences. Never miss a lead again with custom AI workflows.",
};

export default function RealEstatePage() {
  return (
    <IndustryPage
      industry="Real Estate"
      headline="Every minute you wait,"
      subheadline="someone else closes the deal."
      heroDescription="We build AI automation systems that capture and qualify leads instantly, keep listings updated across platforms, and automate the entire contract-to-close workflow."
      stats={[
        { value: "9x", label: "higher conversion with instant response" },
        { value: "5min", label: "lead response vs. industry avg of 47h" },
        { value: "15h", label: "saved per agent per week" },
        { value: "3x", label: "more leads handled per agent" },
      ]}
      painPoints={[
        { title: "Leads go cold before you respond", desc: "A new lead comes in from Zillow at 9 PM. You see it Monday morning. By then, three other agents have already called." },
        { title: "Listing updates are a copy-paste nightmare", desc: "Price change? New photos? You're updating the same listing across MLS, Zillow, Realtor.com, and your website — manually." },
        { title: "Follow-up sequences are inconsistent", desc: "Some leads get 5 touches. Some get 1. Without a system, nurture depends on memory and motivation." },
        { title: "Transaction coordination is chaos", desc: "Contracts, inspections, appraisals, lender docs — all tracked in different places by different people." },
        { title: "CRM data entry eats your evenings", desc: "After every showing, you're manually logging notes, updating statuses, and tagging contacts." },
        { title: "Open house follow-up is an afterthought", desc: "You collect sign-in sheets but follow-up happens days later — if it happens at all." },
      ]}
      workflows={[
        {
          title: "Instant Lead Response & Qualification",
          desc: "AI responds to every lead in under 90 seconds — qualifying, scoring, and routing them to the right agent.",
          before: "Lead submits form. Agent sees it hours later. Manual qualification call attempted next day.",
          after: "AI responds instantly via text/email. Qualifies based on criteria. Hot leads get immediate agent notification.",
        },
        {
          title: "Multi-Platform Listing Sync",
          desc: "Update a listing once and it propagates everywhere — MLS, portals, social, and your website.",
          before: "Price change = 4 manual updates across platforms. Photos uploaded separately to each.",
          after: "Single update in your CRM pushes changes to all platforms simultaneously. Zero manual work.",
        },
        {
          title: "Automated Nurture Sequences",
          desc: "Personalized drip campaigns that keep your pipeline warm without lifting a finger.",
          before: "Sporadic manual emails. Most leads go cold after first contact.",
          after: "Smart sequences based on lead behavior — property views, price drops, new listings. Always relevant.",
        },
        {
          title: "Transaction Coordination Autopilot",
          desc: "From accepted offer to closing — every deadline, document, and party tracked automatically.",
          before: "Spreadsheets, sticky notes, and frantic emails to coordinate inspections, appraisals, and closing.",
          after: "Automated timeline with milestone tracking, document collection, and deadline alerts for all parties.",
        },
      ]}
    />
  );
}
