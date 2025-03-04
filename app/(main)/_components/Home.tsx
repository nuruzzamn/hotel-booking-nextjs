"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdPlayCircle,
} from "react-icons/md";
import img1 from "@/public/img/slide-1.png";
import img2 from "@/public/img/slide-2.jpg";
import img3 from "@/public/img/slide-3.jpg";
import img4 from "@/public/img/slide-4.png";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const images = [img1, img2, img3, img4];

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
    <>
      {/* top section : hero section with slider */}
      <div className="max-w-7xl mx-auto relative w-full overflow-hidden min-h-72 md:min-h-96">
        <div className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-950 text-center">
          <div className="text-lg font-semibold">WELCOME TO</div>
          <div className="text-2xl md:text-5xl font-bold md:pt-2 md:pb-5">
            Hotel Paradise
          </div>
          <div className="text-sm font-normal">
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
          </div>

          <button className="bg-[#DFAA5B] text-white px-4 py-2 rounded-full mt-4">
            Book Now
          </button>
        </div>
        {/* tag : Slider Container */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out bg-black opacity-70`}
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
          <MdKeyboardArrowLeft
            size={32}
            className="text-white drop-shadow-lg"
          />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
        >
          <MdKeyboardArrowRight
            size={32}
            className="text-white drop-shadow-lg"
          />
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

      {/* bottom section : read more*/}
      <div className=" bg-gray-100 mx-auto px-6 py-10">
        <section className=" max-w-7xl container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-4">
            <p className="text-[#DFAA5B] uppercase font-medium">
              Accommodations
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Welcome Our Hotels And Resorts
            </h2>
            <p className="text-gray-600">
              Savvy travelers are looking for more than just the next
              destination on the map. They are looking for a memorable
              experience and to make new friends along the way.
            </p>
            <button className="bg-[#DFAA5B] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-800 transition">
              READ MORE →
            </button>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0 pt-5 lg:pt-0">
            {/* Background Image */}
            <Image
              src="/img/hotel-1.jpg"
              alt="Hotel Room"
              width={288}
              height={224}
              className="w-72 h-56 object-cover rounded-lg shadow-lg"
              priority
              unoptimized
            />
            {/* Overlapping Image */}
            <Image
              src="/img/hotel-2.jpg"
              alt="Luxury Suite"
              width={192}
              height={160}
              className="w-48 h-40 object-cover rounded-lg shadow-lg absolute top-5 lg:top-0 right-0 lg:right-12 transform translate-x-10 -translate-y-10"
              priority
              unoptimized
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
