"use client";

import { motion } from "framer-motion";
import { Service } from "@/app/types";

interface ServiceDetailsSectionProps {
  service: Service;
}

export default function ServiceDetailsSection({ service }: ServiceDetailsSectionProps) {
  return (
    <section className="relative bg-transparent py-12 md:py-16 px-6 lg:px-12 border-t border-white/5 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-fuchsia-800/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Full Description and Features (Span 7) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-brand-purple text-xs font-semibold tracking-widest uppercase">
                Deep Dive
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Service Overview
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {service.fullDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6 border-t border-white/5 pt-8"
            >
              <h3 className="text-xl font-bold text-white tracking-tight font-display">
                Key Capabilities
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 group"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-purple shrink-0" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Outcomes Cards and Visuals (Span 5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B0813] to-[#12081F]/90 border border-brand-purple/20 p-8 shadow-2xl space-y-6"
            >
              {/* Top Accent Line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-purple to-fuchsia-400" />
              
              <h3 className="text-xl font-extrabold text-white tracking-tight font-display">
                {service.outcomesHeading || "Expected Outcomes"}
              </h3>

              {/* Metrics list */}
              <div className="grid grid-cols-2 gap-6 border-b border-white/5 pb-6">
                {service.outcomesHeadingMetrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple">
                      {metric.label}
                    </span>
                    <p className="text-lg font-extrabold text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* If Outcomes Heading Image exists */}
              {service.outComesHeadingImage && (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 shadow-lg bg-gray-950">
                  <img
                    src={service.outComesHeadingImage}
                    alt={service.outcomesHeading || "Expected Outcomes"}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-45" />
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
