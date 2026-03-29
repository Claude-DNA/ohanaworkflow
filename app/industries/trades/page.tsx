import IndustryPage from "../../components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Trades & Home Services — OhanaWorkflow",
  description: "Automate job scheduling, quote follow-ups, invoice generation, and after-hours lead capture. Grow your trades business without more office staff.",
};

export default function TradesPage() {
  return (
    <IndustryPage
      industry="Trades & Home Services"
      headline="Your best leads call"
      subheadline="when you can't answer."
      heroDescription="We build AI automation systems that capture leads 24/7, send instant quotes, schedule jobs, and handle invoicing — so you can focus on the work that pays."
      stats={[
        { value: "24/7", label: "lead capture, even after hours" },
        { value: "90s", label: "quote follow-up time" },
        { value: "30%", label: "increase in booked jobs" },
        { value: "10h", label: "saved per week on admin" },
      ]}
      painPoints={[
        { title: "After-hours leads go to voicemail", desc: "A homeowner needs emergency plumbing at 8 PM. They call you, get voicemail, and call the next guy on Google. You lost the job." },
        { title: "Quote follow-ups don't happen", desc: "You send a quote and wait. No follow-up system. The customer goes with whoever follows up first." },
        { title: "Scheduling is a whiteboard and a prayer", desc: "Jobs tracked on paper, whiteboards, or basic calendars. Double-bookings, missed appointments, and wasted drive time." },
        { title: "Invoicing happens weeks late", desc: "The job is done but the invoice doesn't go out for days or weeks. Cash flow suffers." },
        { title: "No system for repeat business", desc: "You did great work 6 months ago. The customer forgot your name. No system to stay top of mind." },
        { title: "Review collection is nonexistent", desc: "Happy customers don't leave Google reviews unless prompted. Your competitors have more reviews because they ask." },
      ]}
      workflows={[
        {
          title: "24/7 AI Lead Capture",
          desc: "Never miss a lead again — AI answers calls, texts, and web inquiries around the clock.",
          before: "Missed calls go to voicemail. Website form checked once a day. Leads lost to competitors.",
          after: "AI responds to every inquiry instantly. Collects job details, schedules estimates, and notifies your team.",
        },
        {
          title: "Automated Quote Follow-Up",
          desc: "Smart follow-up sequences that turn sent quotes into booked jobs.",
          before: "Quote sent. No follow-up. Customer goes with competitor who checked in.",
          after: "Automated follow-ups at 24h, 3 days, and 7 days. Personalized messages. Booking rate jumps 30%.",
        },
        {
          title: "Smart Job Scheduling & Dispatch",
          desc: "Optimized scheduling that considers location, skills, and availability.",
          before: "Dispatcher juggles spreadsheets and phone calls. Double-bookings happen. Drive time wasted.",
          after: "AI-optimized scheduling. Route planning. Automatic customer notifications. Real-time crew updates.",
        },
        {
          title: "Instant Invoicing & Payment",
          desc: "Job complete? Invoice sent automatically with online payment link.",
          before: "Technician finishes job. Invoice created days later in office. Payment collected weeks after.",
          after: "Job marked complete triggers instant invoice with payment link. Average collection time drops from weeks to days.",
        },
      ]}
    />
  );
}
