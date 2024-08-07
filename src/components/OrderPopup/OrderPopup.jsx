import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import { Spin, message } from "antd";

const OrderPopup = ({ orderPopup, setOrderPopup, destination,description }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) 
      {newErrors.name = "Name is required";}
    else if(typeof(name)!=='string'){
      newErrors.name="Invalid name"
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
      Destination: destination,
    };

    try {
      const apiUrl = import.meta.env.VITE_URL;
      if (!apiUrl) {
        throw new Error("API URL not set in environment variables");
      }
      await axios.post(apiUrl, data);
      message.success("Registered your enquiry");
      setIsLoading(false);
      setOrderPopup(false);
    } catch (error) {
      console.error("Error recording booking:", error);
      message.error("Error while registering");
      setIsLoading(false);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <div>
                {description}
              </div>
              <input
                type="text"
                placeholder="Name"
                className={`w-full rounded-full border px-2 py-1 mb-4 ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-500 dark:bg-gray-800"}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              <input
                type="email"
                placeholder="Email"
                className={`w-full rounded-full border px-2 py-1 mb-4 ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-500 dark:bg-gray-800"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              <input
                type="text"
                placeholder="Phone Number"
                className={`w-full rounded-full border px-2 py-1 mb-4 ${errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-500 dark:bg-gray-800"}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              <div className="flex justify-center">
                <Spin spinning={loading}>
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                    onClick={handleSubmit}
                  >
                    Book Now
                  </button>
                </Spin>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
