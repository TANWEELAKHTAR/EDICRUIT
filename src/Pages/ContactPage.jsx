import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    countryCode: "+1"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const countryCodes = [
    { code: "+1", country: "US/CA", flag: "🇺🇸" },
    { code: "+91", country: "IN", flag: "🇮🇳" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+49", country: "DE", flag: "🇩🇪" },
    { code: "+33", country: "FR", flag: "🇫🇷" },
    { code: "+86", country: "CN", flag: "🇨🇳" },
    { code: "+81", country: "JP", flag: "🇯🇵" },
    { code: "+82", country: "KR", flag: "🇰🇷" },
    { code: "+61", country: "AU", flag: "🇦🇺" },
    { code: "+55", country: "BR", flag: "🇧🇷" },
    { code: "+7", country: "RU", flag: "🇷🇺" },
    { code: "+34", country: "ES", flag: "🇪🇸" },
    { code: "+39", country: "IT", flag: "🇮🇹" },
    { code: "+31", country: "NL", flag: "🇳🇱" },
    { code: "+46", country: "SE", flag: "🇸🇪" },
    { code: "+47", country: "NO", flag: "🇳🇴" },
    { code: "+45", country: "DK", flag: "🇩🇰" },
    { code: "+41", country: "CH", flag: "🇨🇭" },
    { code: "+43", country: "AT", flag: "🇦🇹" },
    { code: "+32", country: "BE", flag: "🇧🇪" }
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formDataObj = new FormData();
    
    // Add your Web3Forms access key here
    formDataObj.append("access_key", "71b79093-487b-45d3-9d5b-1bab55823b52");
    
    // Add form data
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("subject", formData.subject);
    formDataObj.append("message", formData.message);
    formDataObj.append("phone", `${formData.countryCode} ${formData.phone}`);

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          phone: "",
          countryCode: "+1"
        });
        alert("Message sent successfully!");
        window.location.href = "/";
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-fit">
      <div className="w-full h-fit md:h-screen flex flex-col md:flex-row">
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col gap-8 px-8 mt-28 lg:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl capitalize font-semibold text-center">
            contact us
          </h1>
          <p className="text-sm md:text-base md:w-5/6 ">
            Thank you for visiting Edicruit! We are here to assist you with all
            your IT & ITES Support & Services, Managing IBM i infrastructure,
            technology needs and HR services. Whether you have questions, need
            assistance, or want to learn more about how our services can support
            your business, we're just a click away.
          </p>
          <p className="text-sm md:text-base md:w-5/6 ">
            Our dedicated team is ready to provide you with expert solutions and
            prompt support. Please feel free to reach out to us.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 mt-16 lg:mt-10">
          <div className="contact-form w-full lg:w-[60%] p-8 rounded-xl backdrop-blur shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center tracking-wide uppercase form-element">
              Get-in-touch
            </h2>
            <div className="space-y-4">
              <div className="form-element">
                <label className="block text-sm font-medium mb-1 ">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white shadow-lg border border-white/10 focus:outline-none focus:border-white/30"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="form-element">
                <label className="block text-sm font-medium mb-1 ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white shadow-lg border border-white/10 focus:outline-none focus:border-white/30"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-element">
                <label className="block text-sm font-medium mb-1 ">
                  Phone Number
                </label>
                <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                    className="px-3 py-2 bg-white border border-white/10 focus:outline-none focus:border-white/30 "
                  >
                    {countryCodes.map((country) => (
                      <option 
                        key={country.code} 
                        value={country.code}
                        className="bg-black text-white text-sm"
                      >
                        {country.flag} {country.code} {country.country}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="w-full px-4 py-2 bg-white  border border-white/10 focus:outline-none focus:border-white/30"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-element">
                <label className="block text-sm font-medium mb-1 ">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white shadow-lg border border-white/10 focus:outline-none focus:border-white/30"
                  placeholder="Subject..."
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="form-element">
                <label className="block text-sm font-medium mb-1 ">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="1"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white shadow-lg border border-white/10 focus:outline-none focus:border-white/30 resize-none"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="form-element w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium opacity-90 transition-opacity disabled:opacity-50 "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            <p className=" text-sm mt-4 text-center">
              By contacting us, you agree to our{" "}
              <span className="underline  cursor-pointer">
                Terms of services
              </span>{" "}
              and{" "}
              <span className="underline  cursor-pointer">
                privacy policy
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit md:h-screen flex items-center flex-col p-8 bg-black text-white relative">
        <h1 className="text-3xl md:text-4xl lg:text-5xl capitalize font-semibold text-center mt-12">
          our remote services offering
        </h1>
        <p className="text-sm md:text-base lg:text-lg md:w-3/6 text-center mt-4 mb-32">
          We are proud to offer comprehensive remote support and services to
          clients across all regions. No matter where you are located, our team
          of experts is always just a call or click away.
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