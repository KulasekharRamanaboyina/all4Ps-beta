// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";

// type CaseStudyCardProps = {
//   title: string;
//   description: string;
//   image: string;
// };

// export default function CaseStudyCard({
//   title,
//   description,
//   image,
// }: CaseStudyCardProps) {
//   return (
//     <div
//       className="
//       group
//       flex
//       h-[150px]
//       overflow-hidden
//       rounded-2xl
//       border
//       border-white/10
//       bg-[#0B0813]
//       transition-all
//       duration-500
//       hover:-translate-y-1
//       hover:border-brand-purple/40
//       hover:shadow-[0_15px_40px_rgba(168,85,247,.12)]
//       "
//     >
//       {/* Image */}
//       <div className="relative w-[34%] overflow-hidden">

//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />

//       </div>

//       {/* Content */}
//       <div className="flex flex-1 items-center justify-between p-5">

//         <div>

//           <h3 className="mb-2 text-xl font-bold text-white">
//             {title}
//           </h3>

//           <p className="max-w-[180px] text-sm leading-6 text-gray-400">
//             {description}
//           </p>

//         </div>

//         {/* Arrow */}
//         <div
//           className="
//           flex
//           h-10
//           w-10
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-white/10
//           transition-all
//           duration-300
//           group-hover:border-brand-purple
//           group-hover:bg-brand-purple
//           "
//         >
//           <ArrowUpRight
//             size={18}
//             className="transition-transform duration-300 group-hover:rotate-12"
//           />
//         </div>

//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { ArrowRight } from "lucide-react";

type CaseStudyCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function CaseStudyCard({
  title,
  description,
  image,
}: CaseStudyCardProps) {
  return (
    <div
      className="
      group
      flex
      items-center
      gap-4
      h-[112px]
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

          <h3 className="mb-1 text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="line-clamp-2 text-sm leading-5 text-gray-400">
            {description}
          </p>

        </div>

        {/* Arrow */}
        <button
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
        </button>
        

      </div>
    </div>
  );
}