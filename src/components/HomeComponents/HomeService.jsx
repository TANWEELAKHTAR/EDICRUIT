import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeService = () => {
  const scrolldown = () => {
    window.scrollTo({
      top: window.innerHeight * 2 - 100,
      behavior: "smooth",
    });
  };

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
      title: "Unlock Growth Potential with Expert IBM i(AS400) Solutions",
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

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentService, setCurrentService] = useState(serviceData[0]);

  // Auto-rotate tabs every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % serviceData.length;
        setCurrentService(serviceData[nextIndex]);
        return nextIndex;
      });
    }, 5500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [serviceData]);

  const handleServiceChange = (index) => {
    setCurrentServiceIndex(index);
    setCurrentService(serviceData[index]);
  };

  const itSupportHandler = () => handleServiceChange(0);
  const ibmSupportHandler = () => handleServiceChange(1);
  const modernizationHandler = () => handleServiceChange(2);
  const hrSolutionhandler = () => handleServiceChange(3);

  return (
    <div className="w-full h-fit p-4 md:p-6 lg:pt-24">
      <div className="w-full lg:max-w-7xl mx-auto p-1 md:p-2">
        <div className="w-full flex items-center justify-start md:justify-evenly h-full border-b-2 border-slate-900 overflow-x-auto gap-2 md:gap-4 pb-0">
          <button
            onClick={itSupportHandler}
            className={`flex-shrink-0 px-2 py-2 md:px-4 md:py-3 text-xs md:text-base font-medium rounded-t-xl whitespace-nowrap ${
              currentServiceIndex === 0
                ? "bg-[#00B8F1] text-white"
                : "text-slate-900 hover:bg-gray-100"
            }`}
          >
            IT Support
          </button>
          <button
            onClick={ibmSupportHandler}
            className={`flex-shrink-0 px-2 py-2 md:px-4 md:py-3 text-xs md:text-base font-medium rounded-t-xl whitespace-nowrap ${
              currentServiceIndex === 1
                ? "bg-[#00B8F1] text-white"
                : "text-slate-900 hover:bg-gray-100"
            }`}
          >
            IBM AS 400 Support
          </button>
          <button
            onClick={modernizationHandler}
            className={`flex-shrink-0 px-2 py-2 md:px-4 md:py-3 text-xs md:text-base font-medium rounded-t-xl whitespace-nowrap ${
              currentServiceIndex === 2
                ? "bg-[#00B8F1] text-white"
                : "text-slate-900 hover:bg-gray-100"
            }`}
          >
            Modernization
          </button>
          <button
            onClick={hrSolutionhandler}
            className={`flex-shrink-0 px-2 py-2 md:px-4 md:py-3 text-xs md:text-base font-medium rounded-t-xl whitespace-nowrap ${
              currentServiceIndex === 3
                ? "bg-[#00B8F1] text-white"
                : "text-slate-900 hover:bg-gray-100"
            }`}
          >
            HR Solution
          </button>
        </div>
        <div className="w-full md:max-w-6xl mx-auto py-4 md:py-6 md:p-6 flex flex-col gap-6 md:flex-row md:gap-8 mt-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4 px-2 md:px-0">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">{currentService.title}</h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">{currentService.description}</p>
            <ul className="list-disc list-inside text-sm md:text-base space-y-2">
              {currentService.list.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center px-2 md:px-0">
            <img
              src={currentService.image}
              alt="service"
              className="w-full max-w-sm md:max-w-none md:w-fit h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-full md:max-w-6xl mx-auto flex items-center justify-center gap-3 md:gap-4 px-4 md:px-0">
          <button
            onClick={scrolldown}
            className="px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold rounded-full border border-[#00B8F1] hover:bg-[#00B8F1] transition-colors duration-300 hover:text-white"
          >
            Learn more
          </button>
          <a
            href="/contact"
            className="px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold border rounded-full bg-[#00B8F1] text-white hover:bg-white hover:border-[#00B8F1] hover:text-[#00B8F1] transition-colors duration-300"
          >
            Get-in-touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeService;