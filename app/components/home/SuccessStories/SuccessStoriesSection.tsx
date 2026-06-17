import FeaturedCaseStudy from "./FeaturedCaseStudy";
import CaseStudyCard from "./CaseStudyCard";
export default function SuccessStoriesSection() {
  return (
<section className="pt-10 pb-20 lg:pt-12 lg:pb-24">
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

            <CaseStudyCard />

            <CaseStudyCard />

            <CaseStudyCard />

          </div>

        </div>

      </div>
    </section>
  );
}