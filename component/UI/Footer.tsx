import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="py-7 bg-primary flex justify-center items-center gap-10 md:gap-20">
      <a href="https://www.youtube.com/@gamareptile">
        <div className="p-2 bg-white rounded-full">
          <FaYoutube className="text-4xl text-primary" />
        </div>
      </a>
      <a href="https://www.instagram.com/gamareptile?igsh=MXMxY284N3hwbHhkaQ==">
        <div className="p-2 bg-white rounded-full">
          <FaInstagram className="text-4xl text-primary" />
        </div>
      </a>
      <a href="http://www.tiktok.com/@gamareptile">
        <div className="p-2 bg-white rounded-full">
          <FaTiktok className="text-4xl text-primary" />
        </div>
      </a>
    </div>
  );
};

export default Footer;
