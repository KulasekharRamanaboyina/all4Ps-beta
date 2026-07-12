"use client";

import React from "react";
import { CaseStudy } from "@/app/types";
import CaseStudyHero from "@/app/components/portfolio/CaseStudyHero";
import CaseStudyProse from "@/app/components/portfolio/CaseStudyProse";
import CaseStudyMetrics from "@/app/components/portfolio/CaseStudyMetrics";
import RelatedCaseStudies from "@/app/components/portfolio/RelatedCaseStudies";
import CtaSection from "@/app/components/cta/CtaSection";

type Props = {
  client: CaseStudy;
};

export default function ClientPageUI({ client }: Props) {
  return (
    <div className="bg-black min-h-screen text-white">
      <CaseStudyHero client={client} />
      <CaseStudyProse client={client} />
      <CaseStudyMetrics client={client} />
      <RelatedCaseStudies currentId={client.id} />
      <CtaSection title="Ready to Create Your Success Story?" subtitle="Let's build a strategy that drives real growth." />
    </div>
  );
}
