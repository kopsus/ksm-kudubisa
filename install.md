# Installasi dan Menjalankan Aplikasi

Dokumen ini menjelaskan cara setup lokal dan produksi untuk aplikasi Next.js + Prisma (MySQL) ini.

## Prasyarat

- Node.js 18.18+ (disarankan Node 20+)
- npm 9+ (atau pnpm/yarn/bun, contoh di bawah memakai npm)
- MySQL 8+ (atau kompatibel yang didukung Prisma)
- Git

## Langkah Setup

1) Clone repo dan masuk ke folder proyek

   git clone <repo-url>
   cd ksm-kudubisa

2) Salin environment dan isi variabel

   cp .env.example .env

   Isi nilai berikut:
   - `DATABASE_URL` contoh: `mysql://user:password@localhost:3306/ksmkudubisa`
   - `JWT_SECRET` string acak panjang, contoh: `openssl rand -hex 32`
   - `NEXT_PUBLIC_BASE_URL` contoh lokal: `http://localhost:3000`
   - `NEXT_PUBLIC_BASE_URL_API` contoh lokal: `http://localhost:3000/api`

3) Install dependensi

   npm install

4) Generate Prisma Client dan migrasi database

   npx prisma generate
   npx prisma migrate dev --name init

5) (Opsional) Seed data awal

   npx prisma db seed

   Kredensial hasil seeding (password semua: `123456`):
   - Admin: `admin`
   - Agen: `agen01`
   - Pengepul: `pengepul01`
   - Masyarakat: `warga01`

6) Jalankan mode development

   npm run dev

   Buka `http://localhost:3000` di browser.

## Build Produksi

1) Build

   npm run build

2) Start server produksi

   npm start

Pastikan environment produksi berisi variabel `.env` yang sama (DATABASE_URL, JWT_SECRET, NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_BASE_URL_API).

## Catatan Upload File

- Endpoint `POST /api/upload` membutuhkan role Admin.
- File disimpan di `public/uploads` (otomatis dibuat jika belum ada).
- Validasi: hanya PNG/JPEG/GIF/WebP, ukuran maksimal 1MB. Response: `{ data: { id, url } }`.

## RBAC & Keamanan (ringkas)

- Endpoint sensitif memakai verifikasi JWT cookie `accessToken` dan pengecekan role/ownership.
- Aturan ringkas:
  - Users list: Admin saja.
  - Users detail/update: pemilik atau Admin. Delete: Admin.
  - Products/Gallery create/update/delete: Admin. Baca publik.
  - Transactions: Admin semua; Masyarakat hanya miliknya; Agen (RT sama); Pengepul setelah di-update Agen.

Detail tambahan tersedia di README.md bagian “Security Hardening”.

## Troubleshooting

- “Prisma cannot connect”: cek `DATABASE_URL` dan koneksi MySQL (port 3306, user/password, database ada).
- “Invalid token”: pastikan `JWT_SECRET` terisi sama di server dan middleware.
- Gambar tidak tampil: pastikan URL gambar mulai dengan `/uploads/` atau ada di `public/images/...`.
- Base URL salah: pastikan `NEXT_PUBLIC_BASE_URL` dan `NEXT_PUBLIC_BASE_URL_API` menunjuk domain/port yang benar.

