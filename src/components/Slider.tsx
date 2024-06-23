"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Sunset at the Beach",
    description: "Hurry and get yours now!",
    img: "https://images.pexels.com/photos/10154937/pexels-photo-10154937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
    bg: "bg-gradient-to-r from-red-100 to-yellow-500",
  },
  {
    id: 2,
    title: "Mountain Adventure",
    description:
      "A thrilling adventure through the rocky mountains with breathtaking views.",
    img: "https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-to to-red-50",
  },
  {
    id: 3,
    title: "City Lights",
    description:
      "The vibrant city lights illuminating the night sky in a bustling metropolis.",
    img: "https://images.pexels.com/photos/205158/pexels-photo-205158.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-to to-green-50",
  },
  {
    id: 4,
    title: "Forest Trail",
    description:
      "A peaceful trail through a lush forest, surrounded by towering trees and wildlife.",
    img: "https://images.pexels.com/photos/356004/pexels-photo-356004.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-to to-orange-50",
  },
  {
    id: 5,
    title: "Desert Oasis",
    description:
      "A hidden oasis in the desert, offering a refreshing escape with crystal clear water.",
    img: "https://images.pexels.com/photos/35846/sand-desert-drought-death-valley.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-to to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${current * 100}vw)` }}>
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-x-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col justify-center items-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative ">
              <Image
                src={slide.img}
                alt={slide.title}
                layout="fill"
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 gap-4 flex">
      {slides.map((slide, index) => (
        <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center 
        ${current === index ? "scale-150" : ""}`} 
        key={slide.id} 
        onClick={() => setCurrent(index)}>
{current === index && (<div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>)}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Slider;
