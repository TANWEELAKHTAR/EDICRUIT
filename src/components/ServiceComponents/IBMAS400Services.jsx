import React from "react";

const IBMAS400Services = () => {
  return (
    <div className="container mx-auto p-6 md:px-12">
      <div className="bg-zinc-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
            <h2 className="text-cyan-300 text-3xl md:text-4xl font-bold mb-4">
              IBM (AS400) SUPPORT AND SERVICES
            </h2>
            <p className="text-gray-100 text-base md:text-lg">
              Our IBM (AS400) Support and Services provide 24x7 remote monitoring,
              cost optimization, seamless transitions, and expert administration.
              We ensure optimal performance and reliability with cloud-based
              backups and swift disaster recovery. Partner with us for efficient
              IBM i(AS400) management.
            </p>
          </div>

          {/* Unlock IBM Power Card */}
          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Unlock IBM (AS400) Power with Our Expert Support & Services
            </h2>
            <p className="text-gray-100 text-base md:text-lg">
              Welcome to EDICRUIT, your go-to for IBM AS400/iSeries support and
              solutions. Let's optimize your technology together!
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* End to End Infrastructure Card */}
          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/circbg.png')] bg-center bg-cover">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              IBM (AS400) END TO END infrastructure support
            </h2>
            <p className="text-gray-100 text-base md:text-lg">
              We continuously monitor your critical applications, servers, and
              network. Any alerts are promptly reported and escalated to prevent
              business impact, ensuring issues are resolved without delay.
            </p>
          </div>

          {/* Customized Support Card */}
          <div className="bg-black text-white rounded-lg p-6 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              IBM(AS400) Customized Support
            </h2>
            <p className="text-gray-100 text-base md:text-lg">
              Our tailored IBM i (AS400) support services align with your business
              goals, operational challenges, and industry standards. Enjoy
              flexible, hourly-based services to meet your specific needs.
            </p>
          </div>

          {/* Contact Card */}
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
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IBMAS400Services;