import IndustryPage from "../../components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Legal & Professional Services — OhanaWorkflow",
  description: "Automate client onboarding, document review, billing, and deadline tracking. Save your firm 20+ hours per week with custom AI workflows.",
};

export default function LegalPage() {
  return (
    <IndustryPage
      industry="Legal & Professional Services"
      headline="Your team bills by the hour."
      subheadline="Stop wasting it on admin."
      heroDescription="We build AI automation systems that handle client intake, document review, billing workflows, and deadline tracking — so your team can focus on billable work."
      stats={[
        { value: "20h", label: "saved per week per team" },
        { value: "10s", label: "to extract key contract terms" },
        { value: "60%", label: "faster client onboarding" },
        { value: "$0", label: "missed deadline penalties" },
      ]}
      painPoints={[
        { title: "Client intake is slow and manual", desc: "New clients fill out forms, email documents, and wait for someone to manually set up their matter. First impressions suffer." },
        { title: "Document review takes forever", desc: "Paralegals spend hours reviewing contracts for key terms, deadlines, and red flags that AI could flag in seconds." },
        { title: "Deadline tracking relies on memory", desc: "Statute of limitations, filing deadlines, discovery windows — tracked in calendars and spreadsheets. One miss is malpractice." },
        { title: "Billing and time entry is a bottleneck", desc: "Attorneys forget to log time. Invoices go out late. Collections require manual follow-up." },
        { title: "Conflict checks are tedious", desc: "Before taking a new client, someone manually searches every past matter. It's slow and error-prone." },
        { title: "Communication with clients is inconsistent", desc: "Some clients get weekly updates. Others hear nothing for weeks. No system ensures consistent touchpoints." },
      ]}
      workflows={[
        {
          title: "Automated Client Intake & Onboarding",
          desc: "From initial inquiry to fully onboarded client — digital, automated, and professional.",
          before: "Client emails docs. Staff manually creates matter, sets up folders, sends engagement letter. Takes 2-3 days.",
          after: "Client completes digital intake. Matter auto-created, docs filed, engagement letter sent. Done in hours.",
        },
        {
          title: "AI-Powered Document Review",
          desc: "Extract key terms, flag risks, and summarize contracts in seconds instead of hours.",
          before: "Paralegal reads 40-page contract line by line. Key terms logged manually. Takes 2-3 hours.",
          after: "AI extracts dates, obligations, red flags, and key terms in under 10 seconds. Human reviews summary.",
        },
        {
          title: "Smart Deadline & Calendar Management",
          desc: "Every deadline tracked, calculated, and escalated automatically — across all active matters.",
          before: "Deadlines entered manually into calendar. Reminders depend on whoever set them. Risk of malpractice.",
          after: "Deadlines auto-calculated from filing dates. Escalating reminders sent to responsible attorney and backup.",
        },
        {
          title: "Automated Billing & Collections",
          desc: "Time entries prompted, invoices generated, and follow-ups sent — all without manual intervention.",
          before: "End-of-month scramble to reconstruct time entries. Invoices sent late. Collections require manual emails.",
          after: "Daily time entry prompts. Auto-generated invoices on schedule. Smart collection sequences for overdue accounts.",
        },
      ]}
    />
  );
}
