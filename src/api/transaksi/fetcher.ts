import { baseURLAPI } from "@/constants/variables";
import axios from "axios";
import { TypeTransaksiBody } from "./type";
import { AxiosInstance } from "../_global/AxiosInstance";

const getTransactions = async () => {
  const res = await axios.get(`${baseURLAPI}/transactions`);
  return res.data;
};
const getTransactionById = async (id: string) => {
  const res = await axios.get(`${baseURLAPI}/transactions/${id}`);
  return res.data;
};
const createTransaction = async (body: TypeTransaksiBody) => {
  const res = await axios.post(`${baseURLAPI}/transactions`, body);
  return res.data;
};
const updateTransaction = async ({ body, id }: any) => {
  const res = await AxiosInstance.patch(
    `${baseURLAPI}/transactions/${id}`,
    body
  );
  return res.data;
};
const deleteTransaction = async (id: any) => {
  const res = await AxiosInstance.delete(`${baseURLAPI}/transactions/${id}`);
  return res.data;
};

export {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
