"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Target, Search, Handshake, Cog, LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay: number;
}

function ValueCard({ icon: Icon, title, desc, delay }: ValueCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-[#0a0a0f]/60 backdrop-blur-md border border-brand-purple/15 rounded-2xl p-8 hover:border-brand-purple/40 transition-all duration-500 overflow-hidden shadow-2xl cursor-default"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* 3D Cursor Spotlight Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, rgba(168, 85, 247, 0.18), transparent 80%)`,
        }}
      />

      {/* Top line highlight border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-purple/0 to-transparent group-hover:via-brand-purple transition-all duration-700" />

      {/* Decorative Corner SVG pattern that pulses on hover */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-[0.02] group-hover:opacity-[0.06] text-brand-purple transition-all duration-500 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative flex flex-col items-center text-center">
        {/* Animated Icon Circle */}
        <div className="w-14 h-14 rounded-2xl border border-brand-purple/20 flex items-center justify-center bg-brand-purple/5 mb-6 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          <Icon className="w-6 h-6 text-brand-purple group-hover:text-fuchsia-400 transition-colors duration-300" strokeWidth={1.75} />
        </div>

        <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight group-hover:text-fuchsia-100 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-gray-400 leading-relaxed max-w-[240px] group-hover:text-gray-300 transition-colors duration-300">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

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
            <ValueCard
              key={i}
              icon={v.icon}
              title={v.title}
              desc={v.desc}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}