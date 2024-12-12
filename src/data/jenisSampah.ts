import sampahOrganik from "@/assets/sampah_organik.webp";
import sampahAnorganik from "@/assets/alumunium.avif";
import sampahB3 from "@/assets/sampahB3.jpg";

const dataJenisSampah = [
  {
    id: "1",
    title: "Sampah Organik",
    desc: "Sampah organik adalah sampah yang berasal dari makhluk hidup dan dapat terurai dengan mudah oleh alam.",
    image: sampahOrganik,
    listSampah: [
      "Sisa makanan",
      "Daun-daun kering",
      "Kulit buah dan sayuran",
      "Sisa potongan kayu",
      "Kertas",
    ],
  },
  {
    id: "2",
    title: "Sampah Anorganik",
    desc: "Sampah anorganik adalah sampah yang tidak dapat terurai secara alami dan umumnya dibuat dari bahan yang tidak berasal dari makhluk hidup.",
    image: sampahAnorganik,
    listSampah: ["Plastik", "Botol kaca", "Kaleng", "Kaca pecah", "Besi"],
  },
  {
    id: "3",
    title: "Sampah B3",
    desc: "Sampah B3 (Bahan Berbahaya dan Beracun) adalah sampah yang mengandung bahan berbahaya yang bisa menimbulkan dampak buruk bagi kesehatan dan lingkungan.",
    image: sampahB3,
    listSampah: [
      "Baterai bekas",
      "Limbah obat-obatan kadaluarsa",
      "Bahan kimia rumah tangga berbahaya",
      "Lampu neon bekas",
      "Pestisida bekas",
    ],
  },
];

export { dataJenisSampah };
