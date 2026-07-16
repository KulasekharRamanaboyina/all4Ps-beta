"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-transparent text-white pt-20 pb-20 md:pt-24 md:pb-28">
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_70%_20%,rgba(128,0,128,0.2),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_0%_50%,rgba(128,0,128,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Centered Column: Heading and CTAs */}
        <div className="space-y-6 md:space-y-8 max-w-3xl flex flex-col items-center">
          {/* Tagline */}
          <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple">
            OUR WORK. REAL IMPACT.
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.1] max-w-2xl mx-auto">
            We Turn Strategy <br className="hidden sm:inline" />
            Into{" "}
            <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
              Measurable Results.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mx-auto">
            Explore how we&apos;ve helped businesses across industries grow smarter, faster, and stronger.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 items-center">
            <Link
              href="#featured-case-study"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-brand-purple hover:bg-purple-700 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] text-center"
            >
              View Featured Case Study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#all-case-studies"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 rounded-xl border border-gray-700 hover:border-white text-white font-bold text-sm tracking-wider uppercase transition-colors text-center"
            >
              See All Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
