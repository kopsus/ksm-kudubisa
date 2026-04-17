import useImagePreview from "@/hooks/useImagePreview";
import { DialogState, EnumJenisSampah } from "../ProductView";
import { useState } from "react";
import { uploadFileAction } from "@/lib/action/uploadActions";
import { createProduct, updateProduct } from "@/lib/action/productAction";
import DialogLayout from "../../_global/Layouts/Dialog";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export interface DialogProductProps {
  dialog: DialogState;
  setDialog: React.Dispatch<React.SetStateAction<DialogState>>;
}

export const DialogCreate = ({ dialog, setDialog }: DialogProductProps) => {
  const { previewUrl, setPreviewUrl, handleImageChange } = useImagePreview();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isPending, setIsPending] = useState(false);

  const closeDialog = () => {
    setDialog({ type: null, show: false, data: null });
    setPreviewUrl("");
    setImageFile(null);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDialog((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: name === "price" ? parseFloat(value) || 0 : value,
      },
    }));
  };

  const onValueChange = (value: string) => {
    setDialog((prev) => ({
      ...prev,
      data: { ...prev.data, jenis: value },
    }));
  };

  const mutationProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (dialog.type === "CREATE" && !imageFile) {
      alert("Tolong pilih gambar untuk produk baru.");
      return;
    }

    setIsPending(true);

    try {
      let imageUrl = dialog.data?.image ?? "";

      if (imageFile) {
        const allowedTypes = [
          "image/png",
          "image/jpeg",
          "image/jpg",
          "image/webp",
        ];
        const maxSize = 1 * 1024 * 1024;

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

        const uploadResponse = await uploadFileAction(formData);

        if (uploadResponse.success && uploadResponse.data?.id) {
          imageUrl = `/uploads/${uploadResponse.data.id}`;
        } else {
          alert("Gagal meng-upload gambar.");
          setIsPending(false);
          return;
        }
      }

      const payloadProduct = {
        image: imageUrl,
        product_name: dialog.data?.product_name ?? "",
        price: dialog.data?.price ?? 0,
        jenis: dialog.data?.jenis ?? EnumJenisSampah.SudahDiPilah,
      };

      let result;
      if (dialog.type === "CREATE") {
        result = await createProduct(payloadProduct);
      } else {
        result = await updateProduct(dialog.data?.id, payloadProduct);
      }

      if (result.success) {
        closeDialog();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error during mutation:", error);
      alert("Terjadi kesalahan saat menyimpan produk.");
    } finally {
      setIsPending(false);
    }
  };

  const imageSrc = previewUrl || (dialog.data?.image ? dialog.data.image : "");

  return (
    <DialogLayout
      show={
        (dialog.type === "CREATE" || dialog.type === "UPDATE") && dialog.show
      }
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
                className="w-full h-full object-cover"
                unoptimized
              />
            ) : null}
          </div>
          <Input
            type="file"
            name="image"
            onChange={(e) => {
              handleImageChange(e);
              const file = e.target.files?.[0];
              setImageFile(file ?? null);
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
                  Belum Di Pilah
                </SelectItem>
                <SelectItem value={EnumJenisSampah.SudahDiPilah}>
                  Sudah Di Pilah
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button disabled={isPending} type="submit">
            {isPending ? "Menyimpan..." : "Simpan"}
          </Button>
        </div>
      </form>
    </DialogLayout>
  );
};
