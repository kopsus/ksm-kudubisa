import { baseURLAPI } from "@/constants/variables";
import axios from "axios";

const mutationAuth = async ({ body, params }: any) => {
  const res = await axios.post(`${baseURLAPI}/auth/${params}`, body);
  return res.data;
};

const fetchLogout = async () => {
  const res = await axios.delete(`${baseURLAPI}/auth/logout`);
  return res.data;
};

export { mutationAuth, fetchLogout };
