import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ohana Workflow — AI Automation Agency",
  description: "We build custom AI automation systems that save your team 20+ hours per week. Intelligent workflows for operations, sales, support, and more.",
  openGraph: {
    title: "Ohana Workflow — AI Automation Agency",
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
