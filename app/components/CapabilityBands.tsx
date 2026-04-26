"use client";
import { useState, ReactNode } from "react";

interface Capability {
  eyebrow:  string;
  title:    string;
  desc:     string;
  features: { title: string; detail: string }[];
  illustration: ReactNode;   // SVG or visual hero
}

const CAPABILITIES: Capability[] = [
  {
    eyebrow: "Lead Response",
    title:   "Every lead gets a response in under 90 seconds — even at midnight.",
    desc:    "When a prospect fills out your form, every minute you wait costs you the deal. We build automated systems that qualify, route, and respond instantly so leads never go cold.",
    features: [
      {
        title:  "Instant intelligent reply",
        detail: "AI drafts a personalized response within 90 seconds — referencing the prospect's company, timezone, and stated need. You review and approve, or auto-send for known patterns.",
      },
      {
        title:  "Auto-qualification & routing",
        detail: "Leads get scored by fit and intent, then routed to the right rep with full context — past website visits, company size, source. No more triage in the team Slack.",
      },
      {
        title:  "After-hours coverage",
        detail: "Customers reaching out at 9 PM Friday don't wait until Monday. AI handles initial qualification, books a meeting, and queues the rep with everything they need to close.",
      },
    ],
    illustration: (
      <svg className="w-full h-full p-8" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40"  y="60"  width="320" height="60" rx="12" fill="#fff" stroke="#e2e8f0" />
        <circle cx="70"  cy="90"  r="14" fill="#06b6d4" opacity="0.15" />
        <circle cx="70"  cy="90"  r="6"  fill="#06b6d4" />
        <rect x="100" y="80"  width="140" height="8" rx="4" fill="#cbd5e1" />
        <rect x="100" y="94"  width="200" height="6" rx="3" fill="#e2e8f0" />
        <rect x="40"  y="140" width="320" height="60" rx="12" fill="#fff" stroke="#e2e8f0" />
        <circle cx="70"  cy="170" r="14" fill="#8b5cf6" opacity="0.15" />
        <circle cx="70"  cy="170" r="6"  fill="#8b5cf6" />
        <rect x="100" y="160" width="160" height="8" rx="4" fill="#cbd5e1" />
        <rect x="100" y="174" width="180" height="6" rx="3" fill="#e2e8f0" />
        <rect x="40"  y="220" width="320" height="40" rx="12" fill="url(#lr-grad)" />
        <text x="200" y="245" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Auto-replied · 87s</text>
        <defs>
          <linearGradient id="lr-grad" x1="0" x2="1">
            <stop offset="0" stopColor="#06b6d4" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    eyebrow: "Document Processing",
    title:   "Stop typing data off PDFs. Let AI read them for you.",
    desc:    "Invoices, contracts, intake forms, insurance documents — AI extracts the fields you care about, validates them, and routes them into the right system. Zero manual entry.",
    features: [
      {
        title:  "Extract from any document",
        detail: "Scanned PDFs, photos of receipts, emailed contracts. The AI reads structured and unstructured documents with 95%+ accuracy on the fields you specify.",
      },
      {
        title:  "Auto-classify & route",
        detail: "Documents get tagged (invoice / contract / claim / etc.), routed to the right team or system, and flagged for human review only when confidence is low.",
      },
      {
        title:  "Audit trail included",
        detail: "Every document keeps its original alongside the extracted data, with confidence scores and a full audit log — so you can prove exactly what the system saw and decided.",
      },
    ],
    illustration: (
      <svg className="w-full h-full p-8" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="60"  y="40"  width="140" height="180" rx="8" fill="#fff" stroke="#e2e8f0" />
        <rect x="78"  y="62"  width="100" height="6" rx="3" fill="#cbd5e1" />
        <rect x="78"  y="78"  width="80"  height="4" rx="2" fill="#e2e8f0" />
        <rect x="78"  y="92"  width="100" height="4" rx="2" fill="#e2e8f0" />
        <rect x="78"  y="106" width="60"  height="4" rx="2" fill="#e2e8f0" />
        <rect x="78"  y="130" width="100" height="4" rx="2" fill="#e2e8f0" />
        <rect x="78"  y="144" width="80"  height="4" rx="2" fill="#e2e8f0" />
        <path d="M210 130 L240 130" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M232 124 L242 130 L232 136" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="250" y="60"  width="100" height="160" rx="12" fill="url(#dp-grad)" opacity="0.08" />
        <rect x="250" y="60"  width="100" height="160" rx="12" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" />
        <text x="300" y="100" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#06b6d4">VENDOR</text>
        <rect x="262" y="108" width="76" height="6" rx="3" fill="#06b6d4" opacity="0.6" />
        <text x="300" y="138" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#8b5cf6">AMOUNT</text>
        <rect x="262" y="146" width="76" height="6" rx="3" fill="#8b5cf6" opacity="0.6" />
        <text x="300" y="176" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#06b6d4">DATE</text>
        <rect x="262" y="184" width="76" height="6" rx="3" fill="#06b6d4" opacity="0.6" />
        <defs>
          <linearGradient id="dp-grad" x1="0" x2="1">
            <stop offset="0" stopColor="#06b6d4" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    eyebrow: "Customer Support",
    title:   "An AI teammate that handles 40%+ of tickets without help.",
    desc:    "We deploy an AI support agent trained on your knowledge base, past tickets, and product docs. It handles routine questions instantly and hands off cleanly when humans are needed.",
    features: [
      {
        title:  "Trained on your content",
        detail: "Help docs, past tickets, product manuals, internal wikis. The AI answers in your voice, with your policies, citing your sources — not generic ChatGPT replies.",
      },
      {
        title:  "Smart escalation",
        detail: "Frustrated customer? Refund request? Edge case? The AI recognizes when it's out of its depth and hands off to a human with the full conversation context.",
      },
      {
        title:  "Continuous learning",
        detail: "Every ticket your team handles makes the AI smarter. We retrain monthly and surface coverage gaps so your knowledge base grows automatically.",
      },
    ],
    illustration: (
      <svg className="w-full h-full p-8" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="40" width="320" height="220" rx="16" fill="#fff" stroke="#e2e8f0" />
        <rect x="40" y="40" width="320" height="40" rx="16" fill="#f1f5f9" />
        <rect x="40" y="68" width="320" height="2" fill="#e2e8f0" />
        <circle cx="68" cy="60" r="6" fill="#10b981" />
        <text x="84" y="64" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#0f172a">Online · AI assistant</text>
        <rect x="60"  y="100" width="180" height="36" rx="14" fill="#f1f5f9" />
        <text x="76" y="118" fontFamily="Inter, sans-serif" fontSize="10" fill="#475569">How do I change my plan?</text>
        <text x="76" y="130" fontFamily="Inter, sans-serif" fontSize="10" fill="#94a3b8">Customer · just now</text>
        <rect x="160" y="150" width="200" height="50" rx="14" fill="url(#cs-grad)" opacity="0.12" />
        <rect x="160" y="150" width="200" height="50" rx="14" fill="none" stroke="#06b6d4" strokeOpacity="0.4" />
        <text x="176" y="170" fontFamily="Inter, sans-serif" fontSize="10" fill="#0f172a">Settings → Billing → Change plan.</text>
        <text x="176" y="184" fontFamily="Inter, sans-serif" fontSize="10" fill="#0f172a">Want me to walk you through it?</text>
        <text x="176" y="196" fontFamily="Inter, sans-serif" fontSize="9"  fill="#06b6d4">AI · 1.2s response</text>
        <rect x="60" y="216" width="280" height="32" rx="14" fill="#f8fafc" stroke="#e2e8f0" />
        <text x="76" y="236" fontFamily="Inter, sans-serif" fontSize="10" fill="#94a3b8">Type a message…</text>
        <defs>
          <linearGradient id="cs-grad" x1="0" x2="1">
            <stop offset="0" stopColor="#06b6d4" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    eyebrow: "Email Workflows",
    title:   "Inbox-zero, automatically.",
    desc:    "AI reads incoming email, drafts smart replies, parses structured data (orders, quotes, RFPs), and triggers downstream workflows — turning your inbox from a time-sink into a routing layer.",
    features: [
      {
        title:  "Smart drafts in your voice",
        detail: "AI drafts replies matching your tone, references your past conversations, and pre-fills the right details. You read, tweak if needed, and send.",
      },
      {
        title:  "Auto-parse & dispatch",
        detail: "Quote requests get parsed into your CRM. Invoices get filed in accounting. Support requests get tagged and routed. All from the email itself.",
      },
      {
        title:  "Sequence automation",
        detail: "Multi-step nurture sequences, follow-up cadences, re-engagement flows — running automatically, paused the moment a human replies.",
      },
    ],
    illustration: (
      <svg className="w-full h-full p-8" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="50" width="320" height="200" rx="14" fill="#fff" stroke="#e2e8f0" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="56" y={70 + i * 44} width="288" height="36" rx="8" fill={i === 1 ? "#ecfeff" : "#f8fafc"} stroke={i === 1 ? "#06b6d4" : "#e2e8f0"} strokeOpacity={i === 1 ? "0.4" : "1"} />
            <circle cx="76" cy={88 + i * 44} r="6" fill={i === 1 ? "#06b6d4" : "#cbd5e1"} />
            <rect x="92" y={82 + i * 44} width="100" height="6" rx="3" fill={i === 1 ? "#0f172a" : "#cbd5e1"} />
            <rect x="92" y={94 + i * 44} width="160" height="4" rx="2" fill="#e2e8f0" />
            {i === 1 && <text x="328" y={92 + i * 44} fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#06b6d4">AI ✓</text>}
          </g>
        ))}
      </svg>
    ),
  },
  {
    eyebrow: "Onboarding",
    title:   "Turn a 2-day onboarding into 20 minutes.",
    desc:    "Whether it's a new client or a new hire, onboarding is a series of repetitive steps across multiple tools. We orchestrate the whole flow — provisioning, document collection, training, intros — into a single automated sequence.",
    features: [
      {
        title:  "Document collection on autopilot",
        detail: "Forms, agreements, IDs, banking info — collected through one branded flow, validated automatically, filed into the right places.",
      },
      {
        title:  "Provisioning & access",
        detail: "Accounts get created in your CRM, project tools, Slack, email, and any internal apps the moment the contract is signed. Reverse-flow on offboarding.",
      },
      {
        title:  "Personalized welcome flow",
        detail: "Custom welcome emails, training videos drip-fed at the right pace, intro meetings auto-scheduled — all without anyone touching a checklist.",
      },
    ],
    illustration: (
      <svg className="w-full h-full p-8" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[
          { y: 60,  label: "Contract signed",       done: true  },
          { y: 110, label: "Accounts provisioned",  done: true  },
          { y: 160, label: "Welcome email sent",    done: true  },
          { y: 210, label: "Kickoff meeting booked", done: false },
        ].map((s, i) => (
          <g key={i}>
            {i < 3 && <line x1="76" y1={s.y + 12} x2="76" y2={s.y + 38} stroke="#06b6d4" strokeWidth="2" strokeOpacity="0.4" />}
            <circle cx="76" cy={s.y} r="14" fill={s.done ? "#06b6d4" : "#fff"} stroke={s.done ? "#06b6d4" : "#cbd5e1"} strokeWidth="2" />
            {s.done && (
              <path d={`M${68} ${s.y + 1} L${74} ${s.y + 6} L${84} ${s.y - 4}`} stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            )}
            <rect x="104" y={s.y - 12} width="240" height="26" rx="8" fill={s.done ? "#fff" : "#f8fafc"} stroke="#e2e8f0" />
            <text x="116" y={s.y + 4} fontFamily="Inter, sans-serif" fontSize="11" fontWeight={s.done ? "600" : "400"} fill={s.done ? "#0f172a" : "#94a3b8"}>{s.label}</text>
          </g>
        ))}
      </svg>
    ),
  },
];

export default function CapabilityBands() {
  const [openFeature, setOpenFeature] = useState<string | null>(null);

  return (
    <section id="capabilities" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold uppercase tracking-wider gradient-text">Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-neural-900">
            What we automate
          </h2>
          <p className="text-neural-500 font-light max-w-xl mx-auto">
            Five workflows we build over and over. If your business has a different time-sink, we&apos;ve probably automated something close to it.
          </p>
        </div>
      </div>

      {CAPABILITIES.map((cap, idx) => {
        const reverse = idx % 2 === 1;
        return (
          <div key={idx} className="capability-band py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Visual */}
              <div className={`capability-band__visual ${reverse ? "md:order-2" : ""}`}>
                {cap.illustration}
              </div>

              {/* Copy */}
              <div className={reverse ? "md:order-1" : ""}>
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-3">
                  {cap.eyebrow}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-neural-900 leading-tight tracking-tight mb-5">
                  {cap.title}
                </h3>
                <p className="text-neural-500 font-light leading-relaxed mb-8">
                  {cap.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {cap.features.map((f, fi) => {
                    const key = `${idx}-${fi}`;
                    const isOpen = openFeature === key;
                    return (
                      <button
                        key={fi}
                        onClick={() => setOpenFeature(isOpen ? null : key)}
                        className={`w-full text-left rounded-xl border px-5 py-4 transition-all ${
                          isOpen
                            ? "border-accent-blue/40 bg-accent-blue/5"
                            : "border-neural-200 bg-white hover:border-accent-blue/30"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isOpen ? "bg-accent-blue" : "bg-accent-blue/10"
                          }`}>
                            <svg className={`w-3 h-3 ${isOpen ? "text-white" : "text-accent-blue"}`} fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-neural-900">{f.title}</div>
                            {isOpen && (
                              <div className="text-sm text-neural-600 font-light mt-2 leading-relaxed animate-fade-in-up">
                                {f.detail}
                              </div>
                            )}
                          </div>
                          <svg className={`w-5 h-5 text-neural-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all"
                >
                  Curious to learn more? Let&apos;s talk
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
