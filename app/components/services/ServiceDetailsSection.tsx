"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Eye, Compass, Users, Target, MessageSquare, Settings, FileText, CheckSquare, 
  Sparkles, Newspaper, TrendingUp, Award, BookOpen, Layers, Share2, Workflow, 
  Filter, Zap, Play, Bell, DollarSign, Search, Terminal, Globe, LineChart, 
  Gauge, AlertCircle, Layout, Landmark, Rocket, Map, CheckCircle2 
} from "lucide-react";
import { Service } from "@/app/types";

const FEATURE_DESCRIPTIONS: Record<string, string> = {
  "Competitor Intelligence Analysis": "Deep analysis of competitor GTM activities, traffic sources, messaging strategies, and market positioning.",
  "Brand Positioning Roadmap": "A strategic layout mapping out your target positioning, messaging pillars, and core brand channels for growth.",
  "Ideal Customer ICP Definition": "Identifying your highest-value buyers, account size thresholds, and decision-maker roles.",
  "Market Opportunity Mapping": "Uncovering white-space opportunities, underserved verticals, and competitor market vulnerabilities.",
  "Core Message Hierarchy": "Developing primary, secondary, and tertiary value statements customized for various buying personas and stakeholders.",
  "Technical Pitch Alignment": "Translating complex technical product architectures into business value pitches that close enterprise deals.",
  "Buyer Persona Playbooks": "Mapping specific buyer triggers, product misconceptions, and proof requirements for different roles.",
  "Sales Conversation Guides": "Equipping your account executives with objection handling, discovery questions, and value-pacing scripts.",
  "Executive Narrative Building": "Crafting custom editorial blueprints, target topics, and unique perspectives for founders and executives.",
  "PR & Placement Support": "Targeting high-impact trade journals, industry blogs, and podcasts to expand organic brand reach.",
  "LinkedIn Platform Domination": "Optimizing personal brands, scheduling calendars, and scaling executive visibility on LinkedIn.",
  "Keynote & Event Briefing": "Drafting high-impact presentations, slides, and talk tracks for key industry conferences.",
  "Expert-Driven Content Creation": "Writing research-backed whitepapers, blogs, and case studies guided by subject matter interviews.",
  "Funnel Asset Library Construction": "Designing downloadable resources and interactive tools to nurture leads throughout their evaluation journey.",
  "Technical Case Study Production": "Developing quantitative B2B case studies highlighting problem, solution architecture, and outcomes.",
  "Multi-Channel Distribution Strategy": "Syndicating top content assets through organic communities, dark social, and targeted paid promotion.",
  "Inbound Lead Acquisition Engine": "Setting up predictable lead generation setups using targeted search traffic, content gates, and landing pages.",
  "Multi-Channel Program Scaling": "Expanding successful campaigns across channels (LinkedIn, Google Search, retargeting) to grow inbound pipeline.",
  "Paid Retargeting Architecture": "Building warm audiences, retargeting funnels, and sequence ads across LinkedIn, Meta, and Google.",
  "High-Converting Landing Page Design": "Crafting optimized pages with persuasive copywriting, clean visual hierarchies, and clear call-to-actions.",
  "High-Value Target Mapping": "Researching and compiling high-value accounts, key buying groups, and localized triggers for precision outreach.",
  "Multi-Touch Sales Sequence Playbooks": "Coordinating outbound sales emails, cold calls, and ad campaigns for target account groups.",
  "Tier 1 Personalized Landing Pages": "Designing bespoke landing page structures targeted specifically at Tier 1 target accounts.",
  "ABM Orchestration & Reporting": "Tracking account engagement signals, intent metrics, and collaborative sales outreach loops.",
  "Paid Social & Search Execution": "Running performance campaigns on LinkedIn and Google Ads with bid optimization and creative testing.",
  "Lead Nurture Flow Operations": "Setting up automated follow-ups, newsletters, and email drips to maintain prospect engagement.",
  "A/B Creative Experimentation": "Testing ad messaging hooks, layout styles, and formats (video vs. static) to lower cost per click.",
  "Budget Optimization & Allocation": "Managing budgets across channels to maximize pipeline conversions and ad spend efficiency.",
  "Tech Stack Synchronization": "Aligning CRMs (HubSpot, Salesforce), tracking pixels, enrichment tools, and calendar integrations.",
  "Behavior-Triggered Lead Scoring": "Tracking visitor page views, downloads, and form submissions to automatically score hot leads.",
  "CRM Lifecycle Mapping": "Configuring pipeline stages, deal criteria, closed-won reasons, and sales handoff loops.",
  "Automated Sequence Implementation": "Building automated email drips, task triggers, and alerts that keep sales cycles moving forward.",
  "High-Intent Keyword Dominance": "Structuring organic articles and keywords that capture buyers at the precise moment they evaluate solutions.",
  "Technical Search Architecture Optimization": "Optimizing page load speed, mobile UX, indexation rules, and structured schema markup.",
  "Authority Backlink Acquisition": "Securing backlinks from respected, high-domain industry blogs and editorial sites.",
  "Organic CTR Enhancement Audits": "Improving title tags, meta descriptions, and schema templates to capture more search result clicks.",
  "Conversion Rate Optimisation (CRO)": "Running A/B tests on headline messaging, form structure, layout designs, and CTAs to boost sales call booking rates.",
  "Interactive UX/UI Refining": "Polishing layout visual style, scroll behaviors, load speeds, and navigation links to reduce friction.",
  "Page Speed & Core Web Vitals Optimization": "Optimizing JavaScript files, layouts, and image sizes to satisfy Google's ranking performance metrics.",
  "Form Friction & Drop-Off Analysis": "Auditing contact and sign-up forms using heatmaps to remove unnecessary input fields and boost conversions.",
  "GA4 & Attribution Configuration": "Configuring Google Analytics 4, Tag Manager, custom event triggers, and funnel tracking.",
  "Custom Pipeline Dashboards": "Building real-time executive reports that display cost-per-lead, pipeline sourced, and channel ROI.",
  "Multi-Touch Revenue Attribution Modeling": "Setting up attribution rules to identify which marketing touches influence closed-won deals.",
  "Pipeline Bottleneck Diagnostics": "Analyzing conversion rates between pipeline stages to locate friction points in your sales funnels.",
  "Product GTM Roadmap Playbooks": "Structuring packaging, launch pricing models, core messaging, and channels for new product launches.",
  "Market Penetration Programs": "Expanding successful strategies into new international regions, customer segments, or business verticals.",
  "Alpha/Beta Launch Management": "Coordinating pilot programs, feedback loops, and early-adopter user groups for new product entries.",
  "Sales Team Enablement Toolkits": "Building competitive battle cards, product FAQs, and sales sheets to help reps close new business."
};

