import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import FAQSection from "@/app/components/FAQSection";

import { SERVICES, CASE_STUDIES } from "@/app/constants";
import { Service } from "@/app/types";

import ServicesHero from "@/app/components/services/ServicesHero";
import ServiceDetailsSection from "@/app/components/services/ServiceDetailsSection";
import ServicesFeaturedCaseStudy from "@/app/components/services/ServicesFeaturedCaseStudy";
import ServicesTestimonials from "@/app/components/services/ServicesTestimonials";
import CtaSection from "@/app/components/cta/CtaSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ===== 1. SEO METADATA (Next.js Way) =====
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = SERVICES.find(
    (s: Service) => s.id.toLowerCase() === slug?.toLowerCase().trim(),
  );

  if (!service) return { title: "Service Not Found | all4Ps" };

  const pageTitle = `${service.title} Services | all4Ps`;
  const pageDescription =
    service.shortDescription ||
    `${service.title} by all4Ps – B2B growth marketing.`;
  const pageUrl = `https://www.all4ps.co/services/${slug}`;

  const ogImage = `https://www.all4ps.co${service.outComesHeadingImage}`
    .replace("/services/", "/og/")
    .replace(".webp", ".jpg");

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
  };
}

// ===== 2. DYNAMIC FIELD MAPS FOR SERVICES =====

const badgesMap: Record<string, string[]> = {
  "brand-identity": ["Clear Positioning", "Memorable Design", "Consistent Identity", "Lasting Impact"],
  "marketing-strategy": ["GTM Roadmap", "Market Research", "Ideal Buyer ICP", "Sales Enablement"],
  "growth-marketing": ["Demand Gen", "Scalable Funnels", "Lead Capture", "Continuous CRO"],
  "content-marketing": ["Blog Authority", "Email Campaigns", "PR Outreach", "Sustained Traffic"],
  "seo-sem": ["Organic Ranking", "High-Intent Keywords", "LinkedIn Ads", "Ad Spend ROI"],
  "website-services": ["UX/UI Design", "Site Speed", "High Conversions", "CMS Control"],
};

const ctaMap: Record<string, { title: string; subtitle: string }> = {
  "brand-identity": {
    title: "Ready to Build a Brand That Stands Out?",
    subtitle: "Let's create clarity, connection, and impact together."
  },
  "marketing-strategy": {
    title: "Ready to Launch a GTM Strategy That Wins?",
    subtitle: "Let's align your messaging and start scaling your channels."
  },
  "growth-marketing": {
    title: "Ready to Accelerate Your Customer Acquisition?",
    subtitle: "Let's build a systematic, data-driven lead generation funnel."
  },
  "content-marketing": {
    title: "Ready to Build Industry Topical Authority?",
    subtitle: "Let's craft high-impact, author-led content assets."
  },
  "seo-sem": {
    title: "Ready to Capture High-Intent Buyer Traffic?",
    subtitle: "Let's optimize your organic presence and paid campaigns."
  },
  "website-services": {
    title: "Ready to Design a Website That Closes Deals?",
    subtitle: "Let's craft a fast, responsive, conversion-ready website."
  }
};

const frameworkTitles: Record<string, string> = {
  "brand-identity": "A Clear Path from Clarity to Connection",
  "marketing-strategy": "A Clear Path from Clarity to Direction",
  "growth-marketing": "A Clear Path from Clarity to Pipeline",
  "content-marketing": "A Clear Path from Clarity to Authority",
  "seo-sem": "A Clear Path from Clarity to Visibility",
  "website-services": "A Clear Path from Clarity to Conversion"
};

