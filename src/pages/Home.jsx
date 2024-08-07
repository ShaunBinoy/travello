import React from "react";
import Hero from "../components/Hero/Hero";
import Img1 from "../assets/video/nepal.jpg";
import Img2 from "../assets/video/lakshadweep.jpg";
import Img3 from "../assets/video/anurag-bhgsain-eJdiDYIzq9M-unsplash.jpg";
import BlogsComp from "../components/Blogs/BlogsComp";
import HomePlace from "../components/Places/HomePlace";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import { Carousel } from "antd";
import WhyUs from "../components/Why Us/WhyUs";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [destination, setDestination] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const carouselItems = [
    {
      image: Img1,
      text: "Enjoy the Peace of Nepal!",
    },
    { image: Img2, text: "Explore the Wonders of Lakshadweep!" },
    { image: Img3, text: "Discover the Beauty of Kulu Manali!" },
  ];

  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <Carousel autoplay dots={false} speed={600} easing="linear">
            {carouselItems.map((imgSrc, index) => (
              <div key={index} className="h-[700px] w-full relative">
                <img
                  src={imgSrc.image}
                  alt={`Carousel image ${index + 1}`}
                  className="h-full w-full object-cover "
                />
                <div className="absolute top-0 left-0 w-full h-full z-10">
                  <Hero
                    text={imgSrc.text}
                    handleOrderPopup={handleOrderPopup}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <HomePlace
          handleOrderPopup={handleOrderPopup}
          setDestination={setDestination}
          setDescription={setDescription}
        />
        <BannerPic img={BannerImg} />
        <WhyUs />
        <Banner />
        <Testimonial />
        <BannerPic img={Banner2} />
        <BlogsComp />
        <OrderPopup
          orderPopup={orderPopup}
          setOrderPopup={setOrderPopup}
          description={description}
          destination={destination}
        />
      </div>
    </>
  );
};

export default Home;
