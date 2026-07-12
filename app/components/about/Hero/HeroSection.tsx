"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Megaphone,
  Settings,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react";
import StatCard from "../Stats/Statcard";

const stats = [
  { label: "Pipeline Influenced", value: "₹32Cr+", icon: TrendingUp, color: "from-purple-500/20 to-purple-900/20" },
  { label: "Organic Growth", value: "+312%", icon: BarChart3, color: "from-purple-500/20 to-purple-900/20" },
  { label: "Qualified Leads", value: "+280%", icon: Users, color: "from-purple-500/20 to-purple-900/20" },
  { label: "Marketing ROI", value: "4.6x", icon: Target, color: "from-purple-500/20 to-purple-900/20" },
];

const highlights = [
  { icon: Target, text: "Clarity that builds trust" },
  { icon: Megaphone, text: "Marketing that drives pipeline" },
  { icon: Settings, text: "Systems that scale growth" },
];

export default function HeroSection({ scrollYProgress }: { scrollYProgress: any }) {
  const ref = useRef(null);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen pt-32 pb-20 px-6 lg:px-12">
      {/* Background Globe Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-600/10 via-purple-600/5 to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full border border-purple-500/10" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full border border-purple-500/5 scale-125" />
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4"
            >
              About all4Ps
            </motion.p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
              The Story Behind{" "}
              <span className="bg-gradient-to-r from-brand-purple to-pink-500 bg-clip-text text-transparent">
                all4Ps
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg mb-10">
              We help deep-tech companies turn complexity into clarity, and
              clarity into consistent revenue growth.
            </p>

            {/* Highlights with dividers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-brand-purple/15 pt-8 mt-12">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 text-sm text-gray-300 md:border-r border-brand-purple/15 last:border-r-0 md:pr-4"
                >
                  <div className="w-9 h-9 rounded-full border border-brand-purple/25 flex items-center justify-center bg-brand-purple/5 flex-shrink-0">
                    <item.icon className="w-4 h-4 text-brand-purple" />
                  </div>
                  <span className="leading-tight font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats + Custom Silhouettes & Network Globe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[550px] w-full flex items-center justify-center"
          >
            {/* Interactive Network Globe + Team Silhouettes SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              {/* Glowing Purple Orb */}
              <div className="absolute w-[400px] h-[400px] rounded-full bg-brand-purple/15 blur-[100px] animate-pulse" />

              {/* Network Globe Mesh */}
              <svg className="w-[420px] h-[420px] text-brand-purple/20" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                
                <ellipse cx="100" cy="100" rx="80" ry="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <ellipse cx="100" cy="100" rx="25" ry="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <ellipse cx="100" cy="100" rx="80" ry="12" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <ellipse cx="100" cy="100" rx="12" ry="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />

                <line x1="50" y1="50" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
                <line x1="100" y1="20" x2="150" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <line x1="150" y1="50" x2="150" y2="150" stroke="currentColor" strokeWidth="0.5" />
                <line x1="150" y1="150" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" />
                <line x1="100" y1="180" x2="50" y2="150" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="150" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                
                <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
                <line x1="50" y1="100" x2="150" y2="100" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />

                <circle cx="100" cy="20" r="1.5" className="fill-brand-purple" />
                <circle cx="50" cy="50" r="1.5" className="fill-pink-500" />
                <circle cx="150" cy="50" r="1.5" className="fill-brand-purple" />
                <circle cx="150" cy="150" r="1.5" className="fill-pink-500" />
                <circle cx="50" cy="150" r="1.5" className="fill-brand-purple/80" />
                <circle cx="100" cy="180" r="1.5" className="fill-brand-purple" />
              </svg>

              {/* SVG Silhouettes of 5 Team Members */}
              <svg className="absolute bottom-4 w-[380px] h-[300px]" viewBox="0 0 200 160">
                <defs>
                  <linearGradient id="silh-grad-1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b0764" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#120024" />
                    <stop offset="100%" stopColor="#05030a" />
                  </linearGradient>
                  <linearGradient id="silh-grad-center" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#581c87" stopOpacity="0.85" />
                    <stop offset="55%" stopColor="#1a0033" />
                    <stop offset="100%" stopColor="#05030a" />
                  </linearGradient>
                </defs>

                {/* Silhouette 1 (Far Left) */}
                <g className="opacity-70">
                  <ellipse cx="40" cy="98" rx="8" ry="8" fill="url(#silh-grad-1)" stroke="#800080" strokeWidth="0.5" />
                  <path d="M 24,160 Q 24,122 40,117 Q 56,122 56,160 Z" fill="url(#silh-grad-1)" stroke="#800080" strokeWidth="0.5" />
                </g>

                {/* Silhouette 5 (Far Right) */}
                <g className="opacity-70">
                  <ellipse cx="160" cy="100" rx="7.5" ry="7.5" fill="url(#silh-grad-1)" stroke="#800080" strokeWidth="0.5" />
                  <path d="M 145,160 Q 145,124 160,119 Q 175,124 175,160 Z" fill="url(#silh-grad-1)" stroke="#800080" strokeWidth="0.5" />
                </g>

                {/* Silhouette 2 (Middle Left) */}
                <g className="opacity-85">
                  <ellipse cx="72" cy="82" rx="10" ry="10" fill="url(#silh-grad-1)" stroke="#800080" strokeOpacity="0.8" strokeWidth="0.5" />
                  <path d="M 54,160 Q 54,106 72,101 Q 90,106 90,160 Z" fill="url(#silh-grad-1)" stroke="#800080" strokeOpacity="0.8" strokeWidth="0.5" />
                </g>

                {/* Silhouette 4 (Middle Right) */}
                <g className="opacity-85">
                  <ellipse cx="128" cy="85" rx="9.5" ry="9.5" fill="url(#silh-grad-1)" stroke="#800080" strokeOpacity="0.8" strokeWidth="0.5" />
                  <path d="M 111,160 Q 111,110 128,105 Q 145,110 145,160 Z" fill="url(#silh-grad-1)" stroke="#800080" strokeOpacity="0.8" strokeWidth="0.5" />
                </g>

                {/* Silhouette 3 (Center - tallest) */}
                <g className="relative z-10">
                  <ellipse cx="100" cy="68" rx="11.5" ry="11.5" fill="url(#silh-grad-center)" stroke="#800080" strokeOpacity="0.9" strokeWidth="0.75" />
                  <path d="M 78,160 Q 78,92 100,85 Q 122,92 122,160 Z" fill="url(#silh-grad-center)" stroke="#800080" strokeOpacity="0.9" strokeWidth="0.75" />
                  <ellipse cx="100" cy="68" rx="11.5" ry="11.5" fill="none" stroke="#800080" strokeOpacity="0.5" strokeWidth="0.3" strokeDasharray="6 12" />
                </g>
              </svg>
            </div>

            {/* Floating Stat Cards positioned relative to the silhouette area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-[5%] right-[2%] z-20"
            >
              <StatCard stat={stats[0]} delay={0.6} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-[40%] left-[2%] z-20"
            >
              <StatCard stat={stats[1]} delay={0.8} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute top-[28%] right-[5%] z-20"
            >
              <StatCard stat={stats[2]} delay={1.0} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-[10%] right-[1%] z-20"
            >
              <StatCard stat={stats[3]} delay={1.2} />
            </motion.div>

            {/* Ground glow */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-96 h-8 bg-brand-purple/20 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}