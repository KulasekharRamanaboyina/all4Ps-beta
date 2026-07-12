"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const numItems = faqs.length;

  return (
    <div 
      ref={containerRef} 
      className="relative bg-[#05030A] border-t border-white/5" 
      style={{ height: `${numItems * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Giant outline decorative FAQ text background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10">
          <div className="text-[25vw] font-black text-white/[0.015] tracking-widest font-display leading-none">
            FAQS
          </div>
        </div>

        {/* Glowing spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-800/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Static Heading Info */}
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-purple bg-brand-purple/10 px-3.5 py-1 rounded-full">
              <HelpCircle className="w-3.5 h-3.5 text-brand-purple animate-pulse" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display leading-tight">
              Answers to <br className="hidden lg:inline" />
              Your Questions.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed mx-auto lg:mx-0">
              Scroll down to rotate through our answers and learn more about how we work.
            </p>
          </div>

          {/* Right Column: 3D Perspective Card Container */}
          <div 
            className="relative w-full h-[340px] sm:h-[360px] flex items-center justify-center" 
            style={{ perspective: "1500px" }}
          >
            <div 
              className="relative w-full max-w-[500px] h-full" 
              style={{ transformStyle: "preserve-3d" }}
            >
              {faqs.map((faq, idx) => {
                const start = idx / numItems;
                const end = (idx + 1) / numItems;
                const step = 1 / numItems;
                
                // Scroll input range mapping entrance, peak, and exit checks
                const range = [
                  Math.max(0, start - step * 0.4), // entering from bottom
                  start,                           // active peak
                  Math.min(1, end - step * 0.1),   // active peak end
                  Math.min(1, end + step * 0.4)    // exiting upwards
                ];

                // Interpolated 3D transforms
                const rotateX = useTransform(scrollYProgress, range, [75, 0, 0, -75]);
                const translateY = useTransform(scrollYProgress, range, [130, 0, 0, -130]);
                const translateZ = useTransform(scrollYProgress, range, [-150, 0, 0, -150]);
                const scale = useTransform(scrollYProgress, range, [0.85, 1, 1, 0.85]);
                const opacity = useTransform(scrollYProgress, range, [0, 1, 1, 0]);

                return (
                  <motion.div
                    key={idx}
                    style={{
                      rotateX,
                      translateY,
                      translateZ,
                      scale,
                      opacity,
                      transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-0 w-full h-full flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0B0813]/90 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md pointer-events-auto"
                  >
                    {/* Tag badge */}
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-brand-purple bg-brand-purple/10 border border-brand-purple/20 px-2.5 py-1 rounded-md">
                        FAQ {idx < 9 ? `0${idx + 1}` : idx + 1}
                      </span>
                    </div>

                    {/* Question and Answer */}
                    <div className="space-y-4 my-auto">
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white leading-snug">
                        {faq.q}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </div>

                    {/* Bottom Progress Accent */}
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-purple to-fuchsia-400"
                        style={{ width: `${((idx + 1) / numItems) * 100}%` }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

