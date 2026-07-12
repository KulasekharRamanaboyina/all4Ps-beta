"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { CASE_STUDIES } from "@/app/constants";
import { CaseStudy } from "@/app/types";

interface PortfolioFeaturedProps {
  caseStudy?: CaseStudy;
}

export default function PortfolioFeatured({ caseStudy }: PortfolioFeaturedProps) {
  // Retrieve Unbox Robotics as the default featured case study
  const featured = caseStudy || CASE_STUDIES.find((cs) => cs.id === "unbox") || CASE_STUDIES[0];

  const getCaseStudyMeta = (cs: CaseStudy) => {
    switch (cs.id) {
      case "unbox":
        return {
          challenge: "Low brand visibility in a competitive industrial automation market.",
          approach: "Researched market, built brand strategy, implemented multi-channel demand generation.",
          execution: "New brand identity, website, SEO, paid campaigns & lead nurturing.",
          outcome: "312% growth in organic traffic, ₹32Cr+ pipeline generated, 4.6x ROI achieved.",
          categoryBadge: "GTM & MARKETING STRATEGY",
          desc: "We helped Unbox Robotics establish a powerful market positioning and generate high-intent pipeline through a targeted GTM strategy and demand engine.",
          stats: [
            { label: "Organic Growth", value: "+312%" },
            { label: "Pipeline Generated", value: "₹32Cr+" },
            { label: "Marketing ROI", value: "4.6x" },
          ],
        };
      default:
        return {
          challenge: cs.challenge ? cs.challenge.slice(0, 100) + "..." : "Initial GTM and demand gaps.",
          approach: cs.pillars?.[0]?.title || "Strategic brand positioning.",
          execution: cs.pillars?.[0]?.points?.[0] || "SEO, web structure, messaging.",
          outcome: cs.result || "Measurable commercial growth.",
          categoryBadge: cs.category.toUpperCase(),
          desc: cs.description.slice(0, 180) + "...",
          stats: cs.performanceMetrics?.slice(0, 3).map((m) => ({ label: m.label, value: m.value })) || [
            { label: "Organic Growth", value: "+30%" },
            { label: "Pipeline Generated", value: "₹10Cr+" },
            { label: "Marketing ROI", value: "3.5x" },
          ],
        };
    }
  };

  const meta = getCaseStudyMeta(featured);

  return (
    <section id="featured-case-study" className="relative bg-[#05030A] py-20 border-b border-white/5 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Tagline */}
        <div className="text-center lg:text-left mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple mb-3">
            FEATURED CASE STUDY
          </p>
        </div>

        {/* Dynamic Card Container */}
        <div className="group rounded-3xl border border-white/10 bg-[#0B0813]/60 p-6 md:p-8 transition-all duration-300 hover:border-brand-purple/20 hover:shadow-[0_12px_30px_rgba(128,0,128,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-8 items-center mb-8">
            
            {/* Left Column: Visual player block */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/5 bg-gray-900 group">
              <img
                src={featured.imageUrl}
                alt={featured.client}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />
              
              {/* Play SVG Interactive button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-purple hover:bg-purple-700 text-white flex items-center justify-center shadow-lg shadow-purple-500/30 transition-transform duration-300 transform group-hover:scale-110 active:scale-95 cursor-pointer">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>

            {/* Right Column: Case study description and metrics */}
            <div className="flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Category Badge */}
                <div className="text-xs font-bold text-brand-purple tracking-widest uppercase mb-2">
                  {meta.categoryBadge}
                </div>
                
                {/* Client title */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-1 group-hover:text-brand-purple transition-colors">
                  {featured.client}
                </h3>
                
                {/* Subcategory */}
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">
                  {featured.industry}
                </p>

                {/* Paragraph */}
                <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                  {meta.desc}
                </p>
              </div>

              {/* 3-column metric cards row */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 text-left">
                {meta.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-black text-brand-purple">
                      {stat.value}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Row: structured metadata grid (4 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 border-t border-white/10 pt-6 text-left relative items-end">
            
            {/* Challenge */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple">
                Challenge
              </span>
              <p className="text-xs leading-relaxed text-gray-400 font-medium">
                {meta.challenge}
              </p>
            </div>

            {/* Approach */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple">
                Approach
              </span>
              <p className="text-xs leading-relaxed text-gray-400 font-medium">
                {meta.approach}
              </p>
            </div>

            {/* Execution */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple">
                Execution
              </span>
              <p className="text-xs leading-relaxed text-gray-400 font-medium">
                {meta.execution}
              </p>
            </div>

            {/* Outcome + Right aligned Button */}
            <div className="space-y-4 sm:space-y-0 flex flex-col justify-between h-full">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple">
                  Outcome
                </span>
                <p className="text-xs leading-relaxed text-gray-400 font-medium">
                  {meta.outcome}
                </p>
              </div>
              
              <div className="pt-4 flex sm:justify-end">
                <Link
                  href={`/portfolio/${featured.id}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-brand-purple/40 hover:border-brand-purple text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-purple/10 transition-all duration-300"
                >
                  View Full Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
