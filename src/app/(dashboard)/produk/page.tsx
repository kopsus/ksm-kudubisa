import ProductView from "@/components/dashboard/produk/ProductView";
import { getProducts } from "@/lib/action/productAction";
import { TypeProducts } from "@/types/product";

export default async function ProductPage() {
  const response = await getProducts();

  const dataProduct = (response.success ? response.data : []) as TypeProducts[];

  return <ProductView dataProduct={dataProduct} />;
}
