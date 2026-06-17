export default function FeaturedCaseStudy() {
  return (
<div className="grid lg:grid-cols-[0.95fr_1.15fr] gap-10 rounded-3xl border border-white/10 bg-[#0B0813] p-10">
      {/* Left Side */}
      {/* <div>
        <span>FEATURED CASE STUDY</span>

        <h3>UNBOX ROBOTICS</h3>

        <div>
          <p>+312% Organic Growth</p>
          <p>+280% Qualified Leads</p>
          <p>₹32Cr+ Pipeline Influenced</p>
        </div>

        <p>
          From early-stage visibility challenges to category leadership in
          robotics automation.
        </p>

        <button>
          View Case Study
        </button>
      </div> */}
      <div className="flex flex-col justify-between">

  <div>

    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-purple">
      FEATURED CASE STUDY
    </p>

    <h2 className="mb-8 text-4xl font-bold text-white">
      UNBOX ROBOTICS
    </h2>

    <div className="mb-8 space-y-5">

      <div>
        <h3 className="text-4xl font-bold text-brand-purple">
          +312%
        </h3>
        <p className="text-gray-400">
          Organic Growth
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-brand-purple">
          +280%
        </h3>
        <p className="text-gray-400">
          Qualified Leads
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-brand-purple">
          ₹32Cr+
        </h3>
        <p className="text-gray-400">
          Pipeline Influenced
        </p>
      </div>

    </div>

    <p className="max-w-md leading-7 text-gray-400">
      From early-stage visibility challenges to category leadership in robotics automation.
    </p>

  </div>

  <button className="mt-10 w-fit rounded-xl bg-brand-purple px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-fuchsia-500">
    View Case Study
  </button>

</div>

      {/* Right Side */}
      <div className="rounded-xl bg-gray-800 min-h-[420px] flex items-center justify-center">
        Image
      </div>

    </div>
  );
}