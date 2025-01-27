import { TypeGallery } from "@/api/gallery/type";
import { useQueryJenisSampah } from "@/api/jenisSampah/queries";
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
import { imageURL } from "@/constants/variables";
import useImagePreview from "@/hooks/useImagePreview";
import { storeDialog } from "@/store/dialog";
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

  const imageSrc = (previewUrl || dialog.data?.image) ?? "";

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
        jenisId: value,
      },
    }));
  };

  const { serviceProduct } = useMutationProduct();
  const { dataJeniSampah } = useQueryJenisSampah();

  const handleUploadImage = async (file: File) => {
    const allowedTypes = ["image/png", "image/jpeg"];

    if (!allowedTypes.includes(file.type)) {
      alert("Hanya file PNG dan JPG yang diperbolehkan.");
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await uploadImage(formData);
      const imageUrl = `${imageURL}/${response.data.id}`;

      return imageUrl; // URL gambar yang berhasil di-upload
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Failed to upload image");
    }
  };

  const mutationProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imageUrl = imageFile
      ? await handleUploadImage(imageFile)
      : dialog.data?.image;

    const payloadProduct = {
      image: imageUrl,
      product_name: dialog.data?.product_name ?? "",
      price: dialog.data?.price ?? 0,
      jenisId: dialog.data?.jenisId ?? "",
    };

    try {
      if (dialog.type === "CREATE") {
        // Call create gallery API
        await serviceProduct({
          type: "create",
          body: payloadProduct,
        });
        closeDialog();
      } else {
        // Call update gallery API
        await serviceProduct({
          type: "update",
          body: payloadProduct,
          id: dialog.data?.id,
        });
        closeDialog();
      }
    } catch (error) {
      console.error(error);
    }
  };

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
              <Image src={imageSrc} alt="" width={0} height={0} sizes="100vw" />
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
              name="jenisId"
              value={dialog.data?.jenisId ?? ""} // Pastikan ini merujuk ke ID
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Jenis Penjualan" />
              </SelectTrigger>
              <SelectContent>
                {dataJeniSampah?.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.jenisSampah}
                  </SelectItem>
                ))}
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
