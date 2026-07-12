"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Link as LinkIcon,
  ChevronRight,
} from "lucide-react";
import { DetailedBlogPost } from "@/app/types";
import { getImageUrl } from "@/lib/image";
import { urlFor } from "@/lib/image";

interface ArticleHeroProps {
  post: DetailedBlogPost;
}

export default function ArticleHero({ post }: ArticleHeroProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getAuthorAvatar = (author: any) => {
    if (!author || !author.avatar) return "/images/Team_Members/Pavani.webp";
    if (typeof author.avatar === "string") return author.avatar;
    try {
      return urlFor(author.avatar).width(120).url();
    } catch {
      return "/images/Team_Members/Pavani.webp";
    }
  };

  const renderTitle = (title: string) => {
    const parts = title.split(":");
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}:{" "}
          <span className="bg-gradient-to-r from-brand-purple to-pink-500 bg-clip-text text-transparent block sm:inline">
            {parts.slice(1).join(":")}
          </span>
        </>
      );
    }
    return title;
  };

  return (
    <div>
      {/* ================= BREADCRUMBS ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 relative z-10">
        <nav className="flex items-center gap-2 text-xs text-gray-400 font-medium">
          <Link href="/blog" className="hover:text-brand-purple transition-colors">
            Blogs & Insights
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-300 truncate max-w-xs sm:max-w-md">
            {post.title}
          </span>
        </nav>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <header className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-16 relative z-10 border-b border-brand-purple/10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-brand-purple/20 border border-brand-purple/40 text-brand-purple text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
              {renderTitle(post.title)}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {post.subtitle}
            </p>

            {/* Author / Metadata Row */}
            <div className="flex flex-wrap items-center gap-6 border-y border-white/5 py-5 mb-8">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-purple/30 bg-gray-900">
                  <Image
                    src={getAuthorAvatar(post.author)}
                    alt={post.author.name}
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{post.author.name}</p>
                  <p className="text-xs text-gray-400">{post.author.role}</p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-purple" />
                  {post.publishedAt}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-purple" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mr-2">
                Share Article
              </span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/35 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/35 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/35 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyLink}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/35 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 relative"
              >
                <LinkIcon className="w-4 h-4" />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-[10px] font-bold px-2 py-1 rounded shadow-md pointer-events-none">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Hero Right image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-transparent rounded-3xl blur-xl opacity-40 pointer-events-none" />
            <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={getImageUrl(post)}
                alt={post.title}
                fill
                sizes="(max-w-768px) 100vw, 500px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
