  import React from "react";
  import PlaceCard from "./PlaceCard";
  import { NavLink } from "react-router-dom";
  import { PlacesData } from "./placeData";

  export const NavbarLinks = [
    {
      name: "Best Places",
      link: "/best-places",
    },
  ];

  const HomePlace = ({ handleOrderPopup, setDestination, setDescription }) => {
    return (
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-4 text-center text-4xl font-bold">Popular Packages</h1>
          <p className="text-md text-gray-400 text-center mb-5 max-w-[400px] mx-auto">
          Discover the best tour packages from Kerala with Travello.in. From adventure to relaxation, find the perfect trip for you. Book now and start your journey!
          </p>  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            {PlacesData.map((item,index) => (
            
              <PlaceCard
                key={index} 
                handleOrderPopup={handleOrderPopup}
                setDestination={setDestination}
                setDescription={setDescription}
                {...item}
              />
            ))}
            <div className="my-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute left-1/2 -translate-x-1/2">
                <NavLink to="/best-places" activeClassName="active">
                  More Packages
                </NavLink>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default HomePlace;
