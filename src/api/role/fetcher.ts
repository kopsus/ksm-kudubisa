import { baseURL } from "@/constants/variables";
import axios from "axios";

const getRoles = async () => {
  const res = await axios.get(`${baseURL}/roles`);
  return res.data;
};

export { getRoles };
