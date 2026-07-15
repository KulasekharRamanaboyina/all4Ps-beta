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
    <section className="bg-[#05030A] pt-2 pb-4 md:pt-2.5 md:pb-5 lg:pt-3 lg:pb-6 border-y border-white/5">
      <p className="text-center text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] md:tracking-[0.35em] text-brand-purple mb-3 md:mb-4">
        Trusted by Industry Leaders
      </p>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#05030A] via-[#05030A]/80 to-transparent pointer-events-none" />

        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#05030A] via-[#05030A]/80 to-transparent pointer-events-none" />

        <div className="overflow-hidden"> 
          <div className="flex w-max animate-marquee gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] px-2"
              >
                <div className="flex items-center justify-center w-full h-12 sm:h-14 md:h-16 bg-white rounded-xl px-4 py-2 shadow-sm hover:scale-[1.05] transition-transform duration-300">
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={180}
                    height={80}
                    sizes="140px"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}