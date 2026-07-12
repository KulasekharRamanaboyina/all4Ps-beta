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
  return (
    <section className="py-16 px-6 lg:px-12 z-10 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold">Explore by Category</h2>
        <button
          onClick={() => onSelectCategory(null)}
          className={`text-sm font-semibold transition-colors ${
            selectedCategory === null ? "text-brand-purple" : "text-gray-400 hover:text-white"
          }`}
        >
          View All Articles →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, idx) => {
          const Icon = CATEGORY_ICONS[cat.title] || Target;
          const isSelected = selectedCategory?.toLowerCase() === cat.title.toLowerCase();

          return (
            <motion.button
              key={idx}
              whileHover={{ y: -3, scale: 1.02 }}
              onClick={() => onSelectCategory(isSelected ? null : cat.title)}
              className={`relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                isSelected
                  ? "bg-brand-purple/20 border-brand-purple/60"
                  : "bg-[#0d0d14] border-white/5 hover:border-brand-purple/35"
              }`}
            >
              <div className="w-9 h-9 rounded-xl border border-brand-purple/30 flex items-center justify-center bg-brand-purple/10 mb-4 text-brand-purple">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5">{cat.title}</h3>
              <p className="text-xs text-gray-400">{cat.count || 0} Articles</p>
              {isSelected && (
                <div className="absolute right-3 top-3 w-2.5 h-2.5 rounded-full bg-brand-purple animate-pulse" />
              )}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
