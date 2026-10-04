"use client";

import { useEffect, useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

type RoboticsFAQProps = {
  faqs: FAQItem[];
};

export default function RoboticsFAQ({ faqs }: RoboticsFAQProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("robotics-faq");

      if (!section || faqs.length === 0) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * Start changing the FAQ when the section
       * reaches the middle portion of the viewport.
       */
      const startPoint = viewportHeight * 0.35;

      const scrollDistance = Math.max(section.offsetHeight - viewportHeight, 1);

      const progress = (startPoint - rect.top) / scrollDistance;

      const clampedProgress = Math.max(0, Math.min(1, progress));

      const index = Math.min(
        faqs.length - 1,
        Math.floor(clampedProgress * faqs.length),
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [faqs.length]);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const activeFaq = faqs[activeIndex];

  return (
    <section
      id="robotics-faq"
      className="
        relative
        overflow-hidden
        bg-[#050308]
        px-6
        py-20
        lg:px-12
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[45%]
            top-[35%]
            h-[420px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-[#800080]/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            right-[-120px]
            top-[10%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#800080]/5
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            left-[-100px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#800080]/5
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          SUBTLE BACKGROUND TEXT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        <span
          className="
            select-none
            text-[180px]
            font-bold
            tracking-[-0.08em]
            text-white/[0.015]
            md:text-[280px]
          "
        >
          FAQ
        </span>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="max-w-xl">
            {/* Eyebrow */}

            <p
              className="
                mb-6
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#800080]
                sm:text-sm
              "
            >
              FREQUENTLY ASKED QUESTIONS
            </p>

            {/* Heading */}

            <h2
              className="
                text-4xl
                font-bold
                leading-[1.05]
                tracking-[-0.035em]
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Answers to
              <br />
              <span className="text-white">Your Questions.</span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-md
                text-sm
                leading-7
                text-gray-400
                sm:text-base
              "
            >
              Scroll down to explore answers about robotics marketing, demand
              generation, ABM, and B2B growth.
            </p>

            {/* FAQ Counter */}

            <div className="mt-8 flex items-center gap-4">
              <span
                className="
                  text-xs
                  font-semibold
                  tracking-[0.2em]
                  text-[#800080]
                "
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="h-px w-16 bg-white/10">
                <div
                  className="
                    h-[2px]
                    bg-[#800080]
                    transition-all
                    duration-500
                  "
                  style={{
                    width: `${((activeIndex + 1) / faqs.length) * 100}%`,
                  }}
                />
              </div>

              <span
                className="
                  text-xs
                  tracking-[0.2em]
                  text-gray-600
                "
              >
                {String(faqs.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT FAQ CARD
          ================================================= */}

          <div className="relative">
            <div
              key={activeIndex}
              className="
                relative
                min-h-[390px]
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                px-7
                py-8
                backdrop-blur-xl
                transition-all
                duration-500
                sm:px-8
                sm:py-9
                md:px-10
                md:py-10
              "
            >
              {/* Card Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-90px]
                  top-[-90px]
                  h-64
                  w-64
                  rounded-full
                  bg-[#800080]/10
                  blur-[100px]
                "
              />

              {/* Card Content */}

              <div className="relative flex min-h-[320px] flex-col">
                {/* Top Row */}

                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#800080]
                    "
                  >
                    FAQ {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-xs
                      tracking-wider
                      text-gray-600
                    "
                  >
                    {String(faqs.length).padStart(2, "0")} QUESTIONS
                  </span>
                </div>

                {/* Divider */}

                <div className="mt-6 h-px bg-white/5" />

                {/* Question */}

                <div className="mt-10">
                  <h3
                    className="
                      max-w-2xl
                      text-xl
                      font-semibold
                      leading-[1.35]
                      text-white
                      sm:text-2xl
                      md:text-[26px]
                    "
                  >
                    {activeFaq.q}
                  </h3>

                  {/* Answer */}

                  <p
                    className="
                      mt-6
                      max-w-2xl
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                    "
                  >
                    {activeFaq.a}
                  </p>
                </div>

                {/* Bottom */}

                <div className="mt-auto pt-10">
                  {/* Progress Line */}

                  <div className="relative h-px w-full bg-white/10">
                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        h-[2px]
                        bg-[#800080]
                        transition-all
                        duration-500
                      "
                      style={{
                        width: `${((activeIndex + 1) / faqs.length) * 100}%`,
                      }}
                    />
                  </div>

                  {/* Bottom Labels */}

                  <div className="mt-4 flex items-center justify-between">
                    <span
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.18em]
                        text-gray-600
                      "
                    >
                      Robotics & Automation
                    </span>

                    <span
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.18em]
                        text-gray-600
                      "
                    >
                      Scroll to continue
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
