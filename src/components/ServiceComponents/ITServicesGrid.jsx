import React from "react";

const ITServicesGrid = () => {
  return (
    <div className="container mx-auto p-6 md:px-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/circbg.png')] bg-center bg-cover">
          <h2 className="text-cyan-300 text-4xl font-bold mb-4">
            IT Support & Services
          </h2>
          <p className="text-gray-100">
            Elevate your tech with our Managed IT Services. Enjoy 24/7 support,
            advanced cybersecurity, scalable cloud solutions, efficient network
            management, and reliable backup and recovery. Let's transform your
            IT infrastructure together!
          </p>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          {/* Application Support Card */}
          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
            <h2 className="text-white text-4xl font-bold mb-4">
              Application Support
            </h2>
            <p className="text-gray-100">
              Monitoring Cloud infrastructure, storage and application. Ensuring
              data backup and recovery solutions are in place
            </p>
          </div>

          {/* Cloud Services Card */}
          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
            <h2 className="text-white text-4xl font-bold mb-4">
              Cloud Services
            </h2>
            <p className="text-gray-100">
              Monitoring Cloud infrastructure, storage and application. Ensuring
              data backup and recovery solutions are in place
            </p>
          </div>
        </div>

        {/* 24/7 Monitoring Card */}
        <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
          <h2 className="text-white text-4xl font-bold mb-4">
            24/7 monitoring
          </h2>
          <p className="text-gray-100">
            We continuously monitor your critical applications, servers, and
            network. Any alerts are promptly reported and escalated to prevent
            business impact, ensuring issues are resolved without delay.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        {/* Desktop Support Services Card */}
        <div className="lg:col-span-3 bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
          <h2 className="text-white text-4xl font-bold mb-4">
            Desktop support services
          </h2>
          <p className="mb-4">
            Our desktop support services ensure your employees work efficiently.
            we provide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Software updates",
              "On-site and remote support",
              "Immediate assistance",
              "Performance monitoring",
              "Trouble shooting",
              "Ongoing assistance",
              "Installation and configuration",
              "Reporting and analysis",
            ].map((service, index) => (
              <div key={index} className="text-gray-100">
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/circbg.png')] bg-center bg-cover flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="/images/simg1.png"
              className="w-20 h-20 object-cover"
            ></img>
            <img
              src="/images/simg2.png"
              className="w-20 h-20 object-cover"
            ></img>
            <img
              src="/images/simg3.png"
              className="w-20 h-20 object-cover"
            ></img>
            <img
              src="/images/simg4.png"
              className="w-20 h-20 object-cover"
            ></img>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ITServicesGrid;
