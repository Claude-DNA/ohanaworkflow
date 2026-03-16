"use client";
import { useState } from "react";

export default function ROICalculator() {
  const [patientValue, setPatientValue] = useState("");
  const [missedCalls, setMissedCalls] = useState("");

  const pv = parseFloat(patientValue) || 0;
  const mc = parseFloat(missedCalls) || 0;
  const bookingRate = 0.35; // 35% of missed calls are bookable
  const conversionRate = 0.6; // 60% of bookable convert
  const monthlyLeak = Math.round(pv * mc * bookingRate * conversionRate * 22);
  const annualLeak = monthlyLeak * 12;
  const showResult = pv > 0 && mc > 0;

  return (
    <div className="bg-slate-900 border border-indigo-900 rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">Revenue Leak Calculator</div>
      <h3 className="text-2xl font-bold mb-1">How much is your after-hours silence costing you?</h3>
      <p className="text-slate-400 text-sm mb-6">35% of booking attempts happen outside business hours. Here's what that means for your clinic.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Average patient value
            <span className="text-slate-500 font-normal ml-1">(lifetime, in $)</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-3.5 text-slate-400">$</span>
            <input
              type="number"
              placeholder="2,500"
              value={patientValue}
              onChange={e => setPatientValue(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <p className="text-slate-500 text-xs mt-1">Average for Vancouver dental: $2,500 · Physio: $800 · Wellness: $1,200</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Missed / unanswered calls per day
          </label>
          <input
            type="number"
            placeholder="8"
            value={missedCalls}
            onChange={e => setMissedCalls(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <p className="text-slate-500 text-xs mt-1">Check your voicemail count from last week</p>
        </div>
      </div>

      {showResult && (
        <div className="bg-red-950 border border-red-900 rounded-xl p-6 mb-6">
          <p className="text-red-400 text-sm font-medium mb-1">Your estimated monthly revenue leak</p>
          <p className="text-5xl font-bold text-white mb-1">
            ${monthlyLeak.toLocaleString()}
          </p>
          <p className="text-red-400 text-sm">
            That's <span className="font-bold">${annualLeak.toLocaleString()} per year</span> walking out the door after hours.
          </p>
          <p className="text-slate-400 text-xs mt-3">
            Based on: {mc} missed calls/day × 35% bookable × 60% conversion × 22 working days × ${pv.toLocaleString()} avg value
          </p>
        </div>
      )}

      {showResult && (
        <a
          href="#contact"
          className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-semibold text-lg transition"
        >
          Stop the leak — get your free audit →
        </a>
      )}

      {!showResult && (
        <div className="text-center text-slate-500 text-sm py-4 border border-dashed border-slate-700 rounded-xl">
          Enter your numbers above to see your revenue leak
        </div>
      )}
    </div>
  );
}
