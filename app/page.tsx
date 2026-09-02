import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { SERVICES, ICONS_MAP, CASE_STUDIES } from "./constants";
import FAQSection from "./components/FAQSection";
import { homeFaqs } from "../lib/faqs";
import LogoRibbon from "./components/home/hero/LogoRibbon";
import ApproachSection from "./components/home/Approach/ApproachSection";
import ServicesSection from "./components/home/Services/ServicesSection";
import SuccessStoriesSection from "./components/home/SuccessStories/SuccessStoriesSection";
import CTASection from "./components/cta/CtaSection";

import {
  ArrowRight,
  BarChart2,
  Users,
  ShieldCheck,
  Zap,
  CheckCircle,
} from "lucide-react";

import ServicesGrid from "./components/ServicesGrid";
import GrowthChart from "./components/GrowthChart";
import HeroVisual from "./components/home/hero/HeroVisual";

/* ================= SEO ================= */
export const metadata: Metadata = {
  title: "B2B Growth Marketing Agency for Technology Companies | all4Ps",

  description:
    "all4Ps is a B2B growth marketing partner helping technology companies build authority, generate demand, and accelerate measurable business growth.",

  alternates: {
    canonical: "https://www.all4ps.co/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "B2B Growth Marketing Agency for Technology Companies | all4Ps",

    description:
      "all4Ps is a B2B growth marketing partner helping technology companies build authority, generate demand, and accelerate measurable business growth.",

    url: "https://www.all4ps.co/",

    siteName: "all4Ps",

    type: "website",

    images: [
      {
        url: "/images/og/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "all4Ps B2B Growth Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "B2B Growth Marketing Agency for Technology Companies | all4Ps",

    description:
      "all4Ps is a B2B growth marketing partner helping technology companies build authority, generate demand, and accelerate measurable business growth.",

    images: ["/images/og/home-og.jpg"],
  },
};

export default function Page() {
  return (
    <div className="animate-hero">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-transparent text-white">
        {/* Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(128,0,128,0.45),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-14 min-h-screen pt-20 md:pt-24 lg:pt-0 pb-4">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left lg:self-center">
              {/* <span className="inline-flex items-center rounded-full border border-brand-purple/40 bg-brand-purple/10 px-4 py-2 text-sm font-semibold text-brand-purple"> */}
              <span className="inline-flex items-center rounded-full border border-brand-purple/30 bg-brand-purple/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
                STRATEGY. EXECUTION. GROWTH.
              </span>

              <h1 className="mt-3 max-w-2xl text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] sm:leading-[0.95] tracking-tight">
                Growth Marketing
                <br />
                <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
                  for Innovative
                </span>
                <br />
                B2B Technology Companies.
              </h1>

              {/* <p className="mt-8 max-w-xl text-lg text-gray-300 leading-8">
          all4Ps helps industrial, SaaS and technology companies create
          positioning, demand generation and sales enablement systems that
          produce measurable revenue growth.
        </p> */}
              <p className="mt-3 max-w-lg text-sm sm:text-sm md:text-base leading-6 md:leading-7 text-gray-300">
                We help B2B technology companies build authority, generate
                demand, and accelerate growth by turning expertise into market
                leadership and measurable business results.
              </p>

              {/* CTA Buttons */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  // className="bg-brand-purple hover:bg-purple-600 text-white px-8 py-4 rounded-md font-semibold transition"
                  className="group bg-brand-purple hover:bg-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                >
                  Book a Strategy Call
                </Link>

                <Link
                  href="/portfolio"
                  className="border border-gray-700 hover:border-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base font-semibold transition"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative flex justify-center lg:justify-end">
              {/* <GrowthChart /> */}
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>
      <LogoRibbon />
      {/* ================= WHAT WE DO ================= */}

      <ApproachSection />
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-2 text-black">
              What We Do
            </h2>

            <span className="italic text-gray-500 block mb-4">
              Brand + sales enablement for deep-tech companies
            </span>

            <p className="text-xl text-gray-600 mb-4">
              We help robotics, automation, and B2B tech companies scale
            </p>

            <ul className="space-y-4">
              {[
                "Sharpen positioning and messaging",
                "Align brand with revenue goals",
                "Enable sales teams with clearer narratives",
                "Execute marketing that supports pipeline growth",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-purple mt-1 mr-4" />
                  <p className="text-lg text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 shadow-2xl border-l-4 border-brand-purple">
            <Image
              src="/images/home/all4ps-b2b-marketing-sales-enablement.jpg"
              alt="Deep-tech marketing analytics dashboard"
              width={600}
              height={300}
              //className="w-full h-70 object-cover grayscale hover:grayscale-0 transition-all"
              // className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all"
              // unoptimized
              className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>
      <ServicesGrid /> */}
      {/* ================= OUR APPROACH ================= */}
      {/* <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-white">
            Our Approach Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <Feature
              icon={BarChart2}
              title="We Prioritize ROI"
              description="Your financial success is our core performance measure."
            />

            <Feature
              icon={ShieldCheck}
              title="Straight Forward"
              description="We speak clearly and focus on what truly matters to your business."
            />

            <Feature
              icon={Zap}
              title="Results You Can Trust"
              description="Reporting that provides clarity, insight, and financial relevance."
            />

            <Feature
              icon={Users}
              title="Deeply Invested"
              description="Your success drives our direction, decisions, and effort."
            />
          </div>
        </div>
      </section> */}
      <ServicesSection />
      {/* ================= SUCCESS STORIES ================= */}
      <SuccessStoriesSection />
      {/* ================= FAQ ================= */}
      {/* <FAQSection faqs={homeFaqs} /> */}
      {/* ================= FINAL CTA ================= */}
      <CTASection />
      {/* <section className="py-24 bg-brand-purple text-center px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Take the Next Step?
          <br />
          Here’s How to Begin
        </h2>

        <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
          Schedule a conversation. We’ll focus directly on your objectives,
          challenges, and opportunities.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-black text-white px-10 py-5 text-xl font-bold hover:bg-white hover:text-black transition-all shadow-xl"
        >
          Book a 30-Minute Strategy Call
        </Link>
      </section> */}
      {/* ================= WebSite Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "all4Ps",
            url: "https://www.all4ps.co",
            logo: "https://www.all4ps.co/favicon.ico",
            email: "hello@all4ps.co",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "hello@all4ps.co",
                availableLanguage: ["English"],
              },
            ],
            sameAs: [
              "https://www.linkedin.com/company/all4ps",
              "https://www.instagram.com/all4ps",
            ],
          }),
        }}
      />
    </div>
  );
}

/* ===== Reusable feature block ===== */
function Feature({ icon: Icon, title, description }: any) {
  return (
    <div className="p-6 border border-gray-800 bg-gray-900/50">
      <Icon className="w-12 h-12 text-brand-purple mb-4" />
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
