"use client";
import { useState } from "react";
import ROICalculator from "./components/ROICalculator";
import ActivityFeed from "./components/ActivityFeed";

const INDUSTRIES = [
  {
    slug: "healthcare",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Healthcare & Clinics",
    desc: "Patient intake, appointment reminders, referral tracking, and document processing.",
    href: "/industries/healthcare",
  },
  {
    slug: "real-estate",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Real Estate",
    desc: "Lead follow-up, listing updates, contract workflows, and client nurture on autopilot.",
    href: "/industries/real-estate",
  },
  {
    slug: "legal",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>
    ),
    title: "Legal & Professional",
    desc: "Client onboarding, document review, billing automation, and deadline tracking.",
    href: "/industries/legal",
  },
  {
    slug: "ecommerce",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
    title: "E-Commerce & Retail",
    desc: "Order processing, inventory sync, customer support triage, and review management.",
    href: "/industries/ecommerce",
  },
  {
    slug: "trades",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: "Trades & Home Services",
    desc: "Job scheduling, quote follow-ups, invoice generation, and after-hours lead capture.",
    href: "/industries/trades",
  },
  {
    slug: "agencies",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: "Agencies & Consultants",
    desc: "Proposal workflows, project handoffs, reporting dashboards, and client comms.",
    href: "/industries/agencies",
  },
];

export default function Home() {
  const [formState, setFormState] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [formData, setFormData] = useState({ name: "", company: "", email: "", website: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setFormState("success");
      else setFormState("error");
    } catch {
      setFormState("error");
    }
  };

  return (
    <main className="min-h-screen bg-void text-neural-800">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 nav-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-white">
            Ohana<span className="gradient-text">Workflow</span>
          </span>
          <div className="flex items-center gap-6">
            <a href="#how" className="hidden sm:block text-sm text-neural-500 hover:text-accent-blue transition">How it works</a>
            <a href="#industries" className="hidden sm:block text-sm text-neural-500 hover:text-accent-blue transition">Industries</a>
            <a href="#pricing" className="hidden sm:block text-sm text-neural-500 hover:text-accent-blue transition">Pricing</a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 text-white px-5 py-2 rounded-xl text-sm font-semibold transition shadow-lg shadow-accent-blue/20"
            >
              Book Free Audit
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-gradient relative pt-44 pb-36 px-6 overflow-hidden">
        {/* Gradient mesh */}
        <div className="gradient-mesh" />
        {/* Neural particle field */}
        <div className="neural-particles" />
        <div className="node-field">
          <div className="node" /><div className="node" /><div className="node" /><div className="node" />
          <div className="node" /><div className="node" /><div className="node" /><div className="node" />
          <div className="node" /><div className="node" /><div className="node" /><div className="node" />
          <div className="node-line" /><div className="node-line" /><div className="node-line" /><div className="node-line" />
          <div className="node-line" /><div className="node-line" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
            <span className="text-sm font-medium text-neural-500">AI Automation Agency &middot; Vancouver, BC</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 text-white tracking-tight">
            Your team is doing work<br />
            <span className="gradient-text">a machine should handle.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neural-500 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
            We build custom AI automation systems that save your team 20+ hours per week.
            Intelligent workflows for operations, sales, support, and everything in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition glow-pulse"
            >
              Get Your Free Workflow Audit
            </a>
            <a
              href="#how"
              className="glass-card hover:border-accent-blue/20 text-neural-700 px-10 py-5 rounded-2xl font-semibold text-lg transition"
            >
              See How It Works
            </a>
          </div>
          <p className="text-neural-500 text-sm mt-8 font-light">No obligation. 15-minute call. We show you exactly where you&apos;re losing time.</p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider gradient-text">The Problem</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-white">Sound familiar?</h2>
            <p className="text-neural-500 max-w-xl mx-auto font-light">These are the workflow leaks we find in almost every business we audit.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                ),
                title: "Manual data entry eating your day",
                desc: "Your team copies data between apps, updates spreadsheets by hand, and reformats the same info across systems.",
                stat: "Teams spend an average of 4.5 hours/day on repetitive manual tasks"
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                ),
                title: "Leads slip through the cracks",
                desc: "A prospect fills out your form Friday evening. Nobody follows up until Monday. By then, they've signed with your competitor.",
                stat: "Leads contacted within 5 minutes are 9x more likely to convert"
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                ),
                title: "No one's working after hours",
                desc: "Customers reach out at 9 PM. Support requests pile up over the weekend. Every hour without a response is revenue walking out the door.",
                stat: "64% of customers expect real-time responses regardless of business hours"
              }
            ].map((item, i) => (
              <div key={i} className="glass-card-solid rounded-2xl p-8 group holo-card">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-5 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent-blue transition">{item.title}</h3>
                <p className="text-neural-500 mb-5 leading-relaxed font-light">{item.desc}</p>
                <p className="text-sm font-medium gradient-text border-t border-white/5 pt-4">{item.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-32 px-6 section-alt">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider gradient-text">The Process</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-white">How it works</h2>
            <p className="text-neural-500 font-light">We plug AI into your existing tools — not replace them.</p>
          </div>
          <div className="space-y-6">
            {[
              { step: "01", title: "Free 15-min workflow audit", desc: "We map your current processes, identify bottlenecks, and show you exactly where automation will save the most time. No obligation." },
              { step: "02", title: "We build your custom system", desc: "In 1-3 weeks, we deploy AI automations tailored to your business: lead routing, data sync, document processing, customer follow-ups, and more." },
              { step: "03", title: "Your team gets hours back", desc: "Repetitive work disappears. Leads get instant responses. Data flows between your tools automatically. Your team focuses on work that actually matters." },
            ].map((item, i) => (
              <div key={i} className="glass-card-solid rounded-2xl p-8 flex gap-6 group holo-card step-connector">
                <div className="text-5xl font-bold gradient-text shrink-0 opacity-50 group-hover:opacity-100 transition">{item.step}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-neural-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider gradient-text">Who We Help</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-white">Industries we serve</h2>
            <p className="text-neural-500 max-w-xl mx-auto font-light">AI automation works for any business with repeatable processes. Here are a few we know inside out.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((item, i) => (
              <a key={i} href={item.href} className="glass-card-solid rounded-2xl p-8 group block holo-card">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-accent-blue transition">{item.title}</h3>
                <p className="text-neural-500 text-sm leading-relaxed font-light mb-3">{item.desc}</p>
                <span className="text-sm font-medium gradient-text inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE AUTOMATE */}
      <section className="py-32 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider gradient-text">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-white">What we automate</h2>
            <p className="text-neural-500 font-light">If it&apos;s repetitive, rule-based, or time-consuming — we can probably automate it.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                ),
                title: "Lead Response",
                desc: "Instant follow-up, qualification, and routing"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                ),
                title: "Document Processing",
                desc: "Extract, classify, and route documents with AI"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                ),
                title: "App Integrations",
                desc: "Connect your CRM, email, Slack, and 200+ tools"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
                title: "Reporting",
                desc: "Auto-generated dashboards and status updates"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                ),
                title: "Customer Support",
                desc: "AI chatbots and intelligent ticket routing"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                ),
                title: "Email Workflows",
                desc: "Smart sequences, parsing, and auto-replies"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                ),
                title: "Onboarding",
                desc: "Automated client and employee onboarding flows"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                  </svg>
                ),
                title: "Data Sync",
                desc: "Keep all your systems in sync, automatically"
              },
            ].map((item, i) => (
              <div key={i} className="glass-card-solid rounded-2xl p-6 group holo-card">
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1.5 text-white">{item.title}</h3>
                <p className="text-neural-500 text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider gradient-text">Pricing</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-white">Simple, clear packages</h2>
            <p className="text-neural-500 font-light">No surprise costs. No long-term lock-in. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$2,500",
                period: "one-time setup",
                desc: "For teams that want to automate their first workflow and see results fast.",
                features: ["1 custom automation workflow", "Up to 3 app integrations", "AI chatbot or lead capture", "Setup in 5 business days", "30 days of support"],
                cta: "Get Started",
                highlight: false
              },
              {
                name: "Growth",
                price: "$5,000",
                period: "setup + $499/mo",
                desc: "For businesses ready to automate multiple workflows across their operations.",
                features: ["Everything in Starter", "Up to 5 automation workflows", "Unlimited app integrations", "AI document processing", "Lead qualification & routing", "Monthly optimization & support"],
                cta: "Book a Call",
                highlight: true
              },
              {
                name: "Scale",
                price: "Custom",
                period: "tailored to your needs",
                desc: "For companies that want a fully automated operations layer.",
                features: ["Everything in Growth", "Unlimited workflows", "Custom AI model training", "CRM & ERP integration", "Team training included", "Dedicated account manager"],
                cta: "Let's Talk",
                highlight: false
              }
            ].map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-8 transition-all duration-500 ${
                pkg.highlight
                  ? "bg-void-card pricing-highlight shadow-2xl shadow-accent-blue/10 scale-[1.03] relative"
                  : "glass-card-solid"
              }`}>
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1 text-white">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-1 gradient-text">{pkg.price}</div>
                <div className="text-sm mb-5 text-neural-500">{pkg.period}</div>
                <p className="text-sm mb-6 leading-relaxed text-neural-500 font-light">{pkg.desc}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-neural-600">
                      <svg className="w-5 h-5 shrink-0 mt-0.5 text-accent-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3.5 rounded-xl font-semibold transition ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:opacity-90 glow-pulse"
                      : "border border-white/10 text-white hover:border-accent-blue/30 hover:bg-accent-blue/5"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-32 px-6 section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider gradient-text">Trust</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-white">Why teams trust us</h2>
          <p className="text-neural-500 mb-16 font-light">We build systems that work — and keep working.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                ),
                title: "Your data stays yours",
                desc: "We never store or access your business data beyond what's needed for the automation. Enterprise-grade security practices."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                ),
                title: "Built on proven tools",
                desc: "We use industry-standard platforms — n8n, Make, Zapier, OpenAI — so you're never locked into a proprietary system."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                ),
                title: "Designed around your team",
                desc: "We build around how your team already works. No retraining. No disruption. Just fewer manual tasks."
              }
            ].map((item, i) => (
              <div key={i} className="glass-card-solid rounded-2xl p-8 holo-card">
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple mb-5 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-neural-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider gradient-text">ROI</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-white">See your savings</h2>
            <p className="text-neural-500 font-light">Most business owners are surprised by how much time they&apos;re losing to manual work.</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 section-alt">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider gradient-text">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-white">Get your free workflow audit</h2>
          <p className="text-neural-500 mb-12 font-light">
            15-minute call. We map your biggest workflow bottlenecks and show you exactly what automation would save. No pitch, no pressure.
          </p>
          <div className="glass-card-solid rounded-2xl p-8 text-left">
            {formState === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-green" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Got it!</h3>
                <p className="text-neural-500 font-light">We&apos;ll reach out within 2 business hours to schedule your audit.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-neural-600 mb-1.5 font-medium">Your name</label>
                    <input type="text" placeholder="Jane Smith" required
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full input-dark rounded-xl px-4 py-3" />
                  </div>
                  <div>
                    <label className="block text-sm text-neural-600 mb-1.5 font-medium">Company name</label>
                    <input type="text" placeholder="Acme Corp"
                      value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                      className="w-full input-dark rounded-xl px-4 py-3" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-neural-600 mb-1.5 font-medium">Email</label>
                  <input type="email" placeholder="you@company.com" required
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full input-dark rounded-xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm text-neural-600 mb-1.5 font-medium">Website (optional)</label>
                  <input type="url" placeholder="https://yourcompany.com"
                    value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})}
                    className="w-full input-dark rounded-xl px-4 py-3" />
                </div>
                <button type="submit" disabled={formState === "loading"}
                  className="w-full bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 disabled:opacity-60 text-white py-4 rounded-xl font-semibold text-lg transition mt-2 glow-pulse">
                  {formState === "loading" ? "Sending..." : "Book My Free Audit"}
                </button>
                {formState === "error" && <p className="text-red-400 text-sm text-center">Something went wrong — email us directly at andrei@ohanaworkflow.com</p>}
                <p className="text-neural-500 text-xs text-center font-light">We&apos;ll reply within 2 business hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <ActivityFeed />

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-white/5 bg-void">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xl font-bold tracking-tight text-white">
            Ohana<span className="gradient-text">Workflow</span>
          </span>
          <div className="flex items-center gap-6">
            <a href="#how" className="text-neural-500 hover:text-accent-blue text-sm transition">How it works</a>
            <a href="#industries" className="text-neural-500 hover:text-accent-blue text-sm transition">Industries</a>
            <a href="#pricing" className="text-neural-500 hover:text-accent-blue text-sm transition">Pricing</a>
            <a href="#contact" className="text-neural-500 hover:text-accent-blue text-sm transition">Contact</a>
          </div>
          <div className="text-right">
            <p className="text-neural-500 text-sm">andrei@ohanaworkflow.com</p>
            <p className="text-neural-500/50 text-xs mt-1">&copy; 2026 OhanaWorkflow &middot; Vancouver, BC</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
