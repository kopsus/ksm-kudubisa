import { uploadImage } from "@/api/upload/fetcher";

export const handleUploadImage = async (file: File) => {
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
  const maxSize = 1 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) {
    alert("Hanya file PNG dan JPG yang diperbolehkan.");
    return;
  }

  if (file.size > maxSize) {
    alert("Ukuran file maksimal 1MB.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await uploadImage(formData);
    const imageUrl = response.url; // langsung dari API
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload image");
  }
};
