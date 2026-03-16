"use client";
import { useState, useEffect } from "react";

const FEED_ITEMS = [
  "Identified 23-min response leak at a dental clinic in Kitsilano",
  "Deployed after-hours chatbot for a physio clinic — 0 to 24/7 coverage",
  "New patient intake form automation live — follow-up time cut from 6h to 4min",
  "Appointment reminder sequence deployed — no-show rate dropped 31%",
  "Found 12 unanswered 1-star reviews at a wellness clinic in Mount Pleasant",
  "Booking friction scan: 6 of 8 clinics audited had no online scheduler",
  "Lead qualification workflow deployed — front desk handling 40% fewer interruptions",
  "After-hours inquiry automation live — first booking captured at 11:43pm",
  "Missed call automation triggered — patient re-engaged within 8 minutes",
  "Intake form processing time: from 2 days manual to 6 minutes automated",
];

export default function ActivityFeed() {
  const [items, setItems] = useState<{ text: string; time: string; id: number }[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Seed with 3 items immediately
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
      <div className="bg-slate-900/95 backdrop-blur border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
        <div className="px-4 py-2.5 border-b border-slate-700 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-slate-300">Navigator — live activity</span>
        </div>
        <div className="divide-y divide-slate-800">
          {items.map(item => (
            <div key={item.id} className="px-4 py-3">
              <p className="text-xs text-slate-300 leading-relaxed">{item.text}</p>
              <p className="text-xs text-slate-500 mt-1">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
