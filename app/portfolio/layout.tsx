import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "B2B Marketing Case Studies & Portfolio | all4Ps",
  },

  description:
    "Explore all4Ps B2B marketing case studies and see how strategy, branding, SEO, content, and growth campaigns deliver measurable business results.",

  alternates: {
    canonical: "https://www.all4ps.co/portfolio",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "B2B Marketing Case Studies & Portfolio | all4Ps",
    description:
      "Explore all4Ps B2B marketing case studies and see how strategy, branding, SEO, content, and growth campaigns deliver measurable business results.",
    url: "https://www.all4ps.co/portfolio",
    siteName: "all4Ps",
    type: "website",
    images: [
      {
        url: "https://www.all4ps.co/images/og/portfolio-og.jpg",
        width: 1200,
        height: 630,
        alt: "B2B Marketing Case Studies & Portfolio | all4Ps",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "B2B Marketing Case Studies & Portfolio | all4Ps",
    description:
      "Explore all4Ps B2B marketing case studies and see how strategy, branding, SEO, content, and growth campaigns deliver measurable business results.",
    images: ["https://www.all4ps.co/images/og/portfolio-og.jpg"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
