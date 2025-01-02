import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface Slide {
  src: string;
}

interface INextLightboxProps {
  index: number;
  visible: boolean;
  onClose: () => void;
  slides: Slide[];
}

export const NextLightbox = ({
  index,
  visible,
  onClose,
  slides = [],
}: INextLightboxProps) => {
  return (
    <Lightbox
      index={index}
      open={visible}
      close={onClose}
      slides={slides}
      plugins={[Zoom]}
    />
  );
};
