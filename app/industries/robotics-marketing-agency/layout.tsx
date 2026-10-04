import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics Marketing Agency & Demand Generation Partner | all4Ps",

  description:
    "all4Ps helps robotics and automation companies build authority, generate qualified B2B demand, strengthen positioning, and accelerate growth through strategy-led marketing.",

  alternates: {
    canonical: "https://www.all4ps.co/industries/robotics-marketing-agency",
  },

  openGraph: {
    title: "Robotics Marketing Agency & Demand Generation Partner | all4Ps",

    description:
      "Demand generation, ABM, content, SEO, GTM and marketing automation for robotics and automation companies.",

    url: "https://www.all4ps.co/industries/robotics-marketing-agency",

    siteName: "all4Ps",

    type: "website",
  },
};

export default function RoboticsMarketingAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
