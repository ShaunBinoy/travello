import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";
import { FaWhatsapp } from "react-icons/fa";

const BlogsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    <div className=" pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <h1 className="text-2xl font-semibold  tracking-wide mt-4 uppercase ">{title}</h1>
        <p className="text-slate-600 text-sm  mb-4 ">
          {" "}
          written by {author} on {date}
        </p>
        <p className="text-base font-sans text-left">{description}</p>
      </div>

      {/* All Blogs Section */}
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

export default BlogsDetails;
