"use client";

import { useRouter } from "next/navigation";
import { CaseStudy } from "@/app/types";

interface CaseStudyMetricsProps {
  client: CaseStudy;
}

export default function CaseStudyMetrics({ client }: CaseStudyMetricsProps) {
  const router = useRouter();

  return (
    <section className="relative bg-[#05030A] py-20 border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Headers */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple mb-2">
            {client.category || client.industry} Outcome
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            {client.client}
          </h2>
        </div>

        {/* Metrics Grid */}
        {client.performanceMetrics && client.performanceMetrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {client.performanceMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0813]/60 p-8 md:p-10 transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(128,0,128,0.1)]"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(128,0,128,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Metric Value (Gradient text) */}
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent leading-none">
                  {metric.value}
                </div>

                {/* Metric Label */}
                <div className="text-gray-400 text-sm md:text-base font-semibold mt-4 line-clamp-2 leading-relaxed">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Systemic Result (Outcome Text) */}
        {client.systemicResult && (
          <div className="max-w-3xl mx-auto text-center mb-16 px-4">
            <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-brand-purple mb-3">
              Strategic Outcome
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed italic">
              &ldquo;{client.systemicResult}&rdquo;
            </p>
          </div>
        )}

        {/* Help-You Purple Gradient Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-purple via-purple-700 to-fuchsia-600 p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(128,0,128,0.15)] border border-brand-purple/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight text-center md:text-left leading-tight">
            How Can We Help You?
          </h3>

          <button
            onClick={() => router.push("/contact")}
            className="w-full sm:w-auto px-8 py-4 bg-black text-white hover:bg-neutral-900 transition-all duration-300 transform hover:scale-[1.03] rounded-full font-bold text-sm tracking-wider uppercase shadow-lg select-none"
          >
            Scale Your Success
          </button>
        </div>
      </div>
    </section>
  );
}
