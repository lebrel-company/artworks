// libraries:
import Link from "next/link";
import { useState, useEffect } from "react";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
import Hamburger from "./hamburguer";
import useWindowSize from "../../hooks/useWindowSize";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// interfaces:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
// ============================================================================

function Header() {
  const size = useWindowSize();
  const [iconSize, setIconSize] = useState(120);

  useEffect(() => {
    if (size.width < 400) {
      setIconSize(100);
    }
  }, [size.width, size.height]);

  return (
    <div
      className={` 
        flex 
        justify-between 
        items-center 
        w-full
    `}
    >
      <div className="m-2">
        <img
          width={iconSize}
          height={iconSize}
          src="/logos/artworks.png"
          alt="Artworks logo"
        />
      </div>
      <div className="font-crimson text-lg">
        <Link href="/showreel">
          <button type="button" className="hover:underline">
            Showreel
          </button>
        </Link>
      </div>
      <div className="">
        <Hamburger />
      </div>
    </div>
  );
}

export default Header;
