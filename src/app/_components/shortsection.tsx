"use client";

import { useState, useEffect } from "react";

export default function ShortSection() {
  const videos = [
    "/Vídeo-1.mp4",
    "/Vídeo-2.mp4",
    "/Vídeo-4.mp4",
    "/Video-5.mp4",
    "/Video-6.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : videos.length - itemsToShow));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < videos.length - itemsToShow ? prev + 1 : 0));
  };

  const maxIndex = videos.length - itemsToShow;

  return (
    <section id="curtos" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-2">Curtos</h2>
      <p className="text-center text-gray-500 mb-8">
        Curtos engraçados e também dinâmicos
      </p>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        {/* Botão anterior */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
          disabled={currentIndex === 0}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carrossel de vídeos */}
        <div className="flex overflow-hidden w-full mx-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)` }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex-none px-2"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-black">
                  <video
                    src={video}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão próximo */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
          disabled={currentIndex >= maxIndex}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
