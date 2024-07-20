import React from "react";
import Places from "../components/Places/Places";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const PlacesRoute = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [destination, setDestination] = React.useState('');

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div className="pt-14">
        <Places handleOrderPopup={handleOrderPopup} setDestination={setDestination} />
        {orderPopup && (
          <OrderPopup
            orderPopup={orderPopup}
            setOrderPopup={setOrderPopup}
            destination={destination}
          />
        )}
      </div>
    </>
  );
};

export default PlacesRoute;
