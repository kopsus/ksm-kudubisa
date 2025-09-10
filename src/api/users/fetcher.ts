import { baseURL } from "@/constants/variables";
import { AxiosInstance } from "../_global/AxiosInstance";
import { TypeUserBody } from "./type";

const getUsers = async () => {
  const res = await AxiosInstance.get(`${baseURL}/users`);
  return res.data;
};

const createUsers = async (body: TypeUserBody) => {
  const res = await AxiosInstance.post(`${baseURL}/auth/register`, body);
  return res.data;
};
const updateUsers = async ({
  body,
  id,
}: {
  body: TypeUserBody;
  id: string;
}) => {
  const res = await AxiosInstance.patch(`${baseURL}/users/${id}`, body);
  return res.data;
};
const deleteUsers = async (id: string) => {
  const res = await AxiosInstance.delete(`${baseURL}/users/${id}`);
  return res.data;
};

export { getUsers, createUsers, updateUsers, deleteUsers };
