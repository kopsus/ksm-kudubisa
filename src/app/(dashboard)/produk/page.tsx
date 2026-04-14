import { TypeProducts } from "@/api/produk/type";
import ProductView from "@/components/dashboard/produk/ProductView";
import { getProducts } from "@/lib/action/productAction";

export default async function ProductPage() {
  const response = await getProducts();

  const dataProduct = (response.success ? response.data : []) as TypeProducts[];

  return <ProductView dataProduct={dataProduct} />;
}
