"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section id="featured-case-study" className="relative bg-transparent py-20 border-b border-white/5 overflow-hidden">
      {/* Dynamic dual-color background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.04),transparent_60%)] pointer-events-none" />

      {/* Background SVG particles and decorative wave paths */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 select-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Animated floating particles / dots */}
          <circle cx="10%" cy="20%" r="2" fill="#A855F7" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }} />
          <circle cx="85%" cy="15%" r="3" fill="#EC4899" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />
          <circle cx="45%" cy="80%" r="1.5" fill="#A855F7" className="animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
          <circle cx="90%" cy="75%" r="2" fill="#EC4899" className="animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }} />
          <circle cx="20%" cy="70%" r="2.5" fill="#8B5CF6" className="animate-pulse" style={{ animationDelay: '3s', animationDuration: '5s' }} />
          <circle cx="65%" cy="30%" r="1.5" fill="#D946EF" className="animate-pulse" style={{ animationDelay: '0.2s', animationDuration: '2.2s' }} />
          <circle cx="75%" cy="85%" r="2" fill="#A855F7" className="animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '4.5s' }} />
          <circle cx="35%" cy="40%" r="3" fill="#EC4899" className="animate-pulse" style={{ animationDelay: '1.8s', animationDuration: '3.8s' }} />
          
          {/* Subtle grid lines or design elements */}
          <path d="M 0 50 Q 250 150 500 50 T 1000 50" fill="none" stroke="rgba(168,85,247,0.04)" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M 100 150 Q 400 50 700 150 T 1200 150" fill="none" stroke="rgba(236,72,153,0.03)" strokeWidth="1.5" strokeDasharray="10,5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Tagline */}
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple mb-3">
            FEATURED CASE STUDY
          </p>
        </div>

        {/* Dynamic Card Container with Glassmorphism and Top Border Glow */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#12081F]/40 to-[#07050D]/60 p-6 md:p-8 transition-all duration-500 hover:border-brand-purple/30 hover:shadow-[0_20px_50px_rgba(128,0,128,0.12)]">
          {/* Top highlight gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-brand-purple/50 via-fuchsia-400 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Top Section: Image and Core Details */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-8 lg:gap-12 items-stretch mb-8">
            
            {/* Left Column: Visual player block */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl">
              <img
                src={featured.imageUrl}
                alt={featured.client}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Right Column: Case study description and metrics */}
            <div className="flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] font-extrabold text-brand-purple tracking-widest uppercase bg-brand-purple/10 px-2.5 py-1 rounded-md">
                    {meta.categoryBadge}
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md">
                    {featured.industry}
                  </span>
                </div>
                
                {/* Client title */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-purple group-hover:to-fuchsia-400 transition-all duration-300">
                  {featured.client}
                </h3>

                {/* Paragraph */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {meta.desc}
                </p>
              </div>

              {/* 3-column metric cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/5 pt-6 text-left">
                {meta.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1 group/metric">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent transition-all duration-300 group-hover/metric:scale-105 origin-left">
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

          {/* Bottom Section: Structured Metadata (Clean text columns divided by thin lines) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-8 text-left mb-8">
            
            {/* Challenge */}
            <div className="border-l-2 border-brand-purple/20 hover:border-brand-purple/60 pl-4 space-y-1.5 transition-colors duration-300">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple">
                Challenge
              </span>
              <p className="text-xs leading-relaxed text-gray-400 font-medium">
                {meta.challenge}
              </p>
            </div>

            {/* Approach */}
            <div className="border-l-2 border-brand-purple/20 hover:border-brand-purple/60 pl-4 space-y-1.5 transition-colors duration-300">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple">
                Approach
              </span>
              <p className="text-xs leading-relaxed text-gray-400 font-medium">
                {meta.approach}
              </p>
            </div>

            {/* Execution */}
            <div className="border-l-2 border-brand-purple/20 hover:border-brand-purple/60 pl-4 space-y-1.5 transition-colors duration-300">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple">
                Execution
              </span>
              <p className="text-xs leading-relaxed text-gray-400 font-medium">
                {meta.execution}
              </p>
            </div>

            {/* Outcome */}
            <div className="border-l-2 border-brand-purple/20 hover:border-brand-purple/60 pl-4 space-y-1.5 transition-colors duration-300">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple">
                Outcome
              </span>
              <p className="text-xs leading-relaxed text-gray-400 font-medium">
                {meta.outcome}
              </p>
            </div>

          </div>

          {/* Action Row */}
          <div className="flex justify-center sm:justify-end pt-4 border-t border-white/5">
            <Link
              href={`/portfolio/${featured.id}`}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-fuchsia-400 font-bold text-xs sm:text-sm tracking-wider uppercase text-white shadow-lg shadow-purple-500/20 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)] transition-all duration-300 text-center"
            >
              View Full Case Study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
