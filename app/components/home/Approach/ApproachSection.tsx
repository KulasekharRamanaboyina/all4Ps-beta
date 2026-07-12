import { APPROACH_STEPS } from "../../home/constants";
import ApproachStep from "./ApproachStep";

export default function ApproachSection() {
  return (
<section className=" bg-[#0B0813] pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-purple">
  OUR APPROACH
</p>

        {/* Heading */}
<h2 className="max-w-3xl mb-12 md:mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
          From Invisible to <br />
<span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
            Unstoppable.
          </span>
        </h2>

        {/* Steps */}
      <div className="relative mt-16">

  {/* Desktop Timeline */}
 {/* ================= Timeline ================= */}

<div className="relative mt-14 hidden lg:block">
  {/* Single Timeline Line */}
<div className="absolute z-0 top-[88px] left-[9%] right-[9%] h-[2px] bg-gradient-to-r from-brand-purple/20 via-brand-purple/80 to-brand-purple/20 animate-timeline">

  {/* Moving Light */}
  <div className="absolute -top-[3px] h-2 w-2 rounded-full bg-fuchsia-400 blur-[1px] animate-light" />

</div>
  {/* Steps */}
  <div className="relative z-10 flex justify-between">

    {APPROACH_STEPS.map((step) => (
      <ApproachStep
        key={step.number}
        {...step}
      />
    ))}

  </div>

</div>

{/* Tablet */}
<div className="hidden md:grid lg:hidden grid-cols-2 gap-16 mt-16 place-items-center">

  {APPROACH_STEPS.map((step) => (
    <ApproachStep
      key={step.number}
      {...step}
    />
  ))}

</div>

{/* Mobile */}
<div className="grid md:hidden gap-12 mt-12 place-items-center">

  {APPROACH_STEPS.map((step) => (
    <ApproachStep
      key={step.number}
      {...step}
    />
  ))}

</div>

</div>

      </div>

    </section>
  );
}