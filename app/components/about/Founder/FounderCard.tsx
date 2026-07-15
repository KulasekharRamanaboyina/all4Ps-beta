"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

const problems = [
  "Brilliant companies were building exceptional products.",
  "But buyers couldn't understand them.",
  "Technical founders struggled to explain value.",
  "Marketing focused on activity instead of outcomes.",
  "Sales teams were forced to fight uphill battles.",
];

export default function FounderCard() {
  return (
    <section id="founder-card" className="relative py-12 md:py-16 px-6 lg:px-12 border-t border-brand-purple/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Founder Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="relative max-w-[220px] sm:max-w-[260px] lg:max-w-none mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-transparent rounded-3xl blur-2xl opacity-60" />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-[#0a0a0f] border border-brand-purple/25 group">
                <Image
                  src="/images/Team_Members/Pavani.webp"
                  alt="K. Pavani"
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 400px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/40 via-transparent to-transparent" />
              </div>
              <div className="mt-6 pl-2">
                <p className={`${caveat.className} text-4xl text-brand-purple font-medium tracking-wide`}>
                  K. Pavani
                </p>
                <p className="text-xs text-brand-purple/80 font-bold uppercase tracking-wider mt-1.5">
                  Founder & CEO, all4Ps
                </p>
              </div>
            </div>
          </motion.div>

          {/* Problem We Saw */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-brand-purple/10 pt-6 lg:pt-0 lg:pl-12"
          >
            <p className="text-brand-purple text-xs font-semibold tracking-widest uppercase mb-3">
              Why all4Ps Exists
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight">
              The Problem We Saw
            </h2>
            <ul className="space-y-5">
              {problems.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full border border-brand-purple/30 flex items-center justify-center bg-brand-purple/10 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-brand-purple/10 pt-6 lg:pt-0 lg:pl-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-brand-purple" />
              <p className="text-brand-purple text-xs font-semibold tracking-widest uppercase">
                Our Mission
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              To make B2B marketing measurable, strategic, and aligned with
              business growth — so innovative companies can reach the right
              buyers, start better conversations, and win more deals.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#0d0d14] to-[#0a0a0f] border border-brand-purple/20 rounded-2xl p-6 pl-8 shadow-xl shadow-purple-950/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl" />
              
              <span className="text-6xl font-serif text-brand-purple/20 absolute top-2 left-3 select-none">“</span>
              <div className="relative pt-4">
                <p className="text-base font-semibold text-gray-200 leading-relaxed italic">
                  We don't chase buzzwords.
                  <br />
                  We build clarity that converts.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}