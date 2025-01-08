import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#h1", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power4.out",
    })
      .from(
        "#p",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        "#button",
        {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
        
        },
        "-=0.4"
      );
  }, []);
  return (
    <div className='w-full min-h-screen bg-[url("/images/background.png")] bg-cover bg-center text-white px-6 sm:px-8 lg:px-12 flex items-center'>
      <article className="w-full md:max-w-4xl flex gap-4 lg:gap-6 flex-col py-8 sm:py-12 lg:pt-28">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h1 id="h1" className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            Empowering
          </h1>
          <h1 id="h1" className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            Businesses <span className="text-[#00B8F1]">Driving Success.</span>
          </h1>
        </div>
        <p id="p" className="text-sm sm:text-base md:text-lg lg:text-xl">
          Unlock Growth, Optimize Operations, Deliver Results.
        </p>
        <p id="p" className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl">
          Edicruit offers tailored strategies to drive business growth, enhance
          operational efficiency, and achieve measurable success. Our expert
          consultants provide guidance every step of the way, ensuring your
          business thrives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button id="button" className="border border-[#00B8F1] text-white py-2 px-6 rounded-full hover:bg-[#00B8F1] transition-colors duration-300">
            Know More
          </button>
          <button id="button" className="bg-[#00B8F1] text-white py-2 px-6 rounded-full hover:bg-[#0095c4] transition-colors duration-300">
            Get Started
          </button>
        </div>
      </article>
    </div>
  );
};

export default Hero;
