import { AxiosInstance } from "../_global/AxiosInstance";
import { TypeUserBody } from "./type";

const getProfile = async () => {
  const res = await AxiosInstance.get(
    `${process.env.NEXT_PUBLIC_API_URL}/profile`,
  );
  return res.data;
};

const getUsers = async () => {
  const res = await AxiosInstance.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users`,
  );
  return res.data;
};

const createUsers = async (body: TypeUserBody) => {
  const res = await AxiosInstance.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    body,
  );
  return res.data;
};

const updateUsers = async ({
  body,
  id,
}: {
  body: TypeUserBody;
  id: string;
}) => {
  const res = await AxiosInstance.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
    body,
  );
  return res.data;
};

const deleteUsers = async (id: string) => {
  const res = await AxiosInstance.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
  );
  return res.data;
};

export { getUsers, createUsers, updateUsers, deleteUsers, getProfile };
