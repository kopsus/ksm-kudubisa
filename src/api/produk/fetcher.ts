import { baseURL } from "@/constants/variables";
import axios from "axios";
import { AxiosInstance } from "../_global/AxiosInstance";

const getProducts = async () => {
  const res = await axios.get(`${baseURL}/products`);
  return res.data;
};

const createProduct = async (body: any) => {
  const res = await AxiosInstance.post(`${baseURL}/products`, body);
  return res.data;
};

const updateProduct = async ({ body, id }: any) => {
  const res = await AxiosInstance.patch(`${baseURL}/products/${id}`, body);
  return res.data;
};

const deleteProduct = async (id: any) => {
  const res = await AxiosInstance.delete(`${baseURL}/products/${id}`);
  return res.data;
};

export { getProducts, createProduct, updateProduct, deleteProduct };
