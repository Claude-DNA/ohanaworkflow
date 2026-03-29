"use client";
import { useState, useEffect } from "react";

const FEED_ITEMS = [
  "Lead response automation deployed — follow-up time cut from 3h to 90 seconds",
  "Connected CRM + email + Slack for a SaaS team — 6 manual steps eliminated",
  "Invoice processing workflow live — 200+ docs/month now fully automated",
  "Onboarding sequence deployed — new client setup down from 2 days to 20 minutes",
  "Customer support triage bot live — 42% of tickets resolved without human touch",
  "Weekly reporting automation built — team saves 5 hours every Monday",
  "Lead qualification workflow deployed — sales team handling 3x more leads",
  "Data sync between Shopify + HubSpot live — zero manual entry",
  "Contract review automation triggered — key terms extracted in under 10 seconds",
  "Employee onboarding flow live — IT provisioning now fully hands-off",
];

export default function ActivityFeed() {
  const [items, setItems] = useState<{ text: string; time: string; id: number }[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const seed = [];
    for (let i = 0; i < 3; i++) {
      seed.push({
        text: FEED_ITEMS[i % FEED_ITEMS.length],
        time: `${2 + i * 7}m ago`,
        id: i,
      });
    }
    setItems(seed);
    setIndex(3);

    const interval = setInterval(() => {
      setItems(prev => {
        const next = [
          {
            text: FEED_ITEMS[index % FEED_ITEMS.length],
            time: "just now",
            id: Date.now(),
          },
          ...prev.map(item => ({
            ...item,
            time: item.time === "just now" ? "1m ago" : item.time,
          })),
        ].slice(0, 4);
        return next;
      });
      setIndex(i => i + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 w-80 z-40 hidden lg:block">
      <div className="bg-white/95 backdrop-blur border border-slate-200 rounded-xl overflow-hidden shadow-lg">
        <div className="px-4 py-2.5 border-b border-slate-100 flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-slate-600">OhanaWorkflow — live activity</span>
        </div>
        <div className="divide-y divide-slate-100">
          {items.map(item => (
            <div key={item.id} className="px-4 py-3">
              <p className="text-xs text-slate-600 leading-relaxed">{item.text}</p>
              <p className="text-xs text-slate-400 mt-1">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
