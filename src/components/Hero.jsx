import React from "react";

const Hero = () => {
  return (
    <div className='w-full min-h-screen bg-[url("/images/background.png")] bg-cover bg-center text-white px-8 lg:px-12 pt-20 flex flex-col justify-center items-start '>
      <article className="w-full md:max-w-4xl flex gap-4 lg:gap-6 flex-col">
        <div className="flex flex-col md:gap-4">
          <h1 className="text-5xl md:text-8xl font-bold">Empowering</h1>
          <h1 className="text-5xl md:text-8xl font-bold">
            Businesses <span className="text-[#00B8F1]">Driving Success.</span>
          </h1>
        </div>
        <p>Unlock Growth , Optimize Operations , Deliver Results.</p>
        <p className="max-w-3xl">
          Edicruit offers tailored strategies to drive business growth, enhance
          operational efficiency, and achieve measurable success. Our expert
          consultants provide guidance every step of the way, ensuring your
          business thrives.
        </p>
        <div className=" flex gap-4">
        <button className="border border-[#00B8F1] text-white py-2 px-4 rounded-full">
          Know More
        </button>
        <button className="bg-[#00B8F1] text-white py-2 px-4 rounded-full">
          Get Started
        </button>
        </div>
      </article>
    </div>
  );
};

export default Hero;
