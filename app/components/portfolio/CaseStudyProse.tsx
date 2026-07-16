"use client";

import { CaseStudy } from "@/app/types";
import { motion } from "framer-motion";

interface CaseStudyProseProps {
  client: CaseStudy;
}

export default function CaseStudyProse({ client }: CaseStudyProseProps) {
  // Helper to split text by newlines and clean it up
  const formatChallengeText = (text: string) => {
    return text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  };

  const challengeLines = formatChallengeText(client.challenge);

  return (
    <section className="relative bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Core Narrative (Introduction, Challenge, Approach) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Introduction Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-purple font-display mb-4 tracking-tight">
                Introduction
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-8">
                {client.description}
              </p>
            </motion.div>

            {/* The Challenge Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-purple font-display mb-4 tracking-tight">
                The Challenge
              </h2>
              <div className="space-y-4">
                {challengeLines.map((line, index) => {
                  // If a line is formatted like a bullet point or starts with typical list structures
                  const isBullet = line.startsWith("-") || line.startsWith("*") || line.startsWith("•");
                  const cleanText = isBullet ? line.replace(/^[-*•]\s*/, "") : line;

                  return (
                    <p key={index} className="text-base sm:text-lg text-gray-300 leading-8">
                      {cleanText}
                    </p>
                  );
                })}
              </div>
            </motion.div>

            {/* all4ps Approach Section */}
            {client.pillars && client.pillars.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-purple font-display mb-6 tracking-tight">
                  Our Approach
                </h2>
                <div className="space-y-8">
                  {client.pillars.map((pillar, idx) => (
                    <div key={idx} className="border-l-2 border-brand-purple/30 pl-6 space-y-3">
                      <h3 className="text-xl font-bold text-white font-display">
                        {pillar.title}
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        {pillar.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0 mt-2.5" />
                            <span className="text-sm sm:text-base leading-7">{point}</span>
                          </li>
                        ))}
                      </ul>
                      {pillar.outcome && (
                        <div className="mt-3 text-xs sm:text-sm font-semibold text-brand-purple bg-brand-purple/5 border border-brand-purple/10 rounded-lg px-4 py-2 inline-block">
                          {pillar.outcome.value} &middot; <span className="text-gray-400 font-medium">{pillar.outcome.label}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Sticky Project Metadata Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 w-full">
            <div className="rounded-2xl border border-white/5 bg-[#0B0813]/40 p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white font-display border-b border-white/5 pb-4">
                Project Details
              </h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">
                    Client
                  </span>
                  <span className="text-white font-semibold">{client.client}</span>
                </div>

                <div>
                  <span className="block text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">
                    Industry
                  </span>
                  <span className="text-white font-semibold">{client.industry}</span>
                </div>

                <div>
                  <span className="block text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">
                    Category
                  </span>
                  <span className="text-white font-semibold">{client.category || "Case Study"}</span>
                </div>

                <div>
                  <span className="block text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">
                    Key Result
                  </span>
                  <span className="text-fuchsia-400 font-bold">{client.result}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
