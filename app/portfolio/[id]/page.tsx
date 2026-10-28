import type { Metadata } from "next";
import { CASE_STUDIES } from "../../constants";
import ClientPageUI from "../[id]/ClientPageUI";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const client = CASE_STUDIES.find((c) => c.id === id);

  if (!client) {
    return {
      title: "Case Study Not Found | all4Ps",
      description: "The requested all4Ps case study could not be found.",
    };
  }

  if (id === "motherson") {
    return {
      title: "Motherson ROBIS Case Study | all4Ps",
     description:
  "Explore the ROBIS Motherson case study by all4Ps, covering GTM strategy, brand architecture, product positioning and FY2026 business planning.",
      alternates: {
        canonical: `https://www.all4ps.co/portfolio/${id}`,
      },
      openGraph: {
        title: "Motherson ROBIS Case Study | all4Ps",
        description:
          "See the Motherson ROBIS case study from all4Ps, including the project context, confirmed marketing work and documented outcomes.",
        url: `https://www.all4ps.co/portfolio/${id}`,
        siteName: "all4Ps",
        type: "article",
        images: [
          {
            url: "https://www.all4ps.co/images/og/motherson-hero.jpg",
            width: 1200,
            height: 630,
            alt: "Motherson ROBIS Case Study | all4Ps",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Motherson ROBIS Case Study | all4Ps",
        description:
          "See the Motherson ROBIS case study from all4Ps, including the project context, confirmed marketing work and documented outcomes.",
        images: ["https://www.all4ps.co/images/og/motherson-hero.jpg"],
      },
    };
  }
  if (id === "kloudlite") {
    return {
      title: "Kloudlite Case Study | all4Ps B2B Marketing",
      description:
        "Explore all4Ps’ work with Kloudlite, including the project context, confirmed marketing deliverables and documented outcomes.",
      alternates: {
        canonical: `https://www.all4ps.co/portfolio/${id}`,
      },
      openGraph: {
        title: "Kloudlite Case Study | all4Ps B2B Marketing",
        description:
          "Explore all4Ps’ work with Kloudlite, including the project context, confirmed marketing deliverables and documented outcomes.",
        url: `https://www.all4ps.co/portfolio/${id}`,
        siteName: "all4Ps",
        type: "article",
        images: [
          {
            url: "https://www.all4ps.co/images/og/kloudlite-hero.jpg",
            width: 1200,
            height: 630,
            alt: "Kloudlite Labs Case Study | all4Ps",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Kloudlite Case Study | all4Ps B2B Marketing",
        description:
          "Explore all4Ps’ work with Kloudlite, including the project context, confirmed marketing deliverables and documented outcomes.",
        images: ["https://www.all4ps.co/images/og/kloudlite-hero.jpg"],
      },
    };
    
  }
if (id === "anscer") {
  const title = "ANSCER Robotics Marketing Case Study | all4Ps";
  const description =
    "Explore how all4Ps supported ANSCER Robotics with content marketing, SEO, PR, growth marketing and sales alignment to strengthen market visibility and support lead generation.";
  const image =
    "https://www.all4ps.co/images/portfolio/anscer-hero.webp";

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.all4ps.co/portfolio/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.all4ps.co/portfolio/${id}`,
      siteName: "all4Ps",
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "ANSCER Robotics Case Study | all4Ps",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
  return {
    title: `${client.client} Case Study | all4Ps`,
    description: client.description,
    alternates: {
      canonical: `https://www.all4ps.co/portfolio/${id}`,
    },
  };
}
export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const client = CASE_STUDIES.find((c) => c.id === id);

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold">Client Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <ClientPageUI client={client} />

      {/* ================= Case Study Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            name: `${client.client} Case Study`,
            url: `https://www.all4ps.co/portfolio/${id}`,
            description: client.description,
            about: {
              "@type": "Service",
              name: "B2B Marketing Services",
            },
            provider: {
              "@type": "Organization",
              name: "all4Ps",
              url: "https://www.all4ps.co",
              logo: "https://www.all4ps.co/images/logo-black.png",
            },
            audience: {
              "@type": "Audience",
              audienceType: "B2B companies",
            },
          }),
        }}
      />
    </>
  );
}
