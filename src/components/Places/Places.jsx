import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

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
    description:
      "Discover Vattavada's serene hills and lush landscapes in Kerala.",
    price: "1,999",
    type: "2 Day / 1 Night",
  },
  {
    img: Img5,
    title: "900 Kandi",
    location: "Wayanad, Kerala",
    description:
      "Uncover the wild beauty and dense forests of 900 Kandi in Kerala.",
    price: "1,700",
    type: "2 Day / 1 Night",
  },
  {
    img: Img6,
    title: "Meppadi",
    location: "Kerala",
    description:
      "Experience the peaceful charm and natural beauty of Meppadi in Wayanad.",
    price: "1,700",
    type: "2 Day / 1 Night",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
