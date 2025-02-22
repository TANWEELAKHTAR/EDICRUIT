import React from 'react';

const ServiceHero = () => {
  const scrolldown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className='w-full min-h-screen bg-[url("/images/servicebg.png")] bg-cover bg-center text-white px-6 sm:px-8 lg:px-12 flex items-center'>
      <article className="w-full max-w-5xl flex flex-col gap-6 py-16 sm:py-24 md:py-32 lg:py-40">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Our Services
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
          Unlock Growth, Optimize Operations, Deliver Results.
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

export default ServiceHero;