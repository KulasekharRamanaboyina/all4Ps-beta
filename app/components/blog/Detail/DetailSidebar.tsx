"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, Clock } from "lucide-react";
import { DetailedBlogPost } from "@/app/types";
import { getImageUrl } from "@/lib/image";
import { AuthorWidget, NewsletterWidget } from "../Sidebar/SidebarWidgets";

interface DetailSidebarProps {
  post: DetailedBlogPost;
  relatedPosts: DetailedBlogPost[];
  categories: { title: string; slug: string }[];
}

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

export default function DetailSidebar({ post, relatedPosts, categories }: DetailSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");

  // Extract headings from post body
  const headings = React.useMemo(() => {
    if (!post.body) return [];

    if (Array.isArray(post.body)) {
      // Portable Text body (Sanity)
      return post.body
        .filter((block: any) => block._type === "block" && block.style?.startsWith("h"))
        .map((block: any) => {
          const text = block.children?.map((c: any) => c.text).join("") || "";
          const level = parseInt(block.style.replace("h", ""), 10) || 2;
          return {
            text,
            id: slugify(text),
            level,
          };
        });
    }
    return [];
  }, [post.body]);

  // Observer to track active section based on scroll position
  useEffect(() => {
    if (headings.length === 0) return;

    const headingElements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, [headings]);

  return (
    <aside className="lg:col-span-4 space-y-8 sticky top-24">
      {/* 1. About the Author */}
      <AuthorWidget author={post.author} />

      {/* 2. Table of Contents */}
      {headings.length > 0 && (
        <div className="rounded-2xl border border-white/5 bg-[#0d0d14] p-6">
          <div className="flex items-center gap-2.5 mb-5 border-b border-white/5 pb-3">
            <List className="w-4.5 h-4.5 text-brand-purple" />
            <h3 className="font-bold text-white text-sm">Table of Contents</h3>
          </div>
          <nav className="space-y-3.5">
            {headings.map((h, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const element = document.getElementById(h.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`block text-xs text-left transition-colors duration-200 pl-3 border-l-2 hover:text-white ${
                  h.level === 3 ? "ml-4" : ""
                } ${
                  activeId === h.id
                    ? "border-brand-purple text-white font-bold"
                    : "border-transparent text-gray-400"
                }`}
              >
                {h.text}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* 3. Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="rounded-2xl border border-white/5 bg-[#0d0d14] p-6">
          <h3 className="font-bold text-white text-sm mb-5 border-b border-white/5 pb-3">
            Related Articles
          </h3>
          <div className="space-y-4">
            {relatedPosts.map((rel) => (
              <Link key={rel.id} href={`/blog/${rel.slug}`} className="flex gap-4 group">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-900 flex-shrink-0">
                  <Image
                    src={getImageUrl(rel)}
                    alt={rel.title}
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <span className="text-[9px] text-brand-purple font-bold uppercase tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-xs font-semibold text-gray-300 group-hover:text-white leading-snug line-clamp-2 transition-colors duration-200">
                    {rel.title}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1.5 text-[9px] text-gray-400">
                    <Clock className="w-3 h-3 text-brand-purple" />
                    <span>{rel.readTime || "6 min read"}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="block text-center text-xs font-bold text-brand-purple hover:text-white transition-colors border-t border-white/5 pt-4 mt-5">
            View all articles →
          </Link>
        </div>
      )}

      {/* 4. Popular Topics */}
      {categories.length > 0 && (
        <div className="rounded-2xl border border-white/5 bg-[#0d0d14] p-6">
          <h3 className="font-bold text-white text-sm mb-5 border-b border-white/5 pb-3">
            Popular Topics
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={`/blog`}
                className="text-[10px] font-semibold text-gray-400 hover:text-white bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/30 px-3.5 py-1.5 rounded-full transition-all duration-300"
              >
                {cat.title}
              </Link>
            ))}
          </div>
          <Link href="/blog" className="block text-center text-xs font-bold text-brand-purple hover:text-white transition-colors border-t border-white/5 pt-4 mt-5">
            View all categories →
          </Link>
        </div>
      )}

      {/* 5. Newsletter Signup */}
      <NewsletterWidget />
    </aside>
  );
}
