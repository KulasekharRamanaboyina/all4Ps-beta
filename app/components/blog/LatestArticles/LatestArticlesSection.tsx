"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowDown } from "lucide-react";
import { DetailedBlogPost } from "@/app/types";
import { getImageUrl } from "@/lib/image";
import { urlFor } from "@/lib/image";
import {
  AuthorWidget,
  NewsletterWidget,
  PopularArticlesWidget,
} from "../Sidebar/SidebarWidgets";

interface LatestArticlesSectionProps {
  posts: DetailedBlogPost[];
  filteredPosts: DetailedBlogPost[];
  selectedCategory: string | null;
  visibleCount: number;
  onLoadMore: () => void;
  author?: any;
}

export default function LatestArticlesSection({
  posts,
  filteredPosts,
  selectedCategory,
  visibleCount,
  onLoadMore,
  author,
}: LatestArticlesSectionProps) {
  const getAuthorAvatar = (itemAuthor: any) => {
    if (!itemAuthor || !itemAuthor.avatar) return "/images/Team_Members/Pavani.webp";
    if (typeof itemAuthor.avatar === "string") return itemAuthor.avatar;
    try {
      return urlFor(itemAuthor.avatar).width(80).url();
    } catch {
      return "/images/Team_Members/Pavani.webp";
    }
  };

  return (
    <section className="pb-24 px-6 lg:px-12 z-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT: Articles List */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-bold mb-8">
            {selectedCategory ? `${selectedCategory} Articles` : "Latest Articles"}
          </h2>

          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.slice(0, visibleCount).map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative overflow-hidden rounded-2xl bg-[#0d0d14] border border-white/5 p-6 hover:border-brand-purple/20 hover:shadow-2xl transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}`} className="group flex flex-col md:flex-row gap-6">
                    {/* Image container */}
                    <div className="relative md:w-2/5 aspect-[16/10] md:aspect-auto md:h-44 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0">
                      <Image
                        src={getImageUrl(post)}
                        alt={post.title}
                        fill
                        sizes="(max-w-768px) 100vw, 300px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                        <span className="text-[10px] text-brand-purple font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content block */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-brand-purple transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-4 mt-auto">
                        {/* Author info */}
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-900 border border-brand-purple/20">
                            <Image
                              src={getAuthorAvatar(post.author)}
                              alt={post.author.name}
                              fill
                              sizes="32px"
                              className="object-cover object-top"
                            />
                          </div>
                          <span className="text-xs text-gray-300 font-medium">
                            {post.author.name}
                          </span>
                        </div>

                        {/* Metadata */}
                        <div className="flex items-center gap-4 text-[11px] text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                            {post.publishedAt}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-brand-purple" />
                            {post.readTime}
                          </span>
                          <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                            <ArrowRight className="w-3.5 h-3.5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 bg-[#0d0d14] rounded-2xl border border-white/5">
                <p className="text-gray-400">No articles found in this category yet.</p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {filteredPosts.length > visibleCount && (
            <div className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onLoadMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-purple/30 bg-brand-purple/5 hover:bg-brand-purple/10 text-sm font-semibold transition-all"
              >
                Load More Articles
                <ArrowDown className="w-4 h-4 text-brand-purple animate-bounce" />
              </motion.button>
            </div>
          )}
        </div>

        {/* RIGHT: Sidebar */}
        <aside className="lg:col-span-4 space-y-8 sticky top-24">
          <AuthorWidget author={author} />
          <NewsletterWidget />
          <PopularArticlesWidget popularPosts={posts} />
        </aside>

      </div>
    </section>
  );
}
