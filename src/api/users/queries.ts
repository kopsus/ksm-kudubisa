import { useQuery } from "@tanstack/react-query";
import { getProfile, getUsers } from "./fetcher";
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

const useQueryProfile = () => {
  const query = useQuery<ApiResponse<TypeUser>>({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });

  return {
    ...query,
    dataProfile: query.data?.data,
  };
};

export { useQueryUsers, useQueryProfile };
