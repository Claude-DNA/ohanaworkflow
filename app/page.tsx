"use client";
import { useState } from "react";
import ROICalculator from "./components/ROICalculator";
import ActivityFeed from "./components/ActivityFeed";

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
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900 tracking-tight">Ohana<span className="text-indigo-600">Workflow</span></span>
          <div className="flex items-center gap-6">
            <a href="#how" className="hidden sm:block text-sm text-slate-500 hover:text-slate-900 transition">How it works</a>
            <a href="#industries" className="hidden sm:block text-sm text-slate-500 hover:text-slate-900 transition">Industries</a>
            <a href="#pricing" className="hidden sm:block text-sm text-slate-500 hover:text-slate-900 transition">Pricing</a>
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition shadow-sm"
            >
              Book Free Audit
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-gradient pt-36 pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/80 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-indigo-100 shadow-sm">
            AI Automation Agency &middot; Vancouver, BC
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 text-slate-900 tracking-tight">
            Your team is doing work<br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">a machine should handle.</span>
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            We build custom AI automation systems that save your team 20+ hours per week.
            Intelligent workflows for operations, sales, support, and everything in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-indigo-200/50"
            >
              Get Your Free Workflow Audit
            </a>
            <a
              href="#how"
              className="border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition hover:bg-white/60"
            >
              See How It Works
            </a>
          </div>
          <p className="text-slate-400 text-sm mt-5">No obligation. 15-minute call. We show you exactly where you&apos;re losing time.</p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">Sound familiar?</h2>
          <p className="text-slate-500 text-center mb-14 max-w-xl mx-auto">These are the workflow leaks we find in almost every business we audit.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📥",
                title: "Manual data entry eating your day",
                desc: "Your team copies data between apps, updates spreadsheets by hand, and reformats the same info across systems. Hours lost, every single day.",
                stat: "Teams spend an average of 4.5 hours/day on repetitive manual tasks"
              },
              {
                icon: "🔔",
                title: "Leads slip through the cracks",
                desc: "A prospect fills out your form Friday evening. Nobody follows up until Monday. By then, they've signed with your competitor.",
                stat: "Leads contacted within 5 minutes are 9x more likely to convert"
              },
              {
                icon: "🌙",
                title: "No one's working after hours",
                desc: "Customers reach out at 9 PM. Support requests pile up over the weekend. Every hour without a response is revenue walking out the door.",
                stat: "64% of customers expect real-time responses regardless of business hours"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-indigo-600 transition">{item.title}</h3>
                <p className="text-slate-500 mb-4 leading-relaxed">{item.desc}</p>
                <p className="text-indigo-600 text-sm font-medium border-t border-slate-100 pt-4">{item.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">How it works</h2>
          <p className="text-slate-500 text-center mb-14">We plug AI into your existing tools — not replace them.</p>
          <div className="space-y-6">
            {[
              { step: "01", title: "Free 15-min workflow audit", desc: "We map your current processes, identify bottlenecks, and show you exactly where automation will save the most time. No obligation." },
              { step: "02", title: "We build your custom system", desc: "In 1-3 weeks, we deploy AI automations tailored to your business: lead routing, data sync, document processing, customer follow-ups, and more. Your team doesn't change how they work." },
              { step: "03", title: "Your team gets hours back", desc: "Repetitive work disappears. Leads get instant responses. Data flows between your tools automatically. Your team focuses on work that actually matters." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="text-4xl font-bold text-indigo-200 shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section id="industries" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">Industries we serve</h2>
          <p className="text-slate-500 text-center mb-14 max-w-xl mx-auto">AI automation works for any business with repeatable processes. Here are a few we know inside out.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏥", title: "Healthcare & Clinics", desc: "Patient intake, appointment reminders, referral tracking, and document processing — fully automated." },
              { icon: "🏠", title: "Real Estate", desc: "Lead follow-up, listing updates, contract workflows, and client nurture sequences on autopilot." },
              { icon: "⚖️", title: "Legal & Professional Services", desc: "Client onboarding, document review, billing automation, and deadline tracking without the busywork." },
              { icon: "🛒", title: "E-Commerce & Retail", desc: "Order processing, inventory sync, customer support triage, and review management — hands-free." },
              { icon: "🔧", title: "Trades & Home Services", desc: "Job scheduling, quote follow-ups, invoice generation, and after-hours lead capture that never sleeps." },
              { icon: "💼", title: "Agencies & Consultants", desc: "Proposal workflows, project handoffs, reporting dashboards, and client communication — all automated." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition group">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-indigo-600 transition">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE AUTOMATE */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">What we automate</h2>
          <p className="text-slate-500 text-center mb-14">If it&apos;s repetitive, rule-based, or time-consuming — we can probably automate it.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "Lead Response", desc: "Instant follow-up, qualification, and routing" },
              { icon: "📄", title: "Document Processing", desc: "Extract, classify, and route documents with AI" },
              { icon: "🔗", title: "App Integrations", desc: "Connect your CRM, email, Slack, and 200+ tools" },
              { icon: "📊", title: "Reporting", desc: "Auto-generated dashboards and status updates" },
              { icon: "💬", title: "Customer Support", desc: "AI chatbots and intelligent ticket routing" },
              { icon: "📧", title: "Email Workflows", desc: "Smart sequences, parsing, and auto-replies" },
              { icon: "📋", title: "Onboarding", desc: "Automated client and employee onboarding flows" },
              { icon: "🔁", title: "Data Sync", desc: "Keep all your systems in sync, automatically" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-1 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">Simple, clear packages</h2>
          <p className="text-slate-500 text-center mb-14">No surprise costs. No long-term lock-in. Cancel anytime.</p>
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
              <div key={i} className={`rounded-2xl p-8 border transition ${pkg.highlight ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200/40 scale-[1.02]" : "bg-white border-slate-200 shadow-sm hover:shadow-md"}`}>
                {pkg.highlight && (
                  <div className="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-3">Most Popular</div>
                )}
                <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-slate-900"}`}>{pkg.name}</h3>
                <div className={`text-3xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-slate-900"}`}>{pkg.price}</div>
                <div className={`text-sm mb-4 ${pkg.highlight ? "text-indigo-200" : "text-slate-400"}`}>{pkg.period}</div>
                <p className={`text-sm mb-6 leading-relaxed ${pkg.highlight ? "text-indigo-100" : "text-slate-500"}`}>{pkg.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${pkg.highlight ? "text-indigo-50" : "text-slate-600"}`}>
                      <span className={`shrink-0 mt-0.5 ${pkg.highlight ? "text-indigo-200" : "text-indigo-600"}`}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition ${pkg.highlight ? "bg-white text-indigo-600 hover:bg-indigo-50 shadow-sm" : "border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"}`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Why teams trust us</h2>
          <p className="text-slate-500 mb-14">We build systems that work — and keep working.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🔒", title: "Your data stays yours", desc: "We never store or access your business data beyond what's needed for the automation. Enterprise-grade security practices." },
              { icon: "🛠️", title: "Built on proven tools", desc: "We use industry-standard platforms — n8n, Make, Zapier, OpenAI — so you're never locked into a proprietary system." },
              { icon: "👥", title: "Designed around your team", desc: "We build around how your team already works. No retraining. No disruption. Just fewer manual tasks." }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">See your savings</h2>
          <p className="text-slate-500 text-center mb-12">Most business owners are surprised by how much time they&apos;re losing to manual work.</p>
          <ROICalculator />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Get your free workflow audit</h2>
          <p className="text-slate-500 mb-10">
            15-minute call. We map your biggest workflow bottlenecks and show you exactly what automation would save. No pitch, no pressure.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-left shadow-sm">
            {formState === "success" ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">&#9989;</div>
                <h3 className="text-2xl font-bold mb-2">Got it!</h3>
                <p className="text-slate-500">We&apos;ll reach out within 2 business hours to schedule your audit.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-600 mb-1.5 font-medium">Your name</label>
                    <input type="text" placeholder="Jane Smith" required
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 mb-1.5 font-medium">Company name</label>
                    <input type="text" placeholder="Acme Corp"
                      value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1.5 font-medium">Email</label>
                  <input type="email" placeholder="you@company.com" required
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1.5 font-medium">Website (optional)</label>
                  <input type="url" placeholder="https://yourcompany.com"
                    value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition" />
                </div>
                <button type="submit" disabled={formState === "loading"}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white py-4 rounded-xl font-semibold text-lg transition mt-2 shadow-lg shadow-indigo-200/50">
                  {formState === "loading" ? "Sending..." : "Book My Free Audit"}
                </button>
                {formState === "error" && <p className="text-red-500 text-sm text-center">Something went wrong — email us directly at andrei@ohanaworkflow.com</p>}
                <p className="text-slate-400 text-xs text-center">We&apos;ll reply within 2 business hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <ActivityFeed />

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl font-bold tracking-tight">Ohana<span className="text-indigo-600">Workflow</span></span>
          <div className="flex items-center gap-6">
            <a href="#how" className="text-slate-400 hover:text-slate-600 text-sm transition">How it works</a>
            <a href="#industries" className="text-slate-400 hover:text-slate-600 text-sm transition">Industries</a>
            <a href="#pricing" className="text-slate-400 hover:text-slate-600 text-sm transition">Pricing</a>
            <a href="#contact" className="text-slate-400 hover:text-slate-600 text-sm transition">Contact</a>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-sm">andrei@ohanaworkflow.com</p>
            <p className="text-slate-300 text-xs mt-1">&copy; 2026 OhanaWorkflow &middot; Vancouver, BC</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
