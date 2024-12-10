"use client";

import React from "react";
import { Button } from "../ui/button";
import { formatIDR } from "@/lib/formated";

// data
import { dataProducts } from "@/data/product";

// swiper
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const ListSampah = () => {
  return (
    <div className="ContainerY flex flex-col gap-10 items-center">
      <p className="titleContent text-center w-1/2">
        Jenis limbah apa saja yang memiliki nilai ekonomis dan dapat
        diperdagangkan?
      </p>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={true}
        slidesPerView={3.5}
        spaceBetween={20}
        modules={[Autoplay]}
      >
        {dataProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-52 rounded-[20px] overflow-hidden bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-5 text-white">
                <p className="titleContent uppercase">{item.name}</p>
                <p>{formatIDR(item.price)}/kg</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button variant={"danger"}>JUAL SAMPAH SEKARANG</Button>
    </div>
  );
};
