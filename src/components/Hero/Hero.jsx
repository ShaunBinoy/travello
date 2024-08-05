import React, { useState } from "react";
import axios from "axios";
import { Spin, message } from "antd";

const Hero = ({ text, handleOrderPopup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (typeof name !== "string") {
      newErrors.name = "Invalid name";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    return newErrors;
  };

  const handleSubmit = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);
    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Destination: text,
    };

    try {
      const apiUrl = import.meta.env.VITE_URL;
      if (!apiUrl) {
        throw new Error("API URL not set in environment variables");
      }
      await axios.post(apiUrl, data);
      message.success("Registered your enquiry");
      setIsLoading(false);
    } catch (error) {
      console.error("Error recording booking:", error);
      message.error("Error while registering");
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full z-10 flex justify-center items-center">
      <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center gap-4">
        <div className="text-white text-center lg:text-left">
          <p data-aos="fade-up" className="text-sm">
            Our Packages
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="font-bold text-3xl md:text-5xl capitalize"
          >
            {/* {`Explore ${text} with us`} */}
            {`${text}`}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="w-full max-w-lg lg:ml-auto relative"
        >
          <div className="hidden lg:block space-y-4 bg-white rounded-2xl p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 py-3">
              <div>
                <label htmlFor="name" className="opacity-70">
                  Enter your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John"
                  className={`w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2 ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-500 dark:bg-gray-800"
                  }`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="opacity-70">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john123@gmail.com"
                  className={`w-full bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-500 dark:bg-gray-800"
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="opacity-70">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+91 9873216540"
                  className={`w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2 ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-500 dark:bg-gray-800"
                  }`}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>
              <div className="sm:flex sm:justify-center">
                <Spin spinning={loading}>
                  <button
                    className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 sm:h-10"
                    onClick={handleSubmit}
                  >
                    Book Now
                  </button>
                </Spin>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex justify-center">
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 sm:h-10"
              onClick={() => handleOrderPopup()}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
