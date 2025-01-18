import React from "react";

const IBMModernization = () => {
  return (
    <div className="container mx-auto p-6 md:px-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Modernization Main Card */}
        <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/circbg.png')] bg-center bg-cover">
          <h2 className="text-cyan-300 text-4xl font-bold mb-4">
            IBM (AS400) Modernization
          </h2>
          <p className="text-gray-100">
            Our IBM (AS400) Support and Services provide 24x7 remote monitoring,
            cost optimization, seamless transitions, and expert administration.
            We ensure optimal performance and reliability with cloud-based
            backups and swift disaster recovery. Partner with us for efficient
            IBM i(AS400) management
          </p>
        </div>

        {/* Tape Digitization Card */}
        <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
          <h2 className="text-white text-3xl font-bold mb-4">
            IBM i(AS400)Tape Digitization
          </h2>
          <p className="text-gray-100">
            Saydigital goodbye to legacy tape systems with our tape digitization
            services. We help you convert physical tapes to secure digital
            storage, improving accessibility, reducing physical storage needs
            and enhancing disaster recovery capabilities
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Infrastructure Modernization Card */}
        <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
          <h2 className="text-white text-3xl font-bold mb-4">
            IBM i(AS400)Infrastructure Modernization
          </h2>
          <p className="text-gray-100">
            We are specialised Transforming your On-prem servers all the majors
            available cloud providers that provide IBM i cloud services. Our
            experty asses and analyse your current IBM i(AS400) environment and
            provide best suitable cloud solution that suits your business and
            perform smooth migrations
          </p>
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

export default IBMModernization;
