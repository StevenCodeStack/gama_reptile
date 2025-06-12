import React from "react";
import TrTable from "@/component/UI/TrTable";

const penjelasanData = [
  { title: "Nama Hewan", value: "Leopard Gecko" },
  { title: "Nama Ilmiah", value: "Eublepharis Macularius" },
  { title: "Panjang Umur", value: "10-15 Tahun" },
  { title: "Ukuran Umum", value: "Dewasa 17-25cm" },
  {
    title: "Pakan",
    value: "Serangga (Jangkrik, Ulat Hongkong, Ulat Jerman, Kecoa Dubia)",
  },
];

const Penjelasan = () => {
  return (
    <table>
      <tbody>
        {penjelasanData.map((e) => (
          <TrTable key={e.title + e.value} title={e.title} value={e.value} />
        ))}
      </tbody>
    </table>
  );
};

export default Penjelasan;
