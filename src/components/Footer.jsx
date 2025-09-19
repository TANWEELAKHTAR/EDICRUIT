import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 p-6 md:p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start bg-white rounded-2xl text-black p-4">
        <div className="flex flex-col items-start space-y-4">
          <img
            src="./images/logo.svg"
            alt="Logo"
            className="w-fit hidden md:block"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Address</h4>
          <p>White Field</p>
          <p>Bangalore-560067</p>
          <p>Email: 
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@edicruit.com"
              className="underline"
            >
               info@edicruit.com
            </a>
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Services</h4>
          <div className="space-y-1">
            <Link
              to="service"
              className="cursor-pointer block hover:text-[#00B8F1]"
            >
              IT Support & Services
            </Link>
            <Link
              to="service"
              className="cursor-pointer block hover:text-[#00B8F1]"
            >
              IBM i Support & Services
            </Link>
            <Link
              to="service"
              className="cursor-pointer block hover:text-[#00B8F1]"
            >
              IBM i Infrastructure Modernization
            </Link>
            <Link
              to="service"
              className="cursor-pointer block hover:text-[#00B8F1]"
            >
              Strategic HR Solution
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Information</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center md:text-right mt-6 md:mt-0">
          <a
            href="tel:+919939910263"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Request a Call
          </a>
          <p className="mt-4">+91 99399 10263</p>
          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@edicruit.com"
              className="underline"
            >
              info@edicruit.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
