import { useQuery } from "@tanstack/react-query";
import { getRoles } from "./fetcher";
import { ApiResponse } from "../_global/ApiResponse";
import { TypeRole } from "./types";

const useQueryRoles = () => {
  const query = useQuery<ApiResponse<TypeRole[]>>({
    queryKey: ["roles"],
    queryFn: () => getRoles(),
  });

  return {
    ...query,
    dataRoles: query.data?.data,
  };
};

export { useQueryRoles };
