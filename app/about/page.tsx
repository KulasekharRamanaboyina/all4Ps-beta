"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroSection from "../components/about/Hero/HeroSection";
import FounderCard from "../components/about/Founder/FounderCard";
//import JourneyTimeline from "../components/about/Journey/JourneyTimeline";
import ValuesGrid from "../components/about/Values/ValuesGrid";
import TeamGrid from "../components/about/Team/TeamGrid";
import IndustriesSection from "../components/about/Industries/IndustriesSection";
import CultureSection from "../components/about/Culture/CultureSection";
import CtaSection from "../components/cta/CtaSection";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={containerRef}
      className="bg-transparent text-white overflow-x-hidden"
    >
      <HeroSection scrollYProgress={scrollYProgress} />
      <FounderCard />
      {/* <JourneyTimeline /> */}
      <TeamGrid />
      <section className="relative py-12 md:py-16 px-6 lg:px-12 border-t border-brand-purple/10">
        <ValuesGrid />
        <IndustriesSection />
      </section>
      <CultureSection />
      <CtaSection />
    </main>
  );
}
