import { useQuery } from "@tanstack/react-query";
import { getGallery } from "./fetcher";
import { TypeGallery } from "./type";
import { ApiResponse } from "../_global/ApiResponse";

const useQueryGalleries = () => {
  const query = useQuery<ApiResponse<TypeGallery[]>>({
    queryKey: ["gallery"],
    queryFn: () => getGallery(),
  });

  return {
    dataGallery: query.data?.data,
    ...query,
  };
};

export { useQueryGalleries };
