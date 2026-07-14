"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "all4ps helped us clarify our positioning and build a strong demand engine. The results have been phenomenal.",
    author: "Rohit Mohan",
    role: "CEO, Unbox Robotics",
    avatar: "/images/Team_Members/siddik.webp",
  },
  {
    quote: "Their strategic approach and execution mindset make them a true growth partner, not just another agency.",
    author: "Anand Kumar",
    role: "Co-founder, Flexli",
    avatar: "/images/Team_Members/Kulasekhar.webp",
  },
  {
    quote: "From brand to pipeline, all4ps has been instrumental in our growth journey.",
    author: "Meera Nair",
    role: "Head of Marketing, Robosense",
    avatar: "/images/Team_Members/Supraja.webp",
  },
];

export default function ServicesTestimonials() {
  return (
    <section className="relative bg-transparent text-white py-20 border-t border-white/5 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-purple mb-3">
            WHAT OUR CLIENTS SAY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Partnerships That Create Impact
          </h2>
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0813]/60 p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-purple/20"
            >
              {/* Purple quotation icon */}
              <div className="text-brand-purple opacity-30 mb-6">
                <Quote className="w-8 h-8 rotate-180 fill-current" />
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-4 mt-auto">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-purple/40 bg-gray-900">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
