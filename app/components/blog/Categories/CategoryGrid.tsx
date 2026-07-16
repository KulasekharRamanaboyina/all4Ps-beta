"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Megaphone,
  Search,
  PenTool,
  TrendingUp,
  Zap,
  Layers,
} from "lucide-react";

// Icon mapping helper for categories
const CATEGORY_ICONS: Record<string, any> = {
  "Demand Generation": Megaphone,
  "Brand Strategy": Target,
  "SEO & SEM": Search,
  "Content Marketing": PenTool,
  "Sales Enablement": TrendingUp,
  "Product Marketing": Zap,
};

interface CategoryGridProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  categories: { title: string; count: number; slug: string }[];
}

export default function CategoryGrid({
  selectedCategory,
  onSelectCategory,
  categories,
}: CategoryGridProps) {
  const totalArticlesCount = categories.reduce((acc, cat) => acc + cat.count, 0);

  return (
    <section className="py-10 px-6 lg:px-12 z-10 max-w-7xl mx-auto border-b border-white/5">
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="mb-5">
        <h2 className="text-[10px] font-extrabold text-gray-500 uppercase tracking-[0.2em]">
          Filter by Category
        </h2>
      </div>

      <div className="flex overflow-x-auto md:flex-wrap gap-2.5 no-scrollbar pb-3 md:pb-0 scroll-smooth -mx-6 px-6 md:mx-0 md:px-0">
        {/* "All" Pill */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectCategory(null)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all duration-300 shrink-0 ${
            selectedCategory === null
              ? "bg-brand-purple/20 border-brand-purple/60 text-white shadow-[0_0_15px_rgba(168,85,247,0.15)]"
              : "bg-white/[0.02] border-white/10 text-gray-300 hover:border-brand-purple/45 hover:text-white"
          }`}
        >
          <span>All Insights</span>
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
            selectedCategory === null ? "bg-brand-purple/35 text-white" : "bg-white/10 text-gray-500"
          }`}>
            {totalArticlesCount}
          </span>
        </motion.button>

        {/* Individual Category Pills */}
        {categories.map((cat, idx) => {
          const isSelected = selectedCategory?.toLowerCase() === cat.title.toLowerCase();

          return (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectCategory(isSelected ? null : cat.title)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all duration-300 shrink-0 ${
                isSelected
                  ? "bg-brand-purple/20 border-brand-purple/60 text-white shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                  : "bg-white/[0.02] border-white/10 text-gray-300 hover:border-brand-purple/45 hover:text-white"
              }`}
            >
              <span>{cat.title}</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                isSelected ? "bg-brand-purple/35 text-white" : "bg-white/10 text-gray-500"
              }`}>
                {cat.count || 0}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
