"use client";

import { DollarSign, BarChart2, Factory, FolderOpen } from "lucide-react";

export default function PortfolioDeliveringImpact() {
  const metrics = [
    {
      value: "₹32Cr+",
      label: "Pipeline Generated",
      icon: DollarSign,
      glow: "text-purple-400",
    },
    {
      value: "4.6x",
      label: "Marketing ROI",
      icon: BarChart2,
      glow: "text-fuchsia-400",
    },
    {
      value: "15+",
      label: "Industries Served",
      icon: Factory,
      glow: "text-pink-400",
    },
    {
      value: "50+",
      label: "Projects Delivered",
      icon: FolderOpen,
      glow: "text-indigo-400",
    },
  ];

  return (
    <section className="relative bg-[#05030A] py-20 border-t border-white/5 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading */}
          <div className="text-center lg:text-left space-y-3">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple">
              WHY PARTNER WITH US
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.15]">
              Delivering Impact <br className="hidden lg:inline" />
              That{" "}
              <span className="bg-gradient-to-r from-brand-purple via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                Moves the Needle.
              </span>
            </h2>
          </div>

          {/* Right Column: 4 metrics columns grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric, idx) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0B0813]/60 p-5 transition-all duration-300 hover:border-brand-purple/20 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(128,0,128,0.04)]"
                >
                  {/* Small icon */}
                  <div className="w-9 h-9 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-4 transition-colors group-hover:border-brand-purple/20">
                    <IconComponent className={`w-4 h-4 ${metric.glow}`} />
                  </div>

                  {/* Value */}
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-1">
                    {metric.value}
                  </div>

                  {/* Label */}
                  <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
