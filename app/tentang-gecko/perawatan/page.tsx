import AlasKandang from "@/component/TentangGecko/Perawatan/AlasKandang";
import GiziTambahan from "@/component/TentangGecko/Perawatan/GiziTambahan";
import InfoComponent from "@/component/TentangGecko/Perawatan/InfoComponent";
import Kandang from "@/component/TentangGecko/Perawatan/Kandang";
import Pakan from "@/component/TentangGecko/Perawatan/Pakan";
import TentangGecko from "@/component/TentangGecko/Perawatan/Penjelasan";
import SuhuIdeal from "@/component/TentangGecko/Perawatan/SuhuIdeal";
import Waterdish from "@/component/TentangGecko/Perawatan/Waterdish";
import React from "react";

const perawatanData = [
  { title: "PENJELASAN", child: TentangGecko },
  { title: "KANDANG", child: Kandang },
  { title: "WATERDISH", child: Waterdish },
  { title: "ALAS KANDANG", child: AlasKandang },
  { title: "SUHU IDEAL", child: SuhuIdeal },
  { title: "PAKAN", child: Pakan },
  { title: "GIZI TAMBAHAN", child: GiziTambahan },
];

const page = () => {
  return (
    <div className="">
      <h1 className="text-center w-fit tracking-widest mx-auto bg-primary font-coolvetica font-bold px-10 py-3 text-xl text-nowrap md:text-4xl rounded-2xl">
        PERAWATAN LEOPARD GECKO
      </h1>
      <div className="flex flex-col gap-10 mt-10">
        {perawatanData.map((e, i) => (
          <InfoComponent key={i} even={!(i % 2 === 0)} title={e.title}>
            <e.child />
          </InfoComponent>
        ))}
      </div>
    </div>
  );
};

export default page;
