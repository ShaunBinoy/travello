import React from "react";
import Places from "../components/Places/Places";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import { FaWhatsapp } from "react-icons/fa";

const PlacesRoute = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [destination, setDestination] = React.useState('');
  const [description,setDescription]=React.useState('')
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div className="pt-14">
        <Places handleOrderPopup={handleOrderPopup} setDestination={setDestination} setDescription={setDescription} />
        {orderPopup && (
          <OrderPopup
            orderPopup={orderPopup}
            setOrderPopup={setOrderPopup}
            destination={destination}
            description={description}
          />
        )}
        {/* <a
          href="tel:+91 8848514035"
          
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp size={32} />
        </a> */}
      </div>
    </>
  );
};

export default PlacesRoute;
