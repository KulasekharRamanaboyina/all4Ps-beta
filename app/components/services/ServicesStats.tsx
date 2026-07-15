"use client";

import { TrendingUp, Users, Wallet, Rocket } from "lucide-react";



const stats = [
  {
    value: "+312%",
    label: "Average Organic Growth",
    icon: TrendingUp,
  },
  {
    value: "+280%",
    label: "Qualified Leads Generated",
    icon: Users,
  },
  {
    value: "4.6x",
    label: "Marketing ROI Improvement",
    icon: Wallet,
  },
  {
    value: "₹32Cr+",
    label: "Pipeline Influenced",
    icon: Rocket,
  },
];

export default function ServicesStats() {
  return (
    <section className="relative bg-transparent text-white py-16 border-t border-white/5 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        


        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0813]/60 p-6 md:p-8 transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(128,0,128,0.1)]"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(128,0,128,0.06),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Header Row: Icon & Stat value */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0F0A1F] border border-white/5 flex items-center justify-center group-hover:border-brand-purple/20 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-brand-purple group-hover:text-fuchsia-400 transition-colors" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent leading-none">
                    {stat.value}
                  </div>
                </div>

                {/* Label */}
                <div className="text-gray-400 text-xs sm:text-sm font-semibold leading-relaxed">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
