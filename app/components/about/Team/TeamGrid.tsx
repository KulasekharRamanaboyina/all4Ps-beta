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
    <section id="team-grid" className="relative py-24 px-6 lg:px-12 border-t border-brand-purple/10">
      <div className="max-w-[1500px] mx-auto">

        {/* Header */}
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

        {/* 7-column single row grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col bg-gradient-to-b from-[#0e0e15] to-[#05030a] border border-brand-purple/15 rounded-xl overflow-hidden hover:border-brand-purple/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-500 shadow-xl"
            >
              {/* Photo — fixed square ratio */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-[#0a0a0f]/10 to-transparent" />
              </div>

              {/* Divider */}
              <div className="h-px bg-brand-purple/10 group-hover:bg-brand-purple/25 transition-colors duration-300" />

              {/* Text info — centered and consistent height */}
              <div className="flex flex-col items-center text-center px-3 py-4 flex-1 gap-2">
                <h3 className="font-bold text-white text-xs tracking-tight leading-snug group-hover:text-fuchsia-300 transition-colors duration-300">
                  {t.name}
                </h3>
                <p className="text-[9px] text-brand-purple uppercase tracking-widest font-semibold leading-tight">
                  {t.role}
                </p>
                <div className="flex flex-wrap justify-center gap-1 mt-auto pt-2">
                  {t.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[7px] bg-brand-purple/8 text-gray-400 border border-brand-purple/15 px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
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