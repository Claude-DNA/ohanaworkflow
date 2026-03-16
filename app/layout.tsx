import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ohana Workflow — AI Automation for Clinics",
  description: "We build AI-powered front desk systems for dental, physio, and wellness clinics in Vancouver. Stop losing patients to missed calls and slow response times.",
  openGraph: {
    title: "Ohana Workflow — AI Automation for Clinics",
    description: "Stop losing patients to missed calls. We automate your front desk with AI.",
    url: "https://ohanaworkflow.com",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
