import React from "react";

const HomePage = () => {
  return (
    <section className="w-full h-screen px-8 lg:px-12 flex items-center bg-zinc-800 text-white">
      <article className="w-full lg:w-1/2 pt-10">
        <h1 className="text-5xl leading-tight md:text-7xl md:leading-tight font-semibold">
          Empowering Businesses{" "}
          <span className="text-[#00B8F1]">Driving Success</span>
        </h1>
        <p className="text-base md:text-lg my-8">
          Unlock Growth , Optimize Operations , Deliver Results.
        </p>
        <p className="text-base md:text-lg">
          Edicruit offers tailored strategies to drive business growth, enhance
          operational efficiency, and achieve measurable success. Our expert
          consultants provide guidance every step of the way, ensuring your
          business thrives.
        </p>
      </article>
    </section>
  );
};

export default HomePage;
