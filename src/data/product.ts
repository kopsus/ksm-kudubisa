import sampahIMG from "@/assets/alumunium.avif";
import sampahIMG2 from "@/assets/plastik.webp";
import sampahIMG3 from "@/assets/besi.jpg";
import sampahIMG4 from "@/assets/karet.jpg";
import sampahIMG5 from "@/assets/tutup_botol_plastik.jpg";
import { TypeProducts } from "@/api/products";

const dataProducts: TypeProducts[] = [
  {
    id: "1",
    name: "Alumunium",
    price: 10000,
    image: sampahIMG,
    jenis: "dipilah",
  },
  {
    id: "2",
    name: "Besi",
    price: 12000,
    image: sampahIMG3,
    jenis: "dipilah",
  },
  {
    id: "3",
    name: "Karet",
    price: 8000,
    image: sampahIMG4,
    jenis: "dipilah",
  },
  {
    id: "4",
    name: "Plastik",
    price: 5000,
    image: sampahIMG2,
    jenis: "dipilah",
  },
  {
    id: "5",
    name: "Tutup Botol Plastik",
    price: 5000,
    image: sampahIMG5,
    jenis: "belum",
  },
];

export { dataProducts };
