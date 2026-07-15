import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FeaturedCaseStudy() {
  return (
<div className="
group
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-[0.9fr_1.1fr]
h-auto
md:h-[430px]
lg:h-[500px]
overflow-hidden
rounded-2xl
md:rounded-3xl
border
border-white/10
bg-[#0B0813]
transition-all
duration-500
hover:border-brand-purple/40
hover:shadow-[0_20px_60px_rgba(168,85,247,.15)]
">
    {/* Left Side */}
   
<div className="order-2 flex h-full flex-col justify-between p-5 sm:p-6 md:p-6 lg:p-7 md:order-1">
    <div>

 <div className="mb-4 md:mb-5 inline-flex items-center rounded-full border border-brand-purple/25 bg-gradient-to-r from-brand-purple/15 to-fuchsia-400/10 px-4 py-2 backdrop-blur-sm">
  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-purple">
    Featured Case Study
  </span>
</div>

    <h2 className="mb-3 md:mb-4 text-3xl
md:text-3xl lg:text-4xl leading-tight font-bold text-white">
      UNBOX ROBOTICS
    </h2>

<div className="mb-4 md:mb-5 space-y-2 md:space-y-2.5">

  <div className="flex items-center gap-3">
    <h3 className="w-20
md:w-24
text-xl
md:text-2xl lg:text-3xl font-extrabold text-brand-purple">
      +312%
    </h3>

<p className="flex-1 text-sm
md:text-base font-medium text-white">
      Organic Growth
    </p>
  </div>

  <div className="flex items-center gap-3">
<h3 className="w-20
md:w-24
text-xl
md:text-2xl lg:text-3xl font-extrabold text-brand-purple">
        +280%
    </h3>

<p className="flex-1 text-sm
md:text-base font-medium text-white">
      Qualified Leads
    </p>
  </div>

  <div className="flex items-center gap-3">
<h3 className="w-20
md:w-24
text-xl
md:text-2xl lg:text-3xl font-extrabold text-brand-purple">      ₹32Cr+
    </h3>

<p className="flex-1 text-sm
md:text-base font-medium text-white">
      Pipeline Influenced
    </p>
  </div>

</div>
    

    <p className="max-w-full
lg:max-w-[340px] text-xs md:text-sm leading-relaxed text-gray-400">
      From early-stage visibility challenges to category leadership in robotics automation.
    </p>

  </div>

<button
  className="
    mt-6 md:mt-0
    inline-flex
    w-full
    justify-center
    sm:w-fit items-center gap-4 py-2
    rounded-xl
    border border-brand-purple/40
    bg-transparent
    px-5 py-2.5
    text-sm font-semibold text-white
    transition-all duration-300
    hover:border-brand-purple
    hover:bg-brand-purple/10
  "
>
  View Case Study

  <span
    className="
      flex h-6 w-6 items-center justify-center
      rounded-full
      border border-white/20
      bg-white/10
      transition-all duration-300
      group-hover:bg-brand-purple
      group-hover:border-brand-purple
    "
  >
    <ArrowRight
      size={14}
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    />
  </span>
</button>

</div>

      {/* Right Side */}
<div className="order-1 relative h-[280px] overflow-hidden lg:order-2 md:h-full md:order-2">
      <Image
  src="/images/portfolio/unbox.webp"
  alt="Unbox Robotics"
  fill
className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"/>

  {/* Dark Gradient */}
<div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-[#07030E]
    via-[#07030E]/45
    via-40%
    to-transparent
    md:bg-gradient-to-r
  "
/>
</div>

    </div>
  );
}