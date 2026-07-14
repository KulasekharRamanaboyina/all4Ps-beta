"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroSection from "../components/about/Hero/HeroSection";
import FounderCard from "../components/about/Founder/FounderCard";
import JourneyTimeline from "../components/about/Journey/JourneyTimeline";
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
    <main ref={containerRef} className="bg-transparent text-white overflow-x-hidden">
      <HeroSection scrollYProgress={scrollYProgress} />
      <FounderCard />
      <JourneyTimeline />
      <ValuesGrid />
      <TeamGrid />
      <IndustriesSection />
      <CultureSection />
      <CtaSection />
    </main>
  );
}