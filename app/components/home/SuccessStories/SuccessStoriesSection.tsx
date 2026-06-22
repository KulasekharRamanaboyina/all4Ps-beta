import FeaturedCaseStudy from "./FeaturedCaseStudy";
import CaseStudyCard from "./CaseStudyCard";
import { CASE_STUDIES } from "@/app/constants";
import { ArrowRight } from "lucide-react";
export default function SuccessStoriesSection() {
  return (
<section className="bg-[#0B0813] pt-10 pb-20 lg:pt-12 lg:pb-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-purple">
          SUCCESS STORIES
        </p>
        

        {/* Grid */}
<div className="grid lg:grid-cols-[1.7fr_1fr] gap-5">
              {/* Featured */}
          <FeaturedCaseStudy />

          {/* Right Side */}
          <div className="flex flex-col gap-4">

            {CASE_STUDIES.slice(0, 3).map((study) => (
  <CaseStudyCard
    key={study.id}
    title={study.client}
    description={study.title}
    image={study.imageUrl}
  />
))}
<div className="mt-6">
  <button
    className="
      group
      inline-flex
      items-center
      gap-2
      text-sm
      font-semibold
      text-brand-purple
      transition-all
      duration-300
      hover:text-fuchsia-400
    "
  >
    Explore More Success Stories

    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </button>
</div>

          </div>
          

        </div>

      </div>
    </section>
  );
}