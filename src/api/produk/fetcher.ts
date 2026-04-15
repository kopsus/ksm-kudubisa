import axios from "axios";
import { AxiosInstance } from "../_global/AxiosInstance";

const getProducts = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
  return res.data;
};

const createProduct = async (body: any) => {
  const res = await AxiosInstance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
    body,
  );
  return res.data;
};

const updateProduct = async ({ body, id }: any) => {
  const res = await AxiosInstance.patch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
    body,
  );
  return res.data;
};

const deleteProduct = async (id: any) => {
  const res = await AxiosInstance.delete(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
  );
  return res.data;
};

export { getProducts, createProduct, updateProduct, deleteProduct };
