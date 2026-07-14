import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles, Star } from "lucide-react";
import CtaSection from "@/app/components/cta/CtaSection";

export const metadata: Metadata = {
  title: "Careers | all4Ps",
  description:
    "Join the all4Ps team. We're looking for exceptional growth thinkers, brand builders, and digital marketers who want to make a real impact.",
  alternates: {
    canonical: "https://www.all4ps.co/careers",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      {/* Background soft glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_70%_20%,rgba(128,0,128,0.25),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_0%_50%,rgba(128,0,128,0.1),transparent_60%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/15 border border-brand-purple/35 text-xs font-semibold uppercase tracking-wider text-brand-purple mb-6 select-none">
            <Sparkles className="w-3.5 h-3.5" />
            Careers at all4Ps
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display leading-[1.1] max-w-3xl mx-auto mb-6">
            Join the People <br />
            Behind the{" "}
            <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
              Growth Engine.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We ask better questions, build GTM systems with intention, and deliver compounding outcomes. Come shape the future of B2B growth marketing.
          </p>
        </div>
      </section>

      {/* Roles & Opportunities Section */}
      <section className="relative py-24 bg-[#05030A] overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
              Open Positions
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Current job openings and opportunities to collaborate with all4Ps.
            </p>
          </div>

          {/* No Roles Empty State Box */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0813]/60 p-8 sm:p-12 text-center shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-brand-purple/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(128,0,128,0.03),transparent_50%)] pointer-events-none" />
            
            {/* Folder/Notification icon */}
            <div className="w-14 h-14 rounded-full bg-brand-purple/10 border border-brand-purple/25 flex items-center justify-center mx-auto mb-6">
              <Star className="w-6 h-6 text-brand-purple animate-pulse" />
            </div>

            {/* Empty state details */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              No Open Roles at the Moment
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              Although we don&apos;t have active openings right now, we are always on the lookout for exceptional talent—growth strategists, brand designers, copywriters, developers, and advisors. Let us know who you are and what you build.
            </p>

            {/* Mail Call */}
            <a
              href="mailto:grow@all4ps.co?subject=Speculative Application - Careers"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-brand-purple hover:bg-purple-700 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Drop us a line
            </a>
          </div>

        </div>
      </section>

      {/* Global Unified Bottom CTA */}
      <CtaSection />
    </main>
  );
}
