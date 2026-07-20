"use client";

import React, { useState } from "react";

export default function MissionSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "We don't chase buzzwords. We build clarity that converts.",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col text-left">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple mb-4 block">
        Our Mission
      </span>

      <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8">
        Turn Expertise into Pipeline & Revenue Transforming complex products{" "}
        <span className="text-white font-semibold">into compelling</span>,{" "}
        <span className="text-white font-semibold"> market opportunities</span>
        through strategy-led execution.
      </p>

      {/* Interactive Quote Card */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]
          backdrop-blur-sm p-6 shadow-xl cursor-pointer group
          hover:border-brand-purple/40 hover:bg-white/[0.04] transition-all duration-300"
        onClick={handleCopy}
        title="Click to copy"
      >
        {/* animated left bar */}
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-purple to-fuchsia-400" />

        {/* animated shimmer on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/5 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />

        {/* Quote Mark */}
        <span className="absolute -top-3 right-4 text-8xl font-serif text-brand-purple/8 pointer-events-none select-none">
          "
        </span>

        <p className="text-base font-semibold text-white leading-relaxed italic z-10 relative mb-3">
          "We don't chase buzzwords. We build clarity that converts."
        </p>

        {/* copy feedback */}
        <div className="flex items-center gap-2 mt-2">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
              copied
                ? "text-emerald-400"
                : "text-gray-600 group-hover:text-brand-purple"
            }`}
          >
            {copied ? "✓ Copied!" : "Click to copy"}
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        {[
          { value: "50+", label: "Clients" },
          { value: "3yr", label: "Avg Partnership" },
          { value: "92%", label: "Retention" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-white/8 bg-white/[0.015] p-3 text-center
              hover:border-brand-purple/40 hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
          >
            <p className="text-lg font-extrabold text-white group-hover:text-brand-purple transition-colors duration-300">
              {m.value}
            </p>
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
