import React from "react";

const AboutView = () => {
  return (
    <div className="flex justify-between items-center h-150 gap-5">
      <div className="flex flex-col flex-grow h-full gap-5 w-full md:max-w-[60%]">
        <div className="text-black text-lg bg-accent p-5 pt-12 rounded-4xl relative">
          <div className="font-coolvetica tracking-widest rounded-2xl absolute -top-7 lg:-top-10 md:left-12 bg-primary px-8 lg:px-12 py-3 text-lg sm:text-3xl lg:text-5xl text-white text-nowrap">
            Tentang Kami
          </div>
          <p className="text-sm md:text-lg text-justify px-5">
            Gamareptile berdiri pada bulan Juli tahun 2023 yang menjual berbagai
            hewan-hewan exotis yang berfokus pada hewan{" "}
            <span className="font-black">“Leopard Gecko”</span>. Gamareptile
            berdiri bukan hanya sekedar menjual leopard gecko, tetapi membuka
            edukasi seputar leopard gecko dan mengenalkan leopard gecko ke
            seluruh dunia.
          </p>
        </div>
        <div className="flex-grow w-full bg-accent rounded-[50px]  border-4 border-primary"></div>
      </div>
      <div className="bg-accent h-full flex-grow rounded-[50px] border-4 border-primary hidden md:block"></div>
    </div>
  );
};

export default AboutView;
