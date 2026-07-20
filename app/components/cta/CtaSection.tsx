"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CtaSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CtaSection({
  title,
  subtitle = "Accelerate business growth with strategic marketing built for ambitious B2B technology companies.",
  buttonText = "Book a Growth Call",
  buttonLink = "/contact",
}: CtaSectionProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-transparent border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-fuchsia-800/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-purple/20 via-[#0B0813] to-brand-purple/20 border border-brand-purple/20 py-10 px-5 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle overlay decorative vector icon */}
          <div className="absolute top-[-10%] right-[-5%] opacity-[0.03] text-brand-purple pointer-events-none">
            <Sparkles size={350} />
          </div>

          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-4 text-center lg:text-left">
              {title ? (
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight font-display text-white">
                  {title}
                </h2>
              ) : (
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight font-display text-white">
                  Great Ideas Deserve{" "}
                  <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
                    Greater Market Impact.
                  </span>
                </h2>
              )}
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                {subtitle}
              </p>
            </div>

            {/* Right Interactive CTA */}
            <div className="flex flex-col items-center lg:items-end gap-6 w-full">
              <Link href={buttonLink} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-purple hover:bg-purple-700 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)]"
                >
                  {buttonText}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              {/* Team Avatars + Tagline */}
              <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                <div className="flex -space-x-2.5 flex-shrink-0">
                  {[
                    "kloudlite_io_logo.jpg",
                    "mothersongroup_logo.jpg",
                    "pinnacle-log.png",
                    "panchayath-app-logo.jpg",
                  ].map((img, idx) => (
                    <div
                      key={idx}
                      className="relative w-8 h-8 rounded-full border-2 border-[#05030a] overflow-hidden bg-gray-900"
                    >
                      <Image
                        src={`/logos/${img}`}
                        alt="Team Member avatar"
                        fill
                        sizes="32px"
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-gray-400 max-w-[200px] sm:max-w-none leading-normal">
                  Trusted by leading B2B brands across SaaS, AI, Robotics, and
                  Manufacturing.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
