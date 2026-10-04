"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DetailedBlogPost } from "@/app/types";
import { getImageUrl } from "@/lib/image";

interface RoboticsLatestBlogsProps {
  posts: DetailedBlogPost[];
}

export default function RoboticsLatestBlogs({
  posts,
}: RoboticsLatestBlogsProps) {
  // Show a maximum of 3 robotics-related posts
  const visiblePosts = posts.slice(0, 3);

  return (
    <section className="border-y border-white/5 bg-white/[0.015] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#800080]">
              LATEST INSIGHTS
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Insights for
              <br />
              <span className="text-[#800080]">Robotics &amp; Automation.</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#800080] hover:text-[#800080]"
          >
            Explore All Insights →
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {visiblePosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#09060d] transition-all duration-300 hover:-translate-y-1 hover:border-[#800080]/40"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                <Image
                  src={getImageUrl(post)}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#800080]">
                  {post.category || "ROBOTICS & AUTOMATION"}
                </p>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#800080]">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="line-clamp-3 text-sm leading-6 text-gray-400">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-6 text-sm font-semibold text-white transition-colors group-hover:text-[#800080]">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
