import Link from "next/link";
import bgJPG from "../../../public/bg.jpg";
import SearchBar from "./searchBar";

export default function HeroSection({ onSearch }) {
  return (
    <div className="pt-8 pb-16 text-center sm:pt-12 sm:pb-20 md:pt-20 md:pb-28">
      <h1 className="text-5xl md:text-7xl font-black !leading-[1.1] max-w-5xl mx-auto tracking-tighter">
        <span
          className="text-transparent bg-clip-text saturate-150 clip-background"
          style={{ backgroundImage: `url('${bgJPG.src}')` }}
        >
          The momentum is building
        </span>
      </h1>
      <div className="relative mt-4 text-xl sm:text-2xl md:text-3xl max-w-5xl mx-auto !leading-normal text-white font-light">
        Your guide to what’s live today and coming soon on the Aurora network!
      </div>
      <div className="mt-6 sm:mt-8">
        <Link
          className=" items-center transition-transform hover:scale-[1.03] active:scale-95 active:transform font-medium flex-shrink-0 inline-flex text-white hover:backdrop-brightness-[2.7] h-10 rounded-md px-5 backdrop-blur-2xl backdrop-brightness-[2.3]"
          href="#"
        >
          Submit your project
        </Link>
      </div>
      <p className="relative max-w-xl mx-auto mt-6 text-xs leading-normal sm:mt-8 sm:text-sm text-white/[.6]">
        This list is for informational purposes only, and Aurora does not
        endorse any project listed here. DYOR before interacting with any of the
        projects listed below.
      </p>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
