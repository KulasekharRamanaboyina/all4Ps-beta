import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import FAQSection from "@/app/components/FAQSection";
import { serviceFaqs } from "@/lib/faqs";
import { servicesMeta } from "@/lib/servicesMeta";

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

  const normalizedSlug = slug?.toLowerCase().trim();
  const meta = servicesMeta[normalizedSlug as keyof typeof servicesMeta];

  if (!meta) {
    return {
      title: "Service Not Found | all4Ps",
    };
  }

  const pageTitle = meta.title;
  const pageDescription = meta.description;
  const pageUrl = meta.canonical;
  const ogImage = `https://www.all4ps.co${meta.ogImage}`;

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
  "brand-strategy": [
    "Brand Discovery",
    "Market Research",
    "Brand Positioning",
    "Messaging Framework",
  ],
  "positioning-messaging": [
    "Value Proposition",
    "Messaging Framework",
    "B2B Buyer Personas",
    "Brand Positioning",
  ],
  "thought-leadership": [
    "Executive Narrative Development",
    "Technical Content Marketing",
    "Industry Speaking Opportunities",
    "Authority Content",
  ],
  "content-marketing": [
    "Technical Content Creation",
    "Case Studies",
    "Whitepapers",
    "Content Distribution",
  ],
  "demand-generation": [
    "Demand Generation Strategy",
    "Lead Generation Programs",
    "Account-Based Campaigns",
    "Pipeline Growth",
  ],
  abm: [
    "ICP Mapping",
    "B2B Lead Generation",
    "Marketing Automation",
    "Enterprise Engagement",
  ],
  "campaign-execution": [
    "Campaign Management",
    "Lead Nurture Workflows",
    "Performance Optimization",
    "Multi-Channel Campaigns",
  ],
  "marketing-automation": [
    "Automated Lead Nurturing",
    "Marketing Automation Services",
    "CRM Integration",
    "Workflow Automation",
  ],
  "seo-visibility": [
    "Technical SEO",
    "B2B SEO",
    "Keyword Research",
    "SEO Optimization",
  ],
  "website-optimisation": [
    "Website Performance Optimization",
    "Landing Page Optimization",
    "User Experience (UX) Enhancement",
    "Conversion Optimization",
  ],
  "analytics-reporting": [
    "GA4 & Attribution Setup",
    "Custom Performance Dashboards",
    "Pipeline & ROI Reporting",
    "Marketing Analytics",
  ],
  "gtm-execution": [
    "Go-to-Market Strategy",
    "Demand Generation Campaigns",
    "Product Launch Execution",
    "GTM Campaigns",
  ],
};

const frameworkTitles: Record<string, string> = {
  "brand-strategy": "A Clear Path from Clarity to Brand Connection",
  "positioning-messaging": "A Clear Path from Clarity to Messaging Alignment",
  "thought-leadership": "A Clear Path from Clarity to Industry Authority",
  "content-marketing": "A Clear Path from Clarity to Content Impact",
  "demand-generation": "A Clear Path from Clarity to Inbound Engine",
  abm: "A Clear Path from Clarity to Account Success",
  "campaign-execution": "A Clear Path from Clarity to Campaign ROI",
  "marketing-automation": "A Clear Path from Clarity to Automated Growth",
  "seo-visibility": "A Clear Path from Clarity to Organic Dominance",
  "website-optimisation": "A Clear Path from Clarity to Website Conversion",
  "analytics-reporting": "A Clear Path from Clarity to Full Attribution",
  "gtm-execution": "A Clear Path from Clarity to Market Penetration",
};

