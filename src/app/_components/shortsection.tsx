"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ShortSection() {
  const videos = [
    "/Vídeo-1.mp4",
    "/Vídeo-2.mp4",
    "/Vídeo-4.mp4",
    "/Video-5.mp4",
    "/Video-6.mp4",
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="curtos" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-2">Curtos</h2>
      <p className="text-center text-gray-500 mb-8">
        Curtos engraçados e também dinâmicos
      </p>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              const navigation = swiper.params.navigation;
              if (navigation) {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
            }
          }}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {videos.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[9/16] w-[355px] rounded-xl overflow-hidden shadow-lg bg-black mx-auto">
                <video
                  src={url}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ... botões de navegação ... */}
        <div
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition cursor-pointer z-10"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition cursor-pointer z-10"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}