import { useQuery } from "@tanstack/react-query";
import { getJeniSampah } from "./fetcher";
import { ApiResponse } from "../_global/ApiResponse";
import { TypeJenisSampah } from "./types";

const useQueryJenisSampah = () => {
  const query = useQuery<ApiResponse<TypeJenisSampah[]>>({
    queryKey: ["jenis sampah"],
    queryFn: () => getJeniSampah(),
  });

  return {
    ...query,
    dataJeniSampah: query.data?.data,
  };
};

export { useQueryJenisSampah };
