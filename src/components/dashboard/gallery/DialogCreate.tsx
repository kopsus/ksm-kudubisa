import React, { useState } from "react";
import useImagePreview from "@/hooks/useImagePreview";
import { uploadFileAction } from "@/lib/action/uploadActions";
import { createGallery, updateGallery } from "@/lib/action/galleryActions";
import DialogLayout from "../_global/Layouts/Dialog";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogState } from "./GalleryView";

export interface DialogProps {
  dialog: DialogState;
  setDialog: React.Dispatch<React.SetStateAction<DialogState>>;
}

export const DialogCreate = ({ dialog, setDialog }: DialogProps) => {
  const { previewUrl, setPreviewUrl, handleImageChange } = useImagePreview();
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Tambahkan state untuk loading manual karena kita tidak pakai useMutationGallery lagi
  const [isPending, setIsPending] = useState(false);

  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
    setPreviewUrl("");
    setImageFile(null);
  };

  const mutationGallery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (dialog.type === "CREATE" && !imageFile) {
      alert("Tolong pilih gambar untuk galeri baru.");
      return;
    }

    setIsPending(true); // Mulai loading

    try {
      let imageUrl = dialog.data?.image ?? "";

      // 1. PROSES UPLOAD GAMBAR DENGAN SERVER ACTION
      if (imageFile) {
        const allowedTypes = [
          "image/png",
          "image/jpeg",
          "image/jpg",
          "image/webp",
        ];
        const maxSize = 1 * 1024 * 1024; // 1MB

        if (!allowedTypes.includes(imageFile.type)) {
          alert("Hanya file PNG, JPG, dan WEBP yang diperbolehkan.");
          setIsPending(false);
          return;
        }

        if (imageFile.size > maxSize) {
          alert("Ukuran file maksimal 1MB.");
          setIsPending(false);
          return;
        }

        const formData = new FormData();
        formData.append("file", imageFile);

        // Panggil Server Action Upload
        const uploadResponse = await uploadFileAction(formData);

        if (uploadResponse.success && uploadResponse.data?.id) {
          imageUrl = `/uploads/${uploadResponse.data.id}`;
        } else {
          alert(uploadResponse.message || "Gagal meng-upload gambar.");
          setIsPending(false);
          return;
        }
      }

      const payloadGallery = {
        image: imageUrl,
      };

      // 2. PROSES CREATE / UPDATE KE DATABASE DENGAN SERVER ACTION
      let result;
      if (dialog.type === "CREATE") {
        result = await createGallery(payloadGallery);
      } else {
        result = await updateGallery(dialog.data?.id, payloadGallery);
      }

      // 3. HANDLE RESPONSE
      if (result.success) {
        closeDialog();
        // Berhasil! Halaman akan otomatis terre-render jika menggunakan App Router standar
        // karena kita sudah memasang revalidatePath di Server Action
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error during gallery mutation:", error);
      alert("Terjadi kesalahan saat menyimpan galeri.");
    } finally {
      setIsPending(false); // Matikan loading
    }
  };

  const imageSrc = previewUrl || (dialog.data?.image ? dialog.data.image : "");

  return (
    <DialogLayout
      show={dialog.type !== "DELETE" && dialog.show}
      onHide={closeDialog}
      title={`${dialog.type === "CREATE" ? "Tambah Gallery" : "Edit Gallery"}`}
    >
      <form
        onSubmit={mutationGallery}
        className="flex flex-col items-center gap-5"
      >
        <div className="w-52 h-52 rounded-xl border bg-white shadow-1 overflow-hidden">
          {previewUrl || dialog.data?.image ? (
            <Image
              src={imageSrc}
              alt="Preview"
              width={0}
              height={0}
              sizes="100vw"
              // Pastikan ada class object-cover agar gambar tidak gepeng
              className="w-full h-full object-cover"
              unoptimized
            />
          ) : null}
        </div>
        <Input
          type="file"
          onChange={(e) => {
            handleImageChange(e);
            const file = e.target.files?.[0];
            setImageFile(file ?? null);
          }}
          className="max-w-72"
        />
        <Button disabled={isPending} type="submit">
          {isPending ? "Loading..." : "Simpan"}
        </Button>
      </form>
    </DialogLayout>
  );
};
