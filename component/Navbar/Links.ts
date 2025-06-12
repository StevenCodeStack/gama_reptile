import { FaNotesMedical, FaVenusMars } from "react-icons/fa";
import { GiDna2, GiGearStickPattern, GiHealthNormal } from "react-icons/gi";
import { SiMicrogenetics } from "react-icons/si";

export const TentangGeckoLinks = [
  {
    path: "/perawatan",
    label: "Perawatan",
    icon: GiHealthNormal,
  },
  {
    path: "/genetik-resesif",
    label: "Genetik Resesif",
    icon: SiMicrogenetics,
  },
  {
    path: "/pattern",
    label: "Pattern",
    icon: GiGearStickPattern,
  },
  {
    path: "/line-albino",
    label: "Line Albino",
    icon: GiDna2,
  },
  {
    path: "/kelamin",
    label: "Kelamin",
    icon: FaVenusMars,
  },
  {
    path: "/penyakit",
    label: "Penyakit",
    icon: FaNotesMedical,
  },
];
