import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../../assets/carousel/1.jpg";
import image2 from "../../assets/carousel/7.jpg";
import image3 from "../../assets/carousel/3.jpg";
import image4 from "../../assets/carousel/4.jpg";
import image5 from "../../assets/carousel/1.jpg";
import image6 from "../../assets/carousel/6.jpg";
import image7 from "../../assets/carousel/7.jpg";
import image8 from "../../assets/carousel/8.jpg";

const ImageCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src={image1} alt="Image 1" />
      </div>
      <div>
        <img src={image2} alt="Image 2" />
      </div>
      <div>
        <img src={image3} alt="Image 3" />
      </div>
      <div>
        <img src={image4} alt="Image 4" />
      </div>
      <div>
        <img src={image5} alt="Image 5" />
      </div>
      <div>
        <img src={image6} alt="Image 6" />
      </div>
      <div>
        <img src={image7} alt="Image 7" />
      </div>
      <div>
        <img src={image8} alt="Image 8" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
