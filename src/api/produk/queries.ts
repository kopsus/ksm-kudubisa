import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./fetcher";
import { TypeProducts } from "./type";
import { ApiResponse } from "../_global/ApiResponse";

const useQueryProducts = () => {
  const query = useQuery<ApiResponse<TypeProducts[]>>({
    queryKey: ["product"],
    queryFn: () => getProducts(),
  });

  return {
    dataProduct: query.data?.data,
    ...query,
  };
};

export { useQueryProducts };
