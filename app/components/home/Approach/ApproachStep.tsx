import { LucideIcon } from "lucide-react";

type ApproachStepProps = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ApproachStep({
  number,
  icon: Icon,
  title,
  description,
}: ApproachStepProps) {
  return (
<div className="group relative flex w-[230px] flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer">
    {/* Number Badge */}
      <div className="relative z-20 mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-brand-purple/50 bg-[#090909] text-sm font-semibold text-white shadow-[0_0_14px_rgba(168,85,247,0.18)] animate-badge">
        {number}
      </div>

      {/* Icon Circle */}
      <div className="relative z-10 mb-8 flex h-[110px] w-[110px] items-center justify-center rounded-full border border-brand-purple/60 bg-[#0B0813] transition-all duration-500 group-hover:scale-105 group-hover:border-fuchsia-400 animate-node">

        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-brand-purple/15 blur-3xl transition-all duration-500 group-hover:bg-fuchsia-500/25" />

        {/* Inner Ring */}
        <div className="absolute inset-3 rounded-full border border-brand-purple/20 transition-all duration-500 group-hover:border-fuchsia-400/40" />

        {/* Icon */}
        <Icon
          size={38}
          className="relative z-10 text-brand-purple animate-icon transition-all duration-500 group-hover:scale-110 group-hover:text-fuchsia-300"
        />

      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold leading-none text-white transition-all duration-300 group-hover:text-fuchsia-300">
        {title}
      </h3>

      {/* Description */}
      <p >
        {description}
      </p>

    </div>
  );
}