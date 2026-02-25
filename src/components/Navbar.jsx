import { Menu, Search, Heart, User } from "lucide-react"
import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"

export default function Navbar() {

  const { wishlist } = useContext(MovieContext)

  return (
    <div className="w-full flex justify-between items-center px-6 md:px-10 py-3 md:py-4 bg-black fixed top-0 left-0 z-50">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4 md:gap-6">

        <Menu 
          size={22} 
          className="cursor-pointer text-white hover:text-gray-400 transition"
        />

        {/* BEBAS NEUE LOGO - PROPERLY SCALED */}
        <h1
          className="text-[24px] md:text-[30px] text-[#E50914] leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          ELOVIA
        </h1>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6 md:gap-8 text-white relative">

        <Search 
          size={18} 
          className="cursor-pointer hover:text-gray-400 transition"
        />

        <div className="relative cursor-pointer">
          <Heart 
            size={18} 
            className="hover:text-red-500 transition"
          />

          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#E50914] text-white text-[10px] font-semibold px-1.5 py-[2px] rounded-full">
              {wishlist.length}
            </span>
          )}
        </div>

        <User 
          size={18} 
          className="cursor-pointer hover:text-gray-400 transition"
        />

      </div>

    </div>
  )
}