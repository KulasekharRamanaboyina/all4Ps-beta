"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { CASE_STUDIES } from "@/app/constants";
import { CaseStudy } from "@/app/types";

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "GTM & Marketing Strategy",
    "End to End Marketing",
    "Social Media",
    "Content Marketing",
    "SEO & SEM",
    "Performance Marketing",
  ];

  // We filter items based on activeCategory
  const filteredStudies =
    activeCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter(
          (cs) => cs.category.toLowerCase().trim() === activeCategory.toLowerCase().trim()
        );

  return (
    <section id="all-case-studies" className="relative bg-transparent py-16 border-b border-white/5 overflow-hidden">
      {/* Dual ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.03),transparent_65%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple mb-3">
            MORE CASE STUDIES
          </p>
        </div>

        {/* Filter bar section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 border-b border-white/5 pb-8">
          <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest select-none">
            <Filter className="w-3.5 h-3.5 mr-2 text-brand-purple" />
            Filter by:
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    isActive
                      ? "bg-[#800080] border-[#800080] text-white shadow-md shadow-purple-500/20"
                      : "bg-[#0B0813] border-white/10 text-gray-400 hover:border-brand-purple/40 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredStudies.map((study: CaseStudy) => (
            <div
              key={study.id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0B0813]/40 flex flex-col justify-between transition-all duration-300 hover:border-brand-purple/20 hover:shadow-[0_8px_25px_rgba(128,0,128,0.05)]"
            >
              {/* Dynamic light rays hover effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.02),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Top Image & Badge wrapper */}
                <Link
                  href={`/portfolio/${study.id}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-gray-900 border-b border-white/5"
                >
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider text-white select-none">
                    {study.category}
                  </div>
                </Link>

                {/* Body Content */}
                <div className="p-5 space-y-2">
                  <h4 className="text-lg font-bold text-white font-display group-hover:text-brand-purple transition-colors">
                    <Link href={`/portfolio/${study.id}`}>{study.client}</Link>
                  </h4>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                    {study.industry}
                  </p>
                </div>
              </div>

              {/* Bottom key result linking action */}
              <div className="px-5 pb-5 pt-2">
                <Link
                  href={`/portfolio/${study.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 transition"
                >
                  {study.result}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStudies.length === 0 && (
          <div className="text-center py-24 rounded-3xl border border-white/5 bg-[#0B0813]/20">
            <p className="text-base text-gray-500 italic font-medium">
              No case studies found for &ldquo;{activeCategory}&rdquo;.
            </p>
          </div>
        )}



      </div>
    </section>
  );
}
