import React from "react";
import { FaShieldAlt, FaMedal, FaUserTie, FaPiggyBank } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const WhyUs = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Why Choose Us ?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <FaShieldAlt className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Trust</h2>
          <p>
          We prioritize your trust with our reliable tour packages and transparent policies.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaMedal className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <p>
            With years of experience, we offer top-notch solutions tailored to
            your needs.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaUserTie className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Experts</h2>
          <p>
            Our team consists of industry experts dedicated to delivering the
            best results.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaPiggyBank className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Economic</h2>
          <p>
          We offer affordable travel packages without compromising on quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
