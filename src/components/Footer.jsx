import React from "react";
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-gray-300 p-6 md:p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div className="flex flex-col items-start space-y-4">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="w-fit hidden md:block"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Address</h4>
          <p>White Field</p>
          <p>Bangalore-560067</p>
          <p>Email: info@gmail.com</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Services</h4>
          <ul className="space-y-1">
            <li>IT/ITES Support & Service</li>
            <li>IBM i (AS400) Support & Service</li>
            <li>HR Solution</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Information</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-4 text-center md:text-right mt-6 md:mt-0">
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Request a Call
          </a>
          <p className="mt-4">+1 (2222) 999-99-99</p>
          <p>Thinkshell@Lorem ipsum.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
