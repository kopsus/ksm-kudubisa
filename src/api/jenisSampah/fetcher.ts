import { baseURL } from "@/constants/variables";
import axios from "axios";

const getJeniSampah = async () => {
  const res = await axios.get(`${baseURL}/jenis`);
  return res.data;
};

export { getJeniSampah };
