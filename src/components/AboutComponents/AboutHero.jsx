import React from "react";

const AboutHero = () => {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center px-6 py-12 md:py-28">
          <h1 className="text-3xl md:text-5xl font-semibold border-b-4 border-zinc-300 inline-block pb-3">
            We're here to <br />
            <span className="gradient">guarantee your success</span>
          </h1>
          <div className="max-w-3xl mx-auto relative bg-gradient-to-tr from-blue-600 to-blue-400 shadow-lg rounded-lg p-6 md:p-8 mt-8">
            <p className="mt-4 text-white text-sm md:text-base">
              Reliable IBM i(AS400) Managed Services - Anytime, Anywhere At
              EDICRUIT, we specialize in delivering 24x7 remote monitoring and
              management of your IBM i(AS400) environment, ensuring
              uninterrupted uptime and seamless operations. Our HR services
              encompass a wide range of functions designed to support the
              management and developmet of an organization's workforce.
            </p>
            <div className="absolute top-[90%] md:top-[80%] right-0">
              <img
                src="/images/team.png"
                alt="Team Image"
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center px-6 mt-24 lg:mt-48">
          <h1 className="text-3xl md:text-5xl font-semibold border-b-4 border-zinc-300 inline-block pb-3">
            We're here for you <br />
            <span className="gradient">no matter where you are</span>
          </h1>
          <div className="mt-8">
            <img src="/images/map.png" alt="World Map" className="mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