const getFrameworkSteps = (slug: string) => {
  switch (slug) {
    case "brand-identity":
      return [
        { number: "01", title: "Discover", description: "We dive deep into your business, audience, and market to find what matters.", icon: "Search" },
        { number: "02", title: "Position", description: "We define your unique positioning that makes you the obvious choice.", icon: "Target" },
        { number: "03", title: "Differentiate", description: "We craft a compelling brand identity that stands out and creates preference.", icon: "Award" },
        { number: "04", title: "Systemize", description: "We create guidelines and systems that ensure consistency everywhere.", icon: "Settings" },
        { number: "05", title: "Scale", description: "We optimize your brand for growth across every channel and touchpoint.", icon: "TrendingUp" }
      ];
    case "marketing-strategy":
      return [
        { number: "01", title: "Discover", description: "We analyze your competitive landscape, buyers, and performance.", icon: "Search" },
        { number: "02", title: "Position", description: "We define a clear GTM positioning strategy for your segments.", icon: "Target" },
        { number: "03", title: "Differentiate", description: "We clarify your unique value proposition (UVP) for commercial buyers.", icon: "Award" },
        { number: "04", title: "Systemize", description: "We build strategy roadmaps and structured execution timelines.", icon: "Settings" },
        { number: "05", title: "Scale", description: "We monitor pipeline goals and scale GTM channels dynamically.", icon: "TrendingUp" }
      ];
    case "growth-marketing":
      return [
        { number: "01", title: "Discover", description: "We audit your conversion funnel and identify acquisition leaks.", icon: "Search" },
        { number: "02", title: "Position", description: "We match traffic channels with high-intent buyer personas.", icon: "Target" },
        { number: "03", title: "Differentiate", description: "We craft custom landing pages with clear, unique offers.", icon: "Award" },
        { number: "04", title: "Systemize", description: "We implement email nurturing, tag managers, and tracking automation.", icon: "Settings" },
        { number: "05", title: "Scale", description: "We optimize campaign variables continuously to lower customer acquisition costs.", icon: "TrendingUp" }
      ];
    case "content-marketing":
      return [
        { number: "01", title: "Discover", description: "We audit your existing blog assets and study buyer search behaviors.", icon: "Search" },
        { number: "02", title: "Position", description: "We map topics to different stages of the buyer evaluation journey.", icon: "Target" },
        { number: "03", title: "Differentiate", description: "We develop distinct perspectives and author-led content assets.", icon: "Award" },
        { number: "04", title: "Systemize", description: "We establish monthly content calendars, briefs, and templates.", icon: "Settings" },
        { number: "05", title: "Scale", description: "We distribute content across dark social and organic channels to drive inbound.", icon: "TrendingUp" }
      ];
    case "seo-sem":
      return [
        { number: "01", title: "Discover", description: "We conduct technical audits and keyword search volume research.", icon: "Search" },
        { number: "02", title: "Position", description: "We target high-intent transactional search queries for B2B search.", icon: "Target" },
        { number: "03", title: "Differentiate", description: "We optimize meta structures and on-page content relevance.", icon: "Award" },
        { number: "04", title: "Systemize", description: "We launch standard link-building campaigns and track keyword movement.", icon: "Settings" },
        { number: "05", title: "Scale", description: "We run paid search and paid social campaigns to scale buyer capture.", icon: "TrendingUp" }
      ];
    case "website-services":
      return [
        { number: "01", title: "Discover", description: "We review user flow analytics, site speed, and conversion friction.", icon: "Search" },
        { number: "02", title: "Position", description: "We structure navigation to align with standard B2B buyers' expectations.", icon: "Target" },
        { number: "03", title: "Differentiate", description: "We design a custom, premium visual layout matching your brand guidelines.", icon: "Award" },
        { number: "04", title: "Systemize", description: "We develop lightweight responsive code, custom CMS control, and CRO tests.", icon: "Settings" },
        { number: "05", title: "Scale", description: "We deploy conversion rate audits to scale lead generation results.", icon: "TrendingUp" }
      ];
    default:
      return [
        { number: "01", title: "Discover", description: "We research your business scope and customer segments.", icon: "Search" },
        { number: "02", title: "Position", description: "We formulate market positioning coordinates.", icon: "Target" },
        { number: "03", title: "Differentiate", description: "We highlight your brand value compared to competitors.", icon: "Award" },
        { number: "04", title: "Systemize", description: "We set standard workflows and campaign guidelines.", icon: "Settings" },
        { number: "05", title: "Scale", description: "We measure outcomes and compound your pipelines.", icon: "TrendingUp" }
      ];
  }
};

