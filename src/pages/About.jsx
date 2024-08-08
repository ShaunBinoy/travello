import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";
import Location from "../components/Location/Location";
import Testimonial from "../components/Testimonial/Testimonial";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import aboutBanner from "../assets/about_banner.jpg";
import {
  FaShieldAlt,
  FaMedal,
  FaUserTie,
  FaPiggyBank,
  FaWhatsapp,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="mx-auto">
      {/* Banner Section */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <h1 className="text-4xl text-white font-bold">About Us</h1>
        </div>
      </div>

      {/* First Two-column Section */}
      <div className="container flex flex-col lg:flex-row py-8">
        <div className="lg:w-1/2 px-4">
          <p className="mb-4">
            Amrutha is the founder of Travello.in, a boutique travel service
            dedicated to curating joyful journeys. With a passion for crafting
            unforgettable experiences, specializes in creating itineraries that
            bring happiness and adventure to every traveler. Whether it's a
            serene beach escape, a cultural immersion, or a thrilling adventure,
            Travello.in tailors each trip to meet the unique desires of their
            clients. Travello believes that travel should be a source of joy,
            and works tirelessly to ensure every journey is filled with
            delightful surprises and memorable moments. Let Travello.in turn
            your travel dreams into a reality and experience the world with a
            smile.
          </p>
        </div>
        <div className="lg:w-1/2 px-4">
          <p className="mb-4">
            Founded in 2023, Travello.in has grown to become a leader in our
            field. Our mission is to create lasting value for our clients by
            offering top-notch services and unparalleled customer support. We
            believe in building long-term relationships based on trust,
            transparency, and mutual respect.
          </p>
          <p>
            At Travello.in, we are passionate about what we do and are always
            looking for new ways to improve and innovate. Our vision is to be
            the go-to provider in our industry, known for our commitment to
            quality, reliability, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Second Section with Image Carousel and Mission Statement */}
      <div className="container flex flex-col lg:flex-row">
        <div className="lg:w-1/2 ">
          <div className="aspect-w-1 aspect-h-1">
            <ImageCarousel />
          </div>
        </div>
        <div className="lg:w-1/2 bg-gray-200 p-4">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            At Travello.In , our mission is to create unforgettable journeys
            filled with joy and positivity. We specialize in curating travel
            experiences that bring happiness to every moment, whether it's
            through breathtaking landscapes, cultural encounters, or serene
            getaways. We believe that travel is not just about the destination
            but the emotions and memories it inspires. Our goal is to craft
            personalized itineraries that reflect your unique desires and ensure
            each adventure is as fulfilling and delightful as possible. Join us
            in exploring the world with a heart full of happiness!
          </p>
          {/* Why Choose Us Section */}
          <div className="mt-8">
            {/* <h1 className="text-2xl font-bold mb-4">Why Choose Us?</h1> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <FaShieldAlt className="text-black/70 text-4xl mb-4" />
                <h2 className="text-xl font-semibold mb-2">Trust</h2>
                {/* <p>
                  We prioritize your trust with our reliable services and
                  transparent policies.
                </p> */}
              </div>
              <div className="flex flex-col items-center text-center">
                <FaMedal className="text-black/70 text-4xl mb-4" />
                <h2 className="text-xl font-semibold mb-2">Experience</h2>
                {/* <p>
                  With years of experience, we offer top-notch solutions
                  tailored to your needs.
                </p> */}
              </div>
              <div className="flex flex-col items-center text-center">
                <FaUserTie className="text-black/70 text-4xl mb-4" />
                <h2 className="text-xl font-semibold mb-2">Experts</h2>
                {/* <p>
                  Our team consists of industry experts dedicated to delivering
                  the best results.
                </p> */}
              </div>
              <div className="flex flex-col items-center text-center">
                <FaPiggyBank className="text-black/70 text-4xl mb-4" />
                <h2 className="text-xl font-semibold mb-2">Economic</h2>
                {/* <p>
                  We provide cost-effective solutions without compromising on
                  quality.
                </p> */}
              </div>
            </div>
          </div>
          {/* <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
            {" "}
            <li>
              At Travello.in, we offer personalized travel planning services
              that are meticulously tailored to match your specific interests,
              budgetary requirements, and preferred travel schedule.
            </li>{" "}
            <li>
              Our expertly guided group tours are designed to provide a seamless
              blend of enriching sightseeing opportunities, leisure activities,
              and social interactions, ensuring a well-rounded travel experience
              for every participant.
            </li>{" "}
            <li>
              For corporate travelers, Travello.in provides comprehensive travel
              management solutions, guaranteeing efficient and hassle-free
              arrangements so you can remain focused on your professional
              commitments.
            </li>{" "}
          </ul> */}
        </div>
      </div>

      {/* Bottom Two-column Section */}
      <div className="container flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4">
          <p>
            Experience the romance and charm of train travel with our curated
            train journeys, offering scenic countryside routes and luxurious
            sleeper trains. Travel with peace of mind knowing you're covered by
            our comprehensive travel insurance plans. Our team of travel experts
            brings extensive knowledge and firsthand experience of destinations
            worldwide, staying up-to-date with the latest travel trends to
            provide personalized recommendations.
          </p>
        </div>
        <div className="lg:w-1/2 bg-black text-white p-4">
          <p>
            We collaborate with trusted partners, including airlines, hotels,
            and local tour operators, to deliver high-quality services and
            memorable experiences. Our support team is available 24/7 to assist
            you with any queries or emergencies during your trip. Committed to
            responsible and sustainable travel practices, we minimize our
            environmental impact and support local communities through our
            initiatives.
          </p>
        </div>
      </div>

      <Testimonial />
      <Location />
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

export default AboutUs;

// import React, { useEffect } from "react";
// import BlogsComp from "../components/Blogs/BlogsComp";
// import Location from "../components/Location/Location";
// import Testimonial from "../components/Testimonial/Testimonial";
// import ImageCarousel from "../components/ImageCarousel/ImageCarousel";

// const About = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <div className="container pt-14 px-4 lg:px-0">
//         <div className="flex flex-col lg:flex-row lg:gap-10">
//           <div className="py-10 lg:w-1/2">
//             <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold capitalize tracking-wide">
//               About us
//             </h1>
//             <p className="text-gray-700 mb-4">
//               At Travello.in, we believe in the power of travel to transform lives. Our mission is to create amazing travel experiences that inspire and enrich our clients. With years of experience in the travel industry, we specialize in designing personalized travel plans that suit the unique preferences of every traveler. As a leading travel company, we are committed to providing exceptional service and value. Whether you're looking for luxury, adventure, or cultural exploration, Travello.in is here to make your travel dreams come true.
//             </p>
//             <h2 className="text-xl font-bold mt-12 mb-2 ">Our Services</h2>
//             <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
//               <li>At Travello.in, we offer personalized travel planning services that are meticulously tailored to match your specific interests, budgetary requirements, and preferred travel schedule.</li>
//               <li>Our expertly guided group tours are designed to provide a seamless blend of enriching sightseeing opportunities, leisure activities, and social interactions, ensuring a well-rounded travel experience for every participant.</li>
//               <li>For corporate travelers, Travello.in provides comprehensive travel management solutions, guaranteeing efficient and hassle-free arrangements so you can remain focused on your professional commitments.</li>
//             </ul>
//           </div>
//           <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-center lg:p-4">
//             <div className="aspect-w-16 aspect-h-9 w-full lg:max-w-md  ">
//               <ImageCarousel />
//             </div>
//           </div>
//         </div>
//         <div className="mt-10">
//           <h2 className="text-xl font-bold mb-2">Why Choose Us?</h2>
//           <p className="text-gray-700 mb-4">
//             Experience the romance and charm of train travel with our curated train journeys, offering scenic countryside routes and luxurious sleeper trains. Travel with peace of mind knowing you're covered by our comprehensive travel insurance plans. Our team of travel experts brings extensive knowledge and firsthand experience of destinations worldwide, staying up-to-date with the latest travel trends to provide personalized recommendations.
//           </p>
//           <p className="text-gray-700 mb-4">
//             We collaborate with trusted partners, including airlines, hotels, and local tour operators, to deliver high-quality services and memorable experiences. Our support team is available 24/7 to assist you with any queries or emergencies during your trip. Committed to responsible and sustainable travel practices, we minimize our environmental impact and support local communities through our initiatives.
//           </p>
//         </div>
//       </div>
//       <Testimonial />
//       <Location />
//       <BlogsComp />
//     </>
//   );
// };

// export default About;
