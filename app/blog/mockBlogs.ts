import { DetailedBlogPost, BlogAuthor } from "../types";

export const AUTHORS: Record<string, BlogAuthor> = {
  pavani: {
    name: "K. Pavani",
    role: "Founder & CEO, all4Ps",
    avatar: "/images/Team_Members/Pavani.webp",
    bio: "Pavani is the Founder of all4Ps, with over a decade of experience building growth marketing strategies for deep-tech, SaaS, and industrial enterprises. She focuses on aligning brand messaging with pipeline realities.",
    socials: {
      linkedin: "https://linkedin.com/company/all4ps",
      twitter: "https://twitter.com/all4ps",
      email: "mailto:hello@all4ps.co",
    },
  },
  siddarth: {
    name: "Siddarth",
    role: "Head of Marketing, all4Ps",
    avatar: "/images/Team_Members/Pavani.webp",
    bio: "Siddarth leads SEO and performance marketing operations at all4Ps, helping B2B enterprises rank for high-intent queries that capture sales pipeline.",
    socials: {
      linkedin: "https://linkedin.com/company/all4ps",
      twitter: "https://twitter.com/all4ps",
      email: "mailto:hello@all4ps.co",
    },
  },
};

export const MOCK_POSTS: DetailedBlogPost[] = [
  {
    id: "post-1",
    slug: "b2b-buyer-behavior-shifts-what-changed-in-the-last-12-months",
    title: "B2B Buyer Behavior Shifts: What Changed in the Last 12 Months",
    subtitle: "Traditional sales-led journeys are rapidly being replaced by self-service research and experience-driven purchasing.",
    excerpt: "The B2B buying landscape has undergone a significant transformation over the last 12 months. Buyers today are more informed, digitally driven, and independent than ever before.",
    category: "Demand Generation",
    publishedAt: "June 1, 2026",
    readTime: "6 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/7dfd7d368646df4426bd2a90e0b260e5a08a166b-1536x1024.png",
    featured: true,
    author: AUTHORS.pavani,
    takeaways: [
      "Buyers complete most of their evaluation before ever talking to sales.",
      "Frictionless self-service access to pricing and features is the new expectation.",
      "Decision-makers use AI-assisted tools to summarize and compare alternatives.",
      "Aggressive outbound sales outreach is declining in efficiency compared to educational trust."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "The B2B buying landscape has undergone a significant transformation over the last 12 months. Buyers today are more informed, digitally driven, and independent than ever before. Traditional sales-led journeys are rapidly being replaced by self-service research, AI-assisted decision-making, and experience-driven purchasing behavior." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "The Rise of the Modern B2B Buyer Journey" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "In the past, buyers typically discovered vendors through sales outreach, attended product demonstrations, and relied heavily on sales teams to guide purchasing decisions. Today, much of that evaluation happens before a prospect ever speaks to a sales representative." }]
      },
      {
        _type: "block",
        style: "blockquote",
        children: [{ _type: "span", text: "Research from leading industry analysts suggests that buyers often complete a significant portion of their purchasing journey before engaging with a vendor directly." }]
      }
    ]
  },
  {
    id: "post-2",
    slug: "future-of-the-robotics-marketing-10-predictions-from-industry-leaders",
    title: "Future of the Robotics Marketing: 10 Predictions from Industry Leaders",
    subtitle: "Robotics and automation marketing are evolving rapidly. We compile positioning, content, and pipeline predictions.",
    excerpt: "Robotics marketing is shifting towards application-focused stories. Discover 10 predictions from leaders on positioning, client onboarding, and digital discovery.",
    category: "Brand Strategy",
    publishedAt: "May 27, 2026",
    readTime: "7 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/2fbaed234812382864d29ad8aa202687dbe338f8-1379x735.jpg",
    featured: false,
    author: AUTHORS.pavani,
    takeaways: [
      "Focus on specific customer applications over raw technical specifications.",
      "Visual proof of robotics deployments acts as the ultimate marketing collateral.",
      "Simulation tools will shorten traditional procurement cycles.",
      "Marketers must align closely with systems integrators for product distribution."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Robotics and automation marketing are evolving rapidly. Historically, robotics hardware manufacturers focused on torque, payload, and speed. Today, B2B buyers care about deployment ease, software integration, and measurable ROI." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Shifting to Application-Focused Messaging" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Industrial and warehouse buyers don't buy a robot; they buy a solution to labor shortages or throughput bottlenecks. Marketing content must highlight deployment case studies rather than simple engineering specification sheets." }]
      }
    ]
  },
  {
    id: "post-3",
    slug: "deep-tech-marketing-evolution-what-changed-between-2020-and-2026",
    title: "Deep-Tech Marketing Evolution: What Changed Between 2020 and 2026?",
    subtitle: "How deep-tech marketing has evolved to translate complex engineering into pipeline.",
    excerpt: "Deep-tech marketing requires translating complex engineering details into clear value propositions. Discover how deep-tech marketing has evolved over the last six years.",
    category: "Brand Strategy",
    publishedAt: "May 25, 2026",
    readTime: "8 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/c5f631f9d0c563394b20af670e8bc972c9de1b3c-1536x1024.png",
    featured: false,
    author: AUTHORS.pavani,
    takeaways: [
      "Translating engineering complexity into commercial utility is essential.",
      "Buyer committees are now broader, requiring content for both technical and finance leaders.",
      "Digital presence and search discoverability have replaced physical tradeshows.",
      "Trust-building assets like interactive ROI calculators drive higher conversion."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Deep-tech marketing requires translating complex engineering details into clear value propositions. Over the last six years, we have seen a dramatic shift in how scientific and deep-tech products are marketed to enterprise buyers." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Democratizing Complex Technical Concepts" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Marketers in deep tech are no longer just copywriters; they are translators. They bridge the gap between engineering teams and business stakeholders, explaining how technical specs yield business advantages." }]
      }
    ]
  },
  {
    id: "post-4",
    slug: "industrial-automation-marketing-benchmarks-2026",
    title: "Industrial Automation Marketing Benchmarks 2026",
    subtitle: "Cost per acquisition, pipeline conversion, and effective distribution channels for automation providers.",
    excerpt: "Discover key marketing benchmarks for industrial automation companies, including cost per acquisition, pipeline conversion rates, and effective distribution channels.",
    category: "Product Marketing",
    publishedAt: "May 20, 2026",
    readTime: "5 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/46b0523ab8aac7eda68e0ada87d4224760bf6d8f-1536x1024.png",
    featured: false,
    author: AUTHORS.siddarth,
    takeaways: [
      "Average cost per pipeline opportunity in industrial sectors ranges widely.",
      "Case studies and live video demonstrations convert at the highest rate.",
      "LinkedIn is the primary channel for targeting operations managers.",
      "Nurturing sequences must span several months to reflect procurement cycles."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Industrial automation companies face unique marketing challenges. Long sales cycles and multi-stakeholder buyer committees make pipeline acquisition complex. Having data-backed marketing benchmarks helps teams optimize their spends." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Primary Conversion Indicators" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "The most successful automation campaigns prioritize demonstration requests over simple ebook downloads. In-person or virtual POCs (Proof of Concepts) remain the most effective pipeline conversion steps." }]
      }
    ]
  },
  {
    id: "post-5",
    slug: "account-based-marketing-statistics-and-trends-2026",
    title: "Account-Based Marketing Statistics & Trends 2026",
    subtitle: "How B2B organizations are executing 1:1 and 1:few account-based campaigns.",
    excerpt: "ABM continues to drive substantial pipeline for B2B tech organizations. We analyze the latest statistics, trends, and execution models shaping ABM in 2026.",
    category: "Demand Generation",
    publishedAt: "May 14, 2026",
    readTime: "6 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/cbf6849e9100c9f83f0ca26a677532373b50f115-1600x836.jpg",
    featured: false,
    author: AUTHORS.pavani,
    takeaways: [
      "Over 70% of B2B marketers report higher ROI with ABM than traditional campaigns.",
      "Customizing assets for specific industries doubles conversion rates.",
      "Tight alignment between marketing and sales is the top success factor.",
      "Intent data assists in selecting accounts that are actively in-market."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Account-Based Marketing (ABM) has evolved from a buzzword into the standard operating procedure for B2B companies targeting enterprise accounts. By focusing resources on a defined set of target accounts, companies maximize their sales efficiency." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "The Importance of Intent Data" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Selecting the right target accounts is critical. ABM campaigns in 2026 leverage real-time intent data to prioritize accounts that are showing active interest in relevant topics, reducing waste and boosting conversion." }]
      }
    ]
  },
  {
    id: "post-6",
    slug: "best-ai-tools-for-digital-marketing-in-2026",
    title: "Best AI Tools for Digital Marketing in 2026",
    subtitle: "From SEO keyword mapping to content auditing—the tools digital marketers are using to accelerate pipelines.",
    excerpt: "From search engine optimization to automated copy and content analysis, we review the top AI tools digital marketers are using to accelerate pipeline.",
    category: "SEO & SEM",
    publishedAt: "May 8, 2026",
    readTime: "5 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/a0edd353e93e9314abe259b942c7fadb8d0cf4e2-1536x1024.jpg",
    featured: false,
    author: AUTHORS.siddarth,
    takeaways: [
      "AI tools help streamline keyword research and mapping at scale.",
      "Data analysis tools help marketing teams extract insight from raw CRM sheets.",
      "Ensure human review to maintain distinct brand points of view.",
      "Predictive analytics tools identify accounts showing early buying signals."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Artificial intelligence has reshaped the digital marketing toolkit. In 2026, marketers use AI not just for copywriting, but for deep data analysis, search engine optimization mapping, and marketing campaign automation." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Focusing on AI for Analysis over Content Spawning" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Spawning generic content using AI is a recipe for search engine ranking declines. The most successful teams use AI to analyze customer objections, map keyword gaps, and automate programmatic SEO steps, while writing with deep human expertise." }]
      }
    ]
  },
  {
    id: "post-7",
    slug: "the-state-of-saas-marketing-in-india",
    title: "The State of SaaS Marketing in India",
    subtitle: "Indian SaaS companies are transitioning from global price arbitrage to global product leadership.",
    excerpt: "SaaS companies in India are transitioning from global arbitrage to product leadership. An in-depth analysis of the marketing channels driving growth.",
    category: "Content Marketing",
    publishedAt: "March 24, 2026",
    readTime: "6 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/9eccf2a53fd170272e6a195b6da75af83c6bea7a-1536x1024.png",
    featured: false,
    author: AUTHORS.siddarth,
    takeaways: [
      "India has transitioned to a product-first SaaS hub targeting global markets.",
      "Product-led growth (PLG) has emerged as the leading model for developer tools.",
      "Organic search and thought leadership are primary global channels.",
      "Local marketing operations are expanding to US and European regions."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "The SaaS ecosystem in India has reached a critical inflection point. No longer just a back-office support hub, Indian SaaS providers are establishing global category leadership across developer tools, customer service, and vertical CRM sectors." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Scaling Inbound Channels Globally" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Global expansion requires highly efficient inbound marketing engines. Indian SaaS companies invest heavily in content marketing, technical documentation, and product-led signups to compete directly with global incumbents." }]
      }
    ]
  },
  {
    id: "post-8",
    slug: "b2b-marketing-trends-2026-what-s-actually-working-for-tech-companies",
    title: "B2B Marketing Trends 2026: What's Actually Working for Tech Companies",
    subtitle: "Escape the vanity loop. Discover how tech brands are capturing demand and generating pipeline.",
    excerpt: "Vanity traffic is declining. Discover what is actually driving pipeline growth for technology companies in 2026, from dark social to self-service paths.",
    category: "Content Marketing",
    publishedAt: "March 16, 2026",
    readTime: "6 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/7933d3bbea4896ca4b7be18d3feac82051549877-1536x1024.png",
    featured: false,
    author: AUTHORS.pavani,
    takeaways: [
      "Capturing demand on dark social is critical as search clicks decline.",
      "Buyers expect self-service sandboxes before scheduling demos.",
      "Intent-driven content outperforms volume-focused publishing.",
      "Sales enablement assets drive velocity inside complex deals."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "B2B marketing is undergoing significant shifts. Companies that continue to run high-volume, low-intent ebook and download campaigns are seeing returns collapse. The brands that win are building trust through transparent, intent-driven content." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "The Dominance of Self-Service Buying Paths" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Tech buyers do not want to be forced into discovery calls for basic pricing. Offering transparent pricing, interactive calculators, and product sandboxes allows buyers to build confidence on their own terms, leading to higher conversion." }]
      }
    ]
  },
  {
    id: "post-9",
    slug: "topical-authority-high-value-search-rankings",
    title: "Topical Authority: The Secret to High-Value Search Rankings",
    subtitle: "Search engines reward expertise. Structure your website into topical hubs to rank for competitive terms.",
    excerpt: "Search engines reward deep, structured expertise. Learn how to structure your website into topical hubs to rank for competitive keywords and drive buyer pipeline.",
    category: "SEO & SEM",
    publishedAt: "June 5, 2026",
    readTime: "5 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/a0edd353e93e9314abe259b942c7fadb8d0cf4e2-1536x1024.jpg",
    featured: false,
    author: AUTHORS.siddarth,
    takeaways: [
      "Topical authority requires comprehensive coverage of secondary keywords.",
      "Link spoke articles strictly back to the parent hub to signal architecture.",
      "Focus content on answering user questions rather than repeating keywords.",
      "Update legacy posts regularly to keep data points fresh."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Search engines have transitioned to semantic understanding. They no longer look for singular keyword matches, but evaluate whether your site covers a topic comprehensively from multiple angles." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Building Topical Clusters" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Establish authority by creating a central cornerstone asset (the hub) and supporting it with short, targeted deep-dives (the spokes). Linking these together correctly signals structural hierarchy to indexing crawlers." }]
      }
    ]
  },
  {
    id: "post-10",
    slug: "equipping-sales-team-high-impact-content",
    title: "Equipping Your Sales Team with High-Impact Content",
    subtitle: "Marketing traffic is useless if sales reps lack the collateral to close deals.",
    excerpt: "Learn how to build case studies, competitor comparison sheets, and ROI frameworks that sales reps actually use to shorten deal cycles.",
    category: "Sales Enablement",
    publishedAt: "May 10, 2026",
    readTime: "6 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/7dfd7d368646df4426bd2a90e0b260e5a08a166b-1536x1024.png",
    featured: false,
    author: AUTHORS.pavani,
    takeaways: [
      "Create assets that address customer objections directly.",
      "Keep collateral in a central, searchable library for easy access.",
      "Gather feedback from sales calls to guide content development.",
      "Design simple comparison sheets that highlight your product advantages."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Marketing teams often focus on pageviews and traffic, neglecting sales enablement. However, if sales reps cannot explain your brand's unique capabilities during a deal, marketing's efforts are wasted." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Collaborative Content Audits" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Marketing must regularly meet with sales managers to audit which assets are useful and what questions prospects ask. Content should address technical objections, deployment timelines, and integration compatibility transparently." }]
      }
    ]
  },
  {
    id: "post-11",
    slug: "how-to-build-b2b-sales-playbook-closes-pipeline",
    title: "How to Build a B2B Sales Playbook That Closes Pipeline",
    subtitle: "A step-by-step guide to documenting your sales process and technical handling.",
    excerpt: "A step-by-step guide to documenting your sales process, handling technical objections, and optimizing your pipeline for higher close rates.",
    category: "Sales Enablement",
    publishedAt: "April 18, 2026",
    readTime: "7 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/46b0523ab8aac7eda68e0ada87d4224760bf6d8f-1536x1024.png",
    featured: false,
    author: AUTHORS.pavani,
    takeaways: [
      "Standardize qualifying questions to filter high-intent prospects.",
      "Map distinct content assets to each stage of the deal cycle.",
      "Write scripts for handling common competitor comparisons.",
      "Track CRM pipeline indicators to continuously refine playbook plays."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "A sales playbook ensures your team handles prospects consistently. Documenting your ideal customer profile, technical constraints, and pricing objections helps shorten rep onboarding and increases win rates." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Objection Handling Frameworks" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Objections are opportunities for sales reps to build trust. Provide your sales team with detailed technical playbooks outlining how your software or industrial automation meets security, compliance, and custom integration demands." }]
      }
    ]
  },
  {
    id: "post-12",
    slug: "art-product-sandbox-driving-plg-conversions",
    title: "The Art of the Product Sandbox: Driving PLG Conversions",
    subtitle: "Why interactive sandboxes convert buyers faster than booking discovery calls.",
    excerpt: "Frictionless product experiences convert better than discovery calls. Learn how to build interactive product sandboxes that showcase technical value.",
    category: "Product Marketing",
    publishedAt: "April 29, 2026",
    readTime: "6 min read",
    mainImage: "https://cdn.sanity.io/images/juhdca8m/blogs/cbf6849e9100c9f83f0ca26a677532373b50f115-1600x836.jpg",
    featured: false,
    author: AUTHORS.siddarth,
    takeaways: [
      "Frictionless self-service trials capture active buyer interest.",
      "Pre-populate sandbox environments with realistic data schemas.",
      "Provide in-app guides that direct users to key value metrics.",
      "Analyze sandbox usage indicators to identify hot leads for sales."
    ],
    body: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Product-Led Growth (PLG) relies on letting the buyer experience the product value first. Enterprise buyers increasingly resist scheduling introductory sales calls just to view a UI; they want to test-drive capabilities immediately." }]
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Building High-Fidelity Sandboxes" }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "An effective sandbox should mimic actual workflows with mock or template data. Keep onboarding under two minutes, and guide users directly to key actions that showcase time-to-value." }]
      }
    ]
  }
];

export const MOCK_CATEGORIES = [
  { title: "Demand Generation", count: 2, slug: "demand-generation" },
  { title: "Brand Strategy", count: 2, slug: "brand-strategy" },
  { title: "SEO & SEM", count: 2, slug: "seo-sem" },
  { title: "Content Marketing", count: 2, slug: "content-marketing" },
  { title: "Sales Enablement", count: 2, slug: "sales-enablement" },
  { title: "Product Marketing", count: 2, slug: "product-marketing" },
];

export function getPostBySlug(slug: string): DetailedBlogPost | undefined {
  return MOCK_POSTS.find(p => p.slug === slug);
}

export function getPopularPosts(): DetailedBlogPost[] {
  return [...MOCK_POSTS].slice(0, 5);
}

export function getRelatedPosts(category: string, currentSlug: string): DetailedBlogPost[] {
  return MOCK_POSTS.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 3);
}
