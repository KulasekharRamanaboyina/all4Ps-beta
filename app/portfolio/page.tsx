import type { Metadata } from "next";

import PortfolioHero from "@/app/components/portfolio/PortfolioHero";
import PortfolioStatsRibbon from "@/app/components/portfolio/PortfolioStatsRibbon";
import PortfolioFeatured from "@/app/components/portfolio/PortfolioFeatured";
import PortfolioGrid from "@/app/components/portfolio/PortfolioGrid";
import ServicesTestimonials from "@/app/components/services/ServicesTestimonials";
import PortfolioDeliveringImpact from "@/app/components/portfolio/PortfolioDeliveringImpact";
import CtaSection from "@/app/components/cta/CtaSection";

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
  title: "Portfolio | all4Ps",
  description:
    "Explore how all4Ps has helped B2B SaaS, tech, and industrial robotics companies build go-to-market strategies, demand systems, and scale organic channels.",
  alternates: {
    canonical: "https://www.all4ps.co/portfolio",
  },
  openGraph: {
    title: "Portfolio | all4Ps",
    description:
      "Explore how all4Ps has helped B2B SaaS, tech, and industrial robotics companies build go-to-market strategies, demand systems, and scale organic channels.",
    url: "https://www.all4ps.co/portfolio",
    siteName: "all4Ps",
    type: "website",
    images: [
      {
        url: "https://www.all4ps.co/images/og/portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "all4Ps Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | all4Ps",
    description:
      "A collection of B2B growth and marketing case studies by all4Ps showcasing real-world outcomes.",
    images: ["https://www.all4ps.co/images/og/portfolio.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 1. Hero Landing Section */}
      <PortfolioHero />

      {/* 2. Horizontal Metrics ribbon bar */}
      <PortfolioStatsRibbon />

      {/* 3. Featured Case Study visual player card block */}
      <PortfolioFeatured />

      {/* 4. Filterable Grid list of remaining case studies */}
      <PortfolioGrid />

      {/* 5. Client Testimonials Marquee Carousel grid */}
      <ServicesTestimonials />

      {/* 6. Delivering Impact 4-column summary section */}
      <PortfolioDeliveringImpact />

      {/* 7. Starry Footer Success banner CTA */}
      <CtaSection title="Ready to Create Your Success Story?" subtitle="Let's build a strategy that drives real growth." />

      {/* ================= Portfolio Collection Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "all4Ps Case Studies",
            url: "https://www.all4ps.co/portfolio",
            description:
              "A collection of B2B growth and marketing case studies by all4Ps showcasing real-world outcomes across SaaS, tech, and industrial companies.",
            publisher: {
              "@type": "Organization",
              name: "all4Ps",
              url: "https://www.all4ps.co",
              logo: "https://www.all4ps.co/images/logo-black.png",
            },
          }),
        }}
      />
    </main>
  );
}
