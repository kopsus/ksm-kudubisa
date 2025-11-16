import { baseURLAPI } from "@/constants/variables";
import { AxiosInstance } from "../_global/AxiosInstance";
import { TypeUserBody } from "./type";

const getProfile = async () => {
  const res = await AxiosInstance.get(`${baseURLAPI}/profile`);
  return res.data;
};

const getUsers = async () => {
  const res = await AxiosInstance.get(`${baseURLAPI}/users`);
  return res.data;
};

const createUsers = async (body: TypeUserBody) => {
  const res = await AxiosInstance.post(`${baseURLAPI}/auth/register`, body);
  return res.data;
};

const updateUsers = async ({
  body,
  id,
}: {
  body: TypeUserBody;
  id: string;
}) => {
  const res = await AxiosInstance.patch(`${baseURLAPI}/users/${id}`, body);
  return res.data;
};

const deleteUsers = async (id: string) => {
  const res = await AxiosInstance.delete(`${baseURLAPI}/users/${id}`);
  return res.data;
};

export { getUsers, createUsers, updateUsers, deleteUsers, getProfile };
