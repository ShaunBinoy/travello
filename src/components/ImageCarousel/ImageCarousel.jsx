import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../../assets/carousel/1.jpg";
import image2 from "../../assets/carousel/2.jpg";
import image3 from "../../assets/carousel/3.jpg";
import image4 from "../../assets/carousel/4.jpg";
import image5 from "../../assets/carousel/5.jpg";
import image6 from "../../assets/carousel/6.jpg";
import image7 from "../../assets/carousel/7.jpg";
import image8 from "../../assets/carousel/8.jpg";
import image9 from "../../assets/carousel/9.jpg";
import image10 from "../../assets/carousel/10.jpg";
import image11 from "../../assets/carousel/11.jpg";
import image12 from "../../assets/carousel/12.jpg";
import image13 from "../../assets/carousel/13.jpg";
import image14 from "../../assets/carousel/14.jpg";

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
      <div>
        <img src={image9} alt="Image 9" />
      </div>
      <div>
        <img src={image10} alt="Image 10" />
      </div>
      <div>
        <img src={image11} alt="Image 11" />
      </div>
      <div>
        <img src={image12} alt="Image 12" />
      </div>
      <div>
        <img src={image13} alt="Image 13" />
      </div>
      <div>
        <img src={image14} alt="Image 14" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
