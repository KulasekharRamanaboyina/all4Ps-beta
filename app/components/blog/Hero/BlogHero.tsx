"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { DetailedBlogPost } from "@/app/types";
import { getImageUrl } from "@/lib/image";
import { urlFor } from "@/lib/image";

interface BlogHeroProps {
  featuredPost: DetailedBlogPost | undefined;
}

export default function BlogHero({ featuredPost }: BlogHeroProps) {
  const getAuthorAvatar = (author: any) => {
    if (!author || !author.avatar) return "/images/Team_Members/Pavani.webp";
    if (typeof author.avatar === "string") return author.avatar;
    try {
      return urlFor(author.avatar).width(80).url();
    } catch {
      return "/images/Team_Members/Pavani.webp";
    }
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-24 px-6 lg:px-12 z-10 max-w-7xl mx-auto border-b border-brand-purple/10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-purple mb-6">
            Insights & Ideas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 font-display">
            Insights That Drive{" "}
            <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
              Smarter Growth.
            </span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
            Practical thinking, methodologies, and blueprints on B2B demand generation, positioning, and marketing strategies designed for technology and industrial companies.
          </p>
        </motion.div>

        {/* Right Column - Featured Image Frame */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 w-full"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block relative w-full space-y-4">
              {/* Glow backdrop effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-transparent rounded-3xl blur-xl opacity-40 pointer-events-none" />
              
              {/* Image Frame */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-brand-purple/40">
                <Image
                  src={getImageUrl(featuredPost)}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Glassmorphic Featured Badge overlay */}
                <div className="absolute top-4 left-4 bg-brand-purple/20 backdrop-blur-md border border-brand-purple/35 text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-lg z-10">
                  Featured Article
                </div>

                {/* Bottom-right glassmorphic hover button */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <ArrowRight className="w-4 h-4 text-brand-purple" />
                </div>
              </div>

              {/* Metadata (Author, Published Date, Read Time) below the image */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs text-gray-400">
                {/* Author */}
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/10 group-hover:border-brand-purple/50 bg-gray-900 shrink-0 transition-colors duration-300">
                    <Image
                      src={getAuthorAvatar(featuredPost.author)}
                      alt={featuredPost.author.name}
                      fill
                      sizes="28px"
                      className="object-cover object-top"
                    />
                  </div>
                  <span className="font-semibold text-white group-hover:text-brand-purple transition-colors duration-300">
                    {featuredPost.author.name}
                  </span>
                </div>

                <div className="w-1.5 h-1.5 rounded-full bg-white/10 hidden sm:block" />

                <span className="flex items-center gap-1.5 group-hover:text-gray-300 transition-colors duration-300">
                  <Calendar className="w-3.5 h-3.5 text-brand-purple/70 group-hover:text-brand-purple transition-colors duration-300" />
                  {featuredPost.publishedAt}
                </span>

                <div className="w-1.5 h-1.5 rounded-full bg-white/10 hidden sm:block" />

                <span className="flex items-center gap-1.5 group-hover:text-gray-300 transition-colors duration-300">
                  <Clock className="w-3.5 h-3.5 text-brand-purple/70 group-hover:text-brand-purple transition-colors duration-300" />
                  {featuredPost.readTime}
                </span>
              </div>
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
}
