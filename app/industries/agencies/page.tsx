import IndustryPage from "../../components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Agencies & Consultants — OhanaWorkflow",
  description: "Automate proposal workflows, project handoffs, reporting, and client communication. Scale your agency without scaling your overhead.",
};

export default function AgenciesPage() {
  return (
    <IndustryPage
      industry="Agencies & Consultants"
      headline="More clients shouldn't mean"
      subheadline="more chaos."
      heroDescription="We build AI automation systems that handle proposals, project handoffs, client reporting, and communication — so your agency can scale without the operational overhead."
      stats={[
        { value: "60%", label: "faster proposal turnaround" },
        { value: "0", label: "dropped handoffs between teams" },
        { value: "15h", label: "saved per week on reporting" },
        { value: "100%", label: "consistent client communication" },
      ]}
      painPoints={[
        { title: "Proposals take forever to assemble", desc: "Every proposal is built from scratch. Pulling case studies, pricing, and scope details from different docs. It takes days instead of hours." },
        { title: "Project handoffs are a mess", desc: "Sales closes the deal, then hands a brief to the delivery team. Context gets lost. Scope creep starts immediately." },
        { title: "Client reporting eats Monday mornings", desc: "Pulling data from Google Analytics, ad platforms, CRM, and project tools. Formatting into a presentable report. Every. Single. Week." },
        { title: "Client communication is inconsistent", desc: "Some clients get weekly updates. Others get radio silence. No system ensures everyone feels informed." },
        { title: "Time tracking is always behind", desc: "Consultants forget to log time. End-of-month reconciliation is painful. Profitability insights are always late." },
        { title: "Onboarding new clients is chaotic", desc: "Every new client requires setting up tools, access, folders, kickoff meetings, and intake forms. Steps get missed." },
      ]}
      workflows={[
        {
          title: "AI-Assisted Proposal Generation",
          desc: "Generate polished proposals in minutes — pulling from templates, case studies, and pricing automatically.",
          before: "2-3 days to assemble a proposal. Copy-pasting from old docs. Inconsistent formatting.",
          after: "AI drafts proposal from intake form. Pulls relevant case studies. Ready for review in 30 minutes.",
        },
        {
          title: "Seamless Project Handoff",
          desc: "Every detail from sales flows into project management — automatically, completely, consistently.",
          before: "Sales sends a Slack message and a PDF. Delivery team asks 10 follow-up questions. Scope unclear.",
          after: "Closed deal triggers automatic project setup: brief, timeline, resource allocation, and kickoff agenda.",
        },
        {
          title: "Automated Client Reporting",
          desc: "Pull data from all your platforms, format it beautifully, and send it to clients — on autopilot.",
          before: "5+ hours per week per client pulling data, making charts, formatting reports. Delivered late.",
          after: "Data auto-pulled from all sources. Report generated and sent every Monday at 9 AM. Zero manual effort.",
        },
        {
          title: "Client Onboarding Autopilot",
          desc: "From signed contract to fully onboarded client — every step automated and tracked.",
          before: "Manual checklist: create folders, grant access, schedule kickoff, send intake form. Steps get missed.",
          after: "Contract signed triggers full sequence: access provisioned, folders created, intake sent, kickoff scheduled.",
        },
      ]}
    />
  );
}
