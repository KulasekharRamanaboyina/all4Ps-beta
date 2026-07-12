"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredStudies = [
  {
    id: "unbox",
    client: "Unbox Robotics",
    image: "/images/portfolio/unbox.webp",
    metadata: {
      challenge: "Low brand visibility in a competitive industrial robotics market.",
      approach: "Re-positioned brand, built content engine & demand systems.",
      execution: "SEO, Content, LinkedIn, and Paid Campaigns.",
      outcome: "+312% Organic Growth & ₹32Cr+ Pipeline Influenced.",
    }
  },
  {
    id: "motherson",
    client: "ROBIS Motherson",
    image: "/images/portfolio/motherson.webp",
    metadata: {
      challenge: "Limited digital presence and GTM alignment for commercial robotics.",
      approach: "Brand refresh, strategy-led GTM and web redesign.",
      execution: "Website development, SEO, Content, and Lead Automation.",
      outcome: "FY26 GTM Strategy Launched & Global Product Launch Enabled.",
    }
  },
  {
    id: "panchayath",
    client: "Panchayath App",
    image: "/images/portfolio/panchayath.webp",
    metadata: {
      challenge: "Low adoption and communication gaps between citizens and local bodies.",
      approach: "User-centric messaging and localized community engagement strategy.",
      execution: "Content creation, Social media, and Community Outreach.",
      outcome: "1,000+ App Installs & Higher Citizen Engagement.",
    }
  }
];

export default function ServicesCaseStudies() {
  return (
    <section className="relative bg-black text-white py-20 border-t border-white/5 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple mb-3">
              OUR STUDIES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Real Challenges.{" "}
              <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
                Real Results.
              </span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-purple-400 transition shrink-0"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Columns Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredStudies.map((study) => (
            <div key={study.id} className="group flex flex-col justify-between space-y-6">
              
              {/* Image & Title Card */}
              <div className="space-y-4">
                <Link
                  href={`/portfolio/${study.id}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg"
                >
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40" />
                </Link>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {study.client}
                </h3>
              </div>

              {/* 4-column metadata list */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-4 text-left">
                {/* Challenge */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-purple">
                    Challenge
                  </span>
                  <p className="text-[11px] leading-relaxed text-gray-400 font-medium">
                    {study.metadata.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-purple">
                    Approach
                  </span>
                  <p className="text-[11px] leading-relaxed text-gray-400 font-medium">
                    {study.metadata.approach}
                  </p>
                </div>

                {/* Execution */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-purple">
                    Execution
                  </span>
                  <p className="text-[11px] leading-relaxed text-gray-400 font-medium">
                    {study.metadata.execution}
                  </p>
                </div>

                {/* Outcome */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-purple">
                    Outcome
                  </span>
                  <p className="text-[11px] leading-relaxed text-gray-400 font-medium">
                    {study.metadata.outcome}
                  </p>
                </div>
              </div>

              {/* Link button */}
              <div className="pt-2">
                <Link
                  href={`/portfolio/${study.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple group-hover:text-purple-400 transition"
                >
                  Read Case Study
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
