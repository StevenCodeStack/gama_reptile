"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillHome, AiOutlineInfoCircle, AiFillPhone } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { GiGecko } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { TentangGeckoLinks } from "./Links";

const DesktopMenu = () => {
  const path = usePathname();
  return (
    <div className="hidden md:flex gap-6 lg:gap-8 h-full items-center">
      <div
        className={`${
          path === "/" ? "navAfterLineAccent" : "navAfterLineHover"
        } flex items-center gap-1 cursor-pointer h-fit`}
      >
        <AiFillHome /> Home
      </div>
      <div className="flex items-center gap-1 cursor-pointer navAfterLineHover h-fit">
        <FaShoppingCart /> Order
      </div>
      <div className="flex items-center gap-1 cursor-pointer navAfterLineHover h-fit">
        <AiOutlineInfoCircle /> Gecko Baru?
      </div>
      <div className="flex group items-center gap-1 relative h-full ">
        <GiGecko /> Tentang Gecko <MdArrowDropDown />
        <div className="absolute py-2 px-5 border-2 bg-white border-black rounded top-8 opacity-0 hidden group-hover:opacity-100 group-hover:top-15 group-hover:block transition-all">
          <ul className="text-black text-nowrap flex flex-col gap-2">
            {TentangGeckoLinks.map((e) => (
              <a
                key={e.path}
                href={`/tentang-gecko/${e.path}`}
                className={`${
                  path === e.path ? "navAfterLineAccent" : "navAfterLineHover"
                } flex items-center gap-2`}
              >
                <e.icon /> {e.label}
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-1 cursor-pointer navAfterLineHover h-fit">
        <AiFillPhone /> Kontak
      </div>
    </div>
  );
};

export default DesktopMenu;
