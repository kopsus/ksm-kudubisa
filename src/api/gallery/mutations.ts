import { useMutation } from "@tanstack/react-query";
import { TypeGallery } from "./type";
import { createGallery, updateGallery, deleteGallery } from "./fetcher";
import { useQueryGalleries } from "./queries";

interface MUTATION_TYPE {
  type: "create" | "update" | "delete";
  body?: TypeGallery;
  id?: string;
}

const useMutationGallery = () => {
  const { refetch } = useQueryGalleries();
  const mutation = useMutation({
    mutationKey: ["gallery mutation"],
    mutationFn: ({ body, type, id }: MUTATION_TYPE) => {
      switch (type) {
        case "create":
          return createGallery(body);
        case "update":
          return updateGallery({ body, id });
        case "delete":
          return deleteGallery(id);
      }
    },
    onSuccess: () => {
      refetch();
    },
    onError: (res) => {
      console.log("res", res);
    },
  });
  return {
    serviceGallery: mutation.mutateAsync,
    ...mutation,
  };
};

export { useMutationGallery };
