import React from "react";
import { Link } from "react-router-dom";

const ITServicesGrid = () => {
  return (
    <div className="container mx-auto p-6 md:px-8 lg:px-12" id="s1">
      <div className="bg-zinc-100 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* First Card */}
          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/circbg.png')] bg-center bg-cover h-full">
            <h2 className="text-[#00B8F1] text-2xl md:text-3xl font-bold mb-4">
              IT Support & Services
            </h2>
            <p className="text-gray-100 text-sm">
              Elevate your tech with our Managed IT Services. Enjoy 24/7
              support, advanced cybersecurity, scalable cloud solutions,
              efficient network management, and reliable backup and recovery.
              Let's transform your IT infrastructure together!
            </p>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-4 md:gap-6 h-full">
            <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover h-full">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Application Support
              </h2>
              <p className="text-gray-100 text-sm">
                Monitoring Cloud infrastructure, storage and application.
                Ensuring data backup and recovery solutions are in place
              </p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover h-full">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Cloud Services
              </h2>
              <p className="text-gray-100 text-sm">
                Monitoring Cloud infrastructure, storage and application.
                Ensuring data backup and recovery solutions are in place
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover h-full">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              24/7 monitoring
            </h2>
            <p className="text-gray-100 text-sm">
              We continuously monitor your critical applications, servers, and
              network. Any alerts are promptly reported and escalated to prevent
              business impact, ensuring issues are resolved without delay.
            </p>
          </div>
        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
          <div className="lg:col-span-3 bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Desktop support services
            </h2>
            <p className="text-gray-100 text-sm mb-4">
              Our desktop support services ensure your employees work
              efficiently. We provide:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                "Software updates",
                "On-site and remote support",
                "Immediate assistance",
                "Performance monitoring",
                "Troubleshooting",
                "Ongoing assistance",
                "Installation and configuration",
                "Reporting and analysis",
              ].map((service, index) => (
                <div key={index} className="text-gray-100 text-xs">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/circbg.png')] bg-center bg-cover flex flex-col items-center justify-center h-full">
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
              <img
                src="/images/simg1.png"
                className="w-16 h-16 md:w-20 md:h-20 object-cover"
                alt="Service"
              />
              <img
                src="/images/simg2.png"
                className="w-16 h-16 md:w-20 md:h-20 object-cover"
                alt="Service"
              />
              <img
                src="/images/simg3.png"
                className="w-16 h-16 md:w-20 md:h-20 object-cover"
                alt="Service"
              />
              <img
                src="/images/simg4.png"
                className="w-16 h-16 md:w-20 md:h-20 object-cover"
                alt="Service"
              />
            </div>
            <a
              href="/contact"
              className="bg-white text-black px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesGrid;