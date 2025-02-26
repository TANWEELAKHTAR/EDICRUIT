import React from "react";

const ContactPage = () => {
  return (
    <section className="w-full min-h-fit">
      <div className="w-full h-fit md:h-screen flex flex-col md:flex-row">
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col gap-8 px-8 mt-28 lg:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl capitalize font-semibold text-center">
            contact us
          </h1>
          <p className="text-sm md:text-base lg:text-lg md:w-5/6 ">
            Thank you for visiting Edicruit! We are here to assist you with all
            your IBM i(AS400) support & services, IT helpdesk services, technology
            needs and HR services. Whether you have questions, need assistance, or want to learn
            more about how our services can support your business, we're just a
            click away.
          </p>
          <p className="text-sm md:text-base lg:text-lg md:w-5/6 ">
            Our dedicated team is ready to provide you with expert solutions and
            prompt support. Please feel free to reach out to us.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 mt-16 lg:mt-10">
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-black text-center">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              You can reach us anytime
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full border resize-none border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
              <p className="text-gray-500 text-sm mt-4 text-center">
                By contacting us, you agree to our{" "}
                <span className="hover:underline text-black">
                  Terms of services
                </span>{" "}
                and {""}
                <span className="hover:underline text-black">
                  privacy policy
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-fit md:h-screen flex items-center flex-col p-8 bg-black text-white relative">
        <h1 className="text-3xl md:text-4xl lg:text-5xl capitalize font-semibold text-center mt-12">
          our remote services offering
        </h1>
        <p className="text-sm md:text-base lg:text-lg md:w-3/6 text-center mt-4 mb-32">
        We are proud to offer comprehensive remote support and services to clients across all regions. No matter where you are located, our team of experts is always just a call or click away.
        </p>
        <img
          className="w-full absolute -z-0 bottom-0 object-fill"
          src="./images/earth.svg"
          alt="Map"
        />
      </div>
    </section>
  );
};

export default ContactPage;
