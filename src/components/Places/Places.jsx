import React, { useEffect } from "react";
import PlaceCard from "./PlaceCard";
import { PlacesData2 } from "./placeData2";

const Places = ({ handleOrderPopup, setDestination, setDescription }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData2.map((item, index) => (
              <PlaceCard
                key={index}
                setDestination={setDestination}
                handleOrderPopup={handleOrderPopup}
                setDescription={setDescription}
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
