import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Packages",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[80px] mb-3" />
                {/* TravelloGo */}
              </h1>
              <p className="text-sm">
                Discover life-changing travel at Travello.in. We specialize in
                personalized itineraries crafted to enrich and inspire, tailored
                to your unique preferences.
              </p>
              <br />
              {/* <div className="flex items-center gap-3 ">
                <FaLocationArrow />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div> */}
              {/* social handles */}
              {/* <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div> */}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Explore
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {/* <span>&#11162;</span> */}
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col  justify-center">
                <div className="py-8 px-4">
                  <div className="flex items-center gap-3 ">
                    <FaLocationArrow />
                    <p>Kozhikode, Kerala</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+91 8848514035</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mt-6">
                      <a href="https://www.instagram.com/travello.in?igsh=MXAxcmYxb3lrOGhrZA==">
                        <FaInstagram className="text-2xl" />
                      </a>
                      <a href="https://fb.me/5NpnYupa2">
                        <FaFacebook className="text-2xl" />
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=%2B918848514035&context=ARApTa-M9zmvX2IQu-KNuS-B9Hff8qfNFtBOzZ4dGmjJZtsZWr-xpUXYNaaIkNq3__uMdF5BBYUU3f9K4B6aRQwywS1lNMVVHwvdjo8NDJofzOt27atMXcnt5IKXngVBZpUMRRWOGsZmvx9ygyj2DkTwYg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR23dmgBZyPNadby5_oxhp82rcPqA8zypFnOHUbrn3ctzP2gvFV_MKehdXo_aem_veets8wdjcplkrWZrUmEZg">
                        <FaWhatsapp className="text-2xl" />
                      </a>
                      <a href="tel:+91 88485 14035=">
                        <FaPhone className="text-2xl" />
                      </a>
                    </div>
                  </div>

                  {/* <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
              {/* <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
              2024 © Travello.in. All rights reserved ||{" "}
              <a href="https://www.webstylesolutions.in/">
                Design By WebStyle Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
