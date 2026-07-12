"use client";

import Link from "next/link";
import { ArrowRight, Zap, Target, TrendingUp, BarChart2 } from "lucide-react";

interface ServicesHeroProps {
  title?: string;
  description?: string;
  badges?: string[];
  breadcrumbs?: { label: string; link?: string }[];
}

export default function ServicesHero({
  title = "Services",
  description = "Strategy-led B2B growth services designed to turn clarity into pipeline, revenue, and long-term scale.",
  badges = ["Clear Positioning", "Demand Generation", "Scalable Results", "Growth Systems"],
  breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
  ],
}: ServicesHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white pt-24 pb-20 md:py-32">

      {/* Background glow overlay */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_70%_20%,rgba(128,0,128,0.25),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_0%_50%,rgba(128,0,128,0.1),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="inline-block">
              <ol className="flex items-center justify-center lg:justify-start gap-2 text-xs md:text-sm text-gray-400 font-medium">
                {breadcrumbs.map((crumb, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {crumb.link ? (
                      <Link href={crumb.link} className="hover:text-white transition">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white font-semibold">{crumb.label}</span>
                    )}
                    {idx < breadcrumbs.length - 1 && <span>/</span>}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Subtitle tag */}
            <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple">
              {title}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display leading-[1.1] max-w-2xl mx-auto lg:mx-0">
              The Strongest Brands Aren&apos;t Louder. <br className="hidden md:inline" />
              <span className="bg-gradient-to-r from-brand-purple via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                They&apos;re Clearer.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-brand-purple hover:bg-purple-700 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-4 rounded-xl border border-gray-700 hover:border-white text-white font-bold text-sm tracking-wider uppercase transition-colors"
              >
                Explore Our Work
              </Link>
            </div>
          </div>

          {/* Right Column - Premium SVG Pen and Orbits Illustration */}
          <div className="relative flex justify-center items-center h-[380px] sm:h-[460px] md:h-[500px]">
            {/* The Floating Container */}
            <div className="relative w-full h-full max-w-[400px] animate-float-slow flex items-center justify-center">
              
              {/* Star Background layer */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_70%)] pointer-events-none" />

              {/* Orbits SVG Graphic */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Orbital loops */}
                <ellipse cx="200" cy="200" rx="140" ry="50" transform="rotate(-30 200 200)" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1.5" fill="none" />
                <ellipse cx="200" cy="200" rx="170" ry="70" transform="rotate(20 200 200)" stroke="rgba(168, 85, 247, 0.12)" strokeWidth="1.5" fill="none" />
                <ellipse cx="200" cy="200" rx="190" ry="90" transform="rotate(-65 200 200)" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1" fill="none" />
                
                {/* Orbit path highlights */}
                <ellipse cx="200" cy="200" rx="140" ry="50" transform="rotate(-30 200 200)" stroke="url(#orbit-glow-1)" strokeWidth="2" strokeDasharray="30 250" fill="none" className="animate-orbit-line" />
                <ellipse cx="200" cy="200" rx="170" ry="70" transform="rotate(20 200 200)" stroke="url(#orbit-glow-2)" strokeWidth="2" strokeDasharray="40 300" fill="none" className="animate-orbit-line" style={{ animationDirection: 'reverse', animationDuration: '45s' }} />

                {/* SVG Fountain Pen Nib Tip */}
                <g transform="translate(145, 100)" className="drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
                  {/* Nib body */}
                  <path d="M55,0 L35,160 L15,190 L53,230 L55,230 L57,230 L95,190 L75,160 Z" fill="url(#nib-metal)" />
                  {/* Gold trim side highlights */}
                  <path d="M35,160 L15,190 L25,170 Z" fill="rgba(232, 121, 249, 0.5)" />
                  <path d="M75,160 L95,190 L85,170 Z" fill="rgba(232, 121, 249, 0.5)" />
                  {/* Pen center split line */}
                  <line x1="55" y1="0" x2="55" y2="155" stroke="rgba(0,0,0,0.8)" strokeWidth="2.5" />
                  <line x1="55" y1="0" x2="55" y2="155" stroke="rgba(168,85,247,0.8)" strokeWidth="1" />
                  {/* Nib breather hole */}
                  <circle cx="55" cy="155" r="4.5" fill="black" stroke="rgba(168,85,247,0.8)" strokeWidth="1.5" />
                  {/* Tines details */}
                  <path d="M55,160 C53,190 40,210 53,222 L55,224 L57,222 C70,210 57,190 55,160 Z" fill="url(#nib-glowing-core)" opacity="0.9" />
                </g>

                {/* Gradients */}
                <defs>
                  <linearGradient id="nib-metal" x1="55" y1="0" x2="55" y2="230" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3B0764" />
                    <stop offset="50%" stopColor="#701A75" />
                    <stop offset="75%" stopColor="#4A044E" />
                    <stop offset="100%" stopColor="#1E1B4B" />
                  </linearGradient>
                  <linearGradient id="nib-glowing-core" x1="55" y1="160" x2="55" y2="224" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E879F9" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                  <linearGradient id="orbit-glow-1" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="orbit-glow-2" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating badges overlayed at coordinates */}
              {/* Badge 1 (Top Left) */}
              <div className="absolute top-[18%] left-[2%] md:left-[-5%] px-4 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] select-none">
                <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0">
                  <Target className="w-3.5 h-3.5 text-brand-purple" />
                </div>
                <span className="text-xs md:text-sm font-semibold tracking-wide text-white">{badges[0]}</span>
              </div>

              {/* Badge 2 (Middle Right) */}
              <div className="absolute top-[32%] right-[-8%] md:right-[-12%] px-4 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] select-none">
                <div className="w-5 h-5 rounded-full bg-fuchsia-500/20 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 text-fuchsia-400" />
                </div>
                <span className="text-xs md:text-sm font-semibold tracking-wide text-white">{badges[1]}</span>
              </div>

              {/* Badge 3 (Bottom Left) */}
              <div className="absolute bottom-[26%] left-[-2%] md:left-[-8%] px-4 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] select-none">
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <BarChart2 className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <span className="text-xs md:text-sm font-semibold tracking-wide text-white">{badges[2]}</span>
              </div>

              {/* Badge 4 (Bottom Right) */}
              <div className="absolute bottom-[16%] right-[5%] md:right-[-2%] px-4 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] select-none">
                <div className="w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-3.5 h-3.5 text-pink-400" />
                </div>
                <span className="text-xs md:text-sm font-semibold tracking-wide text-white">{badges[3]}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
