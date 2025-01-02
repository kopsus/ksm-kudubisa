import { Footer } from "@/components/_global/footer";
import { Header } from "@/components/_global/header";
import { Gallery } from "@/components/home/gallery";
import { HighlightHome } from "@/components/home/highlight";
import { ListSampah } from "@/components/home/listSampah";
import { PeduliSampah } from "@/components/home/peduliSampah";
import { SambutanKetua } from "@/components/_global/sambutanKetua";
import ButtonTrigger from "@/components/_global/buttonTrigger";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <HighlightHome />
      <PeduliSampah />
      <SambutanKetua />
      <ListSampah />
      <Gallery />
      <Footer />
      <ButtonTrigger />
    </div>
  );
}
