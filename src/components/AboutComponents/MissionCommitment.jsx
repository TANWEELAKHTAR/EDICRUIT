import React from "react";

const MissionCommitment = () => {
  return (
    <div className="p-6 md:p-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4 border-b border-gray-300 pb-2">Our Mission</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <h3 className="text-lg font-bold text-gray-800 w-1/3">Empowering Seamless IT Operations:</h3>
              <p className="text-gray-700 text-base w-2/3">
                We strive to provide uninterrupted and reliable managed
                services that ensure operational excellence, empowering businesses to
                focus on their core objectives.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <h3 className="text-lg font-bold text-gray-800 w-1/3">Optimizing IT Efficiency:</h3>
              <p className="text-gray-700 text-base w-2/3">
                Our mission is to deliver cost-effective solutions that optimize IT
                budgets while maintaining premium support and service quality for our
                clients.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <h3 className="text-lg font-bold text-gray-800 w-1/3">Facilitating Business Continuity:</h3>
              <p className="text-gray-700 text-base w-2/3">
                We are committed to enabling organizations to navigate complex
                transitions, mergers, and operational shifts with ease and confidence.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <h3 className="text-lg font-bold text-gray-800 w-1/3">Driving Technological Excellence:</h3>
              <p className="text-gray-700 text-base w-2/3">
                Our goal is to leverage innovation and expertise to help businesses
                achieve peak performance and reliability for their
                environments.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-blue-600 mb-4 border-b border-gray-300 pb-2">Our Commitment</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <h3 className="text-lg font-bold text-gray-800 w-1/3">24x7 Dedicated Support:</h3>
              <p className="text-gray-700 text-base w-2/3">
                We are committed to providing round-the-clock Monitoring and IT support including IBM i(AS400) Operations & Administrations, ensuring your environment remains
                operational without interruptions.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <h3 className="text-lg font-bold text-gray-800 w-1/3">Cost-Effective Solutions:</h3>
              <p className="text-gray-700 text-base w-2/3">
                Our promise is to help businesses reduce administrative overhead while
                maintaining top-tier services for both on-premises and cloud environments.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <h3 className="text-lg font-bold text-gray-800 w-1/3">Tailored Expertise:</h3>
              <p className="text-gray-700 text-base w-2/3">
                We pledge to offer expert-driven solutions, tailored to meet your unique
                business challenges with dedicated specialists.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MissionCommitment;
