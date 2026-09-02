import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "B2B Marketing Insights & Strategies | all4Ps",
  },

  description:
    "Explore practical B2B marketing insights, strategies, and ideas on demand generation, brand strategy, SEO, content marketing, sales enablement, and growth for technology and industrial businesses.",

  alternates: {
    canonical: "https://all4ps.co/blog",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "B2B Marketing Insights & Strategies | all4Ps",
    description:
      "Explore practical B2B marketing insights, strategies, and ideas on demand generation, brand strategy, SEO, content marketing, and growth for technology and industrial businesses.",
    url: "https://all4ps.co/blog",
    siteName: "all4Ps",
    type: "website",
    images: [
      {
        url: "https://www.all4ps.co/og-image.png",
        alt: "B2B Marketing Insights & Strategies | all4Ps",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "B2B Marketing Insights & Strategies | all4Ps",
    description:
      "Explore practical B2B marketing insights, strategies, and ideas for technology and industrial businesses.",
    images: ["https://www.all4ps.co/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
