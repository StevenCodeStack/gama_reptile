import React from "react";
import HomeView from "./HomeView";
import AboutView from "./AboutView";
import Footer from "../UI/Footer";
import { FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex flex-col relative gap-10">
      <div className="px-10 pt-8 flex flex-col gap-10">
        <HomeView />
        <AboutView />
      </div>
      <Footer />
      <a
        href="https://wa.me/6285163608850"
        className="fixed bottom-5 right-0 group"
      >
        <div className="bg-primary rounded-tl-full h-15 rounded-bl-full flex justify-center gap-2 items-center pl-4 py-1">
          <FaWhatsapp className="z-10 rounded-full text-4xl overflow-visible" />
          <p className="w-0 group-hover:w-25 font-bold font-helvetica text-nowrap transition-all">
            Chat Saya!
          </p>
        </div>
      </a>
    </div>
  );
};

export default HomePage;
