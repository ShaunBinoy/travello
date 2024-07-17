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
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "15,000",
    type: "4 Day / 3 Night",
  },
  {
    img: Img2,
    title: "Kulu Manali",
    location: "Himachal Pradesh",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: "5,500",
    type: "5 Day / 4 Night",
  },
  {
    img: Img3,
    title: "Matheran",
    location: "Maharashtra",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: "3,999",
    type: "3 Day / 2 Night",
  },
  {
    img: Img4,
    title: "Vattavada",
    location: "Kerala",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "1,999",
    type: "2 Day / 1 Night",
  },
  {
    img: Img5,
    title: "900 Kandi",
    location: "Wayanad, Kerala",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: "1,700",
    type: "2 Day / 1 Night",
  },
  {
    img: Img6,
    title: "Meppadi",
    location: "Kerala",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
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
