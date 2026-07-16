"use client";

import Link from "next/link";
import Image from "next/image";
import { FolderOpen, Calendar, User } from "lucide-react";
import { CaseStudy } from "@/app/types";
import { motion } from "framer-motion";

interface CaseStudyHeroProps {
  client: CaseStudy;
}

export default function CaseStudyHero({ client }: CaseStudyHeroProps) {
  // Dynamic header styling mapping client name and achievements
  const getHeroTitleDetails = (cs: CaseStudy) => {
    switch (cs.id) {
      case "unbox":
        return {
          prefix: "How ",
          highlight1: "Unbox Robotics",
          middle: " Scaled ",
          highlight2: "Growth",
          suffix: " with all4ps"
        };
      case "motherson":
        return {
          prefix: "How ",
          highlight1: "Motherson Group",
          middle: " Positioned for ",
          highlight2: "Enterprise Value",
          suffix: ""
        };
      case "anscer":
        return {
          prefix: "How ",
          highlight1: "Anscer Robotics",
          middle: " Supported ",
          highlight2: "$1M Lead Conversion",
          suffix: " with all4ps"
        };
      case "anzo":
        return {
          prefix: "How ",
          highlight1: "Anzo Controls",
          middle: " Built ",
          highlight2: "Digital Visibility",
          suffix: " with all4ps"
        };
      case "kloudlite":
        return {
          prefix: "How ",
          highlight1: "Kloudlite Labs",
          middle: " Converted ",
          highlight2: "High-Value Leads",
          suffix: " with all4ps"
        };
      case "synergy":
        return {
          prefix: "How ",
          highlight1: "Synergy Homecare",
          middle: " Drove ",
          highlight2: "Local Lead Growth",
          suffix: " with all4ps"
        };
      case "xpstays":
        return {
          prefix: "How ",
          highlight1: "XPStays",
          middle: " Achieved ",
          highlight2: "~7.5× ROAS",
          suffix: " with all4ps"
        };
      case "panchayath":
        return {
          prefix: "How ",
          highlight1: "Panchayath App",
          middle: " Enabled ",
          highlight2: "Citizen Engagement",
          suffix: " with all4ps"
        };
      default:
        return {
          prefix: "How ",
          highlight1: cs.client,
          middle: " Partnered for ",
          highlight2: "Success",
          suffix: " with all4ps"
        };
    }
  };

  const titleDetails = getHeroTitleDetails(client);

  // Author & Date mapping
  const getAuthorDetails = (cs: CaseStudy) => {
    if (cs.id === "unbox") {
      return {
        name: "Neel Shukla",
        avatar: "/images/Team_Members/Kulasekhar.webp",
        date: "May 29, 2023"
      };
    }
    return {
      name: "K. Pavani",
      avatar: "/images/Team_Members/Pavani.webp",
      date: "May 26, 2026"
    };
  };

  const author = getAuthorDetails(client);

  return (
    <section className="relative pt-20 pb-16 md:pt-24 bg-transparent text-white border-b border-brand-purple/10">
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(128,0,128,0.25),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-xs md:text-sm text-gray-400 font-medium">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
            </li>
            <li>/</li>
            <li aria-current="page" className="text-white font-semibold truncate max-w-[200px]">
              {client.client}
            </li>
          </ol>
        </motion.nav>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details & Title */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category Tag */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block bg-brand-purple/20 border border-brand-purple/40 text-brand-purple text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full"
            >
              {client.category || client.industry}
            </motion.span>

            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight font-display text-white"
            >
              {titleDetails.prefix}
              <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
                {titleDetails.highlight1}
              </span>
              {titleDetails.middle}
              <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
                {titleDetails.highlight2}
              </span>
              {titleDetails.suffix}
            </motion.h1>

            {/* Subtitle / Key Result */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-gray-300 text-lg sm:text-xl font-medium leading-relaxed"
            >
              {client.title}
            </motion.p>

            {/* Author / Date Info */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 pt-4 border-t border-white/5"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-brand-purple/40 bg-gray-900">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="44px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{author.name}</p>
                <p className="text-xs text-gray-400">{author.date}</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Cover */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-transparent rounded-3xl blur-xl opacity-40 pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src={client.imageUrl}
                alt={`${client.client} Case Study`}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
