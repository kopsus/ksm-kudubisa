/*
  Warnings:

  - The values [Pending,Process,Paid,Failed] on the enum `Transaksi_statusAgen` will be removed. If these variants are still used in the database, this will fail.
  - The values [Pending,Process,Paid,Failed] on the enum `Transaksi_statusAgen` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `gallery` MODIFY `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `transaksi` MODIFY `statusUser` ENUM('Tertunda', 'Proses', 'Dibayar', 'Gagal') NULL,
    MODIFY `statusAgen` ENUM('Tertunda', 'Proses', 'Dibayar', 'Gagal') NULL;
