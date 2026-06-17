type HeroStatCardProps = {
  title: string;
  value: string;
};

export default function HeroStatCard({
  title,
  value,
}: HeroStatCardProps) {
  return (
    <div
      className="
      group
      relative
      w-[115px] md:w-[150px] lg:w-[180px]
      rounded-xl md:rounded-2xl
      border border-white/10
      bg-white/[0.05]
      backdrop-blur-xl
      px-3 py-3
      md:px-5 md:py-4
      lg:px-6 lg:py-5
      shadow-[0_12px_40px_rgba(0,0,0,0.35)]
      transition-all duration-300
      hover:-translate-y-1
      hover:border-brand-purple/40
      "
    >
      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60" />

      <p
        className="
        mb-2
        text-[8px]
        md:text-[10px]
        lg:text-[11px]
        uppercase
        tracking-[0.18em]
        md:tracking-[0.22em]
        text-white-400
        "
      >
        {title}
      </p>

      <h3
        className="
        text-xl
        md:text-3xl
        lg:text-4xl
        font-bold
        text-white
        transition-colors
        duration-300
        group-hover:text-fuchsia-200
        "
      >
        {value}
      </h3>
    </div>
  );
}