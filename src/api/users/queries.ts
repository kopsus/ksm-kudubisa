import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./fetcher";
import { ApiResponse } from "../_global/ApiResponse";
import { TypeUser } from "./type";

const useQueryUsers = () => {
  const query = useQuery<ApiResponse<TypeUser[]>>({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  return {
    ...query,
    dataUsers: query.data?.data,
  };
};

export { useQueryUsers };
