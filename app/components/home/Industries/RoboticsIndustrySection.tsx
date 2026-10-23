
import Link from "next/link";
import { ArrowRight, Bot, Target, TrendingUp } from "lucide-react";

export default function RoboticsIndustrySection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-12 md:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-purple/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-fuchsia-900/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6">
        <div className="overflow-hidden rounded-2xl border border-brand-purple/30 bg-gradient-to-r from-[#100817] via-[#0b0711] to-[#17091f]">
          <div className="grid items-center gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:p-14">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brand-purple">
                INDUSTRIES WE HELP GROW
              </p>

              <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Marketing Built for{" "}
                <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
                  Robotics &amp; Automation.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                From positioning and brand strategy to SEO, content and demand
                generation, we help robotics and automation companies drive B2B
                growth.
              </p>

              <Link
                href="/industries/robotics-marketing-agency"
                className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-purple px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-fuchsia-600"
              >
                Explore Robotics Marketing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="rounded-lg bg-brand-purple/15 p-3 text-fuchsia-400">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Complex Technology
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Communicate technical value clearly.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="rounded-lg bg-brand-purple/15 p-3 text-fuchsia-400">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Targeted Positioning
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Reach relevant B2B decision-makers.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="rounded-lg bg-brand-purple/15 p-3 text-fuchsia-400">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Demand Generation
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Support measurable B2B growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
