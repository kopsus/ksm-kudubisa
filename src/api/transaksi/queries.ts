import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "../_global/ApiResponse";
import { TypeTransaksi } from "./type";
import { getTransactionById, getTransactions } from "./fetcher";
import { useParams } from "next/navigation";

const useQueryTransaction = () => {
  const query = useQuery<ApiResponse<TypeTransaksi[]>>({
    queryKey: ["transaksi"],
    queryFn: () => getTransactions(),
  });

  return {
    dataTransactions: query.data?.data,
    ...query,
  };
};

const useQueryTransactionDetail = () => {
  const { id } = useParams() as { id: string };
  const query = useQuery<ApiResponse<TypeTransaksi>>({
    queryKey: ["detail transaksi", { id }],
    queryFn: () => getTransactionById(id),
    enabled: !!id,
  });

  return {
    detailTransaction: query.data?.data,
    ...query,
  };
};

export { useQueryTransaction, useQueryTransactionDetail };
