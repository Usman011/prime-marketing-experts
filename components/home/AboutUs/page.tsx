"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


type Slide = {
  title: string;
  content: string;
  image: string;
};

const slides: Record<string, Slide> = {
  caseStudy: {
    title: "Case Study",
    content: "Discover how we’ve solved diverse challenges and delivered innovative solutions across industries.",
    image: "/images/carousel/image1.png",
  },
  work: {
    title: "Work",
    content: "Our aim is to push the boundaries of digital solutions, combining creativity with technical expertise to foster future growth.",
    image: "/images/carousel/image02.png",
  },
  ourStory: {
    title: "Our Story",
    content: "Our foundation was set in 2017, driven by a mission to empower businesses through high-quality, future-forward digital services.",
    image: "/images/carousel/image3.png",
  },
};

export default function About() {
  const [activeSlide, setActiveSlide] = useState<keyof typeof slides>("caseStudy");

  return (
    <section className="flex flex-col items-center bg-white p-10 w-full h-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Who We Serve</h2>
      {/* Navigation Menu */}
      <nav className="flex space-x-4 mb-8">
        {Object.keys(slides).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSlide(key as keyof typeof slides)}
            className={`px-4 py-2 rounded ${
              activeSlide === key
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {slides[key].title}
          </button>
        ))}
      </nav>

      {/* Slide Content */}
      <div className="w-full p-4 md:p-20 md:max-w-7xl flex flex-col md:flex-row  items-center gap-8 bg-gray-50 shadow-lg rounded-2xl">

         {/* Content */}
         <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-4">{slides[activeSlide].title}</h2>
          <p className="text-gray-700 mb-4">{slides[activeSlide].content}</p>
          <Link href='/'>
          <button className="relative inline-flex items-center justify-center px-4 py-2 text-orange-600 font-medium group">
            <span className="absolute inset-0 w-full h-full border-b-2 border-orange-600 transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            <span className="relative">Read More</span>
          </button>
        </Link>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-80 relative">
          <Image
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

       
      </div>
    </section>
  );
}
