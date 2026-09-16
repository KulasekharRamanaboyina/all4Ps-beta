export interface FAQItem {
  q: string;
  a: string;
}

export const homeFaqs: FAQItem[] = [
  {
    q: "What is all4Ps?",
    a: "all4Ps is a strategy-led B2B growth partner that helps technology companies build stronger brands, generate qualified demand, and create predictable pipeline growth. We combine brand strategy, demand generation, content marketing, SEO, website services, and marketing automation to deliver measurable business outcomes.",
  },
  {
    q: "Which businesses does all4Ps work with?",
    a: "We primarily partner with B2B companies across SaaS, AI, Robotics, Industrial Automation, Manufacturing, Logistics, and other technology-driven industries. Whether you're a startup, a scaling business, or an enterprise, we tailor our approach to your growth stage and business objectives.",
  },
  {
    q: "What makes all4Ps different from traditional marketing agencies?",
    a: "Unlike agencies that focus on isolated marketing activities, all4Ps takes a strategy-first approach. We align branding, positioning, content, SEO, demand generation, and performance marketing into one integrated growth engine designed to support long-term business growth.",
  },
  {
    q: "What services does all4Ps provide?",
    a: "Our services include Brand Strategy & Positioning, Go-to-Market Strategy, Demand Generation, Account-Based Marketing (ABM), SEO, Content Marketing, Website Design & Development, Marketing Automation, and Analytics & Reporting. Every engagement is tailored to your business goals and target market.",
  },
  {
    q: "How do we get started with all4Ps?",
    a: "It begins with a discovery conversation to understand your business, market, goals, and current challenges. Based on those insights, we recommend a tailored growth strategy and execution roadmap designed to help you achieve measurable results.",
  },
];
export const aboutFaqs: FAQItem[] = [
  {
    q: "Why was all4Ps built?",
    a: "all4Ps was built to help B2B technology companies move beyond fragmented marketing with a strategy first approach. We combine branding, demand generation, content, SEO, and digital experiences to drive measurable business growth.",
  },
  {
    q: "What philosophy drives the way all4Ps works?",
    a: "We believe great marketing starts with strategy. Every engagement begins with understanding your business, audience, and goals before creating integrated marketing programs that deliver long term impact.",
  },
  {
    q: "How does all4Ps approach business growth?",
    a: "We connect strategy, execution, and optimization into one growth system. By aligning every marketing initiative with your business objectives, we help build authority, generate demand, and accelerate growth.",
  },
  {
    q: "What types of companies does all4Ps work with?",
    a: "We partner with B2B technology companies across SaaS, AI, Robotics, Industrial Automation, Manufacturing, and other innovation driven industries that require strategic marketing to scale.",
  },
  {
    q: "What makes all4Ps a long term growth partner?",
    a: "Yes. We can work alongside in-house teams, founders, and sales teams to bring strategic direction, specialized expertise, or execution support where it is needed most.",
  },
  {
    q: "How can we start working with all4Ps?",
    a: "We work as an extension of your team, combining strategic thinking with hands on execution. Our focus is on building scalable marketing systems that support sustainable business growth.",
  },
];

