"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Overlays() {
    const videos = [
        "/Overlay-1.mp4",
        "/Overlay-2.mp4",
        "/Overlay-3.mp4",
    ];

    return (
        <section id="overlays" className="py-10">
            <h2 className="text-3xl font-bold text-center mb-2">Overlays</h2>
            <p className="text-center text-gray-500 mb-8">
                Transformamos sua live em uma experiência visual única com overlays personalizados.            </p>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.swiper-button-prev-curtos',
                        nextEl: '.swiper-button-next-curtos',
                    }}
                    spaceBetween={15}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {videos.map((url, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative aspect-[16/9] w-[400px] rounded-xl overflow-hidden shadow-lg bg-black mx-auto">
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

                <div className="swiper-button-prev-curtos absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition cursor-pointer z-10">
                    <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>

                <div className="swiper-button-next-curtos absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition cursor-pointer z-10">
                    <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </section>
    );
}