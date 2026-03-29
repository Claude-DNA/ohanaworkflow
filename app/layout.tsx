import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OhanaWorkflow — AI Automation for Any Business",
  description: "We build custom AI automation systems that save your team 20+ hours per week. Intelligent workflows for operations, sales, support, and more. Based in Vancouver, BC.",
  openGraph: {
    title: "OhanaWorkflow — AI Automation for Any Business",
    description: "Custom AI automation systems that save your team 20+ hours per week.",
    url: "https://ohanaworkflow.com",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
