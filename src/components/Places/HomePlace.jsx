import React from "react";
import PlaceCard from "./PlaceCard";
import { NavLink, Link } from "react-router-dom";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

export const NavbarLinks = [
  {
    name: "Best Places",
    link: "/best-places",
  },
];

const PlacesData = [
  {
    img: Img1,
    title: "Lakshadweep",
    location: "India",
    description:
      "Explore the clear waters and coral reefs of Lakshadweep, a tropical island paradise.",
    price: "15,000",
    type: "4 Day / 3 Night",
  },
  {
    img: Img2,
    title: "Kulu Manali",
    location: "Himachal Pradesh",
    description:
      "Visit Kulu Manali for stunning mountains and thrilling adventures.",
    price: "5,500",
    type: "5 Day / 4 Night",
  },
  {
    img: Img3,
    title: "Matheran",
    location: "Maharashtra",
    description:
      "Enjoy the scenic beauty and tranquil paths of Matheran, a car-free hill station.",
    price: "3,999",
    type: "3 Day / 2 Night",
  },
  {
    img: Img4,
    title: "Vattavada",
    location: "Kerala",
    description: "Discover Vattavada's serene hills and lush landscapes in Kerala.",
    price: "1,999",
    type: "2 Day / 1 Night",
  },
  //   {
  //     img: Img5,
  //     title: "Los Angeles",
  //     location: "United states",
  //     description:
  //       "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
  //     price: 6700,
  //     type: "Cultural Relax",
  //   },
  //   {
  //     img: Img6,
  //     title: "Los Vegas",
  //     location: "California",
  //     description:
  //       "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
  //     price: 6200,
  //     type: "Cultural Relax",
  //   },
];

const HomePlace = ({ handleOrderPopup,setDestination }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-4  text-center text-4xl font-bold">
            Popular Packages
          </h1>
          <p className="text-md text-gray-400 text-center mb-5 max-w-[400px] mx-auto">
            {" "}
            Discover the best travel packages with Travello.in. From adventure
            to relaxation, find the perfect trip for you. Book now and start
            your journey!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                setDestination={setDestination}
                key={index}
                {...item}
              />
            ))}
            <div className="my-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute  left-1/2 -translate-x-1/2">
                <NavLink to="/best-places" activeClassName="active">
                  More Packages
                </NavLink>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePlace;
