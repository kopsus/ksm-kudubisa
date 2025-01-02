import { useMutation } from "@tanstack/react-query";
import { useQueryProducts } from "./queries";
import { createProduct, updateProduct, deleteProduct } from "./fetcher";

interface MUTATION_TYPE {
  type: "create" | "update" | "delete";
  body?: any;
  id?: string;
}

const useMutationProduct = () => {
  const { refetch } = useQueryProducts();
  const mutation = useMutation({
    mutationKey: ["product mutation"],
    mutationFn: ({ body, type, id }: MUTATION_TYPE) => {
      switch (type) {
        case "create":
          return createProduct(body);
        case "update":
          return updateProduct({ body, id });
        case "delete":
          return deleteProduct(id);
      }
    },
    onSuccess: () => {
      refetch();
    },
  });
  return {
    serviceProduct: mutation.mutateAsync,
    ...mutation,
  };
};

export { useMutationProduct };
