import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getProducts } from "@/lib/action/productAction";
import { Highlight } from "@/components/_global/highlight";
import LayananClient from "@/components/layanan/layananClient";

export default async function LayananPage() {
  const productsRes = await getProducts();
  const dataProduct = productsRes.success ? (productsRes.data as any[]) : [];

  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  let userProfile = null;

  if (token) {
    try {
      userProfile = jwt.verify(token, process.env.JWT_SECRET!);
    } catch (error) {}
  }

  return (
    <>
      <Highlight
        title="Hasilkan Pemasukan dengan Sampahmu!"
        textButton="Riwayat Penjualan"
        href="profile"
      />
      <LayananClient dataProduct={dataProduct} userProfile={userProfile} />
    </>
  );
}
