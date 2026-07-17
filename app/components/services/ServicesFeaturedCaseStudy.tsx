"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/app/types";

interface ServicesFeaturedCaseStudyProps {
  caseStudy: CaseStudy;
}

const CASE_STUDY_METRICS: Record<string, { value: string; label: string }> = {
  unbox: { value: "+312%", label: "Organic Growth" },
  motherson: { value: "FY26", label: "GTM Launched" },
  anscer: { value: "$1M+", label: "Revenue Sourced" },
  anzo: { value: "+30%", label: "Traffic Uplift" },
  kloudlite: { value: "Juspay", label: "Enterprise Wins" },
  synergy: { value: "~100", label: "Google Calls/Unit" },
  xpstays: { value: "7.5x", label: "Campaign ROAS" },
  panchayath: { value: "1,000+", label: "App Installs" },
};

export default function ServicesFeaturedCaseStudy({ caseStudy }: ServicesFeaturedCaseStudyProps) {
  // Safe metadata mapper to display professional copywriting matching mockup
  const getCaseStudyMeta = (cs: CaseStudy) => {
    switch (cs.id) {
      case "unbox":
        return {
          challenge: "Low brand visibility in a competitive industrial robotics market.",
          approach: "Re-positioned brand, built content engine & demand systems.",
          execution: "SEO, Content, LinkedIn, and Paid Campaigns.",
          outcome: "+312% Organic Growth & ₹32Cr+ Pipeline Influenced.",
        };
      case "motherson":
        return {
          challenge: "Limited digital presence and GTM alignment for commercial robotics.",
          approach: "Brand refresh, strategy-led GTM and web redesign.",
          execution: "Website development, SEO, Content, and Lead Automation.",
          outcome: "FY26 GTM Strategy Launched & Global Product Launch Enabled.",
        };
      case "anscer":
        return {
          challenge: "Strengthen brand presence, generate high-quality leads, and align marketing with sales.",
          approach: "Integrated marketing strategy & SEO-focused content optimization.",
          execution: "Case studies, PR, blogs, social calendars, and event support.",
          outcome: "$1M+ Revenue influenced & 75% rise in qualified leads.",
        };
      case "anzo":
        return {
          challenge: "Weak online presence and search visibility in competitive industrial automation.",
          approach: "Content marketing framework focused on developer and decision-maker search queries.",
          execution: "SEO-optimized blogs, standard blog templates, and team enablement training.",
          outcome: "~30% uplift in social & web traffic and sustained lead generation.",
        };
      case "kloudlite":
        return {
          challenge: "Build a strong developer brand presence and drive adoption for pre-seed GTM.",
          approach: "Open-source developer-first branding & community-led growth.",
          execution: "Website UX redesign, Discord community building, product demo videos.",
          outcome: "Enterprise leads converted (Juspay, Razorpay) & 250+ Discord members.",
        };
      case "synergy":
        return {
          challenge: "Improve local visibility and lead generation for multiple franchise units.",
          approach: "Localized search engine optimization and online directory presence.",
          execution: "Google My Business listings, local SEO backlinks, and review management.",
          outcome: "Google calls grew to ~100 per unit & 50%+ local traffic increase.",
        };
      case "xpstays":
        return {
          challenge: "Maximize bookings and drive holiday sales within an efficient ad budget.",
          approach: "Targeted seasonal paid ads & performance marketing optimization.",
          execution: "Dussehra–Christmas campaigns, holiday offer sheets, lead generation forms.",
          outcome: "~7.5× ROAS achieved with ₹45K revenue from ₹6K spend.",
        };
      case "panchayath":
        return {
          challenge: "Low citizen engagement and mobile app downloads in targeted local regions.",
          approach: "Localized citizen awareness and influencer-supported distribution.",
          execution: "App website redesign, localized social campaigns, influencer outreach.",
          outcome: "1,000+ app installs and higher overall citizen engagement.",
        };
      default:
        return {
          challenge: cs.challenge ? cs.challenge.slice(0, 80) + "..." : "Initial GTM and demand gaps.",
          approach: cs.pillars?.[0]?.title || "Strategic brand positioning.",
          execution: cs.pillars?.[0]?.points?.[0] || "SEO, web structure, messaging.",
          outcome: cs.result || "Measurable commercial growth.",
        };
    }
  };

  const meta = getCaseStudyMeta(caseStudy);
  const statMetric = CASE_STUDY_METRICS[caseStudy.id] || { value: "Impact", label: "Delivered" };

  return (
    <section className="relative bg-transparent text-white py-20 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple mb-3">
              CASE STUDY
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

        {/* Cardless Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Image */}
          <Link
            href={`/portfolio/${caseStudy.id}`}
            className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/5 hover:border-brand-purple/20 transition-colors duration-300 group"
          >
            <img
              src={caseStudy.imageUrl}
              alt={caseStudy.client}
              className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-45" />
          </Link>

          {/* Right Column: Case study details (Text-based, zero boxes) */}
          <div className="flex flex-col justify-between h-full space-y-5 text-left">
            
            {/* Header Details */}
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
                {caseStudy.client}
              </h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.15em] font-mono">
                {caseStudy.industry}
              </p>
              {/* Highlight outcome stat as a premium gradient sub-headline */}
              <p className="text-base sm:text-lg lg:text-xl font-extrabold bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent pt-1 leading-normal">
                {meta.outcome}
              </p>
            </div>
            
            {/* Open Metadata List (Challenge, Approach, Execution) */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              {[
                { label: "Challenge", value: meta.challenge },
                { label: "Approach",  value: meta.approach  },
                { label: "Execution", value: meta.execution },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] w-24 shrink-0 sm:pt-0.5 text-gray-500">
                    {label}
                  </span>
                  <p className="text-sm leading-relaxed text-gray-300 font-medium">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Clean Text Action Link */}
            <div className="pt-2">
              <Link
                href={`/portfolio/${caseStudy.id}`}
                className="group/btn inline-flex items-center gap-2 text-sm font-extrabold text-brand-purple hover:text-fuchsia-400 transition-colors duration-300 border-b border-brand-purple/10 hover:border-fuchsia-400/30 pb-0.5"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
