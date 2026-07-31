import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudyCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function CaseStudyCard({
  id,
  title,
  description,
  image,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/portfolio/${id}`}
      className="
        group
        flex
        items-center
        gap-4
        min-h-[112px]
        h-auto
        border-b
        border-white/10
        py-3
        transition-all
        duration-300
        hover:border-brand-purple/30
      "
    >
      {/* Image */}
      <div className="relative h-[88px] w-[120px] flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-between gap-4">
        <div className="min-w-0">
          <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>

          <p className="line-clamp-2 text-sm leading-5 text-gray-400">
            {description}
          </p>
        </div>

        {/* Arrow */}
        <div
          className="
            flex h-9 w-9 flex-shrink-0 items-center justify-center
            rounded-full
            bg-white
            text-black
            transition-all
            duration-300
            group-hover:bg-brand-purple
            group-hover:text-white
          "
        >
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
