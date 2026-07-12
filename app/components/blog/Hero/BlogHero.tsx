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
    <section className="relative pt-24 pb-16 px-6 lg:px-12 z-10 max-w-7xl mx-auto border-b border-brand-purple/10">
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Insights That Drive{" "}
            <span className="bg-gradient-to-r from-brand-purple to-pink-500 bg-clip-text text-transparent">
              Smarter Growth.
            </span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
            Practical thinking, methodologies, and blueprints on B2B demand generation, positioning, and marketing strategies designed for technology and industrial companies.
          </p>
        </motion.div>

        {/* Right Column - Featured Card */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d0d14] to-[#05030a] border border-brand-purple/20 p-8 shadow-2xl transition-all duration-300 hover:border-brand-purple/40 hover:shadow-purple-950/20">
                {/* Glowing background */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-purple/10 transition-colors duration-500" />
                
                {/* Background Image Overlay on right side */}
                <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <Image
                    src={getImageUrl(featuredPost)}
                    alt="Featured Post Graphic"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
                  <div>
                    <span className="inline-block bg-brand-purple text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
                      Featured Article
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold leading-tight group-hover:text-brand-purple transition-colors duration-300 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-6 border-t border-brand-purple/15 pt-6">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-purple/30 bg-gray-900">
                        <Image
                          src={getAuthorAvatar(featuredPost.author)}
                          alt={featuredPost.author.name}
                          fill
                          sizes="40px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{featuredPost.author.name}</p>
                        <p className="text-xs text-gray-400">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                        {featuredPost.publishedAt}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-purple" />
                        {featuredPost.readTime}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
