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
      <div className="relative z-20 mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-brand-purple/50 bg-[#0a0a0f] text-xs font-bold text-white shadow-[0_0_10px_rgba(128,0,128,0.2)] animate-badge">
        {number}
      </div>

      {/* Icon Circle (Matches About page timeline design & size) */}
      <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 border border-brand-purple/30 backdrop-blur-sm shadow-lg shadow-purple-950/40 group-hover:border-brand-purple/60 transition-colors duration-300 animate-node">
        {/* Icon */}
        <Icon
          size={28}
          className="text-brand-purple animate-icon group-hover:text-pink-400 transition-colors duration-500"
        />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold leading-none text-white transition-all duration-300 group-hover:text-fuchsia-300">
        {title}
      </h3>

      {/* Description */}
      <p className="max-w-[220px] text-sm leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
  {description}
</p>

    </div>
  );
}