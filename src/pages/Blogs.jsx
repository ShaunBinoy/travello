import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import { FaWhatsapp } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="min-h-screen pt-14 bg-gray-100">
      <BlogsComp />
      <a
          href="tel:+91 8848514035"
          
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp size={32} />
        </a>
    </div>
  );
};

export default Blogs;
