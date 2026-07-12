"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";

export default function StorySection() {
  const [hovered, setHovered] = useState<number | null>(null);

  const problems = [
    { text: "Brilliant companies were building exceptional products.", severity: "high" },
    { text: "But buyers couldn't understand them.", severity: "high" },
    { text: "Technical founders struggled to explain value.", severity: "medium" },
    { text: "Marketing focused on activity instead of outcomes.", severity: "medium" },
    { text: "Sales teams were forced to fight uphill battles.", severity: "low" },
  ];

  const severityColors: Record<string, string> = {
    high: "text-red-400 border-red-500/30 bg-red-500/5",
    medium: "text-amber-400 border-amber-500/30 bg-amber-500/5",
    low: "text-orange-400 border-orange-500/30 bg-orange-500/5",
  };

  return (
    <div className="flex flex-col text-left">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple mb-4 block">
        Why all4Ps Exists
      </span>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
        The Problem We Saw
      </h2>
      <p className="text-sm text-gray-500 mb-8">Hover each insight to explore</p>

      <ul className="space-y-3">
        {problems.map((problem, index) => (
          <li
            key={index}
            className={`
              relative flex items-center gap-4 rounded-xl border p-4 cursor-default
              transition-all duration-300 overflow-hidden
              ${hovered === index
                ? `${severityColors[problem.severity]} -translate-x-1 shadow-lg`
                : "border-white/8 bg-white/[0.015] text-gray-400"}
            `}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* animated left bar */}
            <div
              className={`absolute left-0 top-0 h-full w-1 rounded-l-xl transition-all duration-300 ${
                hovered === index
                  ? problem.severity === "high"
                    ? "bg-red-500"
                    : problem.severity === "medium"
                    ? "bg-amber-500"
                    : "bg-orange-500"
                  : "bg-transparent"
              }`}
            />

            {/* icon */}
            <div className="flex-shrink-0">
              {hovered === index ? (
                <XCircle className={`w-5 h-5 ${severityColors[problem.severity].split(" ")[0]}`} />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-brand-purple/40" />
              )}
            </div>

            <p className={`text-sm leading-relaxed flex-1 transition-colors duration-300 ${
              hovered === index ? "text-white font-medium" : "text-gray-400"
            }`}>
              {problem.text}
            </p>

            <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
              hovered === index ? "translate-x-1 opacity-100 text-white" : "opacity-0"
            }`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
