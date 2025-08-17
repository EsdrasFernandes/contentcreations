"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";

const thumbs = [
    { id: 1, img: "/thumb-1.jpeg" },
    { id: 2, img: "/thumb-2.jpeg" },
    { id: 3, img: "/thumb-3.jpg" },
    { id: 4, img: "/thumb-4.jpg" },
    { id: 5, img: "/thumb-5.jpg" },
    { id: 6, img: "/thumb-6.jpg" },
    { id: 7, img: "/thumb-7.jpg" },
    { id: 8, img: "/thumb-8.jpg" },
];

export default function ThumbsCarousel() {
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
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : thumbs.length - 1));
    }, []);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev < thumbs.length - 1 ? prev + 1 : 0));
    }, []);

    const maxIndex = thumbs.length - itemsToShow;
    const showPrev = currentIndex > 0;
    const showNext = currentIndex < maxIndex;

    return (
        <section id="thumbs"className="py-12 bg-gray-50">
            <div className="text-center mb-10 px-4">
                <h2 className="text-4xl font-bold text-gray-900">Thumbnails</h2>
                <p className="text-lg text-gray-600 mt-2">As melhores capas de vídeos</p>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <div ref={carouselRef} className="relative w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)` }}
                        >
                            {thumbs.map((thumb) => (
                                <div
                                    key={thumb.id}
                                    className="flex-none px-4"
                                    style={{ width: `${100 / itemsToShow}%` }}
                                >
                                    <div className="w-full">
                                        <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                                            <img
                                                src={thumb.img}
                                                alt={`Thumb ${thumb.id}`}
                                                className="w-full aspect-video object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {thumbs.length > itemsToShow && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition disabled:opacity-50"
                            aria-label="Previous slide"
                            disabled={!showPrev}
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
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition disabled:opacity-50"
                            aria-label="Next slide"
                            disabled={!showNext}
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
                    </>
                )}
            </div>
        </section>
    );
}