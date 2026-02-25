export default function MovieGrid() {

  return (
    <section className="w-full px-4 md:px-12 py-8">

      {/* Section Title */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-[40px] font-bold tracking-[2px] uppercase">
          ALL MOVIES
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">

        {Array(8).fill(0).map((_, i) => (
          <div key={i}>

            {/* Poster */}
            <div className="overflow-hidden rounded-xl bg-neutral-800">
              <div className="
                w-full
                h-[140px]
                md:h-[200px]   /* 🔥 Reduced desktop height */
                bg-neutral-800
                transition duration-300
                hover:scale-105
              " />
            </div>

            {/* Info */}
            <div className="mt-2">
              <h4 className="text-[11px] md:text-sm font-medium">
                Movie {i + 1}
              </h4>
              <p className="text-[10px] md:text-xs text-neutral-400">
                2024 • ⭐ 4.5
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}