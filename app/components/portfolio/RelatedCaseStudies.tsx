"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/app/constants";
import { motion } from "framer-motion";

interface RelatedCaseStudiesProps {
  currentId: string;
}

export default function RelatedCaseStudies({ currentId }: RelatedCaseStudiesProps) {
  // Get other case studies
  const otherStudies = CASE_STUDIES.filter((cs) => cs.id !== currentId);

  // Take the first one as featured, and the next 3 for the list
  const featuredStudy = otherStudies[0];
  const listStudies = otherStudies.slice(1, 4);

  if (!featuredStudy) return null;

  return (
    <section className="relative bg-transparent py-20 border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-10 tracking-tight text-center md:text-left"
        >
          Case Studies & Resources
        </motion.h2>

        {/* Layout Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Featured Related Card (Left) */}
          <Link
            href={`/portfolio/${featuredStudy.id}`}
            className="group block space-y-4"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              <Image
                src={featuredStudy.imageUrl}
                alt={featuredStudy.client}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
                {featuredStudy.client}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition leading-tight">
                {featuredStudy.title}
              </h3>
            </div>
          </Link>

          {/* List Related (Right) */}
          <div className="space-y-8 flex flex-col justify-between h-full">
            <div className="space-y-6 divide-y divide-white/5">
              {listStudies.map((study) => (
                <div key={study.id} className="pt-6 first:pt-0">
                  <Link
                    href={`/portfolio/${study.id}`}
                    className="group block space-y-2"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-purple">
                      {study.category || "Case Study"}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition leading-snug">
                      {study.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom Link */}
            <div className="pt-8">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-purple-400 transition"
              >
                View More Studio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
