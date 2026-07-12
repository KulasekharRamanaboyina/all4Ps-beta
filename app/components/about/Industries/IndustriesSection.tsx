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

const numbers = [
  { value: "50+", label: "B2B Projects Delivered" },
  { value: "5+", label: "Industries Served" },
  { value: "3+", label: "Years Building Growth Systems" },
  { value: "100%", label: "Focused on B2B Growth" },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-20 px-6 lg:px-12 border-t border-brand-purple/10">
      <div className="max-w-7xl mx-auto grid xl:grid-cols-12 gap-12 xl:gap-8 items-start">
        {/* Industries We Specialize In (Left 7 Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="xl:col-span-7 w-full"
        >
          <p className="text-brand-purple text-xs font-semibold tracking-widest uppercase mb-6">
            Industries We Specialize In
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center text-center p-3.5 rounded-xl border border-brand-purple/10 hover:border-brand-purple/35 transition-all bg-[#0a0a0f]/40 hover:bg-brand-purple/5 aspect-square"
              >
                <ind.icon className="w-6 h-6 text-brand-purple mb-2.5" strokeWidth={1.75} />
                <span className="text-[10px] text-gray-300 font-bold leading-tight">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* all4Ps by the Numbers (Right 5 Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="xl:col-span-5 w-full xl:pl-4"
        >
          <p className="text-brand-purple text-xs font-semibold tracking-widest uppercase mb-6">
            all4Ps by the Numbers
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 xl:gap-4">
            {numbers.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center flex flex-col items-center"
              >
                <p className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {n.value}
                </p>
                <p className="text-[10px] text-gray-400 font-bold leading-normal uppercase tracking-wider max-w-[100px] mx-auto">
                  {n.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}