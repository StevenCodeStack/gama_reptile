import React from "react";

const page = () => {
  return (
    <div className="pt-10">
      {/* Top */}
      <div className="bg-accent rounded-4xl p-8 px-10 relative">
        <h1 className="absolute font-coolvetica tracking-widest -top-5 md:-top-7 lg:-top-10 left-1/2 -translate-x-1/2 text-xl md:text-3xl text-nowrap bg-primary py-2 px-5 md:py-3 md:px-10 lg:px-25 lg:py-5 rounded-2xl">
          GECKO BARU DATENG?
        </h1>
        <ul className="list-decimal text-black md:text-lg lg:text-xl lg:py-5 md:px-5">
          <li className="text-justify">
            Pastikan membuka paket dengan video unboxing no cut no edit untuk
            klaim garansi.
          </li>
          <li className="text-justify">
            Setelah gecko kalian aman, siapkan kandang untuk tempat tinggal
            leopard gecko kalian.
          </li>
          <li className="text-justify">
            Jangan mainkan dan beri makan leopard gecko kalian setelah sampai,
            adaptasikan 2-3 hari dikandang dan sediakan air.
          </li>
          <li className="text-justify">
            Setelah 2-3 hari, leopard gecko kesayangan kalian sudah bisa
            dimainkan ataupun diberi makan.
          </li>
        </ul>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-8 md:mt-5 w-full h-100">
        <div className="rounded-4xl bg-accent border-6 border-primary min-h-50 w-full h-full"></div>
        <div className="rounded-4xl bg-accent border-6 border-primary min-h-50 w-full h-full"></div>
      </div>
    </div>
  );
};

export default page;
