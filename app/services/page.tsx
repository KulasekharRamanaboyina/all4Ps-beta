import type { Metadata } from "next";
import FAQSection from "@/app/components/FAQSection";
import ServicesHero from "@/app/components/services/ServicesHero";
import ServicesFramework from "@/app/components/services/ServicesFramework";
import ServicesList from "@/app/components/services/ServicesList";
import ServicesCaseStudies from "@/app/components/services/ServicesCaseStudies";
import ServicesTestimonials from "@/app/components/services/ServicesTestimonials";
import CtaSection from "@/app/components/cta/CtaSection";

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
  title: "Services | all4Ps",
  description:
    "Explore all B2B growth, marketing, and GTM services by all4Ps. Strategy-led execution designed to drive real pipeline and revenue outcomes.",
  alternates: {
    canonical: "https://www.all4ps.co/services",
  },
  openGraph: {
    title: "Services | all4Ps",
    description:
      "Explore all B2B growth, marketing, and GTM services by all4Ps. Strategy-led execution designed to drive real pipeline and revenue outcomes.",
    url: "https://www.all4ps.co/services",
    siteName: "all4Ps",
    type: "website",
    images: [
      {
        url: "https://www.all4ps.co/images/og/marketing-strategy.jpg",
        width: 1200,
        height: 630,
        alt: "all4Ps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | all4Ps",
    description:
      "B2B growth, marketing, and GTM services by all4Ps — built for clarity, scale, and revenue.",
    images: ["https://www.all4ps.co/images/og/marketing-strategy.jpg"],
  },
};

const servicesFaqs = [
  {
    q: "What services does all4Ps offer?",
    a: "We offer brand identity, marketing strategy, growth marketing, content marketing, SEO & SEM, and website services.",
  },
  {
    q: "Can I choose individual services or do I need a full package?",
    a: "You can choose individual services or combine them based on your needs.",
  },
  {
    q: "Which service is right for my business?",
    a: "It depends on your goals and growth stage. We help you decide during the discovery process.",
  },
  {
    q: "Do you provide both strategy and execution?",
    a: "Yes, we offer end-to-end support from strategy and planning to execution and optimization.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients start seeing measurable improvements within 8–12 weeks.",
  },
  {
    q: "How do we get started?",
    a: "You can book a strategy call with us, and we’ll guide you through the next steps.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      {/* Modular sections composited according to services.png mockup */}
      <ServicesHero />
      <ServicesList />
      <ServicesFramework />
      <ServicesCaseStudies />
      <ServicesTestimonials />

      {/* FAQ Section */}
      {/* <FAQSection faqs={servicesFaqs} /> */}

      {/* CTA Section */}
      <CtaSection />

      {/* ================= BREADCRUMB SCHEMA ================= */}
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
            ],
          }),
        }}
      />
    </main>
  );
}
