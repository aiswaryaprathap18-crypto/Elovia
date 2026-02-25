import { useState } from "react";
import RotatingText from "../components/RotatingText";

export default function Genres() {

  const categories = [
    "Action",
    "Anime",
    "Comedy",
    "Horror",
    "TV Show",
    "Rom Com",
    "Sci-Fi",
    "Series",
    "Sports"
  ];

  const moviesByGenre = {

    Action: [
      { img: "/lilo.jpg", title: "Lilo & Stitch", year: "2025", rating: "7.2" },
      { img: "/flow.jpg", title: "Flow", year: "2025", rating: "7.9" },
      { img: "/mufasa.jpg", title: "Mufasa: The Lion King", year: "2024", rating: "6.6" },
      { img: "/spiderman.jpg", title: "Spider-Man: Into the Spider-Verse", year: "2018", rating: "8.4" },
      { img: "/mi.jpg", title: "Mission: Impossible", year: "2025", rating: "7.4" },
      { img: "/dune2.jpg", title: "Dune: Part Two", year: "2024", rating: "8.5" },
      { img: "/deadpool.jpg", title: "Deadpool & Wolverine", year: "2024", rating: "7.8" },
      { img: "/topgun.jpg", title: "Top Gun: Maverick", year: "2022", rating: "8.3" },
    ],

    Anime: [
      { img: "/a1.jpg", title: "Zootopia", year: "2016", rating: "8.0" },
      { img: "/a2.jpg", title: "Frozen", year: "2013", rating: "7.4" },
      { img: "/a3.jpg", title: "Coco", year: "2017", rating: "8.4" },
      { img: "/a4.jpg", title: "Toy Story 4", year: "2019", rating: "7.7" },
      { img: "/a5.jpg", title: "Inside Out", year: "2015", rating: "8.1" },
      { img: "/a6.jpg", title: "Moana", year: "2016", rating: "7.6" },
      { img: "/a7.jpg", title: "Kung Fu Panda", year: "2008", rating: "7.6" },
      { img: "/a8.jpg", title: "The Incredibles", year: "2004", rating: "8.0" },
    ],

    Comedy: [
      { img: "/c1.jpg", title: "The Mask", year: "1994", rating: "6.9" },
      { img: "/c2.jpg", title: "Jumanji", year: "2017", rating: "6.8" },
      { img: "/c3.jpg", title: "The Hangover", year: "2009", rating: "7.7" },
      { img: "/c4.jpg", title: "Free Guy", year: "2021", rating: "7.1" },
      { img: "/c5.jpg", title: "Rush Hour", year: "1998", rating: "7.0" },
      { img: "/c6.jpg", title: "Central Intelligence", year: "2016", rating: "6.3" },
      { img: "/c7.jpg", title: "Home Alone", year: "1990", rating: "7.6" },
      { img: "/c8.jpg", title: "Yes Man", year: "2008", rating: "6.8" },
    ],

    Horror: [
      { img: "/h1.jpg", title: "The Conjuring", year: "2013", rating: "7.5" },
      { img: "/h2.jpg", title: "IT", year: "2017", rating: "7.3" },
      { img: "/h3.jpg", title: "Insidious", year: "2010", rating: "6.8" },
      { img: "/h4.jpg", title: "The Nun", year: "2018", rating: "5.3" },
      { img: "/h5.jpg", title: "Hereditary", year: "2018", rating: "7.3" },
      { img: "/h6.jpg", title: "A Quiet Place", year: "2018", rating: "7.5" },
      { img: "/h7.jpg", title: "Smile", year: "2022", rating: "6.6" },
      { img: "/h8.jpg", title: "The Ring", year: "2002", rating: "7.1" },
    ],

    "TV Show": [
      { img: "/tv1.jpg", title: "Breaking Bad", year: "2008", rating: "9.5" },
      { img: "/tv2.jpg", title: "Stranger Things", year: "2016", rating: "8.7" },
      { img: "/tv3.jpg", title: "The Boys", year: "2019", rating: "8.7" },
      { img: "/tv4.jpg", title: "Wednesday", year: "2022", rating: "8.1" },
      { img: "/tv5.jpg", title: "Money Heist", year: "2017", rating: "8.2" },
      { img: "/tv6.jpg", title: "Dark", year: "2017", rating: "8.8" },
      { img: "/tv7.jpg", title: "Loki", year: "2021", rating: "8.2" },
      { img: "/tv8.jpg", title: "The Witcher", year: "2019", rating: "8.0" },
    ],

    "Rom Com": [
      { img: "/r1.jpg", title: "Love Actually", year: "2003", rating: "7.6" },
      { img: "/r2.jpg", title: "The Proposal", year: "2009", rating: "6.7" },
      { img: "/r3.jpg", title: "Crazy Rich Asians", year: "2018", rating: "6.9" },
      { img: "/r4.jpg", title: "La La Land", year: "2016", rating: "8.0" },
      { img: "/r5.jpg", title: "To All The Boys", year: "2018", rating: "7.1" },
      { img: "/r6.jpg", title: "Notting Hill", year: "1999", rating: "7.2" },
      { img: "/r7.jpg", title: "The Notebook", year: "2004", rating: "7.8" },
      { img: "/r8.jpg", title: "About Time", year: "2013", rating: "7.8" },
    ],

    "Sci-Fi": [
      { img: "/s1.jpg", title: "Interstellar", year: "2014", rating: "8.6" },
      { img: "/s2.jpg", title: "Inception", year: "2010", rating: "8.8" },
      { img: "/s3.jpg", title: "Avatar", year: "2009", rating: "7.9" },
      { img: "/s4.jpg", title: "The Matrix", year: "1999", rating: "8.7" },
      { img: "/s5.jpg", title: "Arrival", year: "2016", rating: "7.9" },
      { img: "/s6.jpg", title: "Blade Runner 2049", year: "2017", rating: "8.0" },
      { img: "/s7.jpg", title: "Gravity", year: "2013", rating: "7.7" },
      { img: "/s8.jpg", title: "Tenet", year: "2020", rating: "7.3" },
    ],

    Series: [
      { img: "/sr1.jpg", title: "Game of Thrones", year: "2011", rating: "9.2" },
      { img: "/sr2.jpg", title: "The Crown", year: "2016", rating: "8.6" },
      { img: "/sr3.jpg", title: "Peaky Blinders", year: "2013", rating: "8.8" },
      { img: "/sr4.jpg", title: "The Mandalorian", year: "2019", rating: "8.7" },
      { img: "/sr5.jpg", title: "House of the Dragon", year: "2022", rating: "8.5" },
      { img: "/sr6.jpg", title: "The Last of Us", year: "2023", rating: "8.8" },
      { img: "/sr7.jpg", title: "Sherlock", year: "2010", rating: "9.1" },
      { img: "/sr8.jpg", title: "Narcos", year: "2015", rating: "8.8" },
    ],

    Sports: [
      { img: "/sp1.jpg", title: "Creed", year: "2015", rating: "7.6" },
      { img: "/sp2.jpg", title: "Rush", year: "2013", rating: "8.1" },
      { img: "/sp3.jpg", title: "Ford v Ferrari", year: "2019", rating: "8.1" },
      { img: "/sp4.jpg", title: "Moneyball", year: "2011", rating: "7.6" },
      { img: "/sp5.jpg", title: "The Blind Side", year: "2009", rating: "7.6" },
      { img: "/sp6.jpg", title: "Coach Carter", year: "2005", rating: "7.3" },
      { img: "/sp7.jpg", title: "Rocky", year: "1976", rating: "8.1" },
      { img: "/sp8.jpg", title: "The Fighter", year: "2010", rating: "7.8" },
    ],
  };

  const [active, setActive] = useState("Action");

  return (
    <section className="w-full px-4 md:px-12 pt-6 pb-8">

      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3">
          Discover
          <span className="bg-red-600 px-3 py-1 rounded-md text-white text-base md:text-lg">
            <RotatingText
              texts={categories}
              staggerDuration={0}
              splitBy="words"
              rotationInterval={2500}
            />
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm transition ${
              active === cat
                ? "bg-white text-black"
                : "bg-neutral-800 text-neutral-400 hover:bg-white hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
          {moviesByGenre[active].map((movie, index) => (
            <div key={index}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="
                    w-full
                    aspect-[2/3]
                    md:aspect-[3/4]   /* 🔥 Reduced desktop height */
                    object-cover
                    scale-95
                  "
                />
              </div>
              <div className="mt-2">
                <h4 className="text-[11px] md:text-sm font-medium leading-tight">
                  {movie.title}
                </h4>
                <p className="text-[10px] md:text-xs text-neutral-400">
                  {movie.year} • ⭐ {movie.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}