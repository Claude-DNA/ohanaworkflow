import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OhanaWorkflow — AI Automation for Any Business",
  description:
    "We build custom AI automation systems that save your team 20+ hours per week. Intelligent workflows for operations, sales, support, and more. Based in Vancouver, BC.",
  openGraph: {
    title: "OhanaWorkflow — AI Automation for Any Business",
    description: "Custom AI automation systems that save your team 20+ hours per week.",
    url: "https://ohanaworkflow.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-white text-neural-700 antialiased font-sans">{children}</body>
    </html>
  );
}
