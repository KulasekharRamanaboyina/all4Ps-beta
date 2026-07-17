import {
  Megaphone,
  TrendingUp,
  PenTool,
  Search,
  Monitor,
  PieChart,
  Target,
  Zap,
  Coffee,
  Globe,
  MessageSquare,
  UserCheck,
  Magnet,
  Workflow,
  Send,
  Settings,
  Rocket,
  Shield,
} from "lucide-react";

import { Service, TeamMember, CaseStudy, JobPosition, BlogPost } from "./types";

/* ================= SERVICES ================= */

export const SERVICES: Service[] = [
  // ROW 1: BUILD AUTHORITY
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    shortDescription: "Formulate a strong B2B brand strategy to navigate competitive markets.",
    fullDescription: "Formulate a strong B2B brand strategy to navigate competitive markets with certainty.",
    intro: "Formulate a strong B2B brand strategy to navigate competitive markets.",
    titleCTA: { label: "Define Brand Strategy", link: "/contact" },
    features: ["Competitor Intelligence Analysis", "Brand Positioning Roadmap", "Ideal Customer ICP Definition", "Market Opportunity Mapping"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Improved", value: "Market Clarity" },
      { label: "Higher", value: "Competitive Edge" },
    ],
    outComesHeadingImage: "/images/services/brand-identity.webp",
    iconName: "Target",
    caseStudyIds: ["unbox", "motherson"],
    bottomCTA: {
      heading: "Ready for a Real Plan?",
      subText: "Let's build a strategy that actually guides growth.",
      label: "Start Building",
      link: "/contact"
    }
  },
  {
    id: "positioning-messaging",
    title: "Positioning & Messaging",
    shortDescription: "Translate deep technical value into crystal-clear messages for B2B buyers.",
    fullDescription: "Translate deep technical value into crystal-clear messages for B2B buyers that convert.",
    intro: "Translate deep technical value into crystal-clear messages.",
    titleCTA: { label: "Clarify Positioning", link: "/contact" },
    features: ["Core Message Hierarchy", "Technical Pitch Alignment", "Buyer Persona Playbooks", "Sales Conversation Guides"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Better", value: "Buyer Engagement" },
      { label: "Clearer", value: "Value Proposition" },
    ],
    outComesHeadingImage: "/images/services/brand-identity.webp",
    iconName: "MessageSquare",
    caseStudyIds: ["motherson", "anscer"],
    bottomCTA: {
      heading: "Ready to Speak Clearly?",
      subText: "We align your B2B messaging to resolve pipeline roadblocks.",
      label: "Clarify Now",
      link: "/contact"
    }
  },
  {
    id: "thought-leadership",
    title: "Thought Leadership",
    shortDescription: "Establish founder and executive voices as industry-leading authorities.",
    fullDescription: "Establish founder and executive voices as industry-leading authorities across B2B spaces.",
    intro: "Establish founder and executive voices as leading authorities.",
    titleCTA: { label: "Build Authority", link: "/contact" },
    features: ["Executive Narrative Building", "PR & Placement Support", "LinkedIn Platform Domination", "Keynote & Event Briefing"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Stronger", value: "Brand Trust" },
      { label: "Higher", value: "Inbound Authority" },
    ],
    outComesHeadingImage: "/images/services/brand-identity.webp",
    iconName: "UserCheck",
    caseStudyIds: ["unbox"],
    bottomCTA: {
      heading: "Ready to Stand Out?",
      subText: "Position your leadership team as standard-setters in the market.",
      label: "Get Positioned",
      link: "/contact"
    }
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    shortDescription: "Create high-intent content like whitepapers, case studies, and blogs.",
    fullDescription: "Create high-intent content like whitepapers, case studies, and blogs that drive pipeline.",
    intro: "Create high-intent content designed to capture interest and convert.",
    titleCTA: { label: "Accelerate Content", link: "/contact" },
    features: ["Expert-Driven Content Creation", "Funnel Asset Library Construction", "Technical Case Study Production", "Multi-Channel Distribution Strategy"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Increased", value: "Inbound Pipeline" },
      { label: "Higher", value: "Content ROI" },
    ],
    outComesHeadingImage: "/images/services/content-marketing.webp",
    iconName: "PenTool",
    caseStudyIds: ["kloudlite", "anzo"],
    bottomCTA: {
      heading: "Ready for Quality Content?",
      subText: "We write B2B content that connects directly with enterprise decision makers.",
      label: "Start Producing",
      link: "/contact"
    }
  },

  // ROW 2: GENERATE DEMAND
  {
    id: "demand-generation",
    title: "Demand Generation",
    shortDescription: "Build predictable lead capture channels and steady inbound flow.",
    fullDescription: "Build predictable lead capture channels and steady inbound flow for B2B pipeline growth.",
    intro: "Build predictable lead capture channels and steady inbound flow.",
    titleCTA: { label: "Generate Inbound", link: "/contact" },
    features: ["Inbound Lead Acquisition Engine", "Multi-Channel Program Scaling", "Paid Retargeting Architecture", "High-Converting Landing Page Design"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Predictable", value: "Lead Acquisition" },
      { label: "Enhanced", value: "Funnel Velocity" },
    ],
    outComesHeadingImage: "/images/services/growth-marketing.webp",
    iconName: "Workflow",
    caseStudyIds: ["unbox", "synergy"],
    bottomCTA: {
      heading: "Ready to Capture Real Demand?",
      subText: "Turn commercial strategy into high-intent inbound opportunities.",
      label: "Launch Engine",
      link: "/contact"
    }
  },
  {
    id: "abm",
    title: "Account-Based Marketing",
    shortDescription: "Target high-value enterprise accounts with tailored messaging campaigns.",
    fullDescription: "Target high-value enterprise accounts with tailored messaging and campaigns.",
    intro: "Target high-value enterprise accounts with tailored messaging.",
    titleCTA: { label: "Launch ABM Campaigns", link: "/contact" },
    features: ["High-Value Target Mapping", "Multi-Touch Sales Sequence Playbooks", "Tier 1 Personalized Landing Pages", "ABM Orchestration & Reporting"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Higher", value: "Contract Values" },
      { label: "Increased", value: "Sales Conversion" },
    ],
    outComesHeadingImage: "/images/services/growth-marketing.webp",
    iconName: "Target",
    caseStudyIds: ["unbox", "anscer"],
    bottomCTA: {
      heading: "Ready to Target Key Accounts?",
      subText: "We build and execute high-converting multi-touch ABM playbooks.",
      label: "Start Targeting",
      link: "/contact"
    }
  },
  {
    id: "campaign-execution",
    title: "Campaign Execution",
    shortDescription: "Deploy multi-channel marketing campaigns to feed your pipeline.",
    fullDescription: "Deploy multi-channel marketing campaigns to feed your pipeline with clean opportunities.",
    intro: "Deploy multi-channel campaigns to generate high-intent pipeline.",
    titleCTA: { label: "Run Campaigns", link: "/contact" },
    features: ["Paid Social & Search Execution", "Lead Nurture Flow Operations", "A/B Creative Experimentation", "Budget Optimization & Allocation"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Scalable", value: "Paid Acquisitions" },
      { label: "Optimized", value: "Cost Per Lead" },
    ],
    outComesHeadingImage: "/images/services/growth-marketing.webp",
    iconName: "Send",
    caseStudyIds: ["xpstays", "synergy"],
    bottomCTA: {
      heading: "Ready to Deploy Campaigns?",
      subText: "Let us run your paid search, paid social, and lead flows.",
      label: "Deploy Now",
      link: "/contact"
    }
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    shortDescription: "Automate marketing operations, scoring, and trigger workflows.",
    fullDescription: "Automate marketing operations, scoring, and trigger workflows for sales alignment.",
    intro: "Automate marketing operations and trigger-based nurturing workflows.",
    titleCTA: { label: "Optimize Automation", link: "/contact" },
    features: ["Tech Stack Synchronization", "Behavior-Triggered Lead Scoring", "CRM Lifecycle Mapping", "Automated Sequence Implementation"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Aligned", value: "Sales & Marketing" },
      { label: "Reduced", value: "Manual Overhead" },
    ],
    outComesHeadingImage: "/images/services/growth-marketing.webp",
    iconName: "Settings",
    caseStudyIds: ["kloudlite"],
    bottomCTA: {
      heading: "Ready to Automate Growth?",
      subText: "We configure, clean, and sync your B2B tech stack.",
      label: "Automate Now",
      link: "/contact"
    }
  },

  // ROW 3: ACCELERATE GROWTH
  {
    id: "seo-visibility",
    title: "SEO & Search Visibility",
    shortDescription: "Position your brand at the exact moment buyers search for solutions.",
    fullDescription: "Position your brand at the exact moment B2B buyers search for solutions online.",
    intro: "Position your brand at the exact moment buyers search for your keywords.",
    titleCTA: { label: "Optimize SEO", link: "/contact" },
    features: ["High-Intent Keyword Dominance", "Technical Search Architecture Optimization", "Authority Backlink Acquisition", "Organic CTR Enhancement Audits"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Sustained", value: "Organic Traffic" },
      { label: "Higher", value: "Domain Authority" },
    ],
    outComesHeadingImage: "/images/services/seo-sem.webp",
    iconName: "Search",
    caseStudyIds: ["synergy", "anzo"],
    bottomCTA: {
      heading: "Ready to Dominate Search?",
      subText: "Show up in high-intent keyword directories and search queries.",
      label: "Boost Visibility",
      link: "/contact"
    }
  },
  {
    id: "website-optimisation",
    title: "Website Optimisation",
    shortDescription: "Convert static website traffic into high-value qualified sales meetings.",
    fullDescription: "Convert static website traffic into high-value qualified sales meetings and signups.",
    intro: "Convert static website traffic into high-value qualified sales meetings.",
    titleCTA: { label: "Optimize Website", link: "/contact" },
    features: ["Conversion Rate Optimisation (CRO)", "Interactive UX/UI Refining", "Page Speed & Core Web Vitals Optimization", "Form Friction & Drop-Off Analysis"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Improved", value: "Conversion Rates" },
      { label: "Faster", value: "Loading Performance" },
    ],
    outComesHeadingImage: "/images/services/web-designing.webp",
    iconName: "Monitor",
    caseStudyIds: ["anzo", "panchayath"],
    bottomCTA: {
      heading: "Ready to Convert Traffic?",
      subText: "Turn your website into a high-performance sales asset.",
      label: "Optimize Conversion",
      link: "/contact"
    }
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    shortDescription: "Establish clean attribution loops to trace commercial pipeline ROI.",
    fullDescription: "Establish clean attribution loops to trace commercial pipeline ROI accurately.",
    intro: "Establish clean attribution loops to trace commercial pipeline ROI.",
    titleCTA: { label: "Configure Analytics", link: "/contact" },
    features: ["GA4 & Attribution Configuration", "Custom Pipeline Dashboards", "Multi-Touch Revenue Attribution Modeling", "Pipeline Bottleneck Diagnostics"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Accurate", value: "Marketing Attribution" },
      { label: "Visible", value: "Pipeline Return" },
    ],
    outComesHeadingImage: "/images/services/marketing-strategy.webp",
    iconName: "PieChart",
    caseStudyIds: ["xpstays"],
    bottomCTA: {
      heading: "Ready to Measure Outcomes?",
      subText: "Trace pipeline sourcing back to marketing touches.",
      label: "Setup Attribution",
      link: "/contact"
    }
  },
  {
    id: "gtm-execution",
    title: "GTM Execution",
    shortDescription: "Scale organic growth, launch products, and expand commercial presence.",
    fullDescription: "Scale organic growth, launch products, and expand commercial presence seamlessly.",
    intro: "Scale organic growth, launch products, and enter new markets.",
    titleCTA: { label: "Run GTM", link: "/contact" },
    features: ["Product GTM Roadmap Playbooks", "Market Penetration Programs", "Alpha/Beta Launch Management", "Sales Team Enablement Toolkits"],
    outcomesHeading: "Expected Outcomes",
    outcomesHeadingMetrics: [
      { label: "Successful", value: "Product Launches" },
      { label: "Expanded", value: "Market Presence" },
    ],
    outComesHeadingImage: "/images/services/marketing-strategy.webp",
    iconName: "Rocket",
    caseStudyIds: ["motherson"],
    bottomCTA: {
      heading: "Ready to Launch?",
      subText: "Let's validate and scale your product's commercial footprint.",
      label: "Launch GTM",
      link: "/contact"
    }
  }
];

