"use client";

import React from "react";
import { Button } from "../ui/button";
import { formatIDR } from "@/lib/formated";

// swiper
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQueryProducts } from "@/api/produk/queries";
import Link from "next/link";

export const ListSampah = () => {
  const { dataProduct } = useQueryProducts();

  return (
    <div className="ContainerY flex flex-col gap-10 items-center">
      <p className="titleContent text-center w-10/12 md:w-1/2">
        Jenis limbah apa saja yang memiliki nilai ekonomis dan dapat
        diperdagangkan?
      </p>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3.5,
          },
        }}
        slidesPerView={2}
        loop={true}
        pagination={true}
        spaceBetween={20}
        modules={[Autoplay]}
      >
        {dataProduct?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-40 md:h-52 rounded-[20px] overflow-hidden bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${
                  typeof item.image === "string" ? item.image : item.image
                })`,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-5 text-white">
                <p className="titleContent uppercase">{item.product_name}</p>
                <p>{formatIDR(item.price)}/kg</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href={"/layanan"}>
        <Button variant={"danger"}>JUAL SAMPAH SEKARANG</Button>
      </Link>
    </div>
  );
};
