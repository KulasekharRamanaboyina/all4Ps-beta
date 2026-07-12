"use client";

import { Search, Target, Award, Settings, TrendingUp } from "lucide-react";

const ICONS_MAP = {
  Search,
  Target,
  Award,
  Settings,
  TrendingUp,
};

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: any;
}

interface ServicesFrameworkProps {
  title?: string;
  steps?: StepItem[];
}

export default function ServicesFramework({
  title = "From Clarity to Compounding Growth",
  steps,
}: ServicesFrameworkProps) {
  const defaultSteps = [
    {
      number: "01",
      title: "Discover",
      description: "We dive deep into your business, market, and buyers to find what matters.",
      icon: Search,
    },
    {
      number: "02",
      title: "Position",
      description: "We craft a clear, compelling positioning that makes you the obvious choice.",
      icon: Target,
    },
    {
      number: "03",
      title: "Differentiate",
      description: "We build your unique story, messaging, and brand identity that stands out.",
      icon: Award,
    },
    {
      number: "04",
      title: "Systemize",
      description: "We create demand generation systems and processes that drive consistent results.",
      icon: Settings,
    },
    {
      number: "05",
      title: "Scale",
      description: "We optimize, expand, and compound growth across channels and markets.",
      icon: TrendingUp,
    },
  ];

  const activeSteps = steps || defaultSteps;

  return (
    <section className="relative bg-[#05030A] py-20 border-t border-white/5 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-24">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple mb-3">
            OUR PROVEN FRAMEWORK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            {title}
          </h2>
        </div>

        {/* Timeline (Desktop/Tablet: Horizontal Flow) */}
        <div className="hidden md:block relative pt-10 pb-6">
          {/* Running connecting line */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-purple/30 via-fuchsia-500/50 to-brand-purple/30" />

          {/* Steps Grid */}
          <div className="grid grid-cols-5 gap-6 relative">
            {activeSteps.map((step, idx) => {
              const IconComponent = typeof step.icon === "string" ? (ICONS_MAP[step.icon as keyof typeof ICONS_MAP] || Target) : step.icon;
              return (
                <div key={idx} className="group flex flex-col items-center text-center space-y-6">
                  {/* Circle Node */}
                  <div className="relative w-10 h-10 rounded-full bg-black border border-brand-purple/40 group-hover:border-brand-purple flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-white transition-all duration-300 z-10 shadow-[0_0_15px_rgba(128,0,128,0.15)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    {/* Inner glowing core */}
                    <div className="absolute inset-0.5 rounded-full bg-[#0F0A1F] -z-10" />
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#0B0813] border border-white/5 group-hover:border-brand-purple/20 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
                    <IconComponent className="w-5 h-5 text-brand-purple group-hover:text-fuchsia-400 transition-colors" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2 px-2">
                    <h3 className="text-lg font-bold text-white font-display group-hover:text-brand-purple transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[180px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline (Mobile: Vertical Flow) */}
        <div className="md:hidden relative space-y-10 pl-8">
          {/* Running connecting line */}
          <div className="absolute top-4 bottom-4 left-[19px] w-0.5 bg-gradient-to-b from-brand-purple/40 to-brand-purple/20" />

          {activeSteps.map((step, idx) => {
            const IconComponent = typeof step.icon === "string" ? (ICONS_MAP[step.icon as keyof typeof ICONS_MAP] || Target) : step.icon;
            return (
              <div key={idx} className="group relative flex gap-6 items-start">
                
                {/* Node Dot */}
                <div className="absolute left-[-27px] w-8 h-8 rounded-full bg-black border border-brand-purple/40 group-hover:border-brand-purple flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:text-white transition-all duration-300 z-10">
                  <div className="absolute inset-0.5 rounded-full bg-[#0F0A1F] -z-10" />
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#0B0813] border border-white/5 group-hover:border-brand-purple/20 flex items-center justify-center shrink-0">
                  <IconComponent className="w-4 h-4 text-brand-purple group-hover:text-fuchsia-400 transition-colors" />
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white font-display group-hover:text-brand-purple transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
