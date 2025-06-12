"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const MobileMenu = () => {
  const path = usePathname();
  const [open, setOpen] = useState(true);
  console.log(path);

  return (
    <div className="md:hidden">
      <BiMenu
        className="text-4xl cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <div
        className={`${
          open ? "right-0" : "right-[-100%]"
        } absolute top-0 bg-accent h-[100dvh] w-[60dvw] transition-all border-4 border-primary`}
      >
        <CgClose
          className="absolute top-3 right-3 text-4xl cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <div className="h-[90%] flex flex-col justify-center">
          <ul className="px-5 flex flex-col justify-center gap-5 py-5 text-lg">
            <a href="#" className={`${path === "/" && "navAfterLine"}`}>
              Home
            </a>
            <a
              href="#"
              className={`${path === "/cara-order" && "navAfterLine"}`}
            >
              Cara Order
            </a>
            <a href="#" className={`${path === "/tersedia" && "navAfterLine"}`}>
              Tersedia
            </a>
            <a
              href="#"
              className={`${path === "/gecko-baru" && "navAfterLine"}`}
            >
              Gecko Baru?
            </a>
            <a
              href="#"
              className={`${
                path === "/tentang-kami/perawatan" && "navAfterLine"
              }`}
            >
              Perawatan
            </a>
            <a
              href="#"
              className={`${
                path === "/tentang-kami/genetik-resesif" && "navAfterLine"
              }`}
            >
              Genetik Resesif
            </a>
            <a
              href="#"
              className={`${
                path === "/tentang-kami/pattern" && "navAfterLine"
              }`}
            >
              Pattern
            </a>
            <a
              href="#"
              className={`${
                path === "/tentang-kami/line-albino" && "navAfterLine"
              }`}
            >
              Line Albino
            </a>
            <a
              href="#"
              className={`${
                path === "/tentang-kami/kelamin" && "navAfterLine"
              }`}
            >
              Kelamin
            </a>
            <a
              href="#"
              className={`${
                path === "/tentang-kami/penyakit" && "navAfterLine"
              }`}
            >
              Penyakit
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
