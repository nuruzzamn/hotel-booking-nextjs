"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdPlayCircle,
} from "react-icons/md";
import img1 from "@/public/img/banner-1.jpg";
import img2 from "@/public/img/banner-2.png";
import img3 from "@/public/img/banner-3.png";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const images = [img1, img2, img3];

  // Auto-Sliding images with interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number): void => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="max-w-7xl mx-auto relative w-full overflow-hidden min-h-28 md:min-h-96">
      {/* tag : Slider Container */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out`}
          style={{ transform: `translateX(${100 * (index - activeIndex)}%)` }}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            layout="fill"
            className="object-cover w-full h-full"
            priority
          />
        </div>
      ))}

      {/* tag : Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 focus:outline-none"
      >
        <MdKeyboardArrowLeft size={32} className="text-white drop-shadow-lg" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
      >
        <MdKeyboardArrowRight size={32} className="text-white drop-shadow-lg" />
      </button>

      {/* tag : Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? "bg-[#DFAA5B] scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* tag : Video Play Button */}
      <button
        onClick={() => setIsVideoOpen(true)}
        className="absolute top-10/12 right-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg animate-pulse hover:scale-110 transition-all"
      >
        <MdPlayCircle size={48} className="text-gray-100" />
      </button>

      {/* tag : Video Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-200  p-6 rounded-lg shadow-lg w-3/4 max-w-2xl relative">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-1 right-2 text-red-500 text-xl"
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/DU8TqU4I5mc"
              title="Hotel Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
