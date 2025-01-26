import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeService = () => {
  const serviceData = [
    {
      title: "Unlock Growth Potential with Strategic IT service",
      description:
        "We provide top - noch IT Services, driving business growth and delivering large - Scale projects across industries and regions.",
      list: [
        "Easy and fast deployment",
        "Built-in Intelligence that automates several tasks",
        "Cost-effective and scalable CRM Platform",
      ],
      image: "/images/it support.png",
    },
    {
      title:
        "Unlock Growth Potential with Expert IBM i(AS400) Solutions",
      description:
        "We help businesses transform their IT infrastructure to deliver faster, more efficient, and cost-effective solutions.",
      list: [
        "Modernize your IT infrastructure",
        "Optimize resource utilization",
        "Automate repetitive tasks",
      ],
      image: "/images/service.png",
    },
    {
      title: "Unlock Growth Potential with IBM i(AS400) Modernization",
      description:
        "We help businesses transform their IT infrastructure to deliver faster, more efficient, and cost-effective solutions.",
      list: [
        "Modernize your IT infrastructure",
        "Optimize resource utilization",
        "Automate repetitive tasks",
      ],
      image: "/images/modernization.png",
    },
    {
      title: "Unlock Growth Potential with Our HR Solutions",
      description:
        "We help businesses transform their IT infrastructure to deliver faster, more efficient, and cost-effective solutions.",
      list: [
        "Modernize your IT infrastructure",
        "Optimize resource utilization",
        "Automate repetitive tasks",
      ],
      image: "/images/hrsolution.png",
    },
  ];

  const [currentService, setCurrentService] = useState(serviceData[0]);

  const itSupportHandler = () => setCurrentService(serviceData[0]);
  const ibmSupportHandler = () => setCurrentService(serviceData[1]);
  const modernizationHandler = () => setCurrentService(serviceData[2]);
  const hrSolutionhandler = () => setCurrentService(serviceData[3]);

  return (
    <div className="w-full h-fit p-6 lg:pt-24">
      <div className="w-full lg:max-w-6xl mx-auto p-2">
        <div className="w-full flex items-center justify-evenly h-full border-b-2 border-slate-900 overflow-x-auto gap-4">
          <button
            onClick={itSupportHandler}
            className={`{w-full flex-shrink-0 px-4 py-3 text-sm md:text-base font-medium rounded-t-xl ${
              currentService.title === serviceData[0].title
                ? "bg-[#00B8F1] text-white"
                : "text-slate-900"
            }`}
          >
            IT Support and services
          </button>
          <button
            onClick={ibmSupportHandler}
            className={`{w-full flex-shrink-0 px-4 py-3 text-sm md:text-base font-medium rounded-t-xl ${
              currentService.title === serviceData[1].title
                ? "bg-[#00B8F1] text-white"
                : "text-slate-900"
            }`}
          >
            IBM AS 400 support and services
          </button>
          <button
            onClick={modernizationHandler}
            className={`{w-full flex-shrink-0 px-4 py-3 text-sm md:text-base font-medium rounded-t-xl ${
              currentService.title === serviceData[2].title
                ? "bg-[#00B8F1] text-white"
                : "text-slate-900"
            }`}
          >
            IBM AS 400 modernization
          </button>
          <button
            onClick={hrSolutionhandler}
            className={`{w-full flex-shrink-0 px-4 py-3 text-sm md:text-base font-medium rounded-t-xl ${
              currentService.title === serviceData[3].title
                ? "bg-[#00B8F1] text-white"
                : "text-slate-900"
            }`}
          >
            HR solution
          </button>
        </div>
        <div className="w-full md:max-w-6xl mx-auto py-6 md:p-6 flex flex-col gap-4 md:flex-row md:gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{currentService.title}</h1>
            <p className="text-lg">{currentService.description}</p>
            <ul className="list-disc list-inside text-base">
              {currentService.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={currentService.image}
              alt="service"
              className="w-fit h-64 object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:max-w-6xl mx-auto flex items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 text-xs md:text-sm font-semibold rounded-full border border-[#00B8F1]"
          >
            Learn more
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 text-xs md:text-sm font-semibold rounded-full bg-[#00B8F1] text-white"
          >
            Get-in-touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