const getFrameworkSteps = (slug: string) => {
  switch (slug) {
    case "brand-strategy":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Analyze market dynamics, competitor positioning, and brand equity gaps.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Define the unique value proposition and brand coordinates.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Draft a clear narrative strategy that establishes a premium identity.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Align the marketing organization and sales assets around the new strategy.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Implement brand programs and track market share growth.",
          icon: "TrendingUp",
        },
      ];
    case "positioning-messaging":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Audit customer pain points, technical features, and sales friction points.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Develop a messaging house detailing primary and secondary value drivers.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Refine elevator pitches and key differentiators against competitor claims.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Create messaging guidelines and train team members on key talk tracks.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "A/B test messaging variations across landing pages and sales pitches.",
          icon: "TrendingUp",
        },
      ];
    case "thought-leadership":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Conduct executive interviews to unlock unique industry insights.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Define the executive's platform, content pillars, and expert angle.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Draft high-impact opinion editorials and LinkedIn narratives.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Establish a consistent scheduling, ghostwriting, and editing cadence.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Secure PR placement in trade publications and organic industry circles.",
          icon: "TrendingUp",
        },
      ];
    case "content-marketing":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Audit existing content assets and conduct keyword search intent research.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Map content topics to specific buyer evaluation stages.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Draft authoritative, research-backed blogs, whitepapers, and reports.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Construct editorial calendars and setup automated email newsletters.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Promote and distribute content assets across dark social and organic directories.",
          icon: "TrendingUp",
        },
      ];
    case "demand-generation":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Audit the current conversion funnel to locate demand leaks.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description: "Align demand assets with high-intent buyer personas.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Craft compelling landing page offers and custom lead magnets.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Set up tracking, email nurturing, and marketing automation workflows.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Optimize paid acquisition channels to reduce overall customer acquisition cost (CAC).",
          icon: "TrendingUp",
        },
      ];
    case "abm":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Identify high-value enterprise accounts and build target account lists (TAL).",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Map decision-makers and research their specific business needs.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Create highly personalized content and custom landing pages for each account.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Coordinate sales outreach sequences with targeted paid social advertising.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Measure account engagement metrics and optimize the multi-touch playbook.",
          icon: "TrendingUp",
        },
      ];
    case "campaign-execution":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Review historical ad accounts, competitor creative, and performance data.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Define target segments, exclusions, and custom audience lists.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Design scroll-stopping ad creatives and write high-converting copy.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Build landing pages, tracking pixels, and campaign structures.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Launch campaigns, optimize bids, and run continuous creative A/B tests.",
          icon: "TrendingUp",
        },
      ];
    case "marketing-automation":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Audit the current marketing technology stack and data flows.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Map lead stages, conversion goals, and handoff triggers.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Design automated nurturing sequences and custom CRM views.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Configure integration webhooks, APIs, and automated scoring rules.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Monitor data hygiene, run performance checks, and optimize email open rates.",
          icon: "TrendingUp",
        },
      ];
    case "seo-visibility":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Conduct deep technical site audits and search volume keyword research.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Target high-intent B2B commercial and transactional search queries.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Create expert content briefs and optimize meta structures for maximum CTR.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Perform technical fixes, speed optimizations, and run authoritative backlink campaigns.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Monitor ranking updates, capture featured snippets, and expand keyword footprint.",
          icon: "TrendingUp",
        },
      ];
    case "website-optimisation":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Analyze user behaviors via hotjar, analytics, and speed benchmarks.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Redefine website navigation to align with complex B2B buyer journeys.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Design responsive, high-fidelity visual layouts matching brand guidelines.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Deploy optimized clean code, speed upgrades, and clear conversion forms.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Run ongoing conversion rate optimization (CRO) A/B tests and heatmaps.",
          icon: "TrendingUp",
        },
      ];
    case "analytics-reporting":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Audit existing analytics setups, tracking links, and tag managers.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Define critical conversion goals and revenue milestones to track.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Build custom multi-touch attribution models tailored to sales cycles.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Configure GA4, Google Tag Manager, custom variables, and CRM pipelines.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Launch automated executive dashboards and track marketing channel ROI.",
          icon: "TrendingUp",
        },
      ];
    case "gtm-execution":
      return [
        {
          number: "01",
          title: "Discover",
          description:
            "Perform market sizing, buyer persona research, and competitor product audits.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description:
            "Formulate product positioning and value hooks for new market segments.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description:
            "Create compelling collateral, pricing strategies, and sales toolkits.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description:
            "Coordinate launch timelines across advertising, PR, and outreach channels.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description:
            "Analyze early adoption metrics and refine outreach strategy for high-yield channels.",
          icon: "TrendingUp",
        },
      ];
    default:
      return [
        {
          number: "01",
          title: "Discover",
          description: "We research your business scope and customer segments.",
          icon: "Search",
        },
        {
          number: "02",
          title: "Position",
          description: "We formulate market positioning coordinates.",
          icon: "Target",
        },
        {
          number: "03",
          title: "Differentiate",
          description: "We highlight your brand value compared to competitors.",
          icon: "Award",
        },
        {
          number: "04",
          title: "Systemize",
          description: "We set standard workflows and campaign guidelines.",
          icon: "Settings",
        },
        {
          number: "05",
          title: "Scale",
          description: "We measure outcomes and compound your pipelines.",
          icon: "TrendingUp",
        },
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
  const currentFaqs = serviceFaqs[slug] || [];

  // Fetch related case study to display as featured card (from services.png/brand-identity.png mockup layout)
  const relatedCaseStudies =
    service.caseStudyIds
      ?.map((id) => CASE_STUDIES.find((cs) => cs.id === id))
      .filter(Boolean) || [];

  // Get the single featured case study for the layout
  const featuredCaseStudy = relatedCaseStudies[0] || CASE_STUDIES[0];

  const dynamicBadges = badgesMap[slug] || badgesMap["brand-strategy"];

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: service.title },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white">
      {/* 1. Services Hero Layout with custom orbitals */}
      <ServicesHero
        title={service.title}
        heroHighlight={service.heroHighlight}
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
      {/* <ServicesTestimonials /> */}
      {/* 7. Specific Service FAQ Section */}
      {/* {currentFaqs.length > 0 && <FAQSection faqs={currentFaqs} />} */}
      {/* 8. Customized CTA Bottom banner */}
      <CtaSection
        title={service.bottomCTA?.heading}
        subtitle={service.bottomCTA?.subText}
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
