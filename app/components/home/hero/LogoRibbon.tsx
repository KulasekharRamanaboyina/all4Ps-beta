import Image from "next/image";

const logos = [
  "/logos/anscer-logo.jpg",
  "/logos/anzo-logo.png",
  "/logos/fixbugs-logo.svg",
  "/logos/flexli_logo.png",
  "/logos/kloudlite_io_logo.jpg",
  "/logos/livease_logo.jpg",
  "/logos/mothersongroup_logo.jpg",
  "/logos/panchayath-app-logo.jpg",
  "/logos/SynergyHomeCare_logo.jpg",
  "/logos/unbox-robotics_logo.webp",
  "/logos/XPStays_logo.jpg",
  "/logos/pinnacle-log.png",
];

export default function LogoRibbon() {
  return (
    <section className=" bg-white py-8 md:py-10 lg:py-12 border-y border-gray-200">
      <p className="text-center text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] md:tracking-[0.35em] text-gray-500 mb-6 md:mb-8">
        Trusted by Industry Leaders
      </p>

<div className="relative overflow-hidden">
  <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

  <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />

  <div className="overflow-hidden"> 
  <div className="flex w-max animate-marquee gap-2 sm:gap-4 md:gap-6 lg:gap-8">
  {[...logos, ...logos].map((logo, index) => (
             <div
    key={index}
    className="flex items-center justify-center min-w-[120px] sm:min-w-[150px] md:min-w-[180px]"
  >
    <Image
  src={logo}
  alt={`Logo ${index + 1}`}
  width={220}
  height={100}
  sizes="180px"
  className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain"
/>
  </div>
        ))}
      </div>
      </div>
      </div>
    </section>
  );
}