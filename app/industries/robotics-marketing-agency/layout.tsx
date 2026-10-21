import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics Marketing Agency for B2B Robotics Companies | all4Ps",

  description:
    "all4Ps helps robotics and automation companies clarify positioning, explain technical value, improve search visibility and support B2B demand generation.",

  alternates: {
    canonical: "https://www.all4ps.co/industries/robotics-marketing-agency",
  },

  openGraph: {
    title: "Robotics Marketing Agency for B2B Robotics Companies | all4Ps",

    description:
      "Positioning, content marketing, SEO, ABM and demand generation for robotics and automation companies.",

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