const DETAILED_OVERVIEWS: Record<string, string> = {
  "brand-strategy": "Our strategic approach begins with a deep, objective analysis of your market landscape. We define clear market positioning, audit competitor strategies, and clarify your brand's unique attributes. This results in a structured GTM roadmap that aligns your executive narrative and guides your growth channels with commercial certainty.",
  "positioning-messaging": "We help B2B organizations bridge the gap between technical complexity and business outcomes. By designing a core messaging hierarchy, we align your primary value proposition for distinct buying groups and commercial buyers. Your sales and marketing teams will communicate with unified messaging that addresses pain points and accelerates deals.",
  "thought-leadership": "We build authoritative executive presence across key industry networks. Our team works directly with founders and executives to capture authentic perspectives, translating them into opinion pieces and LinkedIn narratives. By positioning your leaders as standard-setters, we drive trust and organic inbound pipeline.",
  "content-marketing": "We build full-funnel content ecosystems designed to educate decision-makers and drive action. Our copywriters produce expert-driven blogs, detailed case studies, and whitepapers based on internal knowledge. By syndicating these assets across relevant channels, we build organic authority that influences pipeline.",
  "demand-generation": "We construct and scale systematic lead acquisition setups. By matching buyer search intent with optimized landing pages and targeted offers, we capture high-quality pipeline opportunities. Our programs optimize paid search, paid social, and lead nurture sequences to deliver high-velocity conversions.",
  "abm": "We deploy precision marketing programs targeting high-value enterprise accounts. By collaborating closely with your sales team, we identify target account lists, map buying groups, and execute hyper-personalized ad sequences. This structured, multi-touch orchestration ensures higher contract values and sales conversion.",
  "campaign-execution": "We manage and execute multi-channel advertising campaigns with strict budget discipline. Our team handles copy design, creative testing, and bidding strategies across LinkedIn, Google Ads, and retargeting channels. We continually optimize conversion metrics and reduce CAC to maximize pipeline return.",
  "marketing-automation": "We synchronize your marketing technology stack to eliminate manual friction and align sales. From CRM configuration and behavior-triggered lead scoring to email sequence builders, we ensure data hygiene and pipeline tracking. You gain full visibility into when warm accounts show purchase intent.",
  "seo-visibility": "We capture buyer interest at the exact moment of commercial search intent. Our SEO framework audits technical code speed, structures high-performance content hubs, and acquires authoritative links. We align your organic presence to dominate keywords that commercial decision-makers search when looking for solutions.",
  "website-optimisation": "We transform your website into an optimized B2B sales asset. By auditing user friction, page load speed, and form completions, we apply targeted CRO tests. We refine value propositions, design premium interfaces, and restructure navigation paths to turn static traffic into qualified sales meetings.",
  "analytics-reporting": "We establish clear attribution loops to measure marketing performance and pipeline ROI. By integrating GA4, tag managers, and CRM databases, we build live attribution dashboards. You trace closed-won revenue back to individual digital campaigns, enabling confident budget allocations.",
  "gtm-execution": "We coordinate and execute product launches and market expansion playbooks. From defining pricing packages and buyer collateral to managing beta cycles and training sales teams, we drive market penetration. We align your product values with sales talk tracks to capture early traction."
};

