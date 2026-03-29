import IndustryPage from "../../components/IndustryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Healthcare & Clinics — OhanaWorkflow",
  description: "Automate patient intake, appointment reminders, referral tracking, and document processing. Save your clinic 20+ hours per week with custom AI workflows.",
};

export default function HealthcarePage() {
  return (
    <IndustryPage
      industry="Healthcare & Clinics"
      headline="Your clinic runs on paperwork."
      subheadline="It doesn't have to."
      heroDescription="We build AI automation systems that handle patient intake, appointment scheduling, referral tracking, and document processing — so your staff can focus on patient care."
      stats={[
        { value: "4.5h", label: "saved daily per staff member" },
        { value: "90s", label: "average lead response time" },
        { value: "70%", label: "reduction in no-shows" },
        { value: "200+", label: "documents processed monthly" },
      ]}
      painPoints={[
        { title: "Patient intake is still on paper", desc: "Patients fill out forms by hand. Staff re-enters the same data into your EHR. Errors slip through, and it wastes everyone's time." },
        { title: "Appointment no-shows cost you thousands", desc: "Without automated reminders and confirmations, patients forget. Every empty slot is lost revenue your clinic can't recover." },
        { title: "Referral tracking falls through cracks", desc: "Referrals get lost between fax machines, emails, and sticky notes. Patients wait. Specialists never get the info they need." },
        { title: "Insurance verification is a manual nightmare", desc: "Staff spend hours on the phone verifying coverage before appointments. It's tedious, error-prone, and delays care." },
        { title: "After-hours inquiries go unanswered", desc: "Patients call or message outside business hours. By the time someone responds, they've already booked elsewhere." },
        { title: "Reporting takes all Monday morning", desc: "Pulling together weekly metrics from multiple systems eats into time that should be spent on operations." },
      ]}
      workflows={[
        {
          title: "Automated Patient Intake",
          desc: "Digital forms that feed directly into your EHR — no manual data entry required.",
          before: "Patient fills paper form. Staff re-types into EHR. 15 minutes per patient, errors common.",
          after: "Patient completes digital form on their phone. Data flows into EHR automatically. Zero manual entry.",
        },
        {
          title: "Smart Appointment Reminders",
          desc: "Multi-channel reminders that reduce no-shows by up to 70%.",
          before: "Staff manually calls patients. Some get missed. No-show rate: 20-30%.",
          after: "Automated SMS, email, and voice reminders. Easy reschedule links. No-show rate drops to under 10%.",
        },
        {
          title: "Referral Tracking & Follow-up",
          desc: "End-to-end referral management from the moment a referral is made to appointment completion.",
          before: "Referrals sent by fax. No tracking. Patients fall through the cracks.",
          after: "Digital referral routing with status tracking, automated follow-ups, and completion confirmation.",
        },
        {
          title: "After-Hours AI Response",
          desc: "An AI assistant that handles patient inquiries 24/7 — scheduling, FAQs, and triage.",
          before: "Voicemail after 5 PM. Patients call competitors who answer.",
          after: "AI chatbot answers instantly, books appointments, and escalates urgent cases to on-call staff.",
        },
      ]}
    />
  );
}
