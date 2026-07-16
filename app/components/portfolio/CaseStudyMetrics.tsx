"use client";

import { useRouter } from "next/navigation";
import { CaseStudy } from "@/app/types";
import { motion } from "framer-motion";

interface CaseStudyMetricsProps {
  client: CaseStudy;
}

export default function CaseStudyMetrics({ client }: CaseStudyMetricsProps) {
  const router = useRouter();

  return (
    <section className="relative bg-transparent py-20 border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple mb-2">
            {client.category || client.industry} Outcome
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            {client.client}
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        {client.performanceMetrics && client.performanceMetrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {client.performanceMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-l-2 border-brand-purple/20 hover:border-brand-purple/60 pl-6 py-2 transition-colors duration-300 space-y-2"
              >
                {/* Metric Value (Gradient text) */}
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent leading-none">
                  {metric.value}
                </div>

                {/* Metric Label */}
                <div className="text-gray-400 text-sm md:text-base font-semibold leading-relaxed">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Systemic Result (Outcome Text) */}
        {client.systemicResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16 px-4"
          >
            <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-brand-purple mb-3">
              Strategic Outcome
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed italic">
              &ldquo;{client.systemicResult}&rdquo;
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