/* ================= TEAM ================= */

export const TEAM: TeamMember[] = [
  {
    id: "1",
    name: "K.Pavani",
    role: "Founder & CEO",
    bio: "Founded all4Ps because she hated corporate buzzwords.",
    sarcasticFact: "Allergic to buzzwords.",
    imageUrl: "/images/Team_Members/Pavani.webp",
  },
  {
    id: "2",
    name: "K.Tejeswini",
    role: "Co-founder & COO",
    bio: "Obsessed with charts that go up and to the right.",
    sarcasticFact: "Designs systems, not screens.",
    imageUrl: "/images/Team_Members/Tejeswini.webp",
  },
  {
    id: "3",
    name: "Siddhik Gagguturu",
    role: "Head, Business Development",
    bio: "Making B2B not look boring since 2015.",
    sarcasticFact: "Builds trust before pipelines.",
    imageUrl: "/images/Team_Members/siddik.webp",
  },
  {
    id: "4",
    name: "Shweta Kaushal",
    role: "Lead, UI/UX",
    bio: "Making B2B not look boring since 2015.",
    sarcasticFact: "Turns interfaces into experiences.",
    imageUrl: "/images/Team_Members/shweta.webp",
  },
  {
    id: "5",
    name: "P.V.L Supraja",
    role: "Brand Manager",
    bio: "Builds things that work. Fixes things you broke.",
    sarcasticFact: "Protects brand intent.",
    imageUrl: "/images/Team_Members/Supraja.webp",
  },
  {
    id: "6",
    name: "R.Kulasekhar",
    role: "Founder’s Office",
    bio: "Making B2B not look boring since 2015.",
    sarcasticFact: "Turns chaos into clarity.",
    imageUrl: "/images/Team_Members/Kulasekhar.webp",
  },
  {
    id: "7",
    name: "B.Kumari",
    role: "SEO Specialist",
    bio: "Builds things that work. Fixes things you broke.",
    sarcasticFact: "Talks to Google.",
    imageUrl: "/images/Team_Members/Kumari.webp",
  },
];

