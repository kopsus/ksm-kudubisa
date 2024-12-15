import sampahIMG from "@/assets/alumunium.avif";
import sampahIMG2 from "@/assets/plastik.webp";
import sampahIMG3 from "@/assets/besi.jpg";
import sampahIMG4 from "@/assets/karet.jpg";
import sampahIMG5 from "@/assets/tutup_botol_plastik.jpg";
import { TypeRiwayat } from "@/api/riwayat/type";

const dataRiwayat: TypeRiwayat[] = [
  {
    id: "1",
    name: "Alumunium",
    price: 10000,
    image: sampahIMG,
    jenis: "dipilah",
    quantity: 5,
    status: "Paid",
  },
  {
    id: "2",
    name: "Besi",
    price: 12000,
    image: sampahIMG3,
    jenis: "dipilah",
    quantity: 5,
    status: "Unpaid",
  },
  {
    id: "3",
    name: "Karet",
    price: 8000,
    image: sampahIMG4,
    jenis: "dipilah",
    quantity: 5,
    status: "Pending",
  },
  {
    id: "4",
    name: "Plastik",
    price: 5000,
    image: sampahIMG2,
    jenis: "dipilah",
    quantity: 5,
    status: "Paid",
  },
  {
    id: "6",
    name: "Karet",
    price: 8000,
    image: sampahIMG4,
    jenis: "dipilah",
    quantity: 5,
    status: "Unpaid",
  },
  {
    id: "7",
    name: "Plastik",
    price: 5000,
    image: sampahIMG2,
    jenis: "dipilah",
    quantity: 5,
    status: "Pending",
  },
  {
    id: "5",
    name: "Tutup Botol Plastik",
    price: 5000,
    image: sampahIMG5,
    jenis: "belum",
    quantity: 5,
    status: "Paid",
  },
];

const statusesRiwayat = [
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Paid",
    label: "Paid",
  },
  {
    value: "Unpaid",
    label: "Unpaid",
  },
];

export { dataRiwayat, statusesRiwayat };
