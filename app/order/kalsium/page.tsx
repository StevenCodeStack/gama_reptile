import BackButton from "@/component/UI/BackButton";
import React from "react";

const page = () => {
  return (
    <>
      <BackButton>{`<`} KEMBALI KE AVAILABLE</BackButton>
      <div className="flex flex-col md:flex-row justify-between mt-5 gap-10">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-full max-w-[40%]">
          <div className="relative overflow-hidden border-6 border-primary rounded-2xl h-75 md:h-100">
            <div className="bg-accent w-full h-full"></div>
            <h1 className=" text-center py-3 bg-primary rounded-t-2xl font-bold text-xl text-nowrap absolute bottom-0 w-full">
              Kalsium Premium 200G
            </h1>
            <h1 className="absolute right-3 bottom-17 bg-primary rounded-xl px-2 py-1 font-bold text-2xl">
              25K
            </h1>
          </div>
          <div className="relative overflow-hidden border-6 border-primary rounded-2xl h-75 md:h-100">
            <div className="bg-accent w-full h-full"></div>
            <h1 className=" text-center py-3 bg-primary rounded-t-2xl font-bold text-xl text-nowrap absolute bottom-0 w-full">
              Kalsium Premium 100G
            </h1>
            <h1 className="absolute right-3 bottom-17 bg-primary rounded-xl px-2 py-1 font-bold text-2xl">
              25K
            </h1>
          </div>
          <div className="relative overflow-hidden border-6 border-primary rounded-2xl h-75 md:h-100">
            <div className="bg-accent w-full h-full"></div>
            <h1 className=" text-center py-3 bg-primary rounded-t-2xl font-bold text-xl text-nowrap absolute bottom-0 w-full">
              Kalsium Biasa 70G
            </h1>
            <h1 className="absolute right-3 bottom-17 bg-primary rounded-xl px-2 py-1 font-bold text-2xl">
              25K
            </h1>
          </div>
        </div>
        <div className="flex-grow">
          <div className="bg-accent rounded-2xl py-10 px-5 relative">
            <h1 className="font-coolvetica absolute tracking-widest -top-5 right-5 text-nowrap bg-primary px-20 py-2 rounded-2xl md:text-2xl">
              MANFAAT
            </h1>
            <ul className="text-black list-disc px-5 text-sm sm:text-lg md:text-xl">
              <li>Mencegah MBD (Metabolic Bone Deases)</li>
              <li>Membantu proses pertumbuhan</li>
              <li>Mencegah penyakit pada hewan</li>
              <li>Mengobati mencret</li>
              <li>Meningkatkan produktivitas indukan</li>
              <li>Menyempurnakan kebutuhan kalsium</li>
              <li>Mencapai pertumbuhan ideal</li>
              <li>Sehatkan sperma/fertlisasi</li>
              <li>
                Dengan adanya multivitamin lengkap untuk memperkuat antibodi,
                anti virus, nafsu makan
              </li>
              <li>Membantu proses penyembuhan Metabolic Bone Disease (MBD)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
