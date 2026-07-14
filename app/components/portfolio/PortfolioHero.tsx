"use client";

import Link from "next/link";
import { ArrowRight, BarChart2, TrendingUp, DollarSign } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-transparent text-white pt-20 pb-20 md:pt-24 md:pb-28">
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_70%_20%,rgba(128,0,128,0.2),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_0%_50%,rgba(128,0,128,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple">
              OUR WORK. REAL IMPACT.
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display leading-[1.1] max-w-2xl mx-auto lg:mx-0">
              We Turn Strategy <br className="hidden sm:inline" />
              Into{" "}
              <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
                Measurable Results.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
              Explore how we&apos;ve helped businesses across industries grow smarter, faster, and stronger.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="#featured-case-study"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-brand-purple hover:bg-purple-700 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                View Featured Case Study
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#all-case-studies"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-4 rounded-xl border border-gray-700 hover:border-white text-white font-bold text-sm tracking-wider uppercase transition-colors"
              >
                See All Work
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup */}
          <div className="relative flex justify-center items-center h-[380px] sm:h-[420px] md:h-[450px]">
            {/* Star glow effect in back */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.06),transparent_70%)] pointer-events-none" />

            {/* Floating Visual Container */}
            <div className="relative w-full max-w-[380px] space-y-6 animate-float-slow">
              
              {/* Dashboard Result Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0813]/85 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
                {/* Accent glow line on top border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple to-fuchsia-400" />
                
                {/* Section tag */}
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded-full mb-4">
                  FEATURED RESULT
                </span>

                {/* Metrics list */}
                <div className="space-y-4">
                  {/* Metric 1 */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-brand-purple" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">Pipeline Generated</span>
                    </div>
                    <span className="text-xl font-extrabold text-white">₹32Cr+</span>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                        <BarChart2 className="w-4 h-4 text-fuchsia-400" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">Marketing ROI</span>
                    </div>
                    <span className="text-xl font-extrabold text-white">4.6x</span>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-pink-400" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">Organic Growth</span>
                    </div>
                    <span className="text-xl font-extrabold text-white">+312%</span>
                  </div>
                </div>
              </div>

              {/* Chart Line Card Overlay */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0813]/85 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
                
                {/* SVG Neon Line Chart */}
                <div className="relative h-20 w-full flex items-end">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Fill Area */}
                    <path d="M 0 80 Q 50 65 100 70 T 200 45 T 300 10 L 300 80 Z" fill="url(#chart-glow)" />
                    {/* Stroke line */}
                    <path d="M 0 80 Q 50 65 100 70 T 200 45 T 300 10" fill="none" stroke="#E879F9" strokeWidth="3.5" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(232,121,249,0.7)]" />
                    {/* Highlight Dot */}
                    <circle cx="300" cy="10" r="5" fill="#FFFFFF" className="drop-shadow-[0_0_6px_#F472B6]" />
                  </svg>
                </div>

                {/* Sub info overlay */}
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Projects Delivered</span>
                  <div className="text-lg font-black text-white bg-brand-purple/20 border border-brand-purple/30 px-3 py-0.5 rounded-full shadow-[0_0_12px_rgba(128,0,128,0.2)]">
                    50+
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
