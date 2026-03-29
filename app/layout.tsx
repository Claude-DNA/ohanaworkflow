import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="en" className={inter.variable}>
      <body className="bg-neural-50 text-neural-800 antialiased font-sans">{children}</body>
    </html>
  );
}
