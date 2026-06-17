import Image from "next/image";
import HeroStatCard from "./HeroStatCard";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-[420px] md:h-[620px] lg:h-[720px] overflow-hidden lg:overflow-visible">

      {/* ================= Hero Canvas ================= */}
      <div className="relative w-[340px] md:w-[520px] lg:w-[620px] h-[280px] md:h-[520px] lg:h-[620px] mx-auto">

        {/* ================= Background Effects ================= */}

        {/* Outer Ring */}
        <div
          aria-hidden="true"
          className="absolute inset-0 m-auto
          w-[300px] md:w-[420px] lg:w-[500px]
          h-[300px] md:h-[420px] lg:h-[500px]
          rounded-full border border-white/5 pointer-events-none"
        />

        {/* Soft White Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 m-auto
          w-[180px] md:w-[220px] lg:w-[260px]
          h-[180px] md:h-[220px] lg:h-[260px]
          rounded-full
          bg-white/5
          blur-[40px] md:blur-[50px] lg:blur-[60px]
          pointer-events-none
          "
        />

        {/* ================= Desktop Floating KPI Cards ================= */}

        <div className="absolute top-0 right-0 md:top-4 md:right-6 lg:top-4 lg:right-12 z-20 will-change-transform transform-gpu animate-orbit-top">
          <HeroStatCard
            title="Pipeline Influenced"
            value="₹32Cr+"
          />
        </div>

        <div className="absolute left-0 md:left-3 lg:left-8 top-[34%] md:top-[38%] lg:top-[40%] -translate-y-1/2 z-20 will-change-transform transform-gpu animate-orbit-left">
          <HeroStatCard
            title="Organic Growth"
            value="+312%"
          />
        </div>

        <div className="absolute bottom-0 md:bottom-10 lg:bottom-24 left-[30%] -translate-x-1/2 z-20 will-change-transform transform-gpu animate-orbit-bottom">
          <HeroStatCard
            title="Marketing ROI"
            value="4.6x"
          />
        </div>

        <div className="absolute right-0 md:right-3 lg:right-6 top-[52%] md:top-[56%] lg:top-[58%] z-20 will-change-transform transform-gpu animate-orbit-right">
          <HeroStatCard
            title="Qualified Leads"
            value="+280%"
          />
        </div>

        {/* ================= Robot ================= */}

        <div className="absolute inset-0 flex items-center justify-center translate-y-2 md:-translate-y-4 lg:-translate-y-10">

          <div className="relative w-[220px] md:w-[340px] lg:w-[430px] h-[220px] md:h-[340px] lg:h-[430px] flex items-center justify-center will-change-transform transform-gpu">

            {/* Purple Ambient Glow */}
            <div
              aria-hidden="true"
              className="absolute
              w-[260px] md:w-[340px] lg:w-[420px]
              h-[260px] md:h-[340px] lg:h-[420px]
              rounded-full
              bg-brand-purple/20
              blur-[50px] md:blur-[65px] lg:blur-[80px]
              pointer-events-none"
            />

            {/* Gradient Glow */}
            <div
              aria-hidden="true"
              className="absolute
              w-[260px] md:w-[340px] lg:w-[420px]
              h-[260px] md:h-[340px] lg:h-[420px]
              rounded-full
              bg-gradient-to-br
              from-fuchsia-500/25
              via-brand-purple/20
              to-transparent
              blur-[60px] md:blur-[75px] lg:blur-[90px]
              pointer-events-none"
            />

            {/* Fingertip Glow */}
            <div
              aria-hidden="true"
              className="absolute top-[14%] right-[26%] w-16 h-16 rounded-full bg-fuchsia-400/40 blur-3xl pointer-events-none"
            />
{/* ================= AI Stars ================= */}

<div className="absolute top-[8%] left-[18%] w-[3px] h-[3px] rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.9)] animate-star-1" />

<div className="absolute top-[18%] right-[12%] w-[4px] h-[4px] rounded-full bg-fuchsia-400 shadow-[0_0_14px_4px_rgba(217,70,239,0.9)] animate-star-2" />

<div className="absolute top-[40%] left-[6%] w-[3px] h-[3px] rounded-full bg-fuchsia-300 shadow-[0_0_12px_3px_rgba(232,121,249,0.8)] animate-star-3" />

<div className="absolute bottom-[22%] left-[20%] w-[4px] h-[4px] rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,0.9)] animate-star-4" />

<div className="absolute bottom-[16%] right-[10%] w-[3px] h-[3px] rounded-full bg-fuchsia-400 shadow-[0_0_14px_4px_rgba(217,70,239,0.9)] animate-star-5" />

<div className="absolute top-[56%] right-[30%] w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.9)] animate-star-6" />

<div className="absolute top-[28%] left-[40%] w-[3px] h-[3px] rounded-full bg-fuchsia-300 shadow-[0_0_12px_3px_rgba(232,121,249,0.8)] animate-star-7" />

{/* ================= Moving Stars ================= */}

<div className="absolute top-[12%] left-[8%] w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,.8)] animate-moving-star-1" />

<div className="absolute top-[22%] right-[6%] w-[2px] h-[2px] rounded-full bg-fuchsia-300 shadow-[0_0_10px_3px_rgba(232,121,249,.8)] animate-moving-star-2" />

<div className="absolute bottom-[18%] left-[12%] w-[3px] h-[3px] rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,.9)] animate-moving-star-3" />

<div className="absolute bottom-[10%] right-[20%] w-[2px] h-[2px] rounded-full bg-fuchsia-400 shadow-[0_0_12px_3px_rgba(217,70,239,.9)] animate-moving-star-4" />

<div className="absolute top-[45%] left-[48%] w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,.8)] animate-moving-star-5" />


            {/* Robot Image */}
            <Image
              src="/images/home/robot-hand-1.png"
              alt="AI robotic hand illustration"
              width={0}
              height={0}
              quality={90}
              priority
              draggable={false}
              sizes="(max-width: 768px) 340px, (max-width: 1024px) 420px, 600px"
              className="relative z-10
              h-auto
              w-[220px] md:w-[360px] lg:w-[500px]
              object-contain
              select-none
              will-change-transform
              transform-gpu
              animate-robot-float animate-robot-intro animate-robot-float
              drop-shadow-[0_25px_60px_rgba(168,85,247,0.35)]"
            />

{/* Shooting Star 1 */}
<div className="absolute top-[18%] left-[10%] animate-shooting-star-1 pointer-events-none">
  <div className="relative">
    <div className="w-12 h-[2px] bg-gradient-to-r from-white via-fuchsia-300 to-transparent rotate-[-25deg]" />
    <div className="absolute -left-1 -top-[3px] w-2 h-2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,.9)]" />
  </div>
</div>

{/* Shooting Star 2 */}
<div className="absolute bottom-[28%] right-[8%] animate-shooting-star-2 pointer-events-none">
  <div className="relative">
    <div className="w-10 h-[2px] bg-gradient-to-r from-fuchsia-300 via-white to-transparent rotate-[18deg]" />
    <div className="absolute -left-1 -top-[3px] w-2 h-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_4px_rgba(232,121,249,.9)]" />
  </div>
</div>
          </div>

        </div>

      </div>

    </div>
  );
}