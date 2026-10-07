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
      title: "ROBIS Motherson GTM & Marketing Strategy | all4Ps",
      description:
        "See how all4Ps helped ROBIS Motherson build a market-ready GTM and marketing foundation for global robotics and automation growth.",
      alternates: {
        canonical: `https://www.all4ps.co/portfolio/${id}`,
      },
      openGraph: {
        title: "ROBIS Motherson GTM & Marketing Strategy | all4Ps",
        description:
          "See how all4Ps helped ROBIS Motherson build a market-ready GTM and marketing foundation for global robotics and automation growth.",
        url: `https://www.all4ps.co/portfolio/${id}`,
        siteName: "all4Ps",
        type: "article",
        images: [
          {
            url: "https://www.all4ps.co/images/og/motherson-hero.jpg",
            width: 1200,
            height: 630,
            alt: "ROBIS Motherson Case Study | all4Ps",
          },
        ],
      },
    };
  }
  if (id === "kloudlite") {
    return {
      title:
        "Kloudlite Labs Case Study | B2B Marketing & Lead Generation | all4Ps",
      description:
        "See how all4Ps helped Kloudlite Labs build a developer-first brand, improve search visibility, and convert high-value B2B leads.",
      alternates: {
        canonical: `https://www.all4ps.co/portfolio/${id}`,
      },
      openGraph: {
        title:
          "Kloudlite Labs Case Study | B2B Marketing & Lead Generation | all4Ps",
        description:
          "See how all4Ps helped Kloudlite Labs build a developer-first brand, improve search visibility, and convert high-value B2B leads.",
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
