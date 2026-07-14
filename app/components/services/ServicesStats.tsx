"use client";

import { TrendingUp, Users, Wallet, Rocket } from "lucide-react";

const logos = [
  "/logos/anscer-logo.jpg",
  "/logos/anzo-logo.png",
  "/logos/fixbugs-logo.svg",
  "/logos/flexli_logo.png",
  "/logos/kloudlite_io_logo.jpg",
  "/logos/livease_logo.jpg",
  "/logos/mothersongroup_logo.jpg",
  "/logos/panchayath-app-logo.jpg",
  "/logos/SynergyHomeCare_logo.jpg",
  "/logos/unbox-robotics_logo.webp",
  "/logos/XPStays_logo.jpg",
  "/logos/pinnacle-log.png",
];

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
        
        {/* Trusted By - Title */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple">
            TRUSTED BY AMBITIOUS COMPANIES
          </p>
        </div>

        {/* Dark Logo Marquee */}
        <div className="relative overflow-hidden mb-20 px-2 py-4 rounded-xl bg-black/40 border border-white/5">
          <div className="absolute left-0 top-0 z-10 h-full w-16 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-16 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-8 md:gap-12 items-center">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px]"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="h-6 sm:h-8 md:h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

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
