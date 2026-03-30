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
      <h3 className="text-2xl font-bold mb-1 text-white">How much is manual work costing your team?</h3>
      <p className="text-neural-500 text-sm mb-6 font-light">Most teams spend 20+ hours per week on tasks that AI can handle.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-neural-600 mb-2">
            Average hourly cost per team member
            <span className="text-neural-500 font-normal ml-1">(fully loaded)</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-3.5 text-neural-500">$</span>
            <input
              type="number"
              placeholder="50"
              value={hourlyRate}
              onChange={e => setHourlyRate(e.target.value)}
              className="w-full input-dark rounded-xl pl-8 pr-4 py-3"
            />
          </div>
          <p className="text-neural-500 text-xs mt-1 font-light">Include salary, benefits, overhead</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-neural-600 mb-2">
            Hours spent on manual/repetitive tasks per week
          </label>
          <input
            type="number"
            placeholder="15"
            value={hoursWasted}
            onChange={e => setHoursWasted(e.target.value)}
            className="w-full input-dark rounded-xl px-4 py-3"
          />
          <p className="text-neural-500 text-xs mt-1 font-light">Data entry, copy-paste, manual follow-ups, reporting</p>
        </div>
      </div>

      {showResult && (
        <div className="bg-accent-blue/5 border border-accent-blue/10 rounded-xl p-6 mb-6 animate-fade-in-up">
          <p className="text-accent-blue text-sm font-medium mb-1">Your estimated monthly savings</p>
          <p className="text-5xl font-bold text-white mb-1">
            ${monthlySavings.toLocaleString()}
          </p>
          <p className="text-accent-purple-light text-sm font-medium">
            That&apos;s <span className="font-bold">${annualSavings.toLocaleString()} per year</span> you could save with automation.
          </p>
          <p className="text-neural-500 text-xs mt-3 font-light">
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
        <div className="text-center text-neural-500 text-sm py-4 border border-dashed border-white/10 rounded-xl font-light">
          Enter your numbers above to see your potential savings
        </div>
      )}
    </div>
  );
}
