import React from 'react'

const ServiceHero = () => {
  return (
    <div className='w-full min-h-full lg:min-h-screen bg-[url("/images/servicebg.png")] bg-cover bg-center text-white px-6 sm:px-8 lg:px-12 flex items-center'>
      <article className="w-full md:max-w-4xl flex gap-4 lg:gap-6 flex-col py-28">
          <h1 id="h1" className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            Our Services
          </h1>
          
        <p id="p" className="text-sm sm:text-base md:text-lg lg:text-xl">
          Unlock Growth, Optimize Operations, Deliver Results.
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
  )
}

export default ServiceHero