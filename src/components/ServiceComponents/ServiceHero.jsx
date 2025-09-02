
const ServiceHero = () => {
  const scrolldown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className='w-full min-h-screen bg-[url("/images/servicebg.png")] bg-cover bg-center text-white px-6 sm:px-8 lg:px-12 flex items-center'>
      <article className="w-full max-w-5xl flex flex-col gap-6 py-16 sm:py-24 md:py-32 lg:py-40">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Our Services
        </h1>

        <p className="text-xl max-w-2xl">
          24/7 Help Desk & Remote Support, Proactive Monitoring & Alerts, Managing
          IBM i Infra, Infra Modernization.
        </p>

        <p className="text-base max-w-2xl">
          We deliver reliable, secure, and scalable IT Managed Services designed
          to reduce downtime, improve performance, and let you focus on what
          matters most—your business. Round-the-clock monitoring, maintenance,
          and technical support for your entire IT environment. We proactively
          identify and resolve issues before they impact your operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            id="button"
            onClick={scrolldown}
            className="border border-[#00B8F1] text-white py-3 px-6 rounded-full hover:bg-[#00B8F1] transition-colors duration-300"
          >
            Know More
          </button>
          <a
            href="/contact"
            id="button"
            className="bg-[#00B8F1] text-white py-3 px-6 rounded-full hover:bg-[#0095c4] transition-colors duration-300 text-center"
          >
            Get Started
          </a>
        </div>
      </article>
    </div>
  );
};

export default ServiceHero;
