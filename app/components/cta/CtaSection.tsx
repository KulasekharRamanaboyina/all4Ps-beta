export default function CTASection() {
  return (
<section className="bg-[#05030A] py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-[#12081F]
            px-10
            py-12
            lg:px-14
            lg:py-14
          "
        >

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left Side */}
            <div className="max-w-xl">

  <h2 className="text-5xl font-bold leading-tight text-white">
    Great Products
    <br />
    Deserve{" "}
    <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
      Great Growth.
    </span>
  </h2>

  <p className="mt-6 max-w-lg text-lg leading-8 text-gray-300">
    Let's build a growth system that drives demand,
    pipeline and measurable business impact.
  </p>

</div>

            {/* Right Side */}
            <div className="flex flex-col items-end">

  <button
    className="
      group
      inline-flex
      items-center
      gap-4
      rounded-xl
      bg-brand-purple
      px-8
      py-4
      text-lg
      font-semibold
      text-white
      transition-all
      duration-300
      hover:bg-fuchsia-500
    "
  >
    Book a Growth Call

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </button>

  <div className="mt-5 flex items-center gap-4">

    <div className="flex -space-x-3">
      <div className="h-10 w-10 rounded-full border-2 border-[#12081F] bg-gray-500" />
      <div className="h-10 w-10 rounded-full border-2 border-[#12081F] bg-gray-400" />
      <div className="h-10 w-10 rounded-full border-2 border-[#12081F] bg-gray-300" />
      <div className="h-10 w-10 rounded-full border-2 border-[#12081F] bg-gray-600" />
    </div>

    <p className="text-sm text-gray-300">
      Join <span className="font-semibold text-white">50+</span> companies
      scaling faster with ALL4PS
    </p>

  </div>

</div>

          </div>

        </div>

      </div>
    </section>
  );
}