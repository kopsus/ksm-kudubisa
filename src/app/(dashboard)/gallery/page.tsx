import GalleryView, {
  TypeGallery,
} from "@/components/dashboard/gallery/GalleryView";
import { getGalleries } from "@/lib/action/galleryActions";

export default async function GalleryPage() {
  const response = await getGalleries();

  const dataGallery = (response.success ? response.data : []) as TypeGallery[];

  return <GalleryView dataGallery={dataGallery} />;
}
