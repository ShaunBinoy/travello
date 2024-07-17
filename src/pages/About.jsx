import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import Testimonial from "../components/Testimonial/Testimonial";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            At Travello.in, we believe in the power of travel to transform
            lives. Our mission is to create amazing travel experiences that
            inspire and enrich our clients. With years of experience in the
            travel industry, we specialize in designing personalized travel
            plans that suit the unique preferences of every traveler. As a
            leading travel company, we are committed to providing exceptional
            service and value. Whether you're looking for luxury, adventure, or
            cultural exploration, Travello.in is here to make your travel dreams
            come true.
          </p>
          <h2 className="text-xl font-bold mt-3 mb-1">Our Services</h2>
          <ul className="mb-3">
            <li>
              At Travello.in, we offer personalized travel planning services
              that are meticulously tailored to match your specific interests,
              budgetary requirements, and preferred travel schedule.
            </li>
            <li>
              Our expertly guided group tours are designed to provide a seamless
              blend of enriching sightseeing opportunities, leisure activities,
              and social interactions, ensuring a well-rounded travel experience
              for every participant.
            </li>
            <li>
              For corporate travelers, Travello.in provides comprehensive travel
              management solutions, guaranteeing efficient and hassle-free
              arrangements so you can remain focused on your professional
              commitments.
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-1">Why Choose Us?</h2>
          <p>
            Experience the romance and charm of train travel with our curated
            train journeys, offering scenic countryside routes and luxurious
            sleeper trains. Travel with peace of mind knowing you're covered by
            our comprehensive travel insurance plans. Our team of travel experts
            brings extensive knowledge and firsthand experience of destinations
            worldwide, staying up-to-date with the latest travel trends to
            provide personalized recommendations.
          </p>

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
      <BlogsComp />
    </>
  );
};

export default About;