export const serviceFaqs: Record<string, FAQItem[]> = {
  "brand-strategy": [
    {
      q: "Why does my business need a Brand Strategy?",
      a: "A strong Brand Strategy gives your business a clear direction by defining how you position yourself, communicate your value, and connect with the right audience. It creates consistency across every marketing and customer touchpoint.",
    },
    {
      q: "How do you identify what makes our brand different?",
      a: "We evaluate your business, market, competitors, and customer expectations to uncover your unique strengths. These insights help us define a differentiated position that sets your brand apart in a competitive market.",
    },
    {
      q: "Can you help reposition an existing brand?",
      a: "Yes. Whether you're entering new markets, launching new offerings, or evolving your business, we refine your positioning and messaging to better reflect your current vision and future growth goals.",
    },
    {
      q: " How do you define our Ideal Customer Profile (ICP)?",
      a: "We identify the customers who are the best fit for your business by analyzing industry, business needs, buying behaviour, and decision making patterns. This helps focus your marketing on high value opportunities.",
    },
    {
      q: "How do you develop a messaging framework?",
      a: "We translate your positioning into clear, consistent messaging that communicates your value across websites, campaigns, sales conversations, and customer touchpoints, ensuring your brand speaks with one voice.",
    },
    {
      q: "How do you uncover our unique value proposition (UVP)?",
      a: "We uncover your UVP by understanding your business, customers, competitors, and what sets you apart. We turn these insights into a clear, compelling value proposition.",
    },
  ],
  "positioning-messaging": [
    {
      q: "Why does my business need a positioning and messaging strategy?",
      a: "A clear positioning and messaging strategy helps your business stand out in a crowded market. It ensures your value proposition is communicated consistently across your website, sales materials, marketing campaigns, and customer interactions, making it easier for prospects to understand why they should choose you.",
    },
    {
      q: "How do you develop a positioning and messaging strategy?",
      a: "We begin by understanding your business, target audience, competitive landscape, and market opportunities. Through research and collaborative workshops, we define your positioning, value proposition, messaging pillars, brand voice, and audience-specific messaging to create a cohesive communication framework.",
    },
    {
      q: "What's included in your Positioning & Messaging service?",
      a: "Our service includes market and competitor analysis, audience insights, brand positioning, value proposition development, messaging framework, brand voice and tone, messaging by buyer persona, and guidelines for applying your messaging across websites, sales collateral, and marketing campaigns.",
    },
    {
      q: "Can you create messaging for different buyer personas?",
      a: "Yes. We develop tailored messaging for different decision-makers and stakeholders, ensuring each audience receives communication that addresses their priorities, challenges, and buying motivations while maintaining a consistent brand voice.",
    },
    {
      q: "How will positioning improve our website and marketing?",
      a: "A strong positioning strategy creates consistency across every customer touchpoint. It strengthens your website messaging, improves marketing campaigns, supports sales conversations, and helps attract the right audience with a clear and differentiated value proposition.",
    },
    {
      q: "Can you help reposition an existing brand?",
      a: "Absolutely. Whether your business has evolved, entered new markets, or no longer reflects your current value, we help refine your positioning and messaging to align with your business goals while preserving the brand equity you've already built.",
    },
    {
      q: "How do you ensure our messaging stands out from competitors?",
      a: "We combine market research, customer insights, and competitive analysis to identify opportunities for differentiation. Instead of relying on generic claims, we build messaging around your unique strengths, expertise, and the value you deliver, creating a positioning that is authentic, credible, and memorable.",
    },
  ],
  "thought-leadership": [
    {
      q: "Why is thought leadership important for B2B brands?",
      a: "Thought leadership helps your business build credibility, earn trust, and become a recognized authority in your industry. By consistently sharing valuable insights and expertise, you stay top-of-mind with decision-makers and influence buying decisions before prospects are ready to purchase.",
    },
    {
      q: "What does your Thought Leadership service include?",
      a: "Our Thought Leadership service includes executive content strategy, LinkedIn thought leadership, technical articles, opinion pieces, industry insights, ghostwriting, and content designed to position your brand as a trusted voice in the market.",
    },
    {
      q: "Who is Thought Leadership best suited for?",
      a: "Thought leadership is ideal for founders, executives, subject matter experts, and B2B brands looking to establish industry authority, build trust with enterprise buyers, and generate long-term brand visibility.",
    },
    {
      q: "Can thought leadership help generate business opportunities?",
      a: "Yes. Effective thought leadership builds trust long before sales conversations begin. By sharing valuable insights consistently, it attracts the right audience, strengthens brand credibility, and creates opportunities for meaningful business conversations.",
    },
    {
      q: "How do you measure the success of thought leadership?",
      a: "We measure success through metrics such as audience engagement, content reach, website traffic, executive visibility, qualified inbound inquiries, and overall brand influence within your target industry.",
    },
  ],
  "content-marketing": [
    {
      q: "How do you create content that generates qualified demand?",
      a: "We create content based on your audience's challenges, search intent, and buying journey. Every asset is designed to educate prospects, build trust, and move them closer to a purchasing decision.",
    },
    {
      q: "What types of content do you create?",
      a: "We create blogs, website copy, case studies, whitepapers, landing pages, thought leadership articles, email campaigns, and other B2B content tailored to your marketing goals.",
    },
    {
      q: "Can you create technical content for complex B2B industries?",
      a: "Yes. We specialize in creating content for SaaS, AI, Robotics, Industrial Automation, Manufacturing, and other technology-driven industries by simplifying complex topics while maintaining technical accuracy.",
    },
    {
      q: "How do you develop a content strategy for our business?",
      a: "We build a content strategy around your business objectives, target audience, buyer journey, and market opportunities. This ensures every piece of content supports your growth goals and marketing priorities.",
    },
    {
      q: "Do you optimize content for search engines?",
      a: "Absolutely. Every piece of content is developed using keyword research, search intent analysis, and SEO best practices to improve visibility while delivering value to your audience.",
    },
    {
      q: "Can you refresh or optimize our existing content?",
      a: "Yes. We review and optimize existing content to improve messaging, SEO performance, readability, and relevance, helping it generate better long-term results.",
    },
  ],
  "demand-generation": [
    {
      q: "How do you attract qualified B2B buyers?",
      a: "We combine audience research, targeted campaigns, content, and landing pages to attract decision makers who match your Ideal Customer Profile. Our focus is on generating qualified opportunities, not just increasing lead volume.",
    },
    {
      q: "How do you identify the right audience for our campaigns?",
      a: "We define your Ideal Customer Profile, buyer personas, and purchase intent signals before launching campaigns. This helps us reach prospects who are most likely to convert into customers.",
    },
    {
      q: "Which channels do you use for demand generation?",
      a: "We build integrated demand generation programs using channels such as LinkedIn, Google, email marketing, content marketing, SEO, and paid retargeting based on your audience and business objectives.",
    },
    {
      q: "How do you improve lead quality instead of just lead quantity?",
      a: "Every campaign is built around audience targeting, messaging, landing page optimization, and lead qualification. This helps generate prospects that are more relevant to your sales team.",
    },
    {
      q: "How do you nurture prospects who are not ready to buy?",
      a: "We create lead nurturing journeys using valuable content, email workflows, and remarketing campaigns that keep your brand visible until prospects are ready to engage.",
    },
    {
      q: "How do you optimize demand generation campaigns?",
      a: "We continuously monitor campaign performance, audience engagement, landing page conversions, and channel effectiveness to improve results and maximize marketing efficiency.",
    },
  ],
  abm: [
    {
      q: "How do you identify the right target accounts?",
      a: "We identify target accounts by evaluating your Ideal Customer Profile, industry, business size, buying potential, and strategic fit. This ensures your ABM efforts focus on accounts with the highest opportunity for growth.",
    },
    {
      q: "How do you personalize campaigns for different accounts?",
      a: "We tailor messaging, content, and engagement based on each account's business goals, challenges, and buying stage, creating more relevant and meaningful interactions.",
    },
    {
      q: "Which channels do you use for Account Based Marketing?",
      a: "Our ABM programs combine LinkedIn, email marketing, paid campaigns, content marketing, website experiences, and sales outreach to engage target accounts across multiple touchpoints.",
    },
    {
      q: "How do you align marketing and sales in an ABM program?",
      a: "We establish a shared account strategy, define common goals, and align messaging, outreach, and reporting so both teams work together to engage high value accounts.",
    },
    {
      q: "How do you engage multiple decision makers within the same account?",
      a: "We develop role specific messaging and content that addresses the priorities of business leaders, technical teams, and other stakeholders involved in the buying process.",
    },
    {
      q: "Can ABM work alongside our existing demand generation efforts?",
      a: "Absolutely. ABM complements demand generation by delivering personalized engagement for high value accounts while broader campaigns continue to build market awareness.",
    },
    {
      q: "How do you prioritize which accounts to target first?",
      a: "We prioritize accounts based on business fit, revenue potential, buying intent, and strategic value to help your teams focus on opportunities with the greatest impact.",
    },
    {
      q: "Can ABM support new market expansion?",
      a: "Yes. We identify target accounts in new markets, develop personalized outreach strategies, and help establish meaningful engagement with decision makers.",
    },
  ],
  "campaign-execution": [
    {
      q: "How do you plan a successful B2B marketing campaign?",
      a: "Every campaign starts with understanding your business goals, target audience, and buying journey. We then build a strategy that aligns the right message, channels, and tactics to achieve measurable outcomes.",
    },
    {
      q: "Which marketing channels do you use for campaign execution?",
      a: "We execute campaigns across LinkedIn, Google, email marketing, content marketing, SEO, and other digital channels, selecting the right mix based on your audience and objectives.",
    },
    {
      q: "How do you ensure campaigns reach the right audience?",
      a: "We define your Ideal Customer Profile, identify key decision makers, and use audience targeting strategies to deliver campaigns to the businesses most likely to convert.",
    },
    {
      q: "Can you manage multi-channel marketing campaigns?",
      a: "Yes. We plan, launch, and optimize campaigns across multiple channels while maintaining consistent messaging and a seamless customer experience.",
    },
    {
      q: "Do you create campaign messaging and creative assets?",
      a: "Absolutely. We develop campaign messaging, ad copy, landing pages, email content, and creative assets that align with your brand and campaign goals.",
    },
    {
      q: "How do you optimize campaigns after launch?",
      a: "We continuously monitor campaign performance, audience engagement, conversions, and channel effectiveness, making data driven improvements to maximize results.",
    },
    {
      q: "How do you improve campaign conversion rates?",
      a: "We optimize audience targeting, messaging, landing pages, calls to action, and user experience to reduce friction and increase conversions.",
    },
  ],
  "marketing-automation": [
    {
      q: "How do you identify automation opportunities in our marketing process?",
      a: "We review your existing workflows, customer journey, CRM, and marketing tools to identify repetitive tasks and opportunities where automation can improve efficiency and lead management.",
    },
    {
      q: "Can you integrate our existing CRM and marketing tools?",
      a: "Yes. We integrate your CRM, marketing automation platform, and other essential tools to create a connected system that improves data flow and campaign execution.",
    },
    {
      q: "How do you build automated lead nurturing workflows?",
      a: "We create workflows based on customer actions, engagement levels, and buying stages, ensuring every lead receives relevant communication at the right time.",
    },
    {
      q: "How does lead scoring improve marketing performance?",
      a: "Lead scoring helps prioritize prospects based on their behavior and engagement, allowing your sales team to focus on the most qualified opportunities.",
    },
    {
      q: "How do you ensure automation feels personal instead of robotic?",
      a: "We personalize emails, workflows, and customer journeys using behavioral triggers, audience segmentation, and relevant content, creating meaningful interactions rather than generic automation.",
    },
    {
      q: "Can you automate follow ups after website enquiries or downloads?",
      a: "Yes. We build automated sequences that respond instantly to form submissions, content downloads, demo requests, and other customer interactions, helping you engage leads faster.",
    },
    {
      q: "How do you optimize marketing automation over time?",
      a: "We continuously monitor workflow performance, engagement metrics, and conversion data to refine automation, improve efficiency, and increase campaign effectiveness.",
    },
    {
      q: "How does marketing automation support our go-to-market (GTM) strategy?",
      a: "Marketing automation connects campaigns, content, lead nurturing, and follow-ups to create a more efficient and scalable GTM process.",
    },
    {
      q: "Can you build a GTM engine that connects marketing, sales, and customer data?",
      a: "Yes. We help connect marketing, sales, and customer data to create a unified GTM engine that improves visibility, alignment, and conversion.",
    },
    {
      q: "How do you use automation to improve the efficiency of our GTM engine?",
      a: "We automate repetitive processes, lead nurturing, follow-ups, and workflows so your teams can focus on high-value opportunities while the GTM engine scales efficiently.",
    },
  ],
  "seo-visibility": [
    {
      q: "How do you identify the right keywords for our business?",
      a: "We research your industry, audience, search intent, and competitors to identify keywords that attract qualified B2B buyers. Our strategy focuses on opportunities that support both visibility and business growth.",
    },
    {
      q: "How do you improve our website's search visibility?",
      a: "We combine technical SEO, keyword optimization, content strategy, and authority building to improve your visibility in search results and help the right audience discover your business.",
    },
    {
      q: "Do you perform technical SEO audits?",
      a: "Yes. We evaluate your website's technical foundation, including crawlability, indexing, site structure, page speed, and Core Web Vitals to identify issues that impact search performance.",
    },
    {
      q: "Can you improve the performance of our existing website?",
      a: "Absolutely. We review your current website, identify technical and content gaps, and implement improvements that enhance search visibility, user experience, and overall website performance.",
    },
    {
      q: "How do you optimize content for search engines?",
      a: "We optimize content using keyword research, search intent, structured content, internal linking, and SEO best practices while ensuring it remains valuable and engaging for your audience.",
    },
    {
      q: "How long does it take to see results from SEO?",
      a: "SEO is a long term investment. While technical improvements can have an earlier impact, sustainable growth in rankings, organic traffic, and qualified leads develops through consistent optimization over time.",
    },
    {
      q: "Can SEO support long term business growth?",
      a: "Yes. SEO helps your business build sustainable visibility, attract qualified prospects, and generate consistent organic demand by reaching customers actively searching for your solutions.",
    },
  ],
  "website-optimisation": [
    {
      q: "How do you identify opportunities to improve our website?",
      a: "We evaluate your website's user experience, navigation, performance, and conversion paths to identify areas that can improve engagement and drive better business outcomes.",
    },
    {
      q: "How does website optimisation improve conversions?",
      a: "By improving user journeys, page layouts, calls to action, and overall usability, we help turn more visitors into qualified leads and customers.",
    },
    {
      q: "Can you optimise our existing website without redesigning it?",
      a: "Yes. We enhance your current website by improving user experience, page performance, content structure, and conversion elements without requiring a complete rebuild.",
    },
    {
      q: "How do you optimize landing pages for better performance?",
      a: "We optimize landing pages by refining messaging, layout, calls to action, forms, and user experience to improve engagement and increase conversion rates.",
    },
    {
      q: "How do you improve the user experience on our website?",
      a: "We analyze visitor behavior, navigation patterns, and usability to create a smoother browsing experience that helps users find information quickly and take action with confidence.",
    },
    {
      q: "Can you optimize our website for faster loading speeds?",
      a: "Yes. We improve page speed by optimizing images, code, scripts, and overall website performance to deliver a faster experience that supports both user engagement and search visibility.",
    },
    {
      q: "How do you keep improving our website after implementation?",
      a: "We continuously review user behavior, performance metrics, and conversion data to identify new opportunities for optimization and long term growth.",
    },
  ],
  "analytics-reporting": [
    {
      q: "How do you determine which marketing metrics matter most?",
      a: "We align reporting with your business goals by identifying the KPIs that measure marketing performance, pipeline growth, and revenue impact, ensuring every report delivers meaningful insights.",
    },
    {
      q: "Do you set up Google Analytics 4 (GA4)?",
      a: "Yes. We configure Google Analytics 4 with accurate event tracking, conversions, and custom reports to help you understand user behaviour and marketing performance.",
    },
    {
      q: "Can you integrate analytics with our CRM and marketing tools?",
      a: "Absolutely. We connect your CRM, marketing platforms, and analytics tools to create a unified view of customer interactions and campaign performance.",
    },
    {
      q: "Do you build custom reporting dashboards?",
      a: "Yes. We create dashboards tailored to your business, giving you real time visibility into campaign performance, lead generation, website activity, and marketing ROI.",
    },
    {
      q: "How do you measure marketing attribution?",
      a: "We build attribution models that identify which channels and campaigns contribute to leads, opportunities, and revenue, helping you make more informed marketing decisions.",
    },
    {
      q: "How do analytics improve marketing decision making?",
      a: "Analytics transforms marketing data into actionable insights, helping you understand what is working, identify opportunities, and make confident, data driven decisions.",
    },
  ],
  "gtm-execution": [
    {
      q: "How do you build a Go-to-Market strategy for a new product?",
      a: "We develop a structured GTM roadmap by defining your target audience, positioning, messaging, launch channels, and market approach to ensure a successful product introduction.",
    },
    {
      q: "Can you support new product launches?",
      a: "Yes. We help plan and execute product launches by coordinating messaging, launch campaigns, buyer collateral, and market activation to maximize early traction.",
    },
    {
      q: "How do you identify the right target market?",
      a: "We evaluate your industry, customer segments, market opportunities, and competitive landscape to identify the audience most likely to adopt your product or service.",
    },
    {
      q: "Can you help us expand into new markets?",
      a: "Absolutely. We create market penetration strategies that help businesses enter new regions, industries, or customer segments with a clear growth plan.",
    },
    {
      q: "How do you position our product for a successful launch?",
      a: "We define your value proposition, messaging, pricing approach, and competitive positioning to ensure your product clearly communicates its value to the right audience.",
    },
    {
      q: "How do you align marketing and sales during a GTM launch?",
      a: "We ensure both teams work from the same positioning, messaging, and launch plan, creating a consistent customer experience from awareness through conversion.",
    },
  ],
};
export const roboticsFaqs: FAQItem[] = [
  {
    q: "What is robotics marketing?",
    a: "Robotics marketing focuses on positioning, demand generation, content, SEO, and campaigns that help robotics companies reach and engage the right B2B decision-makers.",
  },
  {
    q: "Why do robotics companies need specialized marketing?",
    a: "Robotics products are often technically complex and involve longer buying cycles and multiple stakeholders. Specialized marketing helps translate that complexity into clear business value.",
  },
  {
    q: "How can all4Ps help robotics companies generate demand?",
    a: "We combine positioning, content, SEO, paid campaigns, and growth strategy to build authority and generate qualified B2B demand.",
  },
  {
    q: "Do you work with automation and industrial robotics companies?",
    a: "Yes. Our approach is designed for robotics, automation, industrial technology, and other technically complex B2B businesses.",
  },
  {
    q: "How long does robotics marketing take to show results?",
    a: "The timeline depends on the channels, market, and starting point. Paid campaigns can generate early signals, while SEO and content typically require a longer period to build momentum.",
  },
  {
    q: "How do we get started with all4Ps?",
    a: "You can start with a strategy call where we understand your business, audience, positioning, and growth goals before recommending the right approach.",
  },
];
