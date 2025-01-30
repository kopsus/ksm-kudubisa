import { useMutationGallery } from "@/api/gallery/mutations";
import { TypeGallery } from "@/api/gallery/type";
import { uploadImage } from "@/api/upload/fetcher";
import DialogLayout from "@/components/dashboard/_global/Layouts/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    setImageFile(null); // Reset file after closing dialog
  };

  const imageSrc = previewUrl || dialog.data?.image || "";

  const { serviceGallery } = useMutationGallery();

  const mutationGallery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Tolong pilih image yang akan dijadikan gallery");
      return;
    }

    const allowedTypes = ["image/png", "image/jpeg"];
    const maxSize = 1 * 1024 * 1024;

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

    if (uploadResponse?.data) {
      const imageUrl = `${imageURL}/${uploadResponse.data.id}`;

      const newGalleryData: TypeGallery = {
        image: imageUrl,
      };

      if (dialog.type === "CREATE") {
        // Call create gallery API
        await serviceGallery({
          type: "create",
          body: newGalleryData,
        });
        closeDialog();
      } else {
        // Call update gallery API
        await serviceGallery({
          type: "update",
          body: newGalleryData,
          id: dialog.data?.id,
        });
        closeDialog();
      }
    } else {
      alert("Failed to upload image.");
    }
  };

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
            handleImageChange(e); // Preview gambar
            const file = e.target.files?.[0];
            setImageFile(file ?? null); // Set image file in state
          }}
          className="max-w-72"
        />
        <Button type="submit">Simpan</Button>
      </form>
    </DialogLayout>
  );
};
