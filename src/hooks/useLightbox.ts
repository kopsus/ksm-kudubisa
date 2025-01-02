import { useState } from "react";

const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

interface Slide {
  width: number;
  height: number;
  src: string;
  srcSet: { src: string; width: number; height: number }[];
}

export const useLightbox = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(-1);

  const slides: Slide[] = images.map((src) => ({
    width: 1280,
    height: 1280,
    src,
    srcSet: imageSizes
      .concat(deviceSizes)
      .filter((size) => size <= 1280)
      .map((size) => ({
        src,
        width: size,
        height: Math.round((1280 / 1280) * size),
      })),
  }));

  const open = (index: number = 0, imgs: string[] = []) => {
    setVisible(true);
    setIndex(index);
    setImages(imgs);
  };

  const close = () => {
    setVisible(false);
    setIndex(-1);
    setImages([]);
  };

  return {
    index,
    open,
    close,
    visible,
    slides,
    images,
  };
};