const FEATURE_ICONS: Record<string, any> = {
  // Brand Strategy
  "Competitor Intelligence Analysis": Eye,
  "Brand Positioning Roadmap": Compass,
  "Ideal Customer ICP Definition": Users,
  "Market Opportunity Mapping": Target,
  // Positioning & Messaging
  "Core Message Hierarchy": MessageSquare,
  "Technical Pitch Alignment": Settings,
  "Buyer Persona Playbooks": FileText,
  "Sales Conversation Guides": CheckSquare,
  // Thought Leadership
  "Executive Narrative Building": Sparkles,
  "PR & Placement Support": Newspaper,
  "LinkedIn Platform Domination": TrendingUp,
  "Keynote & Event Briefing": Award,
  // Content Marketing
  "Expert-Driven Content Creation": BookOpen,
  "Funnel Asset Library Construction": Layers,
  "Technical Case Study Production": FileText,
  "Multi-Channel Distribution Strategy": Share2,
  // Demand Generation
  "Inbound Lead Acquisition Engine": Workflow,
  "Multi-Channel Program Scaling": TrendingUp,
  "Paid Retargeting Architecture": Filter,
  "High-Converting Landing Page Design": Zap,
  // ABM
  "High-Value Target Mapping": Target,
  "Multi-Touch Sales Sequence Playbooks": Layers,
  "Tier 1 Personalized Landing Pages": Zap,
  "ABM Orchestration & Reporting": Workflow,
  // Campaign Execution
  "Paid Social & Search Execution": Play,
  "Lead Nurture Flow Operations": Bell,
  "A/B Creative Experimentation": Layers,
  "Budget Optimization & Allocation": DollarSign,
  // Marketing Automation
  "Tech Stack Synchronization": Settings,
  "Behavior-Triggered Lead Scoring": Award,
  "CRM Lifecycle Mapping": Layers,
  "Automated Sequence Implementation": Workflow,
  // SEO Visibility
  "High-Intent Keyword Dominance": Search,
  "Technical Search Architecture Optimization": Terminal,
  "Authority Backlink Acquisition": Globe,
  "Organic CTR Enhancement Audits": LineChart,
  // Website Optimisation
  "Conversion Rate Optimisation (CRO)": Zap,
  "Interactive UX/UI Refining": Layers,
  "Page Speed & Core Web Vitals Optimization": Gauge,
  "Form Friction & Drop-Off Analysis": AlertCircle,
  // Analytics & Reporting
  "GA4 & Attribution Configuration": LineChart,
  "Custom Pipeline Dashboards": Layout,
  "Multi-Touch Revenue Attribution Modeling": Landmark,
  "Pipeline Bottleneck Diagnostics": Filter,
  // GTM Execution
  "Product GTM Roadmap Playbooks": Rocket,
  "Market Penetration Programs": Map,
  "Alpha/Beta Launch Management": Settings,
  "Sales Team Enablement Toolkits": FileText,
};

