import { SERVICES } from "../../../constants";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
<section className="bg-[#0B0813] pt-8 pb-10 md:pt-10 md:pb-12 lg:pt-12 lg:pb-14">
<div className="max-w-[1440px] mx-auto px-6">

        {/* Label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-purple">
          GROWTH CAPABILITIES
        </p>

        {/* Heading */}
<h2 className="max-w-[680px] mb-8 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.08] text-white">
          Everything You Need to
          <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
            Scale Faster.
          </span>
        </h2>

        {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}