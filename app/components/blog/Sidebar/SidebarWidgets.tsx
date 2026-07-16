"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { DetailedBlogPost } from "@/app/types";
import { urlFor } from "@/lib/image";

interface AuthorWidgetProps {
  author?: {
    name: string;
    role: string;
    avatar: any;
    bio: string;
    socials?: {
      linkedin?: string;
      twitter?: string;
      email?: string;
    };
  };
}

// 1. Author Widget
export function AuthorWidget({ author }: AuthorWidgetProps) {
  const displayAuthor = author || {
    name: "K. Pavani",
    role: "Founder & CEO, all4Ps",
    avatar: "/images/Team_Members/Pavani.webp",
    bio: "Pavani is the Founder of all4Ps, with over a decade of experience building growth marketing strategies for deep-tech, SaaS, and industrial enterprises.",
    socials: {
      linkedin: "https://linkedin.com/company/all4ps",
      twitter: "https://twitter.com/all4ps",
      email: "mailto:hello@all4ps.co",
    },
  };

  let avatarSrc = "/images/Team_Members/Pavani.webp";
  if (displayAuthor.avatar) {
    if (typeof displayAuthor.avatar === "string") {
      avatarSrc = displayAuthor.avatar;
    } else {
      try {
        avatarSrc = urlFor(displayAuthor.avatar).width(200).url();
      } catch (e) {
        // Muted
      }
    }
  }

  return (
    <div className="rounded-2xl border border-white/5 bg-[#0d0d14] p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none" />
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border border-brand-purple/30 bg-gray-900">
          <Image
            src={avatarSrc}
            alt={displayAuthor.name}
            fill
            sizes="56px"
            className="object-cover object-top"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#0d0d14]" />
        </div>
        <div>
          <h3 className="font-bold text-white text-base leading-tight">
            {displayAuthor.name}
          </h3>
          <p className="text-xs text-brand-purple font-medium">
            {displayAuthor.role}
          </p>
        </div>
      </div>
      <p className="text-gray-400 text-xs leading-relaxed mb-5">
        {displayAuthor.bio}
      </p>
      <div className="flex items-center gap-3">
        {displayAuthor.socials?.linkedin && (
          <Link
            href={displayAuthor.socials.linkedin}
            target="_blank"
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/30 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
        )}
        {displayAuthor.socials?.twitter && (
          <Link
            href={displayAuthor.socials.twitter}
            target="_blank"
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/30 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
          >
            <FaXTwitter className="w-4 h-4" />
          </Link>
        )}
        {displayAuthor.socials?.email && (
          <Link
            href={displayAuthor.socials.email}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/30 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

// 2. Newsletter Widget
export function NewsletterWidget({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("Subscribing...");
    setTimeout(() => {
      setStatus("Thank you! You are subscribed.");
      setEmail("");
    }, 1200);
  };

  return (
    <div className="rounded-2xl border border-white/5 bg-[#0d0d14] p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-28 h-28 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none" />
      <h3 className="font-bold text-white text-base leading-tight mb-2">
        Stay Ahead. Get Insights.
      </h3>
      <p className="text-gray-400 text-xs leading-relaxed mb-5">
        Subscribe to receive our latest insights on B2B demand generation, scaling pipeline, and brand positioning directly to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full bg-[#05030a] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple/50 transition-colors"
        />
        <button
          type="submit"
          className="w-full bg-brand-purple hover:bg-purple-700 text-white font-semibold py-3 rounded-xl text-xs hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
      {status && (
        <p className="text-[11px] text-brand-purple mt-3 font-semibold">
          {status}
        </p>
      )}
    </div>
  );
}

// 3. Popular Articles Widget
interface PopularArticlesWidgetProps {
  popularPosts: DetailedBlogPost[];
}

export function PopularArticlesWidget({ popularPosts }: PopularArticlesWidgetProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#0d0d14] p-6">
      <h3 className="font-bold text-white text-base leading-tight mb-5">
        Popular Articles
      </h3>
      <div className="space-y-4">
        {popularPosts.slice(0, 5).map((pop, idx) => (
          <Link
            key={pop.id}
            href={`/blog/${pop.slug}`}
            className="flex gap-3 items-start group"
          >
            <div className="w-7 h-7 rounded-full border border-brand-purple/30 bg-brand-purple/5 flex items-center justify-center text-xs font-bold text-brand-purple flex-shrink-0 mt-0.5 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
              {String(idx + 1).padStart(2, "0")}
            </div>
            <div className="flex-grow">
              <h4 className="text-xs font-semibold text-gray-300 group-hover:text-white leading-snug line-clamp-2 transition-colors duration-200">
                {pop.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
