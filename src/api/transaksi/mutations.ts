import { useMutation } from "@tanstack/react-query";
import { useQueryTransaction } from "./queries";
import {
  createTransaction,
  deleteTransaction,
  updateTransaction,
} from "./fetcher";
import { TypeTransaksiBody } from "./type";

interface MUTATION_TYPE {
  type: "create" | "update" | "delete";
  body?: TypeTransaksiBody;
  id?: string;
}

const useMutationTransaction = () => {
  const { refetch } = useQueryTransaction();
  const mutation = useMutation({
    mutationKey: ["transaction mutation"],
    mutationFn: ({ body, type, id }: MUTATION_TYPE) => {
      if (type === "create" && body) {
        return createTransaction(body);
      } else if (type === "update" && body && id) {
        return updateTransaction({ body, id });
      } else if (type === "delete" && id) {
        return deleteTransaction(id);
      } else {
        throw new Error("Invalid input data for mutation");
      }
    },
    onSuccess: () => {
      refetch();
    },
  });
  return {
    serviceTransaction: mutation.mutateAsync,
    ...mutation,
  };
};

export { useMutationTransaction };
