import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About all4Ps | B2B Growth Marketing Partner",

  description:
    "Discover the story, team, values, and growth-focused approach behind all4Ps, helping SaaS, AI, robotics, and industrial businesses build authority, generate demand, and drive growth.",

  alternates: {
    canonical: "https://all4ps.co/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About all4Ps | B2B Growth Marketing Partner",

    description:
      "Discover the story, team, values, and approach behind all4Ps and how we help B2B technology companies build authority, generate demand, and drive growth.",

    url: "https://all4ps.co/about",

    siteName: "all4Ps",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About all4Ps | B2B Growth Marketing Partner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About all4Ps | B2B Growth Marketing Partner",

    description:
      "Discover the story, team, values, and growth-focused approach behind all4Ps.",

    images: ["/og-image.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
