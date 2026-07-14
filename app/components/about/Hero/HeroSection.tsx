"use client";

import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  scrollYProgress: any;
}

export default function HeroSection({ scrollYProgress }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const handleScrollToFounder = () => {
    document.getElementById("founder-card")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTeam = () => {
    document.getElementById("team-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] pt-20 pb-16 md:pt-24 px-6 lg:px-12 flex flex-col justify-start items-center overflow-hidden bg-transparent"
    >

      {/* Scrollable Hero Content Container */}
      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl w-full mx-auto flex flex-col justify-between items-center text-center min-h-[72vh] md:min-h-[76vh] z-10"
      >
        {/* Main Content Wrapper */}
        <div className="flex flex-col items-center w-full">
          {/* Spacer — navbar is 64px fixed, layout adds pt-16 */}
          <div className="h-4 md:h-6" />

          {/* About Badge */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6 text-brand-purple"
          >
            About all4Ps
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] text-white tracking-tight mb-8"
          >
            We Turn Complexity <br />
            Into{" "}
            <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
              Commercial Growth.
            </span>
          </motion.h1>

          {/* Subheading Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mb-12 px-4"
          >
            We help deep-tech companies clarify their value, connect with the right buyers,{" "}
            <br className="hidden md:inline" />
            and build systems that generate predictable revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={handleScrollToFounder}
              className="group bg-brand-purple hover:bg-purple-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
            >
              Discover Our Story
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={handleScrollToTeam}
              className="group border border-gray-700 hover:border-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base font-semibold text-white transition flex items-center justify-center gap-2"
            >
              Meet Our Team
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={handleScrollToFounder}
          className="flex flex-col items-center gap-3 group cursor-pointer pointer-events-auto pb-4"
        >
          <div
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all"
            style={{ borderColor: "rgba(128,0,128,0.25)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(128,0,128,0.5)";
              e.currentTarget.style.background = "rgba(128,0,128,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(128,0,128,0.25)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <ChevronDown className="w-4 h-4 transition-all group-hover:translate-y-0.5" style={{ color: "#800080" }} />
          </div>
          <span className="text-[10px] tracking-[0.25em] text-gray-500 font-semibold group-hover:text-gray-400 transition-colors">
            SCROLL TO EXPLORE
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}