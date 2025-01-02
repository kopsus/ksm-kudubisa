import { baseURL } from "@/constants/variables";
import axios from "axios";
import { AxiosInstance } from "../_global/AxiosInstance";

const getGallery = async () => {
  const res = await axios.get(`${baseURL}/gallery`);
  return res.data;
};

const createGallery = async (body: any) => {
  const res = await AxiosInstance.post(`${baseURL}/gallery`, body);
  return res.data;
};

const updateGallery = async ({ body, id }: any) => {
  const res = await AxiosInstance.patch(`${baseURL}/gallery/${id}`, body);
  return res.data;
};

const deleteGallery = async (id: any) => {
  const res = await AxiosInstance.delete(`${baseURL}/gallery/${id}`);
  return res.data;
};

export { getGallery, createGallery, updateGallery, deleteGallery };
