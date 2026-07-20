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
  const brandStrategyFaqs = [
    {
      q: "What does your Brand Strategy service include?",
      a: "It includes market research, brand audits, competitive analysis, value proposition design, and a long-term GTM roadmap.",
    },
    {
      q: "How is brand strategy different from brand identity?",
      a: "Strategy defines why your brand exists, who it targets, and what it says. Identity is the visual expression (logo, colors, typography) of that strategy.",
    },
    {
      q: "How long does it take to develop a brand strategy?",
      a: "Usually 4 to 6 weeks, depending on the complexity of your market and target audiences.",
    },
    {
      q: "Will this align our sales and marketing teams?",
      a: "Yes, a core benefit of a unified brand strategy is ensuring all departments speak the same language.",
    },
    {
      q: "How do you measure the success of a brand strategy?",
      a: "Through increases in brand awareness, consistency across marketing channels, and improved conversion rates in sales funnels.",
    },
  ];

  const positioningMessagingFaqs = [
    {
      q: "What is a messaging house?",
      a: "A structured blueprint that contains your primary brand promise, key value pillars, and supporting proof points.",
    },
    {
      q: "Why is B2B positioning so difficult?",
      a: "Because it requires translating complex, technical product features into business outcomes that busy decision-makers actually care about.",
    },
    {
      q: "How do you validate positioning?",
      a: "Through customer interviews, sales call reviews, and conversion tests on landing pages.",
    },
    {
      q: "Do you write sales scripts with this service?",
      a: "Yes, we provide boilerplate messaging templates and sales talk tracks for your teams.",
    },
    {
      q: "How often should positioning be updated?",
      a: "We recommend reviewing it annually or whenever there is a major product release or market shift.",
    },
  ];

  const thoughtLeadershipFaqs = [
    {
      q: "Why is executive thought leadership important for B2B?",
      a: "B2B buyers trust individuals more than faceless brands. A strong founder brand builds trust and drives organic inbound interest.",
    },
    {
      q: "Do your writers interview the executives?",
      a: "Yes, we run 30-minute monthly briefing calls to capture your insights, tone, and authentic voice.",
    },
    {
      q: "Which platforms do you focus on?",
      a: "We primarily focus on LinkedIn, industry blogs, and respected B2B trade publications.",
    },
    {
      q: "Do we need to do the writing ourselves?",
      a: "No, our team handles research, copywriting, and formatting, but you retain full editorial control and final sign-off.",
    },
    {
      q: "How do you measure thought leadership ROI?",
      a: "Through increases in profile engagement, inbound media inquiries, and pipeline opportunities influenced by executive content.",
    },
  ];

  const contentMarketingFaqs = [
    {
      q: "What type of content do you write?",
      a: "We focus on high-intent B2B assets: case studies, whitepapers, technical blogs, and email newsletters.",
    },
    {
      q: "Is your content SEO-friendly?",
      a: "Yes, every piece is built on keyword research and structured to rank while remaining engaging to human readers.",
    },
    {
      q: "How do you source subject matter expertise?",
      a: "We interview your technical team members and study internal resources to ensure accurate, expert-level copywriting.",
    },
    {
      q: "Do you design the assets as well?",
      a: "Yes, we provide full graphic design support for PDF whitepapers, infographics, and social media banners.",
    },
    {
      q: "How long does content marketing take to show results?",
      a: "Generally, organic traffic and inbound leads scale over a 3 to 6-month period of consistent publishing.",
    },
  ];

  const demandGenerationFaqs = [
    {
      q: "What is the difference between lead generation and demand generation?",
      a: "Lead gen captures email addresses (often low quality). Demand gen builds genuine market interest, resulting in high-intent inbound pipeline.",
    },
    {
      q: "Which channels do you use for demand generation?",
      a: "A mix of LinkedIn Ads, Google Search Ads, retargeting, SEO, and email marketing.",
    },
    {
      q: "How do you qualify leads?",
      a: "We implement lead scoring based on firmographic data (company size, industry) and behavioral cues (visits, downloads).",
    },
    {
      q: "Do you provide creative assets for ads?",
      a: "Yes, we handle ad copywriting, visual design, and landing page builds.",
    },
    {
      q: "What budget do we need to start?",
      a: "We recommend starting with a minimum ad spend of $2,000/month to ensure sufficient testing data.",
    },
  ];

  const abmFaqs = [
    {
      q: "What is Account-Based Marketing (ABM)?",
      a: "ABM is a strategic B2B marketing strategy where marketing and sales treat a target account as a market of one.",
    },
    {
      q: "Is ABM right for our company?",
      a: "If your average deal size is over $25k and you have a clear list of target companies, ABM is highly effective.",
    },
    {
      q: "How do you identify target accounts?",
      a: "We collaborate with your sales team and analyze historical customer data to define the Ideal Customer Profile (ICP).",
    },
    {
      q: "How personalized are the campaigns?",
      a: "We run Tier 1 (1:1 hyper-personalized), Tier 2 (1:few segment-specific), and Tier 3 (1:many industry-specific) programs.",
    },
    {
      q: "What tools do we need for ABM?",
      a: "We work with standard B2B tools like LinkedIn Campaign Manager, HubSpot/Salesforce, and enrichment platforms like Apollo or ZoomInfo.",
    },
  ];

  const campaignExecutionFaqs = [
    {
      q: "Which advertising platforms do you manage?",
      a: "We specialize in LinkedIn Ads, Google Ads (Search & Display), Meta Ads, and YouTube.",
    },
    {
      q: "How do you handle ad creative and copy?",
      a: "We handle everything from graphic design and video editing to professional copywriting.",
    },
    {
      q: "How do you prevent wasted ad spend?",
      a: "By using tight negative keyword lists, precise firmographic exclusions, and strict daily budget caps.",
    },
    {
      q: "Do we get regular reports?",
      a: "Yes, we build live Looker Studio dashboards and run bi-weekly syncs to review pipeline impacts.",
    },
    {
      q: "What is your fee structure?",
      a: "We work on a monthly retainer base, sometimes combined with a percentage of managed ad spend.",
    },
  ];

  const marketingAutomationFaqs = [
    {
      q: "Which CRM and automation systems do you support?",
      a: "We primarily work with HubSpot, Salesforce, Marketo, ActiveCampaign, and Zapier.",
    },
    {
      q: "What is lead scoring?",
      a: "A system that assigns points to leads based on company details (fit) and page views/downloads (interest), flagging hot leads for sales.",
    },
    {
      q: "Can you clean up our messy CRM?",
      a: "Yes, we build data mapping guides, remove duplicates, and build automated standardization rules.",
    },
    {
      q: "Will you build our email newsletters?",
      a: "Yes, we design responsive templates and set up behavioral triggers (e.g., download -> nurture sequence).",
    },
    {
      q: "How long does a full setup take?",
      a: "Standard CRM and automation alignments take between 4 to 8 weeks to deploy and test.",
    },
  ];

  const seoVisibilityFaqs = [
    {
      q: "How long does it take to rank on Google?",
      a: "Initial technical improvements show impact in 4–8 weeks; competitive keywords take 4–6 months of sustained optimization.",
    },
    {
      q: "What is technical SEO?",
      a: "Optimizing site architecture, crawlability, mobile responsiveness, schemas, and page loading speed.",
    },
    {
      q: "Do you build backlinks?",
      a: "Yes, we run organic PR outreach to earn links from high-authority industry sites, avoiding spam networks.",
    },
    {
      q: "Can you help us recover from a ranking drop?",
      a: "Yes, we diagnose penalty issues, audit search index errors, and submit cleanup requests.",
    },
    {
      q: "How do you track SEO conversion?",
      a: "We set up event tracking in GA4 to measure how much organic traffic converts into booked meetings.",
    },
  ];

  const websiteOptimisationFaqs = [
    {
      q: "Do we need to rebuild our website from scratch?",
      a: "Not always. We run a technical assessment to see if simple layout changes and speed cleanups can achieve your goals.",
    },
    {
      q: "How do you improve site speed?",
      a: "By compressing images, cleaning legacy scripts, optimizing CSS/JS loading, and using fast CDNs.",
    },
    {
      q: "What is Conversion Rate Optimization (CRO)?",
      a: "The scientific process of testing different headings, forms, and layouts to turn more visitors into booked sales calls.",
    },
    {
      q: "Can we manage the website after you finish?",
      a: "Yes, we build on easy-to-use CMS platforms (Framer, Webflow, WordPress) and provide custom training videos.",
    },
    {
      q: "Do you write the copy for our web pages?",
      a: "Yes, we craft clear, benefit-driven value propositions and call-to-actions tailored to your buyers.",
    },
  ];

  const analyticsReportingFaqs = [
    {
      q: "Why is B2B attribution so difficult?",
      a: "B2B buying cycles are long, involve multiple stakeholders, and happen across many touchpoints (both online and offline).",
    },
    {
      q: "Do you set up Google Analytics 4 (GA4)?",
      a: "Yes, we fully configure GA4, custom event conversions, and sync it with Google Tag Manager.",
    },
    {
      q: "What are custom reports or dashboards?",
      a: "We compile complex analytics data into a clean, easy-to-read Looker Studio or dashboard.",
    },
    {
      q: "Can you track offline sales conversions?",
      a: "Yes, we map CRM status changes back to the original digital marketing campaign source.",
    },
    {
      q: "How often do reports update?",
      a: "Our dashboards update in near real-time, giving you access to performance data whenever you need it.",
    },
  ];

  const gtmExecutionFaqs = [
    {
      q: "What does GTM stand for?",
      a: "Go-To-Market. It is the plan for how a company launches a product, enters a new market, or reaches new buyer segments.",
    },
    {
      q: "Who is this service for?",
      a: "Tech startups launching new features, B2B brands expanding into international regions, or industrial firms entering new verticals.",
    },
    {
      q: "Do you design pricing strategies?",
      a: "Yes, we conduct competitor pricing audits and help structure packaging models.",
    },
    {
      q: "What GTM collateral do you build?",
      a: "One-pagers, product demo video scripts, launch landing pages, pitch decks, and email outreach lists.",
    },
    {
      q: "How do you measure a successful GTM launch?",
      a: "By tracking pipeline generated, initial customer signups, and buyer feedback validation.",
    },
  ];

  const faqsMap: Record<string, typeof brandStrategyFaqs> = {
    "brand-strategy": brandStrategyFaqs,
    "positioning-messaging": positioningMessagingFaqs,
    "thought-leadership": thoughtLeadershipFaqs,
    "content-marketing": contentMarketingFaqs,
    "demand-generation": demandGenerationFaqs,
    abm: abmFaqs,
    "campaign-execution": campaignExecutionFaqs,
    "marketing-automation": marketingAutomationFaqs,
    "seo-visibility": seoVisibilityFaqs,
    "website-optimisation": websiteOptimisationFaqs,
    "analytics-reporting": analyticsReportingFaqs,
    "gtm-execution": gtmExecutionFaqs,
  };

  const currentFaqs = faqsMap[slug] || [];

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
      {/* {currentFaqs.length > 0 && (
        <FAQSection faqs={currentFaqs} />
      )} */}

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
