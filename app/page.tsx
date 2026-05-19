import Link from "next/link";
import Image from "next/image";

import { SERVICES, ICONS_MAP, CASE_STUDIES } from "./constants";
import FAQSection from "./components/FAQSection";

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

/* ================= SEO (NEXT.JS – SERVER) ================= */
export const metadata = {
  title: "all4Ps | B2B Growth & Marketing Strategy Agency",
  description:
    "We help SaaS, tech, and industrial companies drive pipeline and revenue through intentional B2B marketing, GTM strategy, and brand clarity.",
  alternates: {
    canonical: "https://www.all4ps.co/",
  },
  openGraph: {
    title: "all4Ps | B2B Growth & Marketing Strategy Agency",
    description:
      "We help SaaS, tech, and industrial companies drive pipeline and revenue through intentional B2B marketing, GTM strategy, and brand clarity.",
    url: "https://www.all4ps.co/",
    siteName: "all4Ps",
    images: [
      {
        url: "https://www.all4ps.co/images/og/home-page-v2.png",
        width: 1200,
        height: 630,
        alt: "all4Ps B2B Growth Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "all4Ps | B2B Growth & Marketing Strategy Agency",
    description:
      "Revenue-focused B2B marketing, SEO, and GTM strategy for SaaS & tech brands.",
    images: ["https://www.all4ps.co/images/og/home-page-v2.png"],
  },
};
const homeFaqs = [
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
export default function Page() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(128,0,128,0.4),transparent_70%)]" />
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-purple/20 text-brand-purple font-bold text-sm mb-6 border border-brand-purple/50">
            Precision-Built B2B Growth
          </span>

          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight">
            Marketing that Moves Pipelines
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-500">
              Not Just Metrics
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light">
            all4Ps transforms B2B businesses through actual strategy, real
            creativity, and numbers that don&apos;t lie.
            <span className="italic text-gray-500 text-base mt-2 block">
              Not another agency. A strategic partner.
            </span>
          </p>

          <Link
            href="/contact"
            className="inline-block bg-brand-purple hover:bg-purple-600 text-white px-8 py-4 text-lg font-bold shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] transition-all"
          >
            Let&apos;s Build Pipelines
          </Link>
        </div>

        {/* Chart (client component, hidden on mobile by CSS) */}
        <GrowthChart />
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-20 bg-gray-50">
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
              src="/images/home-page-delivery-robot-futuristic-environment.jpg"
              alt="B2B Growth Strategy"
              width={600}
              height={400}
              className="w-full h-70 object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* ================= OUR APPROACH ================= */}
      <section className="py-20 bg-black text-white">
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
      </section>

      {/* ================= SUCCESS STORIES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              {/* <h2 className="text-4xl font-display font-bold mb-2"> */}
              {/* Changed to text-gray-900 for maximum contrast */}
              <h2 className="text-4xl font-display font-bold mb-2 text-gray-900">
                Success Stories
              </h2>
              {/* <p className="text-gray-600"> */}
              {/* Changed text-gray-600 to text-gray-800 for better visibility */}
              <p className="text-gray-800">
                Together, we helped them scale impact, reputation, and customer
                trust.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="hidden md:block text-brand-purple font-bold hover:underline"
            >
              See More Wins
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.slice(0, 2).map((study) => (
              <div
                key={study.id}
                className="group bg-white shadow-xl overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                      {study.industry}
                    </span>
                    <span className="bg-brand-purple text-white px-2 py-1 text-xs font-bold">
                      {study.result}
                    </span>
                  </div>

                  {/* <h3 className="text-2xl font-bold mb-2">{study.title}</h3>

                  <p className="text-gray-600 mb-6">{study.client}</p> */}
                  {/* Added text-gray-900 here */}
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {study.title}
                  </h3>

                  {/* Changed text-gray-600 to text-gray-700 */}
                  <p className="text-gray-700 mb-6">{study.client}</p>

                  <Link
                    href={`/portfolio/${study.id}`}
                    className="text-brand-purple font-bold flex items-center"
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= FAQ ================= */}
      <FAQSection faqs={homeFaqs} />
      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-brand-purple text-center px-4">
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
      </section>

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
