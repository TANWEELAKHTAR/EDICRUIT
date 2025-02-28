import React from 'react';
import { Link } from 'react-router-dom';

const HRSolutionBanner = () => {
  return (
    <div className="container mx-auto p-6 md:px-12">
      <div className="flex flex-col md:flex-row gap-6 bg-zinc-100 p-4">
        <div className="flex-none md:w-80 bg-black rounded-lg p-6 bg-[url('/images/circbg.png')] bg-center bg-cover flex flex-col justify-between">
          <div className="flex justify-center items-center mb-4">
            <div className="w-full h-48 rounded-lg flex items-center justify-center">
              <img src='/images/hrimg.png' className="object-cover rounded-lg" alt="HR Image" />
            </div>
          </div>
          <Link to={'/contact'} className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors self-center">
            Get in touch
          </Link>
        </div>

        <div className="flex-grow bg-black rounded-lg p-8 bg-[url('/images/sqrbg.png')] bg-center bg-cover">
          <h2 className="text-cyan-300 text-2xl md:text-4xl font-bold mb-6">
            Strategic HR Solution
          </h2>
          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            EDICRUIT, your strategic HR partner, delivers innovative staffing solutions and fosters 
            empowering business partnerships. Our comprehensive services include executive search, 
            middle management hiring, project-based hiring, and recruitment process outsourcing—all 
            tailored to meet your HR needs with excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HRSolutionBanner;