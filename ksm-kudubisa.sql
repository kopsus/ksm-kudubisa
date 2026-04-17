-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 16, 2026 at 05:33 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ksm-kudubisa`
--

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `image`, `created_at`, `updated_at`) VALUES
('e069f7d4-43b3-4f27-9529-85d1ab466182', '/uploads/1776130934452_racing-motor-200cc-small-displacement46518876378.webp', '2026-04-14 08:42:14.544', '2026-04-14 08:42:14.544');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jenis` enum('SudahDiPilah','BelumDiPilah') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `product_name`, `price`, `image`, `jenis`, `created_at`, `updated_at`) VALUES
('192ad9c5-71e2-4d21-a89b-52ca15dd233b', 'karet', 1000, '/uploads/1776184813350_lg-66ed151cd840a-blu-by-BCA.webp', 'SudahDiPilah', '2026-04-14 23:40:13.456', '2026-04-14 23:40:13.456'),
('573549f7-6107-47fa-a4cb-d07fe52fc80a', 'kardus', 20000, '/uploads/1776184088455_Logo_Gopay.svg.png', 'BelumDiPilah', '2026-04-14 23:26:11.676', '2026-04-14 23:28:50.487'),
('c2256c92-ed50-4d82-9b38-a9b7d2d3f392', 'plastik', 1000, '/uploads/1776184869958_Ketahui-Fakta-Es-Teh-Manis.jpg', 'SudahDiPilah', '2026-04-14 23:41:10.047', '2026-04-14 23:41:10.047'),
('cd6a4688-96aa-458d-9895-261aa501883f', 'botol kaca', 10000, '/uploads/1776184800988_ShopeePay-Horizontal2_O.png', 'SudahDiPilah', '2026-04-14 23:40:01.125', '2026-04-14 23:40:01.125'),
('d234ee01-4625-49b1-9e90-8a1875afd928', 'Sampah Campur', 1000, '/uploads/1776184831527_Digital.png', 'BelumDiPilah', '2026-04-14 23:40:31.640', '2026-04-14 23:40:31.640');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `statusUser` enum('Pending','Process','Paid','Failed') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `statusAgen` enum('Pending','Process','Paid','Failed') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updatedByRoleAgen` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updatedByRolePengepul` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updatedByAgen` enum('Masyarakat','Agen','Pengepul','Admin') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Agen',
  `updatedByPengepul` enum('Masyarakat','Agen','Pengepul','Admin') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pengepul',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id`, `userId`, `statusUser`, `statusAgen`, `updatedByRoleAgen`, `updatedByRolePengepul`, `updatedByAgen`, `updatedByPengepul`, `created_at`, `updated_at`) VALUES
('cmfc73rhv000bwxc80pbvtmyy', 'cmfc73rhb0003wxc87fr0dpvv', 'Paid', 'Process', 'Admin', 'Admin', 'Agen', 'Pengepul', '2025-09-09 06:54:32.179', '2026-04-16 10:39:05.685'),
('cmfc73ri3000gwxc8yn9ma4fg', 'cmfc73rhb0003wxc87fr0dpvv', 'Paid', 'Pending', 'Agen', NULL, 'Agen', 'Pengepul', '2025-09-09 06:54:32.188', '2025-09-11 03:59:04.174');

-- --------------------------------------------------------

--
-- Table structure for table `transaksiproduk`
--

CREATE TABLE `transaksiproduk` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaksiId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `produkId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transaksiproduk`
--