// ===== 3. MAIN PAGE COMPONENT =====
export default async function ServiceDetail({ params }: PageProps) {
  const { slug } = await params;

  const service = SERVICES.find(
    (s: Service) => s.id.toLowerCase() === slug?.toLowerCase().trim(),
  );

  if (!service) {
    notFound();
  }

  // ===== Dynamic FAQs mapping =====
  const brandFaqs = [
    { q: "What does your brand identity service include?", a: "It includes positioning, messaging, visual identity, and brand guidelines for consistency." },
    { q: "Do you handle rebranding?", a: "Yes, we help both new brands and existing businesses redefine their identity." },
    { q: "How long does it take?", a: "Typically 3–6 weeks depending on scope." },
    { q: "Will you define brand messaging?", a: "Yes, we align messaging with your business goals and audience." },
    { q: "Do you provide brand guidelines?", a: "Yes, a complete guideline document is included." },
  ];

  const marketingStrategyFaqs = [
    { q: "What does a marketing strategy include?", a: "We define positioning, channels, messaging, and a clear execution roadmap." },
    { q: "Is this suitable for early-stage companies?", a: "Yes, we adapt strategies based on your growth stage." },
    { q: "How long does strategy development take?", a: "Usually 2–4 weeks." },
    { q: "Will you help implement the strategy?", a: "Yes, we support both strategy and execution." },
    { q: "How do you measure success?", a: "Through pipeline growth, leads, and conversions." },
  ];

  const growthMarketingFaqs = [
    { q: "What is growth marketing?", a: "It focuses on scalable experiments across channels to drive leads and revenue." },
    { q: "How do you generate leads?", a: "Through SEO, content, landing pages, and conversion optimization." },
    { q: "Is this suitable for B2B companies?", a: "Yes, we specialize in B2B growth systems." },
    { q: "How soon can I see results?", a: "Initial traction in 8–12 weeks." },
    { q: "Do you optimize continuously?", a: "Yes, we test and improve performance regularly." },
  ];

  const contentMarketingFaqs = [
    { q: "What does content marketing include?", a: "Content strategy, blogs, landing pages, and SEO-driven content." },
    { q: "Will you handle content creation?", a: "Yes, from strategy to writing and optimization." },
    { q: "Is content aligned with SEO?", a: "Yes, all content is optimized for search and conversions." },
    { q: "How long before results?", a: "Typically 2–3 months for traction." },
    { q: "Do you create industry-specific content?", a: "Yes, tailored to your niche and audience." },
  ];

  const seoFaqs = [
    { q: "How long does SEO take?", a: "Most clients see results within 2–3 months, with stronger growth over time." },
    { q: "Do you guarantee rankings?", a: "No guarantees, but we follow proven strategies for consistent growth." },
    { q: "What is included in SEO?", a: "Keyword research, technical SEO, on-page optimization, and content." },
    { q: "Will SEO generate leads?", a: "Yes, SEO drives qualified inbound traffic and leads." },
    { q: "Do you provide reports?", a: "Yes, we share regular performance insights." },
  ];

  const websiteFaqs = [
    { q: "Do you build websites from scratch?", a: "Yes, we build and redesign websites focused on conversions." },
    { q: "Will my website be SEO-friendly?", a: "Yes, all websites follow SEO best practices." },
    { q: "How long does it take?", a: "Typically 3–6 weeks." },
    { q: "Can I update the website myself?", a: "Yes, we build easy-to-manage systems." },
    { q: "Do you focus on conversions?", a: "Yes, every site is optimized for leads and user experience." },
  ];

  const faqsMap: Record<string, typeof brandFaqs> = {
    "brand-identity": brandFaqs,
    "marketing-strategy": marketingStrategyFaqs,
    "growth-marketing": growthMarketingFaqs,
    "content-marketing": contentMarketingFaqs,
    "seo-sem": seoFaqs,
    "website-services": websiteFaqs,
  };

  const currentFaqs = faqsMap[slug] || [];

  // Fetch related case study to display as featured card (from services.png/brand-identity.png mockup layout)
  const relatedCaseStudies =
    service.caseStudyIds
      ?.map((id) => CASE_STUDIES.find((cs) => cs.id === id))
      .filter(Boolean) || [];

  // Get the single featured case study for the layout
  const featuredCaseStudy = relatedCaseStudies[0] || CASE_STUDIES[0];

  const dynamicBadges = badgesMap[slug] || badgesMap["brand-identity"];
  const dynamicFrameworkTitle = frameworkTitles[slug] || frameworkTitles["brand-identity"];
  const dynamicFrameworkSteps = getFrameworkSteps(slug);
  const dynamicCtaDetails = ctaMap[slug] || ctaMap["brand-identity"];

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: service.title }
  ];

  return (
    <main className="min-h-screen bg-transparent text-white">
      {/* 1. Services Hero Layout with custom orbitals */}
      <ServicesHero
        title={service.title}
        description={service.intro}
        badges={dynamicBadges}
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Detailed overview, capabilities, and outcomes of the service */}
      <ServiceDetailsSection service={service} />

      {/* 5. Featured Case Study layout matching the single wide card mockup */}
      {featuredCaseStudy && (
        <ServicesFeaturedCaseStudy caseStudy={featuredCaseStudy} />
      )}

      {/* 6. Client Partnerships Testimonials */}
      <ServicesTestimonials />

      {/* 7. Specific Service FAQ Section */}
      {currentFaqs.length > 0 && (
        <FAQSection faqs={currentFaqs} />
      )}

      {/* 8. Customized CTA Bottom banner */}
      <CtaSection
        title={service.bottomCTA?.heading || dynamicCtaDetails.title}
        subtitle={service.bottomCTA?.subText || dynamicCtaDetails.subtitle}
        buttonText={service.bottomCTA?.label}
        buttonLink={service.bottomCTA?.link}
      />

      {/* ================= Service Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.title} Services`,
            serviceType: service.title,
            url: `https://www.all4ps.co/services/${slug}`,
            description:
              service.shortDescription ||
              `${service.title} services by all4Ps helping B2B companies drive pipeline and revenue.`,
            provider: {
              "@type": "Organization",
              name: "all4Ps",
              url: "https://www.all4ps.co",
              logo: "https://www.all4ps.co/images/logo-black.png",
            },
            areaServed: "Worldwide",
            audience: {
              "@type": "Audience",
              audienceType: "B2B companies, SaaS, Tech, Industrial brands",
            },
          }),
        }}
      />

      {/* ================= Breadcrumb Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.all4ps.co/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://www.all4ps.co/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: `https://www.all4ps.co/services/${slug}`,
              },
            ],
          }),
        }}
      />
    </main>
  );
}
