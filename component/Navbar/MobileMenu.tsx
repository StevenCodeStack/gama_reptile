"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { mobileLinks } from "./Links";
import Link from "next/link";

const MobileMenu = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <BiMenu
        className="text-4xl cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <div
        className={`${
          open ? "right-0" : "right-[-100%]"
        } absolute top-0 bg-accent h-fit max-h-[100dvh] w-[60dvw] transition-all border-4 border-primary`}
      >
        <CgClose
          className="absolute top-3 right-3 text-4xl cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <div className="hideScrollbar h-[100%] flex flex-col justify-center overflow-y-auto pt-5">
          <ul className="p-5 flex flex-col justify-center gap-4 text-lg">
            {mobileLinks.map((e) => (
              <Link
                onClick={() => setOpen(false)}
                key={e.path}
                href={e.path}
                className={`${
                  path === e.path
                    ? "navAfterLinePrimary"
                    : "navAfterLineHoverPrimary"
                }`}
              >
                <div className="flex items-center gap-2 text-primary">
                  <e.icon className="" />
                  {e.label}
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
