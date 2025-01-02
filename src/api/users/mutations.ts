import { useMutation } from "@tanstack/react-query";
import { useQueryUsers } from "./queries";
import { createUsers, updateUsers, deleteUsers } from "./fetcher";
import { TypeUserBody } from "./type";

interface MUTATION_TYPE {
  type: "create" | "update" | "delete";
  body?: TypeUserBody;
  id?: string;
}

const useMutationUser = () => {
  const { refetch } = useQueryUsers();
  const mutation = useMutation({
    mutationKey: ["user mutation"],
    mutationFn: ({ body, type, id }: MUTATION_TYPE) => {
      if (type === "create" && body) {
        return createUsers(body);
      } else if (type === "update" && body && id) {
        return updateUsers({ body, id });
      } else if (type === "delete" && id) {
        return deleteUsers(id);
      } else {
        throw new Error("Invalid input data for mutation");
      }
    },
    onSuccess: () => {
      refetch();
    },
  });
  return {
    serviceUser: mutation.mutateAsync,
    ...mutation,
  };
};

export { useMutationUser };