INSERT INTO `transaksiproduk` (`id`, `transaksiId`, `produkId`, `quantity`, `created_at`, `updated_at`) VALUES
('10ccf165-30ce-4b3d-a09c-37041d222004', 'cmfc73rhv000bwxc80pbvtmyy', 'cd6a4688-96aa-458d-9895-261aa501883f', 2, '2026-04-16 10:38:50.949', '2026-04-16 10:38:50.949'),
('1b3c035d-3c3e-4361-925f-69facdba5c4c', 'cmfc73rhv000bwxc80pbvtmyy', 'd234ee01-4625-49b1-9e90-8a1875afd928', 1, '2026-04-16 10:38:50.949', '2026-04-16 10:38:50.949'),
('23be2b58-8454-4de6-b660-f4b665a6c7c3', 'cmfc73rhv000bwxc80pbvtmyy', '192ad9c5-71e2-4d21-a89b-52ca15dd233b', 1, '2026-04-16 10:38:50.943', '2026-04-16 10:38:50.943'),
('70620bb2-28ef-4744-b9bb-c05a7b7ac4c8', 'cmfc73rhv000bwxc80pbvtmyy', '573549f7-6107-47fa-a4cb-d07fe52fc80a', 1, '2026-04-16 10:38:50.947', '2026-04-16 10:38:50.947'),
('e5d0914b-d422-4f98-9618-03cc275d5ded', 'cmfc73rhv000bwxc80pbvtmyy', 'c2256c92-ed50-4d82-9b38-a9b7d2d3f392', 2, '2026-04-16 10:38:50.948', '2026-04-16 10:38:50.948');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `namaLengkap` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `noTlp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rt` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rw` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('Masyarakat','Agen','Pengepul','Admin') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Masyarakat',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `namaLengkap`, `noTlp`, `rt`, `rw`, `password`, `role`, `created_at`, `updated_at`) VALUES
('c0fd91ca-f24e-4e37-915f-dfa36606d134', 'test', 'Gibran widodo', '08820234123', '01', '01', '$2b$10$7heIEGHJI1jNT4xsFXtzqOLXa7jh95nIRrlp2Ud9/CRyc.j3DmSmW', 'Agen', '2026-04-15 10:51:37.217', '2026-04-15 10:51:37.217'),
('cmfc73rgq0000wxc8l9v3ol0i', 'admin', 'Administrator', '081234567890', NULL, NULL, '$2b$10$4TcK8zZu2dyrYTptW/3lvuGgSmYtwe5SuFzuqjc/lHmAGxM1GMjKm', 'Admin', '2025-09-09 06:54:32.137', '2025-09-09 06:54:32.137'),
('cmfc73rh50001wxc8fil4ggxn', 'agen01', 'Agen Satu', '081234567891', '02', '02', '$2b$10$4TcK8zZu2dyrYTptW/3lvuGgSmYtwe5SuFzuqjc/lHmAGxM1GMjKm', 'Agen', '2025-09-09 06:54:32.154', '2025-09-11 03:21:53.020'),
('cmfc73rh80002wxc8jy99375s', 'pengepul01', 'Pengepul Satu', '081234567892', NULL, NULL, '$2b$10$4TcK8zZu2dyrYTptW/3lvuGgSmYtwe5SuFzuqjc/lHmAGxM1GMjKm', 'Pengepul', '2025-09-09 06:54:32.157', '2025-09-09 06:54:32.157'),
('cmfc73rhb0003wxc87fr0dpvv', 'warga01', 'Warga Masyarakat Satu', '081234567893', '02', '02', '$2b$10$4TcK8zZu2dyrYTptW/3lvuGgSmYtwe5SuFzuqjc/lHmAGxM1GMjKm', 'Masyarakat', '2025-09-09 06:54:32.159', '2025-09-11 03:21:10.407'),
('cmfexe3390008wxckn6sqjfo8', 'gibran', 'Henrietta Trantow', '0823114233246', '01', '02', '$2b$10$DgPYUSMfYk1nCio5qXKKQuolzrbFJ8TucoXgC97aJiKkKcjmPr0q.', 'Masyarakat', '2025-09-11 04:45:56.134', '2025-09-11 04:45:56.134');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('33ae6bf6-da38-45b0-9df7-a0a29ef945be', '8ca991842a55ccb47fdeaff5fa94f6533f45ff60e2aefcdbb6be9fa5cc6d5e59', '2025-09-09 06:54:30.802', '20250909065430_init', NULL, NULL, '2025-09-09 06:54:30.551', 1),
('d265c8ae-cfb9-4f5d-8788-28ec6d68664e', '20586a6322befc2a7da922ce699e0652091d2b99f3a1116ea5d613a254e59cd5', '2025-09-11 00:34:23.123', '20250911003423_delete_jenis_id', NULL, NULL, '2025-09-11 00:34:23.080', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Produk_product_name_key` (`product_name`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Transaksi_userId_fkey` (`userId`);

--
-- Indexes for table `transaksiproduk`
--
ALTER TABLE `transaksiproduk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TransaksiProduk_transaksiId_fkey` (`transaksiId`),
  ADD KEY `TransaksiProduk_produkId_fkey` (`produkId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_username_key` (`username`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `Transaksi_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaksiproduk`
--
ALTER TABLE `transaksiproduk`
  ADD CONSTRAINT `TransaksiProduk_produkId_fkey` FOREIGN KEY (`produkId`) REFERENCES `produk` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `TransaksiProduk_transaksiId_fkey` FOREIGN KEY (`transaksiId`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
