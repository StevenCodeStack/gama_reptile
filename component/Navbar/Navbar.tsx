import React from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Logo from "@/public/images/gama_reptile_logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-primary h-20 px-2 md:px-10 lg:px-20 fixed w-full z-10">
      {/* Logo */}
      <div className="relative h-full w-20">
        <Image className="object-contain" fill alt="" src={Logo} />
      </div>
      {/* Menu */}
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

export default Navbar;
