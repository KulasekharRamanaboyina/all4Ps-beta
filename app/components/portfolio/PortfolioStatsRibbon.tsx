"use client";

import { FolderOpen, Factory, Target, BarChart2, TrendingUp } from "lucide-react";

export default function PortfolioStatsRibbon() {
  const stats = [
    {
      value: "50+",
      label: "Projects Delivered",
      subText: "Across B2B & B2C",
      icon: FolderOpen,
      glow: "group-hover:text-purple-400",
    },
    {
      value: "15+",
      label: "Industries Served",
      subText: "From SaaS to Manufacturing",
      icon: Factory,
      glow: "group-hover:text-fuchsia-400",
    },
    {
      value: "₹32Cr+",
      label: "Pipeline Generated",
      subText: "For our clients",
      icon: Target,
      glow: "group-hover:text-pink-400",
    },
    {
      value: "4.6x",
      label: "Average Marketing ROI",
      subText: "Across campaigns",
      icon: BarChart2,
      glow: "group-hover:text-indigo-400",
    },
    {
      value: "250%+",
      label: "Avg. Growth in Leads",
      subText: "Across projects",
      icon: TrendingUp,
      glow: "group-hover:text-violet-400",
    },
  ];

  return (
    <section className="relative bg-[#05030A] py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-start divide-y md:divide-y-0 md:divide-x divide-white/5">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0 md:px-6 first:pt-0 first:pl-0"
              >
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-xl bg-[#0B0813] border border-white/5 flex items-center justify-center mb-4 transition-colors group-hover:border-brand-purple/20">
                  <IconComponent className={`w-5 h-5 text-brand-purple transition-colors ${stat.glow}`} />
                </div>

                {/* Metric value */}
                <div className="text-3xl font-extrabold text-white font-display mb-1">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xs font-bold text-gray-300 uppercase tracking-wide mb-0.5">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-[11px] text-gray-500 font-medium">
                  {stat.subText}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
