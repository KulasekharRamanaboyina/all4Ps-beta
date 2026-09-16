import type { Metadata } from "next";
import FAQSection from "@/app/components/FAQSection";
import CtaSection from "@/app/components/cta/CtaSection";
import { roboticsFaqs } from "@/lib/faqs";

/* =========================================================
   SEO METADATA
========================================================= */

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

/* =========================================================
   PAGE
========================================================= */

export default function RoboticsMarketingAgencyPage() {
  return (
    <main className="min-h-screen bg-[#050308] text-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden px-6 py-28">
        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[450px]
              w-[650px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#800080]/10
              blur-[130px]
            "
          />
        </div>

        {/* Background Gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_45%,rgba(128,0,128,0.12),transparent_58%)]
          "
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Eyebrow */}

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#800080] sm:text-sm">
            ROBOTICS. AUTOMATION. GROWTH.
          </p>

          {/* Main Heading */}

          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Demand Generation
            <br />
            <span className="bg-gradient-to-r from-[#800080] via-[#c026d3] to-[#f472b6] bg-clip-text text-transparent">
              for Robotics &amp; Automation Companies.
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
            We help robotics and automation companies build authority, generate
            qualified demand, and accelerate B2B growth.
          </p>

          {/* CTA */}

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-[#800080]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#800080]/90
              "
            >
              Book a Strategy Call →
            </a>

            <a
              href="/portfolio"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-white/20
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-[#800080]
                hover:text-[#800080]
              "
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — THE CHALLENGE
      ===================================================== */}

      <section className="relative px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#800080]">
                THE CHALLENGE
              </p>

              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Robotics is complex.
                <br />
                <span className="text-[#800080]">
                  Your marketing shouldn’t be.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-gray-400 md:text-lg">
              <p>
                Robotics and automation companies often sell highly technical
                products into complex B2B buying environments.
              </p>

              <p>
                Multiple stakeholders, long sales cycles, technical
                decision-making and crowded markets make generic marketing
                approaches less effective.
              </p>

              <p>
                The opportunity is to translate technical value into clear
                positioning, relevant messaging and qualified demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — WHERE WE HELP
      ===================================================== */}

      <section className="border-y border-white/5 bg-white/[0.015] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#800080]">
              WHERE WE HELP
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Turn complex robotics products
              <br />
              into <span className="text-[#800080]">clear market value.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Complex Products",
                text: "Translate technical capabilities into messaging that business decision-makers can understand.",
              },

              {
                title: "Long Buying Cycles",
                text: "Build content and campaigns that keep your brand relevant throughout the buying journey.",
              },

              {
                title: "Multiple Stakeholders",
                text: "Create messaging that speaks to business, technical and operational decision-makers.",
              },

              {
                title: "Limited Market Visibility",
                text: "Build authority through content, SEO, thought leadership and industry-focused campaigns.",
              },

              {
                title: "Unclear Positioning",
                text: "Clarify what makes your robotics solution different and why buyers should care.",
              },

              {
                title: "Pipeline Pressure",
                text: "Connect marketing activity with qualified demand, opportunities and measurable growth.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-7
                  transition-all
                  duration-300
                  hover:border-[#800080]/40
                  hover:bg-[#800080]/5
                "
              >
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>

                <p className="text-sm leading-6 text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — WHAT WE DO
      ===================================================== */}

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#800080]">
              WHAT WE DO
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Marketing built around
              <br />
              <span className="text-[#800080]">robotics growth.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              From positioning and GTM strategy to demand generation and
              measurement, we connect the pieces required to build a stronger
              B2B growth engine.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Brand Positioning",
              "GTM Strategy",
              "Demand Generation",
              "Account-Based Marketing",
              "Content Marketing",
              "SEO & Search Visibility",
              "Website Optimisation",
              "Marketing Automation",
            ].map((service) => (
              <div
                key={service}
                className="
                  group
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#800080]/50
                  hover:bg-[#800080]/5
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#800080]/10
                    text-[#800080]
                  "
                >
                  →
                </div>

                <h3 className="text-base font-semibold group-hover:text-[#800080]">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — ROBOTICS EXPERIENCE
      ===================================================== */}

      <section className="border-y border-white/5 bg-white/[0.015] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#800080]">
              ROBOTICS EXPERIENCE
            </p>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Experience that goes
                <br />
                beyond the
                <span className="text-[#800080]"> strategy deck.</span>
              </h2>

              <p className="max-w-xl text-gray-400">
                We have worked with robotics and technology-led businesses,
                helping translate complex products and capabilities into
                stronger marketing communication and growth initiatives.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                name: "Unbox Robotics",
                category: "Robotics & Warehouse Automation",
                text: "Marketing and digital initiatives for a robotics company operating in warehouse automation.",
              },

              {
                number: "02",
                name: "ANSCER Robotics",
                category: "Robotics & Automation",
                text: "Marketing support for a robotics technology company focused on industrial applications.",
              },

              {
                number: "03",
                name: "ROBIS Motherson",
                category: "Industrial Robotics",
                text: "Marketing and communication work for robotics and industrial automation initiatives.",
              },
            ].map((client) => (
              <div
                key={client.name}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#09060d]
                  p-7
                  transition-all
                  duration-300
                  hover:border-[#800080]/40
                "
              >
                {/* Subtle background glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    h-32
                    w-32
                    rounded-full
                    bg-[#800080]/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#800080]/20
                  "
                />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-xs font-bold tracking-wider text-[#800080]">
                      {client.number}
                    </p>

                    <span className="text-xs text-gray-600">ROBOTICS</span>
                  </div>

                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#800080]">
                    {client.category}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">{client.name}</h3>

                  <p className="text-sm leading-6 text-gray-400">
                    {client.text}
                  </p>

                  <a
                    href="/portfolio"
                    className="
                      mt-6
                      inline-block
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:text-[#800080]
                    "
                  >
                    View Work →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-5 text-gray-500">
            Client work, logos, results and testimonials should be published
            only where approved by the respective client.
          </p>
        </div>
      </section>

      {/* =====================================================
          SECTION 6 — OUR APPROACH
      ===================================================== */}

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#800080]">
              OUR APPROACH
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              From market understanding
              <br />
              to <span className="text-[#800080]">measurable growth.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Research",
                text: "Understand your market, customers, competitors and buying journey.",
              },

              {
                number: "02",
                title: "Position",
                text: "Clarify your value proposition, differentiation and market messaging.",
              },

              {
                number: "03",
                title: "Activate",
                text: "Build and execute campaigns across content, ABM, SEO, paid and digital channels.",
              },

              {
                number: "04",
                title: "Measure",
                text: "Track engagement, demand, pipeline and performance to continuously improve.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-7
                  transition-all
                  duration-300
                  hover:border-[#800080]/40
                  hover:bg-[#800080]/5
                "
              >
                <span className="text-sm font-bold text-[#800080]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={roboticsFaqs} />

      {/* =====================================================
          SECTION 8 — CTA
      ===================================================== */}

      <section className="relative px-6 pb-24 pt-10 lg:px-12">
        <div
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-3xl
            border
            border-[#800080]/20
            bg-[#800080]/5
            px-7
            py-16
            text-center
            md:px-12
          "
        >
          {/* CTA Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-80
              w-80
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#800080]/15
              blur-[120px]
            "
          />

          <div className="relative">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#800080]">
              READY TO GROW?
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-5xl">
              Build a stronger growth engine
              <br />
              for your robotics business.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Let’s explore your market, positioning and growth opportunities
              and identify where marketing can create the biggest impact.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="
                  rounded-lg
                  bg-[#800080]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#800080]/20
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-[#800080]/90
                "
              >
                Book a Strategy Call →
              </a>

              <a
                href="/portfolio"
                className="
                  rounded-lg
                  border
                  border-white/20
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#800080]
                  hover:text-[#800080]
                "
              >
                Explore Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STRUCTURED DATA — BREADCRUMB
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",

            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.all4ps.co/",
              },

              {
                "@type": "ListItem",
                position: 2,
                name: "Industries",
                item: "https://www.all4ps.co/industries",
              },

              {
                "@type": "ListItem",
                position: 3,
                name: "Robotics Marketing Agency",
                item: "https://www.all4ps.co/industries/robotics-marketing-agency",
              },
            ],
          }),
        }}
      />

      {/* =====================================================
          STRUCTURED DATA — SERVICE
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",

            name: "Robotics Marketing & Demand Generation",

            provider: {
              "@type": "Organization",
              name: "all4Ps",
              url: "https://www.all4ps.co/",
            },

            serviceType: "B2B Robotics Marketing and Demand Generation",

            areaServed: "Worldwide",

            description:
              "B2B growth, demand generation, ABM, content, SEO, GTM and marketing automation services for robotics and automation companies.",
          }),
        }}
      />

      {/* =====================================================
          STRUCTURED DATA — FAQ
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",

            mainEntity: roboticsFaqs.map((faq) => ({
              "@type": "Question",

              name: faq.q,

              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
