import {
  PrismaClient,
  EnumRole,
  EnumStatus,
  EnumJenisSampah,
} from "@prisma/client";
import bcrypt from "bcryptjs";

// Inisialisasi Prisma Client
const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  // 2. Enkripsi password
  const hashedPassword = await bcrypt.hash("123456", 10);

  // 3. Buat Users dengan berbagai role
  const admin = await prisma.user.create({
    data: {
      username: "admin",
      namaLengkap: "Administrator",
      noTlp: "081234567890",
      password: hashedPassword,
      role: EnumRole.Admin,
    },
  });

  const agen = await prisma.user.create({
    data: {
      username: "agen01",
      namaLengkap: "Agen Satu",
      noTlp: "081234567891",
      password: hashedPassword,
      role: EnumRole.Agen,
      rt: "01",
      rw: "02",
    },
  });

  const pengepul = await prisma.user.create({
    data: {
      username: "pengepul01",
      namaLengkap: "Pengepul Satu",
      noTlp: "081234567892",
      password: hashedPassword,
      role: EnumRole.Pengepul,
    },
  });

  const masyarakat = await prisma.user.create({
    data: {
      username: "warga01",
      namaLengkap: "Warga Masyarakat Satu",
      noTlp: "081234567893",
      password: hashedPassword,
      role: EnumRole.Masyarakat,
      rt: "03",
      rw: "04",
    },
  });
  console.log("Users created.");

  // 4. Buat Produk
  const produk1 = await prisma.produk.create({
    data: {
      product_name: "Botol Plastik PET (Bening)",
      price: 3000,
      image: "/images/produk/botol-pet.jpg",
      jenis: EnumJenisSampah.SudahDiPilah,
      jenisId: "1", // jenisId bisa disesuaikan atau dihapus
    },
  });

  const produk2 = await prisma.produk.create({
    data: {
      product_name: "Kardus Bekas",
      price: 1500,
      image: "/images/produk/kardus.jpg",
      jenis: EnumJenisSampah.SudahDiPilah,
      jenisId: "1",
    },
  });

  const produk3 = await prisma.produk.create({
    data: {
      product_name: "Sampah Campur",
      price: 500,
      image: "/images/produk/sampah-campur.jpg",
      jenis: EnumJenisSampah.BelumDiPilah,
      jenisId: "2",
    },
  });
  console.log("Produk created.");

  // 5. Buat Gallery
  await prisma.gallery.createMany({
    data: [
      { image: "/images/gallery/kegiatan1.jpg" },
      { image: "/images/gallery/kegiatan2.jpg" },
      { image: "/images/gallery/kegiatan3.jpg" },
    ],
  });
  console.log("Gallery created.");

  // 6. Buat Transaksi dan TransaksiProduk secara bersamaan (Nested Write)
  const transaksi1 = await prisma.transaksi.create({
    data: {
      userId: masyarakat.id, // Menghubungkan ke user masyarakat
      statusUser: EnumStatus.Pending,
      statusAgen: EnumStatus.Pending,
      // Membuat produk yang terkait dengan transaksi ini
      TransaksiProduk: {
        create: [
          {
            produkId: produk1.id, // Menghubungkan ke produk Botol Plastik
            quantity: 5, // Jumlah: 5 kg
          },
          {
            produkId: produk2.id, // Menghubungkan ke produk Kardus
            quantity: 10, // Jumlah: 10 kg
          },
        ],
      },
    },
  });

  const transaksi2 = await prisma.transaksi.create({
    data: {
      userId: masyarakat.id,
      statusUser: EnumStatus.Process,
      statusAgen: EnumStatus.Pending,
      TransaksiProduk: {
        create: [
          {
            produkId: produk3.id, // Menghubungkan ke produk Sampah Campur
            quantity: 15, // Jumlah: 15 kg
          },
        ],
      },
    },
  });
  console.log("Transaksi created.");

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Tutup koneksi Prisma
    await prisma.$disconnect();
  });
