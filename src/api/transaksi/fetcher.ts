import { baseURL } from "@/constants/variables";
import axios from "axios";
import { TypeTransaksiBody } from "./type";
import { AxiosInstance } from "../_global/AxiosInstance";

const getTransactions = async () => {
  const res = await axios.get(`${baseURL}/transactions`);
  return res.data;
};
const getTransactionById = async (id: string) => {
  const res = await axios.get(`${baseURL}/transactions/${id}`);
  return res.data;
};
const createTransaction = async (body: TypeTransaksiBody) => {
  const res = await axios.post(`${baseURL}/transactions`, body);
  return res.data;
};
const updateTransaction = async ({ body, id }: any) => {
  const res = await AxiosInstance.patch(`${baseURL}/transactions/${id}`, body);
  return res.data;
};
const deleteTransaction = async (id: any) => {
  const res = await AxiosInstance.delete(`${baseURL}/transactions/${id}`);
  return res.data;
};

export {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
