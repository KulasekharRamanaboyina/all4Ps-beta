"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const team = [
  { name: "K. Pavani", role: "Founder & CEO", tags: ["Strategy", "Branding", "Growth Leadership"], image: "/images/Team_Members/Pavani.webp" },
  { name: "K. Tejeswini", role: "Co-founder & COO", tags: ["Operations", "Growth", "Client Success"], image: "/images/Team_Members/Tejeswini.webp" },
  { name: "Siddhik Gagguturu", role: "Head, Business Development", tags: ["Business Dev", "Partnerships", "Lead Generation"], image: "/images/Team_Members/siddik.webp" },
  { name: "Shweta Kaushal", role: "Lead, HR & Culture", tags: ["People Ops", "Culture", "HR Strategy"], image: "/images/Team_Members/shweta.webp" },
  { name: "P.V.L. Supraja", role: "Brand Manager", tags: ["Brand Strategy", "Content", "Marketing"], image: "/images/Team_Members/Supraja.webp" },
  { name: "R. Kulasekhar", role: "Founder's Office", tags: ["Vision", "Strategy", "Product Thinking"], image: "/images/Team_Members/Kulasekhar.webp" },
  { name: "B. Kumari", role: "SEO Specialist", tags: ["SEO", "Analytics", "Growth"], image: "/images/Team_Members/Kumari.webp" },
];

export default function TeamGrid() {
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
            Meet the People Behind the Growth
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Team. Your Growth Partners.
          </h2>
        </motion.div>

        {/* 7 columns grid on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-gradient-to-b from-[#0e0e15] to-[#05030a] border border-brand-purple/15 rounded-xl overflow-hidden hover:border-brand-purple/40 transition-all duration-500 shadow-xl"
            >
              {/* Photo */}
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden border-b border-brand-purple/10">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-w-768px) 50vw, (max-w-1200px) 25vw, 150px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
              </div>

              <div className="p-3.5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <p className="text-xs font-bold text-white mb-0.5 tracking-tight group-hover:text-brand-purple transition-colors duration-300">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium mb-3.5 leading-snug">{t.role}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {t.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[8px] px-1.5 py-0.5 rounded-full border border-brand-purple/25 text-brand-purple/90 bg-brand-purple/5 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link href="/careers" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-purple/30 text-brand-purple hover:bg-brand-purple/10 transition-colors text-sm font-semibold shadow-lg shadow-purple-950/10"
            >
              View Open Roles
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}