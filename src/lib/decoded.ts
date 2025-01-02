import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";

const DecodedToken = () => {
  const router = useRouter();
  const cookies = getCookies() as { [key: string]: string };
  const token = cookies.accessToken;

  if (token) {
    try {
      // Decode token to check role
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT token (base64 encoded)
      return decodedToken;
    } catch (error) {
      router.push("/login");
    }
  }
};

export { DecodedToken };
