export interface FAQItem {
  q: string;
  a: string;
}

export const homeFaqs: FAQItem[] = [
  {
    q: "What does all4Ps do?",
    a: "We help B2B companies grow their pipeline through SEO, content, and structured marketing strategies.",
  },
  {
    q: "Who is all4Ps best suited for?",
    a: "We work with B2B companies, startups, and service businesses aiming to scale inbound leads.",
  },
  {
    q: "How are you different from other agencies?",
    a: "We focus on long-term growth systems instead of short-term campaigns.",
  },
  {
    q: "How soon can I see results?",
    a: "Most clients start seeing measurable traction within 8–12 weeks.",
  },
  {
    q: "Do you offer customized solutions?",
    a: "Yes, every strategy is tailored to your business goals and audience.",
  },
];
export const aboutFaqs: FAQItem[] = [
  {
    q: "What is all4Ps?",
    a: "all4Ps is a B2B growth marketing partner helping technology-focused companies build stronger brands, generate demand, and create measurable business growth.",
  },
  {
    q: "Who does all4Ps work with?",
    a: "We work with B2B technology companies, including SaaS, deep-tech, industrial, robotics, and other complex businesses looking to strengthen their market presence and accelerate growth.",
  },
  {
    q: "What makes all4Ps different from a traditional marketing agency?",
    a: "We look beyond individual campaigns and focus on building connected growth systems across brand, strategy, content, demand generation, SEO, and digital experiences.",
  },
  {
    q: "How does all4Ps approach B2B marketing?",
    a: "We start by understanding the business, audience, market, and growth objectives, then build a focused strategy that connects positioning, execution, and measurable outcomes.",
  },
  {
    q: "Can all4Ps work with an existing marketing team?",
    a: "Yes. We can work alongside in-house teams, founders, and sales teams to bring strategic direction, specialized expertise, or execution support where it is needed most.",
  },
  {
    q: "How can we start working with all4Ps?",
    a: "Start with a conversation about your business goals, challenges, and growth priorities. We will identify where marketing can create the most meaningful impact and recommend the right way forward.",
  },
];

export const serviceFaqs: Record<string, FAQItem[]> = {
  "brand-strategy": [
    {
      q: "What does your brand strategy service include?",
      a: "We build a clear brand strategy around your market, audience, positioning, messaging, and business goals so your brand has a stronger and more consistent direction.",
    },
    {
      q: "Is brand strategy relevant for B2B companies?",
      a: "Yes. A strong brand strategy helps B2B companies communicate complex offerings clearly, differentiate in competitive markets, and build stronger connections with the right buyers.",
    },
    {
      q: "How do you develop a brand strategy?",
      a: "We begin by understanding your business, market, competitors, audience, and existing brand perception. We then translate those insights into positioning, messaging, and a practical brand direction.",
    },
    {
      q: "Can you help reposition an existing B2B brand?",
      a: "Yes. We can assess your current positioning, identify gaps or areas of confusion, and develop a sharper brand direction aligned with your business and market objectives.",
    },
    {
      q: "How does brand strategy support marketing and sales?",
      a: "A clear brand strategy gives marketing and sales teams a consistent foundation for messaging, content, campaigns, and customer conversations across the buying journey.",
    },
    {
      q: "How long does a brand strategy project take?",
      a: "The timeline depends on the scope, research requirements, and complexity of the business. We define the process and deliverables around your specific goals before the project begins.",
    },
  ],
  "positioning-messaging": [
    {
      q: "What does your positioning and messaging service include?",
      a: "We clarify how your business should be positioned in the market and develop messaging that communicates your value clearly to the right B2B buyers.",
    },
    {
      q: "Why is positioning important for B2B companies?",
      a: "Clear positioning helps buyers quickly understand what you offer, who it is for, and why your solution is relevant, especially in complex and competitive B2B markets.",
    },
    {
      q: "How do you develop a B2B messaging framework?",
      a: "We study your business, audience, competitors, value proposition, and buyer needs, then translate those insights into a structured messaging framework for consistent communication.",
    },
    {
      q: "Can you improve messaging for an existing brand?",
      a: "Yes. We can review your existing messaging, identify gaps or inconsistencies, and refine it to make your value proposition clearer, sharper, and more relevant to your target audience.",
    },
    {
      q: "Will the messaging work across marketing and sales?",
      a: "Yes. The messaging framework can provide a consistent foundation for your website, content, campaigns, presentations, sales conversations, and other customer-facing communications.",
    },
    {
      q: "How do positioning and messaging work together?",
      a: "Positioning defines the space your brand should own in the market, while messaging gives your teams the language and structure to communicate that position consistently.",
    },
  ],
  "thought-leadership": [],
  "content-marketing": [],
  "demand-generation": [],
  abm: [],
  "campaign-execution": [],
  "marketing-automation": [],
  "seo-visibility": [],
  "website-optimisation": [],
  "analytics-reporting": [],
  "gtm-execution": [],
};
