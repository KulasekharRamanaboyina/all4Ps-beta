"use client";

import { motion } from "framer-motion";
import { Bot, Cloud, Factory, Cpu, Truck, Building2 } from "lucide-react";

const industries = [
  { icon: Bot, label: "Robotics & Automation" },
  { icon: Cloud, label: "SaaS" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Cpu, label: "AI & Emerging Tech" },
  { icon: Truck, label: "Logistics & Supply Chain" },
  { icon: Building2, label: "Enterprise Technology" },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-20 px-6 lg:px-12 border-t border-brand-purple/10">
      <div className="max-w-7xl mx-auto">
        {/* Industries We Specialize In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center"
        >
          <p className="text-brand-purple text-xs font-semibold tracking-widest uppercase mb-8">
            Industries We Specialize In
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center text-center p-4 rounded-xl border border-brand-purple/10 hover:border-brand-purple/35 transition-all bg-[#0a0a0f]/40 hover:bg-brand-purple/5 aspect-square"
              >
                <ind.icon className="w-8 h-8 text-brand-purple mb-3" strokeWidth={1.75} />
                <span className="text-xs text-gray-300 font-bold leading-tight">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}