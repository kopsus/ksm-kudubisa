import { baseURL } from "@/constants/variables";
import axios from "axios";

const uploadImage = async (formData: FormData) => {
  const res = await axios.post(`${baseURL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export { uploadImage };
