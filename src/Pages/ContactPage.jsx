import React, { useState, useRef, useEffect } from "react";

const ContactPage = () => {
  const [showToast, setShowToast] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    countryISO: "IN",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const countryCodes = [
    { code: "+93", country: "AF", name: "Afghanistan" },
    { code: "+355", country: "AL", name: "Albania" },
    { code: "+213", country: "DZ", name: "Algeria" },
    { code: "+376", country: "AD", name: "Andorra" },
    { code: "+244", country: "AO", name: "Angola" },
    { code: "+54", country: "AR", name: "Argentina" },
    { code: "+374", country: "AM", name: "Armenia" },
    { code: "+61", country: "AU", name: "Australia" },
    { code: "+43", country: "AT", name: "Austria" },
    { code: "+994", country: "AZ", name: "Azerbaijan" },
    { code: "+973", country: "BH", name: "Bahrain" },
    { code: "+880", country: "BD", name: "Bangladesh" },
    { code: "+375", country: "BY", name: "Belarus" },
    { code: "+32", country: "BE", name: "Belgium" },
    { code: "+501", country: "BZ", name: "Belize" },
    { code: "+229", country: "BJ", name: "Benin" },
    { code: "+975", country: "BT", name: "Bhutan" },
    { code: "+591", country: "BO", name: "Bolivia" },
    { code: "+387", country: "BA", name: "Bosnia and Herzegovina" },
    { code: "+267", country: "BW", name: "Botswana" },
    { code: "+55", country: "BR", name: "Brazil" },
    { code: "+673", country: "BN", name: "Brunei" },
    { code: "+359", country: "BG", name: "Bulgaria" },
    { code: "+226", country: "BF", name: "Burkina Faso" },
    { code: "+257", country: "BI", name: "Burundi" },
    { code: "+855", country: "KH", name: "Cambodia" },
    { code: "+237", country: "CM", name: "Cameroon" },
    { code: "+1", country: "CA", name: "Canada" },
    { code: "+238", country: "CV", name: "Cape Verde" },
    { code: "+236", country: "CF", name: "Central African Republic" },
    { code: "+235", country: "TD", name: "Chad" },
    { code: "+56", country: "CL", name: "Chile" },
    { code: "+86", country: "CN", name: "China" },
    { code: "+57", country: "CO", name: "Colombia" },
    { code: "+269", country: "KM", name: "Comoros" },
    { code: "+242", country: "CG", name: "Congo" },
    { code: "+243", country: "CD", name: "Democratic Republic of the Congo" },
    { code: "+506", country: "CR", name: "Costa Rica" },
    { code: "+385", country: "HR", name: "Croatia" },
    { code: "+53", country: "CU", name: "Cuba" },
    { code: "+357", country: "CY", name: "Cyprus" },
    { code: "+420", country: "CZ", name: "Czech Republic" },
    { code: "+45", country: "DK", name: "Denmark" },
    { code: "+253", country: "DJ", name: "Djibouti" },
    { code: "+593", country: "EC", name: "Ecuador" },
    { code: "+20", country: "EG", name: "Egypt" },
    { code: "+503", country: "SV", name: "El Salvador" },
    { code: "+240", country: "GQ", name: "Equatorial Guinea" },
    { code: "+291", country: "ER", name: "Eritrea" },
    { code: "+372", country: "EE", name: "Estonia" },
    { code: "+251", country: "ET", name: "Ethiopia" },
    { code: "+679", country: "FJ", name: "Fiji" },
    { code: "+358", country: "FI", name: "Finland" },
    { code: "+33", country: "FR", name: "France" },
    { code: "+241", country: "GA", name: "Gabon" },
    { code: "+220", country: "GM", name: "Gambia" },
    { code: "+995", country: "GE", name: "Georgia" },
    { code: "+49", country: "DE", name: "Germany" },
    { code: "+233", country: "GH", name: "Ghana" },
    { code: "+30", country: "GR", name: "Greece" },
    { code: "+502", country: "GT", name: "Guatemala" },
    { code: "+224", country: "GN", name: "Guinea" },
    { code: "+245", country: "GW", name: "Guinea-Bissau" },
    { code: "+592", country: "GY", name: "Guyana" },
    { code: "+509", country: "HT", name: "Haiti" },
    { code: "+504", country: "HN", name: "Honduras" },
    { code: "+852", country: "HK", name: "Hong Kong" },
    { code: "+36", country: "HU", name: "Hungary" },
    { code: "+354", country: "IS", name: "Iceland" },
    { code: "+91", country: "IN", name: "India" },
    { code: "+62", country: "ID", name: "Indonesia" },
    { code: "+98", country: "IR", name: "Iran" },
    { code: "+964", country: "IQ", name: "Iraq" },
    { code: "+353", country: "IE", name: "Ireland" },
    { code: "+972", country: "IL", name: "Israel" },
    { code: "+39", country: "IT", name: "Italy" },
    { code: "+225", country: "CI", name: "Ivory Coast" },
    { code: "+81", country: "JP", name: "Japan" },
    { code: "+962", country: "JO", name: "Jordan" },
    { code: "+7", country: "KZ", name: "Kazakhstan" },
    { code: "+254", country: "KE", name: "Kenya" },
    { code: "+965", country: "KW", name: "Kuwait" },
    { code: "+996", country: "KG", name: "Kyrgyzstan" },
    { code: "+856", country: "LA", name: "Laos" },
    { code: "+371", country: "LV", name: "Latvia" },
    { code: "+961", country: "LB", name: "Lebanon" },
    { code: "+266", country: "LS", name: "Lesotho" },
    { code: "+231", country: "LR", name: "Liberia" },
    { code: "+218", country: "LY", name: "Libya" },
    { code: "+423", country: "LI", name: "Liechtenstein" },
    { code: "+370", country: "LT", name: "Lithuania" },
    { code: "+352", country: "LU", name: "Luxembourg" },
    { code: "+853", country: "MO", name: "Macau" },
    { code: "+261", country: "MG", name: "Madagascar" },
    { code: "+265", country: "MW", name: "Malawi" },
    { code: "+60", country: "MY", name: "Malaysia" },
    { code: "+960", country: "MV", name: "Maldives" },
    { code: "+223", country: "ML", name: "Mali" },
    { code: "+356", country: "MT", name: "Malta" },
    { code: "+222", country: "MR", name: "Mauritania" },
    { code: "+230", country: "MU", name: "Mauritius" },
    { code: "+52", country: "MX", name: "Mexico" },
    { code: "+373", country: "MD", name: "Moldova" },
    { code: "+377", country: "MC", name: "Monaco" },
    { code: "+976", country: "MN", name: "Mongolia" },
    { code: "+382", country: "ME", name: "Montenegro" },
    { code: "+212", country: "MA", name: "Morocco" },
    { code: "+258", country: "MZ", name: "Mozambique" },
    { code: "+95", country: "MM", name: "Myanmar" },
    { code: "+264", country: "NA", name: "Namibia" },
    { code: "+977", country: "NP", name: "Nepal" },
    { code: "+31", country: "NL", name: "Netherlands" },
    { code: "+64", country: "NZ", name: "New Zealand" },
    { code: "+505", country: "NI", name: "Nicaragua" },
    { code: "+227", country: "NE", name: "Niger" },
    { code: "+234", country: "NG", name: "Nigeria" },
    { code: "+850", country: "KP", name: "North Korea" },
    { code: "+389", country: "MK", name: "North Macedonia" },
    { code: "+47", country: "NO", name: "Norway" },
    { code: "+968", country: "OM", name: "Oman" },
    { code: "+92", country: "PK", name: "Pakistan" },
    { code: "+970", country: "PS", name: "Palestine" },
    { code: "+507", country: "PA", name: "Panama" },
    { code: "+675", country: "PG", name: "Papua New Guinea" },
    { code: "+595", country: "PY", name: "Paraguay" },
    { code: "+51", country: "PE", name: "Peru" },
    { code: "+63", country: "PH", name: "Philippines" },
    { code: "+48", country: "PL", name: "Poland" },
    { code: "+351", country: "PT", name: "Portugal" },
    { code: "+974", country: "QA", name: "Qatar" },
    { code: "+40", country: "RO", name: "Romania" },
    { code: "+7", country: "RU", name: "Russia" },
    { code: "+250", country: "RW", name: "Rwanda" },
    { code: "+966", country: "SA", name: "Saudi Arabia" },
    { code: "+221", country: "SN", name: "Senegal" },
    { code: "+381", country: "RS", name: "Serbia" },
    { code: "+65", country: "SG", name: "Singapore" },
    { code: "+421", country: "SK", name: "Slovakia" },
    { code: "+386", country: "SI", name: "Slovenia" },
    { code: "+252", country: "SO", name: "Somalia" },
    { code: "+27", country: "ZA", name: "South Africa" },
    { code: "+82", country: "KR", name: "South Korea" },
    { code: "+211", country: "SS", name: "South Sudan" },
    { code: "+34", country: "ES", name: "Spain" },
    { code: "+94", country: "LK", name: "Sri Lanka" },
    { code: "+249", country: "SD", name: "Sudan" },
    { code: "+597", country: "SR", name: "Suriname" },
    { code: "+46", country: "SE", name: "Sweden" },
    { code: "+41", country: "CH", name: "Switzerland" },
    { code: "+963", country: "SY", name: "Syria" },
    { code: "+886", country: "TW", name: "Taiwan" },
    { code: "+992", country: "TJ", name: "Tajikistan" },
    { code: "+255", country: "TZ", name: "Tanzania" },
    { code: "+66", country: "TH", name: "Thailand" },
    { code: "+670", country: "TL", name: "Timor-Leste" },
    { code: "+228", country: "TG", name: "Togo" },
    { code: "+216", country: "TN", name: "Tunisia" },
    { code: "+90", country: "TR", name: "Turkey" },
    { code: "+993", country: "TM", name: "Turkmenistan" },
    { code: "+256", country: "UG", name: "Uganda" },
    { code: "+380", country: "UA", name: "Ukraine" },
    { code: "+971", country: "AE", name: "United Arab Emirates" },
    { code: "+44", country: "GB", name: "United Kingdom" },
    { code: "+1", country: "US", name: "United States" },
    { code: "+598", country: "UY", name: "Uruguay" },
    { code: "+998", country: "UZ", name: "Uzbekistan" },
    { code: "+58", country: "VE", name: "Venezuela" },
    { code: "+84", country: "VN", name: "Vietnam" },
    { code: "+967", country: "YE", name: "Yemen" },
    { code: "+260", country: "ZM", name: "Zambia" },
    { code: "+263", country: "ZW", name: "Zimbabwe" }
  ];

  const selectedCountry = countryCodes.find(
    (c) => c.country === formData.countryISO
  ) || countryCodes.find(c => c.country === "IN");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountrySelect = (isoCode) => {
    setFormData({ ...formData, countryISO: isoCode });
    setIsDropdownOpen(false);
    if (errors.phone) {
      setErrors({ ...errors, phone: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{6,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (6-15 digits)";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const formDataObj = new FormData();
    formDataObj.append("access_key", "71b79093-487b-45d3-9d5b-1bab55823b52");
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("subject", formData.subject);
    formDataObj.append("message", formData.message);
    formDataObj.append("phone", `${selectedCountry.code} ${formData.phone}`);

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
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
          countryISO: "IN",
        });
        setErrors({});
        setShowToast(true);
        
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
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
      {showToast && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <p className="font-semibold">Success!</p>
              <p className="text-sm">Message sent successfully. Redirecting...</p>
            </div>
          </div>
        </div>
      )}
      
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
                <label className="block text-sm font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className={`w-full px-4 py-2 rounded-lg bg-white shadow-lg border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } focus:outline-none focus:border-white/30`}
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="form-element">
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`w-full px-4 py-2 rounded-lg bg-white shadow-lg border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } focus:outline-none focus:border-white/30`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="form-element">
                <label className="block text-sm font-medium mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div
                  className={`flex bg-white shadow-lg rounded-lg border ${
                    errors.phone ? "border-red-500" : "border-white/10"
                  }`}
                >
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 px-3 py-2 bg-white border-r border-gray-200 focus:outline-none cursor-pointer hover:bg-gray-50 transition-colors rounded-l-lg h-full"
                      style={{ minWidth: "90px" }}
                    >
                      <img
                        src={`https://flagcdn.com/w40/${selectedCountry?.country.toLowerCase()}.png`}
                        alt={selectedCountry?.name}
                        className="w-6 h-4 object-cover rounded"
                      />
                      <span className="text-sm font-medium">
                        {selectedCountry?.code}
                      </span>
                      <svg
                        className={`fill-current h-4 w-4 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                        {countryCodes.map((country) => (
                          <button
                            key={country.country}
                            type="button"
                            onClick={() => handleCountrySelect(country.country)}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors text-left"
                          >
                            <img
                              src={`https://flagcdn.com/w40/${country.country.toLowerCase()}.png`}
                              alt={country.name}
                              className="w-6 h-4 object-cover rounded"
                            />
                            <span className="text-sm font-medium w-12 shrink-0">
                              {country.code}
                            </span>
                            <span className="text-sm text-gray-600 truncate">
                              {country.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="flex-1 px-4 py-2 bg-white focus:outline-none rounded-r-lg"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="form-element">
                <label className="block text-sm font-medium mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  className={`w-full px-4 py-2 rounded-lg bg-white shadow-lg border ${
                    errors.subject ? "border-red-500" : "border-white/10"
                  } focus:outline-none focus:border-white/30`}
                  placeholder="Subject..."
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="form-element">
                <label className="block text-sm font-medium mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="2"
                  className={`w-full px-4 py-2 rounded-lg bg-white shadow-lg border ${
                    errors.message ? "border-red-500" : "border-white/10"
                  } focus:outline-none focus:border-white/30 resize-none`}
                  placeholder="Write your Query here..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="form-element w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            <p className="text-sm mt-4 text-center">
              By contacting us, you agree to our{" "}
              <span className="underline cursor-pointer">
                Terms of services
              </span>{" "}
              and{" "}
              <span className="underline cursor-pointer">privacy policy</span>
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