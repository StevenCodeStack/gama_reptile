"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillHome, AiOutlineInfoCircle, AiFillPhone } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { GiGecko } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { orderLinks, TentangGeckoLinks } from "./Links";
import Link from "next/link";

const DesktopMenu = () => {
  const path = usePathname();
  return (
    <div className="hidden md:flex gap-6 lg:gap-8 h-full items-center">
      <Link
        href={"/"}
        className={`${
          path === "/" ? "navAfterLineAccent" : "navAfterLineHoverAccent"
        } flex items-center gap-1 cursor-pointer h-fit`}
      >
        <AiFillHome className="text-accent" /> Home
      </Link>
      <div className="flex group items-center gap-1 cursor-pointer h-full">
        <FaShoppingCart className="text-accent" /> Order <MdArrowDropDown />
        <div className="absolute py-2 px-5 border-2 bg-white border-primary rounded top-8 opacity-0 hidden group-hover:opacity-100 group-hover:top-15 group-hover:block transition-all">
          <ul className="text-black text-nowrap flex flex-col gap-2">
            {orderLinks.map((e) => (
              <Link
                key={e.path}
                href={`${e.path}`}
                className={`${
                  path === e.path
                    ? "navAfterLineAccent"
                    : "navAfterLineHoverAccent"
                } flex items-center gap-2`}
              >
                <e.icon className="text-accent" /> {e.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Link
        href={"/gecko-baru"}
        className={`${
          path === "/gecko-baru"
            ? "navAfterLineAccent"
            : "navAfterLineHoverAccent"
        } flex items-center gap-1 cursor-pointer h-fit`}
      >
        <AiOutlineInfoCircle className="text-accent" /> Gecko Baru?
      </Link>
      <div className="flex group items-center gap-1 relative h-full ">
        <GiGecko className="text-accent" /> Tentang Gecko <MdArrowDropDown />
        <div className="absolute py-2 px-5 border-2 bg-white border-primary rounded top-8 opacity-0 hidden group-hover:opacity-100 group-hover:top-15 group-hover:block transition-all">
          <ul className="text-black text-nowrap flex flex-col gap-2">
            {TentangGeckoLinks.map((e) => (
              <Link
                key={e.path}
                href={e.path}
                className={`${
                  path === e.path
                    ? "navAfterLineAccent"
                    : "navAfterLineHoverAccent"
                } flex items-center gap-2`}
              >
                <e.icon className="text-accent" /> {e.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-1 cursor-pointer navAfterLineHoverAccent h-fit">
        <AiFillPhone className="text-accent" /> Kontak
      </div>
    </div>
  );
};

export default DesktopMenu;
