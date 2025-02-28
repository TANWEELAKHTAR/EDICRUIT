import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomeHero = () => {
  const scrolldown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
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
    <div className='w-full h-screen bg-[url("/images/background.jpg")] bg-cover bg-center text-white px-4 sm:px-6 md:px-8 lg:px-12 flex items-center'>
      <article className="w-full md:max-w-4xl flex gap-4 lg:gap-6 flex-col py-20 sm:py-24 md:py-28">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h1 id="h1" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Empowering
          </h1>
          <h1 id="h1" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Businesses <span className="text-[#00B8F1]">Driving Success.</span>
          </h1>
        </div>
        <p id="p" className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Unlock Growth, Optimize Operations, Deliver Results.
        </p>
        <p id="p" className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl">
          Edicruit offers tailored strategies to drive business growth, enhance
          operational efficiency, and achieve measurable success. Our managed, customized support & services and expert
          consultants provide guidance every step of the way, ensuring your
          business thrives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button id="button" onClick={scrolldown} className="border border-[#00B8F1] text-white py-2 px-6 rounded-full hover:bg-[#00B8F1] transition-colors duration-300">
            Know More
          </button>
          <a href="/contact" id="button" className="bg-[#00B8F1] text-white py-2 px-6 rounded-full hover:bg-[#0095c4] transition-colors duration-300">
            Get Started
          </a>
        </div>
      </article>
    </div>
  );
};

export default HomeHero;