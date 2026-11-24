import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics Marketing Agency for B2B Companies",

  description:
  "Looking for a robotics marketing agency? all4Ps helps B2B robotics and industrial automation companies with positioning, GTM strategy, SEO and demand generation.",
  alternates: {
    canonical: "https://www.all4ps.co/industries/robotics-marketing-agency",
  },

  openGraph: {
    title: "Robotics Marketing Agency for B2B Growth | all4Ps",

    description:
      "all4Ps helps robotics and industrial automation companies grow through B2B marketing strategy, positioning, SEO, content marketing and demand generation.",

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
