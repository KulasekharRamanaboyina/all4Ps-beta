"use client";

import Link from "next/link";
import Image from "next/image";
import { FolderOpen, Calendar, User } from "lucide-react";
import { CaseStudy } from "@/app/types";

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
    <section className="relative pt-20 pb-12 md:pt-24 bg-transparent text-white">
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(128,0,128,0.25),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
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
        </nav>

        {/* Category Tag */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
          <FolderOpen className="w-4 h-4 text-brand-purple" />
          <span>{client.category || client.industry}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight font-display mb-8 max-w-5xl">
          {titleDetails.prefix}
          <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
            {titleDetails.highlight1}
          </span>
          {titleDetails.middle}
          <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
            {titleDetails.highlight2}
          </span>
          {titleDetails.suffix}
        </h1>

        {/* Author / Date Info */}
        <div className="flex items-center gap-3 mb-10">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-purple/40 bg-gray-900">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              sizes="40px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-white flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-gray-400" />
              {author.name}
            </div>
            <div className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              {author.date}
            </div>
          </div>
        </div>

        {/* Main Hero Image */}
        <div className="relative w-full aspect-[16/9] max-h-[640px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <Image
            src={client.imageUrl}
            alt={`${client.client} Case Study`}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