/* ================= CASE STUDIES ================= */

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "motherson",
    client: "ROBIS MOTHERSON",
    description:
      "ROBIS Motherson is the industrial robotics and automation business unit of the Motherson Group, focused on designing and delivering advanced automation solutions for complex manufacturing environments. The team specializes in custom robotic systems that enhance productivity, precision, and operational scalability across automotive and industrial manufacturing lines. ROBIS supports manufacturers in transitioning from traditional processes to smart, future-ready factories through intelligent automation.",
    challenge: `Originally built to support internal automation needs, ROBIS operated primarily as an in-house capability within the Motherson Group.

As the business moved toward commercializing its robotics solutions and expanding globally, it needed a clearly defined go-to-market strategy to establish positioning, identify target customer segments, and enable sustainable external growth.`,
    challengeImage: "/images/portfolio/motherson.webp",
    industry: "Robotics",
    title: "We helped their marketing work better.",
    result: "FY26 GTM Strategy Launched",
    category: "GTM & Marketing Strategy",
    performanceMetrics: [
      {
        value: "Scalable",
        label: "Brand system built",
      },
      {
        value: "100%",
        label: "Shift to market-ready offerings",
      },
      {
        value: "<6 ",
        label: "Months to GTM readiness",
      },

      {
        value: "Global",
        label: "Product launch enabled",
      },
    ],

    pillars: [
      {
        title: "Content & PR",
        points: [
          "Developed case studies to showcase real-world automation use cases.",
          "Positioned Unbox Robotics as a credible industry innovator.",
        ],
      },
      {
        title: "Digital Performance",
        points: [
          "Optimized website structure for clarity and lead capture.",
          "Improved discoverability through SEO-focused content.",
        ],
      },
      {
        title: "Growth & Sales Synergy",
        points: [
          "Aligned marketing narratives with sales conversations.",
          "Supported pipeline growth through product-focused messaging.",
        ],
      },
    ],
    systemicResult:
      "We established a market ready go to market foundation that brought clarity to positioning, structured execution, and aligned teams to support ROBIS’ global commercialization journey.",
    imageUrl: "/images/portfolio/motherson-hero.webp",
  },
  {
    id: "anscer",
    client: "ANSCER ROBOTICS",
    description:
      "ANSCER Robotics is an industrial automation company focused on delivering advanced robotics solutions for complex manufacturing environments. Operating across India and the United States, the company designs and deploys robotic systems that help manufacturers improve operational efficiency, consistency, and scalability. ANSCER works closely with industrial clients to replace manual and semi-automated processes with intelligent, future-ready automation solutions.",
    challenge:
      "Strengthen ANSCER Robotics’ brand presence with a clear and consistent market narrative, generate high-quality leads by focusing on the right industries and decision-makers, and align marketing efforts closely with sales to support pipeline growth and revenue outcomes.",
    challengeImage: "/images/portfolio/anscer.webp",
    industry: "Robotics",
    title: "Our work elevated their market credibility.",
    result: "Supported $1M lead conversion",
    category: "End to End Marketing",
    performanceMetrics: [
      {
        value: "$1M+",
        label: "Revenue influenced",
      },
      {
        value: "75%",
        label: "Increase in qualified leads",
      },
      {
        value: "65%",
        label: "Growth in social engagement",
      },
      {
        value: "25%",
        label: "Rise in website traffic",
      },
    ],
    pillars: [
      {
        title: "Content & Product Marketing",
        points: [
          "Developed case studies, blogs, brochures, and product collaterals to clearly communicate value.",
          "Strengthened product marketing for flagship offerings to support sales conversations.",
        ],
      },
      {
        title: "Digital Experience & SEO",
        points: [
          "Optimized website structure and content to reflect refined positioning and messaging.",
          "Improved organic visibility and discoverability through SEO best practices.",
        ],
      },
      {
        title: "PR & Media Outreach",
        points: [
          "Built PR narratives to enhance brand credibility and industry presence.",
          "Secured media touchpoints to support awareness and thought leadership.",
        ],
      },
      {
        title: "Social Media & Content Distribution",
        points: [
          "Defined social media strategy aligned with brand and business goals.",
          "Created consistent, high-quality content to drive engagement and visibility.",
        ],
      },
      {
        title: "Growth Marketing & Sales Alignment",
        points: [
          "Designed growth initiatives focused on lead quality and pipeline impact.",
          "Aligned marketing efforts closely with sales priorities and targets.",
        ],
      },
      {
        title: "Events Planning & Marketing",
        points: [
          "Planned and executed marketing support for key industry events and exhibitions.",
          "Enabled lead generation and brand visibility at high-impact forums.",
        ],
      },
    ],
    systemicResult:
      "We established a clear market foundation that improved positioning, structured marketing execution, and enabled consistent commercial engagement across regions.",
    imageUrl: "/images/portfolio/anscer-hero.webp",
  },
  {
    id: "unbox",
    client: "UNBOX ROBOTICS",
    description:
      "Unbox Robotics is an industrial automation company specializing in robotics solutions for logistics and warehouse operations. Based in Pune, the company focuses on building intelligent robotic systems that enable faster order processing, improved accuracy, and scalable automation for high-volume fulfillment environments. Unbox works with enterprises looking to modernize warehouse operations and adopt next-generation automation technologies.",
    challenge:
      " needed a clear brand foundation to support early-stage growth and market visibility. While the technology and vision were strong, the brand required clearer identity, structured messaging, and consistent communication across channels. The engagement focused on defining the brand strategy and visual identity, aligning digital touchpoints with the new positioning, and enabling the internal team with frameworks for consistent marketing execution.",
    challengeImage: "/images/portfolio/unbox.webp",
    industry: "Robotics",
    title: "Established a Scalable Brand Foundation.",
    result: "~40% uplift in social & web traffic",
    category: "Social Media",
    performanceMetrics: [
      {
        value: "Marketing",
        label: "System established",
      },
      {
        value: "2×",
        label: "Improvement in brand clarity",
      },
      {
        value: "50%+",
        label: "Lift in social media engagement",
      },
      {
        value: "100%",
        label: "Digital touchpoint alignment",
      },
    ],
    pillars: [
      {
        title: "Brand Strategy",
        points: [
          "Conducted a brand discovery workshop to define brand persona and personality.",
          "Developed a comprehensive marketing strategy aligned with business goals.",
        ],
      },
      {
        title: "Visual Identity & Brand Assets",
        points: [
          "Created a complete brand kit including brochure, business card templates, and launch video.",
          "Ensured visual consistency across all core brand touchpoints.",
        ],
      },
      {
        title: "Content & Social Media Framework",
        points: [
          "Designed a structured social media framework with monthly plans and content calendars.",
          "Developed blogs and LinkedIn content to support ongoing brand communication.",
        ],
      },
      {
        title: "Website Messaging Alignment",
        points: [
          "Updated website content to reflect the new brand positioning and narrative.",
          "Aligned messaging to support clarity, consistency, and conversion.",
        ],
      },
    ],
    systemicResult:
      "We established a strong brand and marketing foundation that clarified messaging, structured communication, and supported confident enterprise engagement.",
    imageUrl: "/images/portfolio/unbox-hero.webp",
  },
  {
    id: "anzo",
    client: "Anzo Controls",
    description:
      "Anzo Controls is an industrial automation and robotics company based in Delhi, specializing in designing and implementing automation solutions for manufacturing and industrial operations. The company helps businesses improve efficiency, control, and scalability by integrating reliable, intelligent automation systems tailored to operational needs.",
    challenge:
      "needed to strengthen its online presence and improve visibility in a competitive industrial automation market. The engagement focused on leveraging content marketing to build credibility, enhance discoverability, and attract relevant decision-makers, ultimately supporting sustained brand awareness and qualified lead generation.",
    challengeImage: "/images/portfolio/anzo.webp",
    industry: "Robotics",
    title: "Empowering teams to build sustainable digital visibility",
    result: "~30% uplift in social & web traffic",
    category: "Content Marketing",
    performanceMetrics: [
      {
        value: "Improved",
        label: "Digital visibility achieved",
      },
      {
        value: "2 ",
        label: "SEO-optimized blogs/month delivered",
      },
      {
        value: "100%",
        label: "SEO-ready blog templates deployed",
      },
      {
        value: "Internal",
        label: "Team enabled for content creation",
      },
    ],

    pillars: [
      {
        title: "SEO Content Production",
        points: [
          "Delivered two SEO-optimized blogs every month focused on relevant industrial keywords.",
          "Drafted and supported publishing to ensure consistency and quality.",
        ],
      },
      {
        title: "Content Structure & Templates",
        points: [
          "Created reusable blog templates covering keywords, URLs, meta tags, and headings.",
          "Standardized content structure to improve SEO performance and scalability.",
        ],
      },
      {
        title: "SEO Enablement & Training",
        points: [
          "Trained the internal team on SEO content creation and insight gathering.",
          "Enabled teams to independently plan and contribute high-quality content.",
        ],
      },
      {
        title: " Publishing & Optimization Support",
        points: [
          "Assisted with blog publishing and on-page optimization.",
          "Ensured content aligned with SEO best practices and visibility goals.",
        ],
      },
    ],
    systemicResult:
      "We established a structured content and SEO foundation that improved online visibility, strengthened credibility, and supported consistent lead generation.",
    imageUrl: "/images/portfolio/anzo-hero.webp",
  },
  {
    id: "kloudlite",
    client: "Kloudlite Labs (Pre-seed company)",
    description:
      "Kloudlite Labs is a pre-seed, open-source B2B SaaS company offering Development Environments as a Service. The platform helps engineering teams quickly set up secure, scalable, and consistent development environments, reducing setup time and operational complexity while enabling faster, more reliable software delivery for modern cloud-native teams.",
    challenge:
      "needed to build a strong and credible brand presence while adopting an integrated marketing approach to support early-stage growth. The engagement focused on clarifying positioning, aligning messaging across channels, and creating consistent visibility to drive awareness, adoption, and long-term growth.",
    challengeImage: "/images/portfolio/kloudlite.webp",
    industry: "B2B SaaS platform",
    title: "Built visibility, credibility, and a strong developer ecosystem",
    result: "Converted high-value leads",
    category: "End to End Marketing",
    performanceMetrics: [
      {
        value: "Enterprise leads ",
        label: "Converted (Juspay, Razorpay)",
      },
      {
        value: "5",
        label: "Key search terms ranked on Page 1",
      },
      {
        value: "250+ ",
        label: "Developer community members built",
      },

      {
        value: "Developer-first ",
        label: "Brand established",
      },
    ],
    pillars: [
      {
        title: "Brand & Visual Identity",
        points: [
          "Defined brand positioning and designed a consistent visual identity.",
          "Established a cohesive look and feel across all digital touchpoints.",
        ],
      },
      {
        title: "Website Experience & Optimization",
        points: [
          "Designed and developed the website to clearly communicate product value.",
          "Optimized structure and content for usability, performance, and conversion.",
        ],
      },
      {
        title: "Content, SEO & SEM",
        points: [
          "Built a content-led growth approach supported by SEO and SEM initiatives.",
          "Improved discoverability and visibility among developer and B2B audiences.",
        ],
      },
      {
        title: "Social Media & Community Growth",
        points: [
          "Defined social media strategy and created consistent, developer-focused content.",
          "Built and nurtured a 250+ member developer community on Discord.",
        ],
      },
      {
        title: "Product Enablement & Demos",
        points: [
          "Created demo videos to showcase platform capabilities for developers.",
          "Enabled faster product understanding and adoption through visual walkthroughs.",
        ],
      },
    ],
    systemicResult:
      "We established scalable growth foundations that aligned brand, digital presence, and integrated marketing to support early stage adoption and traction.",
    imageUrl: "/images/portfolio/kloudlite-hero.webp",
  },

  {
    id: "synergy",
    client: "Synergy Homecare",
    description:
      "Synergy Homecare is a USA-based homecare provider delivering personalized, non-medical care services to individuals and families. The organization focuses on supporting seniors and those in need with reliable, compassionate in-home care, helping improve quality of life while enabling clients to live independently and comfortably.",
    challenge:
      "needed to improve local visibility and generate qualified leads across multiple franchise units in a competitive market. The engagement focused on strengthening localized marketing efforts, ensuring brand consistency across locations, and enabling scalable lead generation for franchise owners.",
    challengeImage: "/images/portfolio/synergy.webp",
    performanceMetrics: [
      {
        value: "Local SEO",
        label: "Performance significantly improved",
      },
      {
        value: "5",
        label: "Franchise locations optimized for local search",
      },
      {
        value: "50%+",
        label: "Increase in Google calls per franchise unit",
      },
      {
        value: "~100",
        label: "Monthly inbound calls achieved per location",
      },
    ],
    industry: "Home Healthcare",
    title: "Driving local lead growth for franchises",
    result: "Google calls grew to ~100 per unit",
    category: "SEO & SEM",
    pillars: [
      {
        title: "Local Listings & Presence",
        points: [
          "Managed local listings across Google My Business, Facebook, Nextdoor, and Yelp for five franchise units.",
          "Ensured consistent and optimized business information across platforms.",
        ],
      },
      {
        title: "Local SEO & Backlink Building",
        points: [
          "Built high-quality backlinks through localized content and blogs.",
          "Improved local search relevance and authority.",
        ],
      },
      {
        title: "Reviews & Customer Engagement",
        points: [
          "Drove customer reviews and ongoing engagement across local platforms.",
          "Strengthened credibility and trust at the franchise level.",
        ],
      },
      {
        title: "Offline Marketing Strategy",
        points: [
          "Developed and executed an offline-focused local marketing strategy.",
          "Boosted neighborhood visibility and community-level outreach.",
        ],
      },
    ],
    systemicResult:
      "We established a scalable local marketing foundation that improved discoverability, strengthened trust across franchise units, and enabled consistent lead generation.",
    imageUrl: "/images/portfolio/synergy-hero.webp",
  },
  {
    id: "xpstays",
    client: "XPStays",
    description:
      "XP Stays is a holiday home and homestay rental brand offering curated stay experiences for travelers seeking comfort, privacy, and value. Positioned as a “luxury within budget” destination, XP Stays caters to leisure travelers, families, groups, and event-based bookings, providing well-managed properties that combine premium amenities with personalized hospitality. With a growing social presence and a focus on experiential stays, XP Stays positions itself as a private sanctuary for memorable getaways and group experiences.",
    challenge:
      "wanted to drive bookings during the festive holiday period by running a focused holiday sale campaign from Dussehra to Christmas on selected properties across Karnataka. The objective was to maximize revenue through a performance-driven approach while maintaining efficient ad spend, resulting in strong returns and measurable campaign impact.",
    challengeImage: "/images/portfolio/xpstays.webp",
    performanceMetrics: [
      {
        value: "Festive",
        label: "Pan-Karnataka execution",
      },
      {
        value: "₹45K",
        label: "Revenue from ₹6K spend",
      },
      {
        value: "~7.5×",
        label: "ROAS achieved",
      },
      {
        value: "Consistent",
        label: "Booking enquiries generated",
      },
    ],
    industry: "Hospitality & Travel",
    title: "Festive campaigns with strong ROI",
    result: "ROAS: ~75%",
    category: " Performance Marketing",
    pillars: [
      {
        title: "Seasonal Campaign Strategy",
        points: [
          "Planned a festive holiday sale campaign aligned with Dussehra–Christmas travel demand.",
          "Selected high-performing properties across Karnataka for focused promotion.",
        ],
      },
      {
        title: "Performance Marketing Execution",
        points: [
          "Ran targeted paid campaigns to capture high-intent holiday travelers.",
          "Optimized campaigns continuously to maximize returns within a limited budget.",
        ],
      },
      {
        title: "Offer & Messaging Optimization",
        points: [
          "Crafted sale-led messaging highlighting value, location, and stay experience.",
          "Aligned creatives and copy with festive travel intent and urgency.",
        ],
      },
      {
        title: "ROI & Budget Efficiency",
        points: [
          "Managed ad spend efficiently to drive revenue-focused outcomes.",
          "Delivered strong campaign performance with high return on ad spend.",
        ],
      },
    ],
    systemicResult:
      "We established a performance driven marketing foundation that translated seasonal demand into bookings while maintaining strong budget efficiency.",
    imageUrl: "/images/portfolio/xpstays-hero.webp",
  },
  {
    id: "panchayath",
    client: "Panchayath App",
    description:
      "Panchayath App is a citizen engagement and governance platform designed to strengthen communication between local governing bodies and citizens. The platform enables transparent information sharing, issue reporting, and community participation, helping panchayats and local administrations improve service delivery, responsiveness, and public engagement through a digital-first approach.",
    challenge:
      "needed to increase visibility, community engagement, and app downloads across its target regions. The engagement focused on executing an integrated digital strategy that strengthened awareness, encouraged citizen participation, and drove sustained app adoption.",
    challengeImage: "/images/portfolio/panchayath.webp",
    performanceMetrics: [
      {
        value: "Consistent",
        label: "Outreach engine established",
      },
      {
        value: "1,500+",
        label: "Community followers built",
      },
      {
        value: "~1,000",
        label: " app installs achieved",
      },
      {
        value: "Higher ",
        label: "Citizen engagement enabled",
      },
    ],
    industry: "GovTech / Civic Engagement",
    title: "Digital adoption for citizen engagement",
    result: "1,000 app installs",
    category: "Social Media",
    pillars: [
      {
        title: "Website & Digital Experience",
        points: [
          "Designed and developed a clear, user-friendly website to support awareness and adoption.",
          "Optimized content structure to communicate the platform’s purpose and value.",
        ],
      },
      {
        title: "Social Media & Influencer Engagement",
        points: [
          "Managed social media presence to build visibility and community participation.",
          "Collaborated with influencers to amplify reach and drive app awareness.",
        ],
      },
      {
        title: "Community Outreach & Growth",
        points: [
          "Executed outreach programs focused on increasing app downloads and engagement.",
          "Strengthened on-ground and digital connections with target communities.",
        ],
      },
    ],
    systemicResult:
      "We established a structured digital foundation that improved visibility, strengthened community engagement, and enabled sustained app adoption.",

    imageUrl: "/images/portfolio/panchayath-hero.webp",
  },
];
/* ================= JOBS ================= */

