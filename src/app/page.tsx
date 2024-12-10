import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Gallery } from "@/components/home/gallery";
import { HighlightHome } from "@/components/home/highlight";
import { ListSampah } from "@/components/home/listSampah";
import { PeduliSampah } from "@/components/home/peduliSampah";
import { SambutanKetua } from "@/components/sambutanKetua";

export default function Home() {
  return (
    <>
      <Header />
      <HighlightHome />
      <PeduliSampah />
      <SambutanKetua />
      <ListSampah />
      <Gallery />
      <Footer />
    </>
  );
}
