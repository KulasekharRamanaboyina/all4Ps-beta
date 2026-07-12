"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Target, BarChart3 } from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "all4Ps Founded",
    desc: "Started with a simple mission: help B2B tech companies communicate and grow.",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "Expanded Our Expertise",
    desc: "Built capabilities in branding, demand generation, and marketing automation.",
    icon: Users,
  },
  {
    year: "2025",
    title: "Scaled Across Industries",
    desc: "Partnered with robotics, SaaS, and industrial brands across multiple markets.",
    icon: Target,
  },
  {
    year: "2026",
    title: "Building the Future",
    desc: "Continuing to build growth systems for future-focused companies worldwide.",
    icon: BarChart3,
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative py-24 px-6 lg:px-12 border-t border-brand-purple/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-brand-purple text-xs font-semibold tracking-widest uppercase mb-3">
            Our Journey So Far
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Startup to Growth Partner
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line passing through the centers of the badges on desktop */}
          <div className="absolute top-[5rem] left-[10%] right-[6%] h-[2px] bg-gradient-to-r from-brand-purple/20 via-brand-purple/80 to-brand-purple/20 animate-timeline hidden lg:block">
            {/* Arrow head */}
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 border-t-[2px] border-r-[2px] border-brand-purple/60 rotate-45" />
            
            {/* Moving Light (Spotlight animation) */}
            <div className="absolute -top-[3px] h-2 w-2 rounded-full bg-pink-400 blur-[1.5px] animate-light" />
            
            {/* Intermediate dots */}
            <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-purple/40 shadow-sm shadow-brand-purple/30" />
            <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-purple/40 shadow-sm shadow-brand-purple/30" />
            <div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-purple/40 shadow-sm shadow-brand-purple/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="relative text-center flex flex-col items-center group"
              >
                {/* Year Pill & Badge */}
                <div className="relative z-10 flex flex-col items-center mb-6">
                  {/* Year Pill */}
                  <div className="px-3.5 py-0.5 bg-[#0a0a0f] border border-brand-purple/30 rounded-full mb-4 shadow-md shadow-purple-950/20">
                    <span className="text-[10px] font-bold text-brand-purple tracking-wider">
                      {m.year}
                    </span>
                  </div>

                  {/* Badge Circle (Enlarged and Animated) */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 border border-brand-purple/30 backdrop-blur-sm shadow-lg shadow-purple-950/40 group-hover:border-brand-purple/60 transition-colors duration-300 animate-node"
                  >
                    <m.icon className="w-7 h-7 text-brand-purple animate-icon group-hover:text-pink-400 transition-colors duration-500" />
                  </motion.div>
                </div>

                {/* Mobile/Tablet indicator dot */}
                <div className="absolute top-[5rem] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-purple border-2 border-[#0a0a0f] lg:hidden" />

                <h3 className="text-lg font-bold text-white mb-2.5">
                  {m.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[240px]">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}