"use client";

import { SERVICES } from "../../../constants";
import ServiceCard from "./ServiceCard";

const SERVICE_CATEGORIES = [
  {
    title: "Build Authority",
    subtitle: "Establish your brand as a trusted leader with clarity, credibility, and impact.",
    serviceIds: ["brand-strategy", "positioning-messaging", "thought-leadership", "content-marketing"]
  },
  {
    title: "Generate Demand",
    subtitle: "Create predictable demand and a strong pipeline of high-quality opportunities.",
    serviceIds: ["demand-generation", "abm", "campaign-execution", "marketing-automation"]
  },
  {
    title: "Accelerate Growth",
    subtitle: "Optimize performance and scale what works to drive measurable growth.",
    serviceIds: ["seo-visibility", "website-optimisation", "analytics-reporting", "gtm-execution"]
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-transparent pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-fuchsia-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6">

        {/* Section Header */}
        <div className="mb-6 md:mb-10 text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-purple">
            GROWTH CAPABILITIES
          </p>
          <h2 className="max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white font-display tracking-tight">
            Everything You Need to <br />
            <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
              Scale Faster.
            </span>
          </h2>
        </div>

        {/* Categories Rows */}
        <div className="space-y-16">
          {SERVICE_CATEGORIES.map((category, catIdx) => {
            // Find services matching this category's IDs
            const categoryServices = SERVICES.filter(s => category.serviceIds.includes(s.id));

            return (
              <div key={catIdx} className="space-y-6">
                {/* Category Header Label */}
                <div className="border-b border-white/5 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1 max-w-2xl leading-relaxed">
                      {category.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/20 w-fit">
                    Pillar 0{catIdx + 1}
                  </span>
                </div>

                {/* 4-column Grid for this category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}