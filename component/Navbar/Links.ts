import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  FaBoxOpen,
  FaHome,
  FaNotesMedical,
  FaReceipt,
  FaVenusMars,
} from "react-icons/fa";
import { GiDna2, GiGearStickPattern, GiHealthNormal } from "react-icons/gi";
import { SiMicrogenetics } from "react-icons/si";

export const mobileLinks = [
  {
    path: "/",
    label: "Home",
    icon: FaHome,
  },
  { path: "/order/cara-order", label: "Cara Order", icon: FaReceipt },
  { path: "/order/tersedia", label: "Tersedia", icon: FaBoxOpen },
  {
    path: "/gecko-baru",
    label: "Gecko Baru?",
    icon: AiOutlineInfoCircle,
  },
  {
    path: "/tentang-gecko/perawatan",
    label: "Perawatan",
    icon: GiHealthNormal,
  },
  {
    path: "/tentang-gecko/genetik-resesif",
    label: "Genetik Resesif",
    icon: SiMicrogenetics,
  },
  {
    path: "/tentang-gecko/pattern",
    label: "Pattern",
    icon: GiGearStickPattern,
  },
  {
    path: "/tentang-gecko/line-albino",
    label: "Line Albino",
    icon: GiDna2,
  },
  {
    path: "/tentang-gecko/kelamin",
    label: "Kelamin",
    icon: FaVenusMars,
  },
  {
    path: "/tentang-gecko/penyakit",
    label: "Penyakit",
    icon: FaNotesMedical,
  },
];

export const TentangGeckoLinks = [
  {
    path: "/tentang-gecko/perawatan",
    label: "Perawatan",
    icon: GiHealthNormal,
  },
  {
    path: "/tentang-gecko/genetik-resesif",
    label: "Genetik Resesif",
    icon: SiMicrogenetics,
  },
  {
    path: "/tentang-gecko/pattern",
    label: "Pattern",
    icon: GiGearStickPattern,
  },
  {
    path: "/tentang-gecko/line-albino",
    label: "Line Albino",
    icon: GiDna2,
  },
  {
    path: "/tentang-gecko/kelamin",
    label: "Kelamin",
    icon: FaVenusMars,
  },
  {
    path: "/tentang-gecko/penyakit",
    label: "Penyakit",
    icon: FaNotesMedical,
  },
];

export const orderLinks = [
  { path: "/order/cara-order", label: "Cara Order", icon: FaReceipt },
  { path: "/order/tersedia", label: "Tersedia", icon: FaBoxOpen },
];
