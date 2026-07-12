"use client";

import { motion } from "framer-motion";
import { Target, Search, Handshake, Cog } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcome Obsessed",
    desc: "We measure success by pipeline impact and business growth.",
  },
  {
    icon: Search,
    title: "Radical Clarity",
    desc: "Complex products deserve simple stories.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    desc: "We're invested in sustainable growth, not short-term spikes.",
  },
  {
    icon: Cog,
    title: "Systems Thinking",
    desc: "Growth is engineered through repeatable, scalable systems.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="relative py-24 px-6 lg:px-12 border-t border-brand-purple/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-purple text-xs font-semibold tracking-widest uppercase mb-3">
            Our Core Values
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-[#0a0a0f]/60 backdrop-blur-sm border border-brand-purple/15 rounded-2xl p-8 hover:border-brand-purple/40 hover:shadow-[0_0_30px_rgba(128,0,128,0.15)] transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-purple/0 to-brand-purple/0 group-hover:from-brand-purple/5 group-hover:to-brand-purple/10 transition-all duration-500" />
              <div className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border border-brand-purple/20 flex items-center justify-center bg-brand-purple/5 mb-6 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/40 transition-colors duration-300">
                  <v.icon className="w-5 h-5 text-brand-purple" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}