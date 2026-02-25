export default function Footer() {
  return (
    <footer className="bg-[#181818] mt-[100px] px-5 md:px-[60px] py-[50px] md:py-[70px] text-white">

      <div className="max-w-[1200px] mx-auto">

        {/* Tagline Section */}
        <div className="text-left md:text-center mb-[40px] md:mb-[60px]">
          <h2 className="text-[24px] md:text-[32px] font-[700] md:font-[600] mb-[16px] leading-[1.3]">
            Experience world-class entertainment.
          </h2>

          <p className="text-[14px] md:text-[15px] text-[#b5b5b5] md:text-[#9a9a9a] max-w-[600px] md:mx-auto leading-[1.6]">
            Escape reality. Discover love, thrill and fantasy.
            Step into another dimension — one story at a time.
          </p>
        </div>

        {/* Main Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-[40px] md:gap-[60px] mb-[50px]">

          {/* Brand */}
          <div className="max-w-[260px]">
            <h3 className="text-[#E50914] text-[22px] mb-[12px]"
             style={{ fontFamily: "'Bebas Neue', sans-serif" }}
>
              Elovia
            </h3>
            <span className="text-[14px] text-[#8a8a8a] leading-[1.6]">
              Unlimited movies, TV shows and more.
            </span>
          </div>

          {/* Links */}
          <div className="w-full md:w-auto flex justify-between md:gap-[80px] gap-[20px]">

            <div className="flex-1">
              <h4 className="text-[14px] font-[600] mb-[16px]">
                Browse
              </h4>
              <ul className="space-y-[10px] text-[14px] text-[#8a8a8a]">
                <li className="hover:text-white transition cursor-pointer">Home</li>
                <li className="hover:text-white transition cursor-pointer">TV Shows</li>
                <li className="hover:text-white transition cursor-pointer">Movies</li>
                <li className="hover:text-white transition cursor-pointer">New & Popular</li>
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-[14px] font-[600] mb-[16px]">
                Company
              </h4>
              <ul className="space-y-[10px] text-[14px] text-[#8a8a8a]">
                <li className="hover:text-white transition cursor-pointer">About</li>
                <li className="hover:text-white transition cursor-pointer">Careers</li>
                <li className="hover:text-white transition cursor-pointer">Press</li>
                <li className="hover:text-white transition cursor-pointer">Investors</li>
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-[14px] font-[600] mb-[16px]">
                Support
              </h4>
              <ul className="space-y-[10px] text-[14px] text-[#8a8a8a]">
                <li className="hover:text-white transition cursor-pointer">Help Center</li>
                <li className="hover:text-white transition cursor-pointer">Terms</li>
                <li className="hover:text-white transition cursor-pointer">Privacy</li>
                <li className="hover:text-white transition cursor-pointer">Contact</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-[20px] text-[13px] text-[#666] text-center">
          © 2026 Elovia. All rights reserved.
        </div>

      </div>

    </footer>
  );
}