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
    <div className="glass-card-solid rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="text-sm font-semibold uppercase tracking-wider gradient-text mb-2">Time Savings Calculator</div>
      <h3 className="text-2xl font-bold mb-1 text-neural-900">How much is manual work costing your team?</h3>
      <p className="text-neural-500 text-sm mb-6 font-light">Most teams spend 20+ hours per week on tasks that AI can handle.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-neural-700 mb-2">
            Average hourly cost per team member
            <span className="text-neural-400 font-normal ml-1">(fully loaded)</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-3.5 text-neural-400">$</span>
            <input
              type="number"
              placeholder="50"
              value={hourlyRate}
              onChange={e => setHourlyRate(e.target.value)}
              className="w-full bg-neural-50 border border-neural-200 rounded-xl pl-8 pr-4 py-3 text-neural-800 placeholder-neural-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent focus:bg-white transition"
            />
          </div>
          <p className="text-neural-400 text-xs mt-1 font-light">Include salary, benefits, overhead</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-neural-700 mb-2">
            Hours spent on manual/repetitive tasks per week
          </label>
          <input
            type="number"
            placeholder="15"
            value={hoursWasted}
            onChange={e => setHoursWasted(e.target.value)}
            className="w-full bg-neural-50 border border-neural-200 rounded-xl px-4 py-3 text-neural-800 placeholder-neural-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent focus:bg-white transition"
          />
          <p className="text-neural-400 text-xs mt-1 font-light">Data entry, copy-paste, manual follow-ups, reporting</p>
        </div>
      </div>

      {showResult && (
        <div className="bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 border border-accent-blue/10 rounded-xl p-6 mb-6 animate-fade-in-up">
          <p className="text-accent-blue text-sm font-medium mb-1">Your estimated monthly savings</p>
          <p className="text-5xl font-bold text-neural-900 mb-1">
            ${monthlySavings.toLocaleString()}
          </p>
          <p className="text-accent-purple text-sm font-medium">
            That&apos;s <span className="font-bold">${annualSavings.toLocaleString()} per year</span> you could save with automation.
          </p>
          <p className="text-neural-400 text-xs mt-3 font-light">
            Based on: {hw}h/week &times; 5 team members &times; 70% automatable &times; ${hr}/hr &times; 4.3 weeks
          </p>
        </div>
      )}

      {showResult && (
        <a
          href="#contact"
          className="block w-full text-center bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 text-white py-4 rounded-xl font-semibold text-lg transition glow-pulse"
        >
          Get your free workflow audit
        </a>
      )}

      {!showResult && (
        <div className="text-center text-neural-400 text-sm py-4 border border-dashed border-neural-200 rounded-xl font-light">
          Enter your numbers above to see your potential savings
        </div>
      )}
    </div>
  );
}
