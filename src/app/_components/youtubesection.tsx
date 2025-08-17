"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";

const videos = [
  { id: 1, title: "Gameplay 1", videoId: "72h57S3iUtk" },
  { id: 2, title: "Gameplay 2", videoId: "TZwqDvuoCUA" },
  { id: 3, title: "Gameplay 3", videoId: "gfT1kRpbdS4" },
  { id: 4, title: "Gameplay 4", videoId: "TKUY2MXtrug"},
  { id: 5, title: "Gameplay 5", videoId: "-U09UrPdfiI" },
  { id: 6, title: "Gameplay 6", videoId: "2z-X1XVNf1U" },
];

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <iframe
        title={`video-${videoId}`}
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default function YoutubeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); 
  const carouselRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3); 
      } else if (window.innerWidth >= 640) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0));
  }, []);

 
  const maxIndex = videos.length - itemsToShow;
  const showPrev = currentIndex > 0;
  const showNext = currentIndex < maxIndex;

  return (
    <section id = "youtube"className="py-12 bg-gray-50">
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-bold text-gray-900">Youtube</h2>
        <p className="text-lg text-gray-600 mt-2">Vídeos épicos e envolventes</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div ref={carouselRef} className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex / itemsToShow) * 100}%)` }}
            >
              {videos.map((video) => (
                <div key={video.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-4">
                  <VideoPlayer videoId={video.videoId} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botões de navegação */}
        {videos.length > itemsToShow && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition disabled:opacity-50"
              aria-label="Previous slide"
              disabled={!showPrev}
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition disabled:opacity-50"
              aria-label="Next slide"
              disabled={!showNext}
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  );
}