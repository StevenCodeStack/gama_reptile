import BackButton from "@/component/UI/BackButton";
import React from "react";

const page = () => {
  return (
    <>
      <BackButton>{`<`} KEMBALI KE AVAILABLE</BackButton>
      <div className="flex flex-col lg:flex-row justify-between mt-5 gap-10">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 w-full max-w-[40%]">
          <div className="flex flex-col gap-5">
            <div className="bg-accent w-full border-6 border-primary rounded-2xl aspect-square relative">
              <h1 className="absolute right-3 bottom-3 bg-primary rounded-xl px-2 py-1 font-bold text-2xl">
                75K
              </h1>
            </div>
            <h1 className="font-coolvetica tracking-widest text-center py-3 bg-primary rounded-2xl text-3xl w-full">
              Kalsium Premium 200G
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-accent w-full border-6 border-primary rounded-2xl aspect-square relative">
              <h1 className="absolute right-3 bottom-3 bg-primary rounded-xl px-2 py-1 font-bold text-2xl">
                39K
              </h1>
            </div>
            <h1 className="font-coolvetica tracking-widest text-center py-3 bg-primary rounded-2xl text-3xl w-full">
              Kalsium Premium 100G
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-accent w-full border-6 border-primary rounded-2xl aspect-square relative">
              <h1 className="absolute right-3 bottom-3 bg-primary rounded-xl px-2 py-1 font-bold text-2xl">
                15K
              </h1>
            </div>
            <h1 className="font-coolvetica tracking-widest text-center py-3 bg-primary rounded-2xl text-3xl w-full">
              Kalsium Biasa 70G
            </h1>
          </div>
        </div>
        <div className="flex-grow lg:max-w-[60%] flex flex-col gap-10">
          <Manfaat />
          <CaraPakai />
          <Perbedaan />
        </div>
      </div>
    </>
  );
};

const Manfaat = () => {
  return (
    <div className="bg-accent rounded-2xl py-6 md:py-10 px-5 relative">
      <h1 className="font-coolvetica absolute tracking-widest -top-5 right-5 text-nowrap bg-primary px-10 md:px-20 py-2 rounded-2xl md:text-2xl">
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
          Dengan adanya multivitamin lengkap untuk memperkuat antibodi, anti
          virus, nafsu makan
        </li>
        <li>Membantu proses penyembuhan Metabolic Bone Disease (MBD)</li>
      </ul>
    </div>
  );
};

const CaraPakai = () => {
  return (
    <div className="bg-accent rounded-2xl py-6 md:py-10 px-5 relative">
      <h1 className="font-coolvetica absolute tracking-widest -top-5 right-5 text-nowrap bg-primary px-10 md:px-20 py-2 rounded-2xl md:text-2xl">
        CARA PAKAI
      </h1>
      <h1 className="font-bold text-black md:text-lg">
        Menaburkan Kalsium pada Serangga Pakan :
      </h1>
      <ul className="text-black list-disc px-5 text-sm sm:text-lg md:text-xl">
        <li>Siapkan serangga pakan yang akan kamu berikan ke reptile kamu.</li>
        <li>Masukkan serangga ke dalam wadah kecil yang bersih.</li>
        <li>
          Taburkan sedikit bubuk kalsium ke dalam wadah tersebut. Jangan terlalu
          banyak, secukupnya saja hingga serangga terlihat sedikit berbalut
          bubuk putih.
        </li>
        <li>
          Kocok perlahan wadah hingga serangga terlapisi kalsium secara merata.
        </li>
        <li>
          Langsung berikan serangga yang sudah berbalut kalsium ini ke reptile
          kamu.
        </li>
      </ul>
      <h1 className="font-bold text-black md:text-lg mt-5">
        Menyediakan Kalsium di Feeding Dish:
      </h1>
      <ul className="text-black list-disc px-5 text-sm sm:text-lg md:text-xl">
        <li>Tuangkan sedikit bubuk kalsium ke dalam wadah kecil.</li>
        <li>Letakkan wadah di salah satu sudut kandang gecko kamu.</li>
        <li>Biarkan gecko menjilat kalsium sesuai kebutuhannya.</li>
        <li>Kalsium harus selalu tersedia.</li>
      </ul>
    </div>
  );
};

const Perbedaan = () => {
  return (
    <div className="bg-accent rounded-2xl py-6 md:py-10 px-5 relative">
      <h1 className="font-coolvetica absolute tracking-widest -top-5 right-5 text-nowrap bg-primary px-10 md:px-20 py-2 rounded-2xl md:text-2xl">
        Perbedaan
      </h1>
      <p className="text-black text-sm sm:text-lg md:text-xl text-justify">
        Kalsium dengan kandungan D3 lebih baik daripada kalsium biasa. Kenapa?
        Vitamin D3 ini sangat vital karena berfungsi sebagai &quot;kunci&quot;
        yang membuka pintu agar kalsium bisa diserap oleh tubuh gecko dari
        makanan.
      </p>
      <p className="text-black text-sm sm:text-lg md:text-xl mt-2 text-justify">
        Tanpa D3, kalsium yang dimakan gecko akan sulit diserap dan bisa
        terbuang sia-sia.
      </p>
    </div>
  );
};

export default page;
