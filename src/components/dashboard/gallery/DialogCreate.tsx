import { useMutationGallery } from "@/api/gallery/mutations";
import { TypeGallery } from "@/api/gallery/type";
import { uploadImage } from "@/api/upload/fetcher";
import DialogLayout from "@/components/dashboard/_global/Layouts/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

  const { serviceGallery, isPending } = useMutationGallery();

  const mutationGallery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (dialog.type === "CREATE" && !imageFile) {
      alert("Tolong pilih gambar untuk galeri baru.");
      return;
    }

    try {
      let imageUrl = dialog.data?.image ?? "";

      if (imageFile) {
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

        const formData = new FormData();
        formData.append("file", imageFile);

        const uploadResponse = await uploadImage(formData);

        if (uploadResponse?.data?.id) {
          imageUrl = `/uploads/${uploadResponse.data.id}`;
        } else {
          alert("Gagal meng-upload gambar.");
          return;
        }
      }

      const payloadGallery: TypeGallery = {
        image: imageUrl,
      };

      const serviceType = dialog.type === "CREATE" ? "create" : "update";
      await serviceGallery({
        type: serviceType,
        body: payloadGallery,
        id: dialog.data?.id,
      });

      closeDialog();
    } catch (error) {
      console.error("Error during gallery mutation:", error);
      alert("Terjadi kesalahan saat menyimpan galeri.");
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
