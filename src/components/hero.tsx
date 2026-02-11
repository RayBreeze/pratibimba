"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroCarousel() {
  return (
    <section className="h-[75vh] w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
        navigation={{
        nextEl: ".nextBtn",
        prevEl: ".prevBtn",
        }}
      >
        <SwiperSlide>
          <div className="h-full bg-[url('/Hero1.jpg')] bg-cover bg-center flex items-center justify-center">
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full bg-[url('/Hero2.jpg')] bg-cover bg-center flex items-center justify-center">
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full bg-[url('/Hero3.jpg')] bg-cover bg-center flex items-center justify-center">
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full bg-[url('/Hero4.jpg')] bg-cover bg-center flex items-center justify-center">
          </div>
        </SwiperSlide>
      </Swiper>
      

    </section>
  );
}
