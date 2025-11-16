import { useMutationProduct } from "@/api/produk/mutations";
import { uploadImage } from "@/api/upload/fetcher";
import DialogLayout from "@/components/dashboard/_global/Layouts/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useImagePreview from "@/hooks/useImagePreview";
import { storeDialog } from "@/store/dialog";
import { EnumJenisSampah } from "@prisma/client";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";

export const DialogCreate = () => {
  const [dialog, setDialog] = useAtom(storeDialog);
  const { previewUrl, setPreviewUrl, handleImageChange } = useImagePreview();
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
    setPreviewUrl("");
    setImageFile(null);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDialog((prev) => ({
      ...prev,
      data: {
        ...prev.data!,
        [name]: name === "price" ? parseFloat(value) || 0 : value,
      },
    }));
  };

  const onValueChange = (value: string) => {
    setDialog((prev) => ({
      ...prev,
      data: {
        ...prev.data!,
        jenis: value,
      },
    }));
  };

  const { serviceProduct } = useMutationProduct();

  const mutationProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Jika mode CREATE dan tidak ada gambar, hentikan proses.
    if (dialog.type === "CREATE" && !imageFile) {
      alert("Tolong pilih gambar untuk produk baru.");
      return;
    }

    try {
      let imageUrl = dialog.data?.image ?? ""; // Gunakan gambar yang sudah ada sebagai default

      // Jika ada file gambar baru yang dipilih, upload gambar tersebut.
      if (imageFile) {
        // Validasi file
        const allowedTypes = ["image/png", "image/jpeg"];
        const maxSize = 1 * 1024 * 1024; // 1MB

        if (!allowedTypes.includes(imageFile.type)) {
          alert("Hanya file PNG dan JPG yang diperbolehkan.");
          return;
        }

        if (imageFile.size > maxSize) {
          alert("Ukuran file maksimal 1MB.");
          return;
        }

        // Membuat FormData untuk upload
        const formData = new FormData();
        formData.append("file", imageFile);

        // Upload gambar ke server
        const uploadResponse = await uploadImage(formData);

        if (uploadResponse?.data?.id) {
          // SARAN: Gunakan URL absolut ke VPS Anda.
          // Contoh: const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://your-vps-ip";
          // imageUrl = `${baseUrl}/uploads/${uploadResponse.data.id}`;
          imageUrl = `/uploads/${uploadResponse.data.id}`; // Mengambil URL gambar dari response API
        } else {
          alert("Gagal meng-upload gambar.");
          return; // Hentikan proses jika upload gagal
        }
      }

      // Payload untuk produk
      const payloadProduct = {
        image: imageUrl,
        product_name: dialog.data?.product_name ?? "",
        price: dialog.data?.price ?? 0,
        jenis: dialog.data?.jenis ?? EnumJenisSampah.SudahDiPilah,
      };

      const serviceType = dialog.type === "CREATE" ? "create" : "update";
      await serviceProduct({
        type: serviceType,
        body: payloadProduct,
        id: dialog.data?.id,
      });

      closeDialog();
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Terjadi kesalahan saat meng-upload gambar.");
    }
  };

  const imageSrc = previewUrl || (dialog.data?.image ? dialog.data.image : "");

  return (
    <DialogLayout
      show={dialog.type !== "DELETE" && dialog.show}
      onHide={closeDialog}
      title={`${dialog.type === "CREATE" ? "Tambah Produk" : "Edit Produk"}`}
    >
      <form onSubmit={mutationProduct} className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-40 h-40 rounded-xl border bg-white shadow-1 overflow-hidden">
            {previewUrl || dialog.data?.image ? (
              <Image
                src={imageSrc}
                alt="Preview"
                width={0}
                height={0}
                sizes="100vw"
              />
            ) : null}
          </div>
          <Input
            type="file"
            name="image"
            onChange={(e) => {
              handleImageChange(e); // Update preview
              const file = e.target.files?.[0];
              setImageFile(file ?? null); // Set file for upload
            }}
            className="max-w-72"
          />
        </div>
        <div className="grid grid-cols-4 items-center">
          <p>Nama Barang</p>
          <Input
            required
            placeholder="Nama Barang"
            className="col-span-3"
            name="product_name"
            onChange={onInputChange}
            value={dialog.data?.product_name ?? ""}
          />
        </div>
        <div className="grid grid-cols-4 items-center">
          <p>Harga</p>
          <Input
            required
            placeholder="Harga Barang"
            type="number"
            className="col-span-3"
            name="price"
            onChange={onInputChange}
            value={dialog.data?.price !== 0 ? dialog.data?.price || "" : ""}
          />
        </div>
        <div className="grid grid-cols-4 items-center">
          <p>Jenis Penjualan</p>
          <div className="col-span-3">
            <Select
              onValueChange={onValueChange}
              name="jenis"
              value={dialog.data?.jenis ?? EnumJenisSampah.SudahDiPilah}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Jenis Penjualan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={EnumJenisSampah.BelumDiPilah}>
                  {EnumJenisSampah.BelumDiPilah}
                </SelectItem>
                <SelectItem value={EnumJenisSampah.SudahDiPilah}>
                  {EnumJenisSampah.SudahDiPilah}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Simpan</Button>
        </div>
      </form>
    </DialogLayout>
  );
};
