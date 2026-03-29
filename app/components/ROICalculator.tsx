"use client";
import { useState } from "react";

export default function ROICalculator() {
  const [hourlyRate, setHourlyRate] = useState("");
  const [hoursWasted, setHoursWasted] = useState("");

  const hr = parseFloat(hourlyRate) || 0;
  const hw = parseFloat(hoursWasted) || 0;
  const teamSize = 5;
  const automationCapture = 0.7;
  const monthlySavings = Math.round(hr * hw * teamSize * automationCapture * 4.3);
  const annualSavings = monthlySavings * 12;
  const showResult = hr > 0 && hw > 0;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
      <div className="text-indigo-600 text-sm font-bold uppercase tracking-wider mb-2">Time Savings Calculator</div>
      <h3 className="text-2xl font-bold mb-1 text-slate-900">How much is manual work costing your team?</h3>
      <p className="text-slate-500 text-sm mb-6">Most teams spend 20+ hours per week on tasks that AI can handle.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Average hourly cost per team member
            <span className="text-slate-400 font-normal ml-1">(fully loaded)</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-3.5 text-slate-400">$</span>
            <input
              type="number"
              placeholder="50"
              value={hourlyRate}
              onChange={e => setHourlyRate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition"
            />
          </div>
          <p className="text-slate-400 text-xs mt-1">Include salary, benefits, overhead</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Hours spent on manual/repetitive tasks per week
          </label>
          <input
            type="number"
            placeholder="15"
            value={hoursWasted}
            onChange={e => setHoursWasted(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition"
          />
          <p className="text-slate-400 text-xs mt-1">Data entry, copy-paste, manual follow-ups, reporting</p>
        </div>
      </div>

      {showResult && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6 animate-fade-in-up">
          <p className="text-emerald-700 text-sm font-medium mb-1">Your estimated monthly savings</p>
          <p className="text-5xl font-bold text-slate-900 mb-1">
            ${monthlySavings.toLocaleString()}
          </p>
          <p className="text-emerald-700 text-sm">
            That&apos;s <span className="font-bold">${annualSavings.toLocaleString()} per year</span> you could save with automation.
          </p>
          <p className="text-slate-400 text-xs mt-3">
            Based on: {hw}h/week &times; 5 team members &times; 70% automatable &times; ${hr}/hr &times; 4.3 weeks
          </p>
        </div>
      )}

      {showResult && (
        <a
          href="#contact"
          className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-indigo-200/50"
        >
          Get your free workflow audit
        </a>
      )}

      {!showResult && (
        <div className="text-center text-slate-400 text-sm py-4 border border-dashed border-slate-200 rounded-xl">
          Enter your numbers above to see your potential savings
        </div>
      )}
    </div>
  );
}
