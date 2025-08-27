import React from "react";

const IBMModernization = () => {
  return (
    <div className="container mx-auto p-6 md:px-12">
      <div className="bg-zinc-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/circbg.png')] bg-center bg-cover">
            <h2 className="text-[#00B8F1] text-3xl md:text-3xl font-bold mb-4">
              IBM i(AS400) Infrastructure Modernization
            </h2>
            <p className="text-gray-100 text-sm">
              We specialize in transforming your on-prem servers to all the
              major available cloud providers that provide IBM i cloud services.
              Our experts assess and analyze your current IBM i(AS400)
              environment and provide the best suitable cloud solution that
              suits your business and perform smooth migrations.
            </p>
          </div>

          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
            <h2 className="text-white text-2xl md:text-2xl font-bold mb-4">
              IBM i(AS400) Tape Digitization
            </h2>
            <p className="text-gray-100 text-sm">
              Say goodbye to legacy tape systems with our tape digitization
              services. We help you convert physical tapes to secure digital
              storage, improving accessibility, reducing physical storage needs,
              and enhancing disaster recovery capabilities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
            <h2 className="text-white text-2xl md:text-2xl font-bold mb-4">
              IBM i(AS400) Backup Modernization.
            </h2>
            <p className="text-gray-100 text-sm">
              Ensure the safety and reliability of your data with our backup
              modernization services. We offer advanced solutions that replace
              traditional methods with faster, more secure, and automated backup
              processes, reducing downtime and data loss risk.
            </p>
          </div>

          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/circbg.png')] bg-center bg-cover flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img
                src="/images/simg1.png"
                className="w-20 h-20 object-cover"
                alt="Service Image 1"
              />
              <img
                src="/images/simg2.png"
                className="w-20 h-20 object-cover"
                alt="Service Image 2"
              />
              <img
                src="/images/simg3.png"
                className="w-20 h-20 object-cover"
                alt="Service Image 3"
              />
              <img
                src="/images/simg4.png"
                className="w-20 h-20 object-cover"
                alt="Service Image 4"
              />
            </div>
            <a
              href="/contact"
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IBMModernization;