export const JOBS: JobPosition[] = [
  {
    id: "strat",
    title: "Senior Brand Strategist",
    subtitle: "aka The Visionary",
    department: "Strategy",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "growth",
    title: "Growth Marketing Specialist",
    subtitle: "aka Growth Hacker (We hate that term too)",
    department: "Marketing",
    location: "New York / Remote",
    type: "Full-time",
  },
  {
    id: "dev",
    title: "Senior Web Developer",
    subtitle: "aka The Fixer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
];

/* ================= BLOG POSTS ================= */

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Why Your B2B Marketing Is Boring (And How to Fix It)",
    excerpt: "Spoiler: It's because you're copying everyone else. Stop it.",
    author: "Sarah Jenkins",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    category: "Strategy",
    imageUrl: "https://picsum.photos/id/180/600/400",
  },
  {
    id: "2",
    title: "Stop Using These 5 Buzzwords (We Dare You)",
    excerpt: "If we hear 'paradigm shift' one more time, we're quitting.",
    author: "Jessica Alverez",
    date: "Oct 08, 2025",
    readTime: "4 min read",
    category: "Culture",
    imageUrl: "https://picsum.photos/id/160/600/400",
  },
  {
    id: "3",
    title: "The Truth About Content Marketing ROI",
    excerpt:
      "It takes time. If you want instant gratification, buy a lottery ticket.",
    author: "Marcus Chen",
    date: "Sep 28, 2025",
    readTime: "7 min read",
    category: "Growth",
    imageUrl: "https://picsum.photos/id/119/600/400",
  },
];

/* ================= ICON MAP ================= */

export const ICONS_MAP: Record<string, any> = {
  Megaphone,
  TrendingUp,
  PenTool,
  Search,
  Monitor,
  PieChart,
  Target,
  Zap,
  Coffee,
  Globe,
  MessageSquare,
  UserCheck,
  Magnet,
  Workflow,
  Send,
  Settings,
  Rocket,
  Shield,
};
