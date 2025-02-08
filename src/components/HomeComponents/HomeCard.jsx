import React from 'react';

const HomeCard = () => {
  const advantages = [
    {
      title: "Uninterrupted Uptime and Reliability",
      description:
        "24x7 remote monitoring and administration to ensure seamless operations, including managing critical updates, batch job processing, and backups and restores.",
      image: "/images/image1.jpg",
    },
    {
      title: "Cost Optimization",
      description:
        "Helping to reduce overhead costs associated with IBM i (AS400) administration, whether on-premises or in the cloud, while maintaining premium support.",
      image: "/images/image2.png",
    },
    {
      title: "Expertise and Devotion",
      description:
        "Our adept team comprises skilled IBM i (AS400) administrators, Cloud Migration and performance of your IBM i (AS400) systems.",
      image: "/images/image3.png",
    },
    {
      title: "Seamless Transitions",
      description:
        "Simplifying transitions, mergers, or acquisitions by ensuring a smooth process during critical organizational shifts.",
      image: "/images/image4.png",
    },
    {
      title: "Comprehensive Professional Services",
      description:
        "Offering temporary system management, team upskilling, overseeing intricate technical projects, cloud-based backup solutions, and swift disaster recovery services.",
      image: "/images/image5.png",
    },
  ];

  return (
    <section className="px-6 py-12 w-full h-fit">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Our Unmatched Advantages</h2>
        <p className="text-gray-600">Delivering Unmatched Value Through Innovation</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-10">
        {advantages.map((advantage, index) => (
          <div key={index} className={`relative bg-white rounded-lg shadow-md overflow-hidden ${index === 4 ? 'md:col-span-2' : ''}`}>
            <img src={advantage.image} alt={advantage.title} className="w-full h-64 md:h-80 object-cover" />
            <div className="p-6 bg-black bg-opacity-50 text-white h-fit absolute bottom-0 left-0 w-full">
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-sm">{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCard;