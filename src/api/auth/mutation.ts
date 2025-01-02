import { useMutation } from "@tanstack/react-query";
import { TypeLogin } from "./type";
import { fetchLogout, mutationAuth } from "./fetcher";
import { TypeUserBody } from "../users/type";

type MUTATION_TYPE =
  | { type: "login"; body: TypeLogin }
  | { type: "register"; body: TypeUserBody }
  | { type: "logout"; body: string };

const useMutationAuth = () => {
  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: ({ type, body }: MUTATION_TYPE) => {
      switch (type) {
        case "login":
          return mutationAuth({
            params: "login",
            body,
          });
        case "register":
          return mutationAuth({
            params: "register",
            body,
          });
        case "logout":
          return fetchLogout();
      }
    },
    onSuccess: (res) => {
      if (res.status === 400) {
        alert(res.message);
      }
    },
  });

  return {
    ...mutation,
    serviceAuth: mutation.mutateAsync,
  };
};

export { useMutationAuth };
