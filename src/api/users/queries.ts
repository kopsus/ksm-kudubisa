import { useQuery } from "@tanstack/react-query";
import { getProfile, getUsers } from "./fetcher";
import { ApiResponse } from "../_global/ApiResponse";
import { TypeUser } from "./type";
import { useAtomValue } from "jotai";
import { storeIsLogin } from "@/store/isLogin";

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
  const isLogin = useAtomValue(storeIsLogin);
  const query = useQuery<ApiResponse<TypeUser>>({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
    enabled: isLogin!!,
  });

  return {
    ...query,
    dataProfile: query.data?.data,
  };
};

export { useQueryUsers, useQueryProfile };
