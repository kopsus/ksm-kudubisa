import sampahOrganik from "@/assets/sampah_organik.webp";
import sampahAnorganik from "@/assets/alumunium.avif";
import sampahB3 from "@/assets/sampahB3.jpg";

const dataJenisSampah = [
  {
    id: "1",
    title: "Sampah Organik",
    desc: "Sampah organik adalah Sampah yang berasal dari makhluk hidup dan dapat terurai dengan mudah oleh alam.",
    image: sampahOrganik,
    listSampah: [
      "Sisa makanan",
      "Daun-daun kering",
      "Kulit buah dan sayuran",
      "Sisa potongan kayu",
    ],
  },
  {
    id: "2",
    title: "Sampah Anorganik",
    desc: "Sampah anorganik adalah Sampah yang berasal dari bahan buatan manusia dan tidak dapat terurai secara alami.",
    image: sampahAnorganik,
    listSampah: ["Plastik", "kaca", "Logam", "Botol Plastik", "Kaleng"],
  },
  {
    id: "3",
    title: "Sampah B3",
    desc: "Sampah B3 (Bahan Berbahaya dan Beracun) adalah Sampah yang mengandung bahan berbahaya yang dapat mencemari lingkungan dan membahayakan kesehatan.",
    image: sampahB3,
    listSampah: [
      "Limbah medis",
      "Batrai",
      "Oli Bekas",
      "pestisida",
      "bahan kimia beracun",
    ],
  },
];

export { dataJenisSampah };
