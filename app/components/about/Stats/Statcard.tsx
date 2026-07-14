"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  stat: {
    label: string;
    value: string;
    icon: LucideIcon;
    color: string;
  };
  delay?: number;
}

export default function StatCard({ stat, delay = 0 }: StatCardProps) {
  const Icon = stat.icon;

  const isBarChart = stat.label.toLowerCase().includes("roi");

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative group bg-[#0a0a0f]/80 backdrop-blur-xl border border-brand-purple/20 rounded-2xl p-5 min-w-[170px] shadow-2xl shadow-purple-950/10`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-purple/0 to-brand-purple/0 group-hover:from-brand-purple/5 group-hover:to-brand-purple/10 transition-colors duration-300" />
      <p className="text-[10px] text-brand-purple font-semibold uppercase tracking-wider mb-2">
        {stat.label}
      </p>
      <div className="flex items-end justify-between mb-2">
        <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
        <Icon className="w-5 h-5 text-brand-purple opacity-70" />
      </div>

      {/* Mini charts */}
      {isBarChart ? (
        <div className="absolute bottom-4 right-4 flex items-end gap-[3px] h-8">
          {[6, 12, 9, 18, 22, 28].map((h, idx) => (
            <motion.div
              key={idx}
              initial={{ height: 0 }}
              animate={{ height: h }}
              transition={{ delay: delay + idx * 0.08, duration: 0.5, ease: "easeOut" }}
              className="w-1 bg-gradient-to-t from-brand-purple to-fuchsia-400 rounded-full"
            />
          ))}
        </div>
      ) : (
        <div className="absolute bottom-3 right-4 w-16 h-8 overflow-visible">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 60 30">
            <motion.path
              d="M0,25 Q15,10 30,20 T60,5"
              fill="none"
              stroke="url(#gradient-purple-card)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: delay, duration: 1.0, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient-purple-card" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#800080" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="60"
              cy="5"
              r="3.5"
              className="fill-brand-purple"
              style={{ filter: "drop-shadow(0 0 4px #800080)" }}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ delay: delay + 1.0, repeat: Infinity, duration: 2 }}
            />
          </svg>
        </div>
      )}
    </motion.div>
  );
}