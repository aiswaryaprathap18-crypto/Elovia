import BlurText from "../components/Blurtext"

export default function TopStreaming() {

  const list = [
    { img: "/m1.jpg", name: "Dhurandhar" },
    { img: "/m2.jpg", name: "Chatha Pacha" },
    { img: "/m3.jpg", name: "Sarvam Maya" },
    { img: "/m4.jpg", name: "Marty Supreme" },
    { img: "/m5.jpg", name: "Sirai" },
  ]

  return (
    <div className="w-full px-4 md:px-12 pt-6 md:pt-14 pb-8 text-white">

      {/* BLUR HEADING */}
      <h1 className="text-[20px] md:text-[36px] font-bold tracking-[2px] mb-8">
        <BlurText
          text="TOP STREAMING TODAY"
          delay={200}
          animateBy="words"
          direction="top"
        />
      </h1>

      {/* MOVIE GRID */}
      <div className="grid grid-cols-3 md:flex gap-3 md:gap-6">

        {list.map((movie, i) => (
          <div
            key={i}
            className="relative transition-transform duration-300 hover:scale-105"
          >

            {/* Poster */}
            <img
              src={movie.img}
              alt={movie.name}
              className="
                w-full
                h-[130px]
                md:w-[240px]
                md:h-[320px]
                object-cover
                rounded-xl
              "
            />

            {/* Rank */}
            <span className="
              absolute
              bottom-2
              right-2
              md:bottom-3
              md:right-4
              text-base
              md:text-3xl
              font-extrabold
              text-white
              drop-shadow-lg
            ">
              {i + 1}
            </span>

            {/* Movie Name */}
            <p className="
              mt-2
              text-xs
              md:text-base
              font-medium
              text-center
            ">
              {movie.name}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}