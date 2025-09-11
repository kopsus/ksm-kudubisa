import { useMutation } from "@tanstack/react-query";
import { TypeLogin } from "./type";
import { fetchLogout, mutationAuth } from "./fetcher";
import { TypeUserBody } from "../users/type";
import { useRouter } from "next/navigation";

type MUTATION_TYPE =
  | { type: "login"; body: TypeLogin }
  | { type: "register"; body: TypeUserBody }
  | { type: "logout"; body: string };

const useMutationAuth = () => {
  const router = useRouter();
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
      alert(res.message);

      if (res.redirect) {
        window.location.href = res.redirect;
      } else {
        window.location.href = "/";
      }
    },
    onError: (error: any) => {
      // Tangani error response dengan aman
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Terjadi kesalahan yang tidak diketahui.";
      alert(message);
    },
  });

  return {
    ...mutation,
    serviceAuth: mutation.mutate,
  };
};

export { useMutationAuth };
