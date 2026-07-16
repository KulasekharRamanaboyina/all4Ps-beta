"use client";

import React from "react";
import { DetailedBlogPost } from "@/app/types";

// Modular Imports
import ArticleHero from "../../components/blog/Detail/ArticleHero";
import KeyTakeaways from "../../components/blog/Detail/KeyTakeaways";
import ArticleBody from "../../components/blog/Detail/ArticleBody";
import DetailSidebar from "../../components/blog/Detail/DetailSidebar";
import CtaSection from "../../components/cta/CtaSection";

interface BlogReaderClientProps {
  post: DetailedBlogPost;
  relatedPosts: DetailedBlogPost[];
  popularPosts: DetailedBlogPost[];
  categories: any[];
}

export default function BlogReaderClient({
  post,
  relatedPosts,
  popularPosts,
  categories,
}: BlogReaderClientProps) {
  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Article Hero Header */}
      <ArticleHero post={post} />

      {/* Main content grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-8">
            <KeyTakeaways takeaways={post.takeaways || []} />
            <ArticleBody post={post} />
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <DetailSidebar post={post} relatedPosts={relatedPosts} categories={categories} />

        </div>
      </section>

      {/* Global Full-Width CTA Section matching Home and About pages */}
      <CtaSection />
    </div>
  );
}
