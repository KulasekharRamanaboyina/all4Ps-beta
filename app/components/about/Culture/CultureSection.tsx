"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Rocket, Users } from "lucide-react";

const culture = [
  {
    icon: Brain,
    title: "Think Strategically",
    desc: "Every recommendation is backed by research, strategy, and business goals.",
  },
  {
    icon: BarChart3,
    title: "Measure What Matters",
    desc: "We focus on pipeline, revenue, and measurable business outcomes- not vanity metrics.",
  },
  {
    icon: Rocket,
    title: "Execute with Agility",
    desc: "We move quickly, adapt continuously, and keep growth initiatives on track.",
  },
  {
    icon: Users,
    title: "Grow Together",
    desc: "We build long-term partnerships grounded in trust, collaboration, and shared success.",
  },
];

export default function CultureSection() {
  return (
    <section className="relative py-12 md:py-16 px-6 lg:px-12 border-t border-brand-purple/10">
      {/* Background wave */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-brand-purple/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-brand-purple text-xs font-semibold tracking-widest uppercase mb-3">
            What It's Like to Work With Us
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Our Culture. Our Promise.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {culture.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative bg-gradient-to-br from-brand-purple/15 to-brand-purple/5 border border-brand-purple/15 rounded-2xl p-6 hover:border-brand-purple/40 transition-all duration-500"
            >
              <c.icon
                className="w-10 h-10 text-brand-purple mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                {c.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
