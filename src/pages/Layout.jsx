import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <a
        href="https://api.whatsapp.com/send?phone=%2B918848514035&context=ARApTa-M9zmvX2IQu-KNuS-B9Hff8qfNFtBOzZ4dGmjJZtsZWr-xpUXYNaaIkNq3__uMdF5BBYUU3f9K4B6aRQwywS1lNMVVHwvdjo8NDJofzOt27atMXcnt5IKXngVBZpUMRRWOGsZmvx9ygyj2DkTwYg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR23dmgBZyPNadby5_oxhp82rcPqA8zypFnOHUbrn3ctzP2gvFV_MKehdXo_aem_veets8wdjcplkrWZrUmEZg"
        // rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={32} />
      </a>
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;
