import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ICONS_MAP } from "../../../constants";
import { Service } from "../../../types";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICONS_MAP[service.iconName];

  return (
    // <Link
    //   href={`/services/${service.id}`}
    //   className="group"
    // >
    <div className="group">
      <div className=" relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0813] p-8 h-[260px] md:h-[250px] lg:h-[260px] lg:hover:h-[510px] transition-all duration-700 ease-out hover:shadow-[0_20px_60px_rgba(168,85,247,.15)] hover:-translate-y-2">

        {/* Top Gradient */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-purple via-fuchsia-400 to-brand-purple" />

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-fuchsia-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
<div
  className="
    absolute
    -left-32
    top-0
    h-full
    w-20
    rotate-12
    bg-gradient-to-r
    from-transparent
    via-white/10
    to-transparent
    opacity-0
    transition-all
    duration-1000
    group-hover:left-[120%]
    group-hover:opacity-100
    pointer-events-none
  "
/>
        {/* Icon */}
        <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br
from-brand-purple/15
to-fuchsia-400/5 border border-brand-purple/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">

          <Icon
            size={30}
            className="text-brand-purple"
          />

        </div>

        {/* Title */}
        <h3 className="mb-2 text-2xl font-bold text-white">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mb-5 text-gray-400 leading-6">
          {service.shortDescription}
        </p>

        {/* Divider */}
        {/* <div className="mb-4 h-px bg-white/10" /> */}
       
{/* Hidden Content */}
<div
 className="
max-h-0
overflow-hidden
opacity-0
translate-y-4
transition-all
duration-700
ease-out
group-hover:max-h-96
group-hover:opacity-100
group-hover:translate-y-0"
>
  {/* Section Title */}
  <p className="mb-4 text-xs uppercase tracking-[0.2em] text-brand-purple font-semibold">
    WHAT WE DO
  </p>

  {/* Features */}
  <ul className="space-y-3 mb-6">

    {service.features.slice(0, 3).map((feature) => (

      <li
        key={feature}
        className="flex items-start gap-3 text-sm text-gray-300"
      >
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-purple" />
        <span>{feature}</span>
      </li>

    ))}

  </ul>

  {/* Explore Button */}
  {/* <button
    className="
inline-flex w-fit      
items-center
      gap-2
      rounded-xl
      border
      border-brand-purple/40
      bg-brand-purple/10
      px-5
      py-3
      text-sm
      font-semibold
      text-white
      transition-all
      duration-300
      hover:bg-brand-purple
    "
  >
    Explore Service
    <ArrowRight
  size={18}
  className="transition-transform duration-300 group-hover:translate-x-1"/>
  </button> */}
  <Link
  href={`/services/${service.id}`}
  className="
    inline-flex
    w-fit
    items-center
    gap-2
    rounded-xl
    border
    border-brand-purple/40
    bg-brand-purple/10
    px-5
    py-3
    text-sm
    font-semibold
    text-white
  "
>
  Explore Service
  <ArrowRight size={18} />
</Link>

</div>
       
      </div>
    </div>
  );
}