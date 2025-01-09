import React from "react";

const ContactPage = () => {
  return (
    <section className="w-full min-h-fit bg-[#121211] text-white">
      <div className="w-full h-fit md:h-screen flex flex-col md:flex-row">
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col gap-8 px-8 mt-28 lg:m-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl capitalize font-semibold">
            contact us
          </h1>
          <p className="text-sm md:text-base md:w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            nisi. Eum, similique incidunt saepe ad ipsum atque reiciendis
            consequuntur nobis dolor eaque sint! Mollitia eos accusantium vitae
            corporis consequuntur beatae.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 mt-16 lg:m-10">
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-black">Get in Touch</h2>
            <p className="text-gray-600 mb-6">You can reach us anytime</p>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="col-span-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="col-span-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  rows="2"
                  className="w-full border resize-none border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
              <p className="text-gray-500 text-sm mt-4 text-center w-11/12">
                By contacting us, you agree to our{" "}
                <span className="hover:underline text-black">
                  Terms of services
                </span>
               {" "} and {""}
                <span className="hover:underline text-black">
                  privacy policy
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full  h-fit lg:h-screen flex flex-col md:flex-row">
        <div className="max-w-md mx-auto lg:w-1/2  h-fit md:h-screen  flex items-center justify-center p-8">
        <img className="w-full h-full md:h-fit object-cover" src="./images/map.png" alt="" />
        </div>
        <div className="w-full lg:w-1/2 h-fit md:h-screen flex items-center justify-center flex-col gap-8 p-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl capitalize font-semibold">
            our location
          </h1>
          <p className="text-sm md:text-base md:w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            nisi. Eum, similique incidunt saepe ad ipsum atque reiciendis
            consequuntur nobis dolor eaque sint! Mollitia eos accusantium vitae
            corporis consequuntur beatae.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
