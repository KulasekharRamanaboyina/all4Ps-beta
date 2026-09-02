import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact all4Ps | B2B Growth Marketing Partner",
  },

  description:
    "Have a B2B growth challenge? Connect with all4Ps to discuss your marketing goals, build a strategic growth plan, and explore how we can accelerate your business.",

  alternates: {
    canonical: "https://www.all4ps.co/contact",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact all4Ps | B2B Growth Marketing Partner",
    description:
      "Have a B2B growth challenge? Connect with all4Ps to discuss your marketing goals, build a strategic growth plan, and explore how we can accelerate your business.",
    url: "https://www.all4ps.co/contact",
    siteName: "all4Ps",
    type: "website",
    images: [
      {
        url: "https://www.all4ps.co/images/og/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact all4Ps | B2B Growth Marketing Partner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact all4Ps | B2B Growth Marketing Partner",
    description:
      "Have a B2B growth challenge? Connect with all4Ps to discuss your marketing goals, build a strategic growth plan, and explore how we can accelerate your business.",
    images: ["https://www.all4ps.co/images/og/contact-og.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
