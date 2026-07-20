"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

interface ServicesHeroProps {
  title?: string;
  heroHighlight?: string;
  description?: string;
  badges?: string[];
  breadcrumbs?: { label: string; link?: string }[];
}

export default function ServicesHero({
  title = "Services",
  heroHighlight = "",
  description = "Strategy-led B2B growth services designed to turn clarity into pipeline, revenue, and long-term scale.",
  badges = [
    "Clear Positioning",
    "Demand Generation",
    "Scalable Results",
    "Growth Systems",
  ],
  breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
  ],
}: ServicesHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMainServicesPage = title.toLowerCase() === "services";

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-6 lg:px-12 flex flex-col justify-start items-center overflow-hidden bg-transparent"
    >
      {/* Background glow overlay */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_70%_20%,rgba(128,0,128,0.25),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_0%_50%,rgba(128,0,128,0.1),transparent_60%)] pointer-events-none" />

      {/* Centered Decorative Constellation/Orbits Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] pointer-events-none opacity-40 -z-10 select-none">
        <svg viewBox="0 0 800 800" className="w-full h-full text-brand-purple">
          {/* Outer glow aura */}
          <circle
            cx="400"
            cy="400"
            r="300"
            fill="url(#hero-glow)"
            opacity="0.15"
          />

          {/* Orbital rings */}
          <ellipse
            cx="400"
            cy="400"
            rx="260"
            ry="100"
            transform="rotate(-25 400 400)"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.12"
            fill="none"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="320"
            ry="130"
            transform="rotate(35 400 400)"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.08"
            fill="none"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="360"
            ry="160"
            transform="rotate(-55 400 400)"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.06"
            fill="none"
          />

          {/* Animated dashes */}
          <ellipse
            cx="400"
            cy="400"
            rx="260"
            ry="100"
            transform="rotate(-25 400 400)"
            stroke="url(#dash-glow-1)"
            strokeWidth="2"
            strokeDasharray="40 400"
            fill="none"
            className="animate-orbit-line"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="320"
            ry="130"
            transform="rotate(35 400 400)"
            stroke="url(#dash-glow-2)"
            strokeWidth="2"
            strokeDasharray="50 500"
            fill="none"
            className="animate-orbit-line"
            style={{ animationDirection: "reverse", animationDuration: "40s" }}
          />

          {/* Glowing node dots at intersections */}
          <circle
            cx="210"
            cy="310"
            r="4"
            className="fill-fuchsia-400 animate-pulse"
          />
          <circle
            cx="590"
            cy="490"
            r="3"
            className="fill-indigo-400 animate-ping"
            style={{ animationDuration: "3s" }}
          />
          <circle
            cx="340"
            cy="220"
            r="5"
            className="fill-pink-500 animate-pulse"
            style={{ animationDuration: "2.5s" }}
          />
          <circle
            cx="460"
            cy="580"
            r="4.5"
            className="fill-brand-purple animate-pulse"
            style={{ animationDuration: "4s" }}
          />

          <defs>
            <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="1" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="dash-glow-1"
              x1="0"
              y1="0"
              x2="800"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="dash-glow-2"
              x1="0"
              y1="0"
              x2="800"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl w-full mx-auto flex flex-col justify-between flex-grow z-10 pt-20 pb-6">
        {/* Top Left Breadcrumbs */}
        <div className="w-full flex justify-start">
          {!isMainServicesPage ? (
            <motion.nav
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              aria-label="Breadcrumb"
              className="mb-4"
            >
              <ol className="flex items-center gap-2 text-xs md:text-sm text-gray-400 font-medium">
                {breadcrumbs.map((crumb, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {crumb.link ? (
                      <Link
                        href={crumb.link}
                        className="hover:text-white transition"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white font-semibold">
                        {crumb.label}
                      </span>
                    )}
                    {idx < breadcrumbs.length - 1 && <span>/</span>}
                  </li>
                ))}
              </ol>
            </motion.nav>
          ) : (
            <div className="h-6" />
          )}
        </div>

        {/* Main Content Wrapper (Centered in remaining height) */}
        <div className="flex flex-col items-center text-center w-full my-auto py-2">
          {/* Service Badge / Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-brand-purple"
          >
            {isMainServicesPage ? "all4Ps Services" : "Services"}
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] text-white tracking-tight mb-5 max-w-4xl font-display"
          >
            {isMainServicesPage ? (
              <>
                The Strongest Brands Aren&apos;t Louder. <br />
                <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
                  They&apos;re Clearer.
                </span>
              </>
            ) : (
              <>
                {title}{" "}
                <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
                  {heroHighlight}
                </span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mb-7 px-4"
          >
            {isMainServicesPage ? (
              <>
                Strategy-led B2B growth services designed to turn clarity into
                pipeline, revenue, <br className="hidden md:inline" />
                and long-term scale.
              </>
            ) : (
              <>
                {description.split(". ")[0]}.<br className="hidden md:inline" />{" "}
                {description.split(". ").slice(1).join(". ")}
              </>
            )}
          </motion.p>

          {/* Horizontal Glassmorphic Badge Row */}
          {badges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mb-6 px-4"
            >
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-brand-purple/20 text-xs font-semibold text-gray-300 hover:text-white hover:border-brand-purple/50 transition-all select-none cursor-default shadow-md"
                >
                  {badge}
                </div>
              ))}
            </motion.div>
          )}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group bg-brand-purple hover:bg-purple-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 w-full sm:w-auto"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/portfolio"
              className="group border border-gray-700 hover:border-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base font-semibold text-white transition flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </div>

        {/* Empty bottom space to balance layout */}
        <div className="h-6 hidden md:block" />
      </div>
    </section>
  );
}
