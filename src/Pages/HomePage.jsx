import React from "react";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="w-full min-h-screen px-8 lg:px-12 flex items-center bg-[url('./public/images/background.png')] bg-cover bg-bottom text-white">
        <article className="w-full lg:w-1/2 pt-10">
          <h1 className="text-[2.8rem] leading-tight md:text-7xl md:leading-tight font-semibold">
            Empowering Businesses{" "}
            <span className="text-[#00B8F1]">Driving Success</span>
          </h1>
          <p className="text-base md:text-lg my-8">
            Unlock Growth , Optimize Operations , Deliver Results.
          </p>
          <p className="text-base md:text-lg">
            Edicruit offers tailored strategies to drive business growth,
            enhance operational efficiency, and achieve measurable success. Our
            expert consultants provide guidance every step of the way, ensuring
            your business thrives.
          </p>
        </article>
      </section>
      <div className="w-full h-fit md:h-32 bg-[url('./images/cardbg.png')] bg-cover bg-center flex justify-evenly items-center flex-wrap">
        <div className="card flex mt-12 flex-col justify-between items-center p-2 w-44 md:w-60 h-28 md:h-36 text-white bg-[#1E1E1E] rounded-lg">
          <div className="flex w-full items-center gap-4 border-b border-b-gray-500 p-3">
            <img
              className="w-8 md:w-10"
              src="./images/projectlogo.svg"
              alt=""
            />
            <h1 className="text-base md:text-lg font-semibold uppercase self-start">
              projects
            </h1>
          </div>
          <p className="text-3xl md:text-4xl font-semibold">+16</p>
        </div>
        <div className="card flex mt-12 flex-col justify-between items-center p-2 w-44 md:w-60 h-28 md:h-36 text-white bg-[#1E1E1E] rounded-lg">
          <div className="flex w-full items-center gap-4 border-b border-b-gray-500 p-3">
            <img
              className="w-8 md:w-10"
              src="./images/projectlogo.svg"
              alt=""
            />
            <h1 className="text-base md:text-lg font-semibold uppercase self-start">
              projects
            </h1>
          </div>
          <p className="text-3xl md:text-4xl font-semibold">+16</p>
        </div>
        <div className="card flex mt-12 flex-col justify-between items-center p-2 w-44 md:w-60 h-28 md:h-36 text-white bg-[#1E1E1E] rounded-lg">
          <div className="flex w-full items-center gap-4 border-b border-b-gray-500 p-3">
            <img
              className="w-8 md:w-10"
              src="./images/projectlogo.svg"
              alt=""
            />
            <h1 className="text-base md:text-lg font-semibold uppercase self-start">
              projects
            </h1>
          </div>
          <p className="text-3xl md:text-4xl font-semibold">+16</p>
        </div>
        <div className="card flex mt-12 flex-col justify-between items-center p-2 w-44 md:w-60 h-28 md:h-36 text-white bg-[#1E1E1E] rounded-lg">
          <div className="flex w-full items-center gap-4 border-b border-b-gray-500 p-3">
            <img
              className="w-8 md:w-10"
              src="./images/projectlogo.svg"
              alt=""
            />
            <h1 className="text-base md:text-lg font-semibold uppercase self-start">
              projects
            </h1>
          </div>
          <p className="text-3xl md:text-4xl font-semibold">+16</p>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
