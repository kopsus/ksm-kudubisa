import { baseURL } from "@/constants/variables";
import axios from "axios";

const mutationAuth = async ({ body, params }: any) => {
  const res = await axios.post(`${baseURL}/auth/${params}`, body);
  return res.data;
};
const fetchLogout = async () => {
  const res = await axios.delete(`${baseURL}/auth/logout`);
  return res.data;
};

export { mutationAuth, fetchLogout };
