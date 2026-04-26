// TODO: Replace these placeholder case studies with real client work.
// Each entry needs: a screenshot or hero image (drop into /public/case-studies/),
// the client name (or anonymized label), a one-line industry tag, the headline
// outcome, a short summary, and (optionally) a link to a longer write-up.
//
// The component renders gracefully whether you have 2, 3, or 4 entries.

interface CaseStudy {
  client:   string;             // "ACME Dental" or "A Vancouver dental clinic"
  industry: string;             // "Healthcare"
  outcome:  string;             // headline result, e.g. "Cut intake time 92%"
  summary:  string;             // 1-2 sentence what-we-built
  image?:   string;             // path under /public, e.g. "/case-studies/acme.png"
  href?:    string;             // optional link to /case-studies/[slug]
}

const CASE_STUDIES: CaseStudy[] = [
  // === REPLACE THESE WITH REAL CASE STUDIES ===
  {
    client:   "Case study coming soon",
    industry: "Healthcare",
    outcome:  "Patient intake time cut from 15 min to under 2",
    summary:  "Replace this with a real client outcome — what you built, the metric that moved, and the timeframe.",
  },
  {
    client:   "Case study coming soon",
    industry: "Real Estate",
    outcome:  "Lead response time dropped from 4 hours to 90 seconds",
    summary:  "Replace this with a real client outcome — what you built, the metric that moved, and the timeframe.",
  },
];

export default function CaseStudies() {
  if (CASE_STUDIES.length === 0) return null;

  return (
    <section id="case-studies" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider gradient-text">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-neural-900">
            How clients are using AI to claw back time
          </h2>
          <p className="text-neural-500 font-light max-w-xl mx-auto">
            Real teams. Real workflows. Real time saved every week.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <article key={i} className="card rounded-2xl overflow-hidden">
              {/* Visual */}
              <div className="aspect-[16/10] bg-gradient-to-br from-neural-100 to-neural-200 relative overflow-hidden">
                {cs.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={cs.image} alt={`${cs.client} — ${cs.outcome}`} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-neural-400 text-sm font-light px-6 text-center">
                      Add a screenshot at <code className="bg-white/60 px-1.5 py-0.5 rounded text-xs">/public/case-studies/</code>
                    </div>
                  </div>
                )}
                {/* gradient sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 to-accent-purple/5 pointer-events-none" />
              </div>

              {/* Body */}
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neural-400 mb-3">
                  <span>{cs.industry}</span>
                  <span className="w-1 h-1 rounded-full bg-neural-300" />
                  <span className="text-accent-blue">{cs.client}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neural-900 mb-3 leading-snug">
                  {cs.outcome}
                </h3>
                <p className="text-neural-500 font-light leading-relaxed mb-5">
                  {cs.summary}
                </p>
                {cs.href && (
                  <a
                    href={cs.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2.5 transition-all"
                  >
                    Read the full story
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
