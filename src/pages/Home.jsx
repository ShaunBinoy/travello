import React from "react";
import Hero from "../components/Hero/Hero";
import Img1 from "../assets/video/pexels-te-lensfix-380994-1371360.jpg";
// import Img2 from "../assets/image2.jpg";
import BlogsComp from "../components/Blogs/BlogsComp";
import HomePlace from "../components/Places/HomePlace";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import { Carousel } from "antd";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [destination, setDestination] = React.useState('');
  
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const carouselItems = [
    {
      
      image:Img1,
      text:"Bali"
    }, 
    {image:Img1,text:"Somewhere else"}
  ];

  return (
    <>
      <div  >
        <div className="h-[700px] relative" >
          <Carousel autoplay arrows dots={false} speed={600} easing="linear">
            {carouselItems.map((imgSrc, index) => (
              <div key={index} className="h-[700px] w-full relative">
                
                <img
                  src={imgSrc.image}
                  alt={`Carousel image ${index + 1}`}
                  className="h-full w-full object-cover "
                />
          <div className="absolute top-0 left-0 w-full h-full z-10">
            
            <Hero text={imgSrc.text}/>
          </div>
              </div>
            ))}
          </Carousel>
        </div>
        <HomePlace handleOrderPopup={handleOrderPopup} setDestination={setDestination}/>
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
