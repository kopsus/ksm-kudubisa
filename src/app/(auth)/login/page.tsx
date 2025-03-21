"use client";

import { useMutationAuth } from "@/api/auth/mutation";
import { TypeLogin } from "@/api/auth/type";
import { useQueryProfile } from "@/api/users/queries";
import highlightIMG from "@/assets/highlight.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { storeIsLogin } from "@/store/isLogin";
import { getCookies } from "cookies-next";
import { useAtom } from "jotai";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  const [payload, setPayload] = React.useState<TypeLogin>({
    username: "",
    password: "",
  });

  const { refetch } = useQueryProfile();
  const { serviceAuth, isPending } = useMutationAuth();
  const [_, setIsLogin] = useAtom(storeIsLogin);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await serviceAuth({
      type: "login",
      body: payload,
    });

    if (res.status === 200) {
      setIsLogin(true);
      // Ambil token dari cookies
      const cookies = getCookies() as { [key: string]: string };
      const token = cookies.accessToken;

      if (token) {
        try {
          // Decode token to check role
          const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT token (base64 encoded)
          const role = decodedToken?.role;

          // Redirect based on role
          if (role === "Masyarakat") {
            router.push("/"); // Redirect to main page if role is Masyarakat
          } else {
            router.push("/dashboard"); // Redirect to dashboard if role is not Masyarakat
          }
        } catch (error) {
          console.error("Error decoding token", error);
          alert("Error decoding token. Please try again.");
        }
      }
    }
    refetch();
  };

  return (
    <div
      className="w-full relative bg-center bg-no-repeat bg-cover h-screen max-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${highlightIMG.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="relative bg-white shadow-md rounded-3xl w-11/12 md:w-96 flex flex-col gap-8 p-5 md:py-5 md:px-10 text-center">
        <p className="titleSection">Selamat Datang Di KSM KMM Banyumas</p>
        <p>“ciptakan dunia yang lebih bersih dan hijau”</p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <Input
            placeholder="Username"
            name="username"
            required
            onChange={(e) =>
              setPayload((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
          />
          <Input
            placeholder="Password"
            type="password"
            name="passowrd"
            required
            onChange={(e) =>
              setPayload((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
          <Button type="submit">
            {isPending ? <LoaderCircle /> : "Masuk"}
          </Button>
        </form>
        <p>
          Belum punya akun?{" "}
          <Link href={"/register"} className="text-primary font-bold">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
