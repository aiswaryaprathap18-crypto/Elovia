import { useState, useContext } from "react";
import movies from "../data/movies";
import { MovieContext } from "../context/MovieContext";

export default function Hero() {

  const { setSelectedMovie, addToWishlist } = useContext(MovieContext);

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const prev = () =>
    setIndex(i => (i === 0 ? movies.length - 1 : i - 1));

  const next = () =>
    setIndex(i => (i === movies.length - 1 ? 0 : i + 1));

  const left = movies[(index - 1 + movies.length) % movies.length];
  const center = movies[index];
  const right = movies[(index + 1) % movies.length];

  return (
    <div className="relative min-h-[85vh] pt-20 md:pt-28 flex flex-col items-center justify-center overflow-hidden">

      {/* Background Video */}
      {hover && (
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover -z-10 pointer-events-none"
        >
          <source src={center.trailer} type="video/mp4" />
        </video>
      )}

      {/* Background Image */}
      <img
        src={center.bg}
        alt=""
        className="absolute w-full h-full object-cover -z-20 pointer-events-none"
      />

      {/* Carousel */}
      <div className="flex items-center gap-4 md:gap-8 relative z-20">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="relative z-30 w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/90 text-black text-lg md:text-3xl flex items-center justify-center transition active:scale-95 hover:scale-110"
        >
          ‹
        </button>

        {/* Left Poster */}
        <img
          src={left.poster}
          alt=""
          className="
            w-20 aspect-[2/3] object-cover rounded-xl opacity-50 scale-90
            md:w-[130px] md:h-[200px]
          "
        />

        {/* Center Poster */}
        <img
          src={center.poster}
          alt=""
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setHover(prev => !prev)}  /* mobile tap */
          className="
            w-32 aspect-[2/3] object-cover rounded-2xl scale-105 cursor-pointer
            md:w-[190px] md:h-[270px]
          "
        />

        {/* Right Poster */}
        <img
          src={right.poster}
          alt=""
          className="
            w-20 aspect-[2/3] object-cover rounded-xl opacity-50 scale-90
            md:w-[130px] md:h-[200px]
          "
        />

        {/* Right Arrow */}
        <button
          onClick={next}
          className="relative z-30 w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/90 text-black text-lg md:text-3xl flex items-center justify-center transition active:scale-95 hover:scale-110"
        >
          ›
        </button>
      </div>

      {/* Info Section */}
      <div className="mt-6 md:mt-8 text-center max-w-md relative z-20">

        <div className="flex justify-center gap-3 mb-3">

          <button
            onClick={() => setSelectedMovie(center)}
            className="bg-white text-black px-5 py-2 md:px-6 md:py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            ▶ Watch Now
          </button>

          <button
            onClick={() => addToWishlist(center)}
            className="bg-neutral-700 text-white px-4 py-2 md:px-5 md:py-3 rounded-xl text-lg hover:scale-105 transition"
          >
            +
          </button>

        </div>

        <p className="opacity-80 text-sm md:text-base mb-2">
          {center.year} • {center.rating} • {center.duration} • English
        </p>

        <p className="opacity-70 text-xs md:text-sm leading-relaxed px-4 md:px-0">
          {center.desc}
        </p>
      </div>

    </div>
  );
}