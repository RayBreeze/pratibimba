"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { CldImage } from 'next-cloudinary';

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
          <div className="h-full bg-cover bg-center flex items-center justify-center">
            <CldImage
              src="https://res.cloudinary.com/dskdl70cq/image/upload/v1771910808/Hero1_vgxlim.jpg"
              alt="Inaugration of Pratibimba"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full bg-cover bg-center flex items-center justify-center">
            <CldImage
              src="https://res.cloudinary.com/dskdl70cq/image/upload/v1771910809/Hero2_oqbddi.jpg"
              alt="Pratibimba's event"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full bg-cover bg-center flex items-center justify-center">
            <CldImage
              src="https://res.cloudinary.com/dskdl70cq/image/upload/v1771910808/Hero3_alwkrq.jpg"
              alt="Pratibimba's event"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full bg-cover bg-center flex items-center justify-center">
            <CldImage
              src="https://res.cloudinary.com/dskdl70cq/image/upload/v1771910808/Hero4_sjrnzj.jpg"
              alt="Pratibimba's event"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      

    </section>
  );
}
