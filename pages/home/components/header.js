import Link from "next/link";
import { useEffect, useState } from "react";
import icons from "../../../utils/icons";
import AboutMenu from "./aboutMenu";
import CommunityMenu from "./communityMenu";
import DevelopersMenu from "./developersMenu";
import EcosystemMenu from "./ecosystemMenu";
import SupportMenu from "./supportMenu";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 49) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header className="sticky top-0 z-40 w-full">
      <div
        className={`absolute w-full top-0 h-20 ${
          sticky ? "opacity-1" : "opacity-0"
        }  transition-opacity`}
        style={{
          backgroundColor: "rgba(4,20,23,0.6)",
          backdropFilter: "blur(40px) brightness(1.5)",
        }}
      ></div>
      <nav className="w-full max-w-[1400px] px-5 md:px-10 mx-auto flex items-stretch h-20 relative">
        <div className="w-full items-center flex flex-1">
          <Link aria-label="Home" href="/" className="h-7">
            {icons.logo}
          </Link>
        </div>
        <div className="relative z-20 hidden lg:flex lg:items-center lg:space-x-10 lg:flex-shrink-0">
          <div className="group/item relative flex items-center h-full">
            <Link href="#">About</Link>
            <AboutMenu />
          </div>
          <div className="group/item relative flex items-center h-full">
            <Link href="#">Ecosystem</Link>
            <EcosystemMenu />
          </div>
          <div className="group/item relative flex items-center h-full">
            <Link href="#">Community</Link>
            <CommunityMenu />
          </div>
          <div className="group/item relative flex items-center h-full">
            <Link href="#">Developers</Link>
            <DevelopersMenu />
          </div>
          <div className="group/item relative flex items-center h-full">
            <Link href="#">Support</Link>
            <SupportMenu />
          </div>
          <Link href="#">Blog</Link>
        </div>
        <div className="flex items-center space-x-2 lg:hidden">
          <button className="flex items-center">
            <span className="p-2 rounded-md backdrop-blur-2xl backdrop-brightness-200">
              {icons.hamburgerMenu}
            </span>
          </button>
        </div>
        <div className="relative z-20 hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
          <Link
            href="#"
            className="relative items-center justify-center transition-transform hover:scale-103 active:scale-95 active:transform font-medium flex text-black bg-white h-8 text-sm rounded-md px-3"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