const CAPABILITY_TAGS = [
  "Strategic Discovery",
  "System Integration",
  "Active Campaigning",
  "Data Attribution"
];

const STAGES_DETAILS = [
  { stage: "Phase 1: Audit & Discovery", action: "Auditing competitor assets, performance data, and mapping buyer groups." },
  { stage: "Phase 2: Platform Integration", action: "Setting up tracking pixels, conversion actions, and landing page layouts." },
  { stage: "Phase 3: Program Execution", action: "Launching high-value content resources and targeting conversion campaigns." },
  { stage: "Phase 4: Optimization & Scale", action: "Reviewing CTR benchmarks, lead flows, and tuning bidding budgets." }
];

interface ServiceDetailsSectionProps {
  service: Service;
}

export default function ServiceDetailsSection({ service }: ServiceDetailsSectionProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const activeStep = hoveredIdx !== null ? hoveredIdx : 0;
  const detailedContent = DETAILED_OVERVIEWS[service.id] || "We build strategy-led programs designed to align key messaging, accelerate pipelines, and scale commercial channels with certainty.";

  return (
    <section className="relative bg-transparent py-16 md:py-24 px-6 lg:px-12 border-t border-white/5 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-fuchsia-800/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        
        {/* ROW 1: Deep Dive Overview & Expected Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Full Description & Detailed Content (Span 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-brand-purple text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                Deep Dive
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display leading-[1.15]">
                Service Overview
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-fuchsia-400 rounded-full" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed pt-2">
                {service.fullDescription}
              </p>
            </motion.div>

            {/* Single Line Separator & Additional Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pt-6 border-t border-white/10 space-y-4"
            >
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {detailedContent}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Outcomes Card (Span 5) */}
          <div className="lg:col-span-5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B0813] to-[#12081F]/90 border border-brand-purple/20 p-8 shadow-2xl space-y-6 hover:border-brand-purple/40 transition-colors duration-300"
            >
              {/* Top Accent Line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-purple to-fuchsia-400" />
              
              <h3 className="text-xl font-extrabold text-white tracking-tight font-display">
                {service.outcomesHeading || "Expected Outcomes"}
              </h3>

              {/* Metrics list */}
              <div className="grid grid-cols-2 gap-6 border-b border-white/5 pb-6">
                {service.outcomesHeadingMetrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple">
                      {metric.label}
                    </span>
                    <p className="text-lg sm:text-xl font-black text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* If Outcomes Heading Image exists */}
              {service.outComesHeadingImage && (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 shadow-lg bg-gray-950">
                  <img
                    src={service.outComesHeadingImage}
                    alt={service.outcomesHeading || "Expected Outcomes"}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-45" />
                </div>
              )}
            </motion.div>
          </div>

        </div>

        {/* ROW 2: Key Capabilities (Grid with Sticky Column Left) */}
        <div className="border-t border-white/5 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left sticky column: Title, subtitle, and standards (Span 4) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 text-left">
              <div className="space-y-2">
                <p className="text-brand-purple text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                  Core Expertise
                </p>
                <h3 className="text-3xl font-extrabold text-white tracking-tight font-display">
                  Key Capabilities
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-fuchsia-400 rounded-full pt-0.5" />
              </div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                We deliver targeted B2B programs engineered for enterprise conversion. Each capability is backed by clean data models, industry playbooks, and transparent pipeline targets.
              </p>

              {/* Interactive Stage Tracker (The Hover Card) */}
              <div className="hidden lg:block rounded-xl border border-white/5 bg-[#0B0813]/60 backdrop-blur-md p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple">
                    Live Program Stages
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">
                    Hover cards to preview
                  </span>
                </div>
                
                <div className="space-y-3.5">
                  {STAGES_DETAILS.map((detail, idx) => {
                    const isActive = idx === activeStep;
                    return (
                      <div 
                        key={idx} 
                        className={`flex items-start gap-3 transition-all duration-300 ${isActive ? "opacity-100 translate-x-1" : "opacity-35"}`}
                      >
                        <div className="flex flex-col items-center mt-1">
                          <div className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${isActive ? "bg-fuchsia-400 border-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.6)]" : "bg-transparent border-white/30"}`} />
                          {idx < 3 && <div className="w-[1px] h-8 bg-white/10 mt-1" />}
                        </div>
                        <div className="space-y-0.5">
                          <p className={`text-xs font-bold transition-colors duration-300 ${isActive ? "text-fuchsia-400" : "text-white"}`}>
                            {detail.stage}
                          </p>
                          <p className="text-[11px] text-gray-400 leading-relaxed">
                            {detail.action}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right column: Grid of 4 cards (Span 8) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => {
                  const FeatureIcon = FEATURE_ICONS[feature] || CheckCircle2;
                  const stepNumber = `0${idx + 1}`;
                  const isHovered = idx === hoveredIdx;
                  
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -2 }}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className={`relative overflow-hidden rounded-xl border p-6 group transition-all duration-300 ${isHovered ? "border-brand-purple/40 bg-gradient-to-br from-[#0B0813] to-[#12081F]/70 shadow-[0_8px_30px_rgba(128,0,128,0.08)]" : "border-white/5 bg-gradient-to-br from-[#0B0813] to-[#12081F]/40"}`}
                    >
                      {/* Top Glow bar on hover */}
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-purple/0 via-brand-purple/0 to-brand-purple/0 group-hover:from-brand-purple/40 group-hover:via-fuchsia-400/80 group-hover:to-brand-purple/40 transition-all duration-500" />
                      
                      {/* Step Number indicator */}
                      <span className="absolute top-4 right-4 text-xs font-black tracking-widest text-fuchsia-500/10 group-hover:text-fuchsia-500/20 transition-colors font-display font-mono">
                        {stepNumber}
                      </span>
                      
                      <div className="flex flex-col gap-4 text-left">
                        {/* Premium Icon Badge */}
                        <div className="w-12 h-12 rounded-xl bg-[#0F0A1F] border border-white/5 flex items-center justify-center group-hover:border-brand-purple/20 group-hover:bg-[#140D2B] transition-all duration-300 shadow-md">
                          <FeatureIcon className="w-5 h-5 text-brand-purple group-hover:text-fuchsia-400 transition-colors" />
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                              {CAPABILITY_TAGS[idx]}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors">
                            {feature}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                            {FEATURE_DESCRIPTIONS[feature] || "Dedicated program designed to support pipeline targets and commercial goals."}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
