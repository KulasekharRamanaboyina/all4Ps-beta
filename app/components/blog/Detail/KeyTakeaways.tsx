"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

interface KeyTakeawaysProps {
  takeaways: string[];
}

export default function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div className="rounded-3xl border border-brand-purple/20 bg-brand-purple/5 p-6 sm:p-8 mb-12 relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-brand-purple/10 rounded-full blur-2xl" />
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle2 className="w-5 h-5 text-brand-purple" />
        <h3 className="font-extrabold text-white text-lg tracking-tight uppercase">
          Key Takeaways
        </h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {takeaways.map((point, idx) => (
          <div key={idx} className="flex gap-3">
            <span className="text-brand-purple font-extrabold select-none">
              0{idx + 1}.
            </span>
            <p className="text-gray-300 text-sm leading-relaxed">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
