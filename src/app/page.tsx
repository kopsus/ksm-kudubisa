import { Footer } from "@/components/_global/footer";
import { Header } from "@/components/_global/header/header";
import { Gallery } from "@/components/home/gallery";
import { HighlightHome } from "@/components/home/highlight";
import { ListSampah } from "@/components/home/listSampah";
import { PeduliSampah } from "@/components/home/peduliSampah";
import { SambutanKetua } from "@/components/_global/sambutanKetua";
import ButtonTrigger from "@/components/_global/buttonTrigger";
import { getGalleries } from "@/lib/action/galleryActions";
import { TypeGallery } from "@/components/dashboard/gallery/GalleryView";
import { getProducts } from "@/lib/action/productAction";
import { TypeProducts } from "@/types/product";

export default async function Home() {
  const galleries = await getGalleries();
  const dataGallery = (
    galleries.success ? galleries.data : []
  ) as TypeGallery[];

  const products = await getProducts();
  const dataProduct = (products.success ? products.data : []) as TypeProducts[];

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <HighlightHome />
      <PeduliSampah />
      <SambutanKetua />
      <ListSampah dataProduct={dataProduct} />
      <Gallery dataGallery={dataGallery} />
      <Footer />
      <ButtonTrigger />
    </div>
  );
}
