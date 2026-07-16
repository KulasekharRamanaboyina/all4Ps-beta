"use client";

import { DollarSign, BarChart2, Factory, FolderOpen } from "lucide-react";

export default function PortfolioDeliveringImpact() {
  const metrics = [
    {
      value: "₹32Cr+",
      label: "Pipeline Generated",
      icon: DollarSign,
    },
    {
      value: "4.6x",
      label: "Marketing ROI",
      icon: BarChart2,
    },
    {
      value: "15+",
      label: "Industries Served",
      icon: Factory,
    },
    {
      value: "50+",
      label: "Projects Delivered",
      icon: FolderOpen,
    },
  ];

  return (
    <section className="relative bg-transparent py-20 border-t border-white/5 overflow-hidden">
      {/* Dual ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.03),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading (Centered) */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple">
            WHY PARTNER WITH US
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.15] max-w-2xl mx-auto">
            Delivering Impact That{" "}
            <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
              Moves the Needle.
            </span>
          </h2>
        </div>

        {/* Metrics Grid (Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto text-center">
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center space-y-3"
              >
                {/* Icon (Rendered cleanly without background boxes) */}
                <IconComponent className="w-6 h-6 text-brand-purple group-hover:text-fuchsia-400 transition-colors duration-300" />

                {/* Value */}
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
