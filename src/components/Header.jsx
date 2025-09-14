import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      "nav img",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".desktop-links a",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  });
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      gsap.fromTo(
        ".mobile-menu",
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".mobile-menu a",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(".mobile-menu", {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };
  const handleClosing = () => {
    setIsOpen(false);
    gsap.to(".mobile-menu", {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.inout",
    });
  };
  return (
    <nav className="w-full flex items-center justify-between pr-3 lg:px-6 md:px-3 bg-[#1E1E1E80]  text-white fixed top-0 z-40">
      <Link to={"/"}><img
        className="w-36 object-cover"
        src="./images/logo.svg"
        alt=""
      /></Link>
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1.5 z-50"
        onClick={handleMenuToggle}
      >
        <span
          className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <div className="desktop-links hidden md:flex gap-6 items-center">
        <Link
          to="/"
          className="text-base uppercase hover:text-[#01B8F1] font-semibold transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-base uppercase hover:text-[#01B8F1] font-semibold transition-colors"
        >
          About us
        </Link>
        <Link
          to="/service"
          className="text-base uppercase hover:text-[#01B8F1] font-semibold transition-colors"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-base uppercase hover:bg-[#01B8F1] hover:text-white font-semibold transition-colors border border-[#01B8F1] px-4 py-2 rounded-full"
        >
          Contact us
        </Link>
      </div>

      <div
        className={`mobile-menu fixed top-0 right-0 z-10 h-screen w-full bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link onClick={handleClosing} to="/" className="text-xl uppercase">
          Home
        </Link>
        <Link onClick={handleClosing} to="/about" className="text-xl uppercase">
          About us
        </Link>
        <Link
          onClick={handleClosing}
          to="/service"
          className="text-xl uppercase"
        >
          Services
        </Link>
        
        <Link
          onClick={handleClosing}
          to="/contact"
          className="text-xl uppercase border border-[#01B8F1] px-4 py-2 rounded-full"
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
};

export default Header;
