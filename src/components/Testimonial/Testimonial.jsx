import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/review/akhil.jpg";
import Img2 from "../../assets/review/2.jpeg";
import Img3 from "../../assets/review/dileep.jpg";
import Img4 from "../../assets/review/4.jpeg";
import Img5 from "../../assets/review/munnar.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Akhilnath",
    text: "We booked the Lakshadweep package through Travello.in for our family group of 10, and it was a fantastic experience! The accommodations were perfect, and the itinerary was well-planned, ensuring everyone had a great time. The customer service was exceptional, handling all our needs and queries promptly. The entire trip was hassle-free and enjoyable, thanks to Travello.in. Whether you're looking for tour packages from Kerala to Lakshadweep, Travello.in has you covered. Highly recommended for family vacations!",
    img: Img1,
  },
  {
    id: 1,
    name: "Shimil Dev",
    text: "Our honeymoon in Wayanad booked through Travello.in was absolutely magical! The package included a beautiful resort and romantic activities that made our trip unforgettable. The seamless booking process and attentive customer service ensured that we could focus on enjoying our time together. Travello.in took care of every detail, making our honeymoon stress-free and perfect. We highly recommend Travello.in for a memorable honeymoon experience!",
    img: Img2,
  },
  {
    id: 1,
    name: "Dileep",
    text: "Our friends' trip to Kulu Manali with Travello.in was amazing! The package included great accommodations and thrilling activities that kept us entertained throughout. The booking process was smooth, and the customer support was always available to assist us. Travello.in made sure our trip was well-organized and enjoyable, allowing us to make the most of our time together. Whether you're looking for Kulu Manali packages or tour packages from Calicut, Travello.in has you covered. We had a blast and highly recommend Travello.in for group trips!",
    img: Img3,
  },
  {
    id: 1,
    name: "Rishi",
    text: "Travello.in made our couple's trip to Nepal truly special. From the scenic accommodations to the exciting excursions, everything was perfectly arranged. The booking process was straightforward, and the customer service was excellent, ensuring we had everything we needed. Travello.in's attention to detail made our trip stress-free and unforgettable. Whether you're looking for a romantic escape or tour packages from Kerala, Travello.in is the way to go. We couldn't have asked for a better experience and highly recommend Travello.in for couple getaways!",
    img: Img4,
  },
  {
    id: 1,
    name: "Midhun",
    text: "Our honeymoon in Munnar with Travello.in was a dream come true! The package included a charming resort and romantic activities that made our trip unforgettable. The booking process was effortless, and the customer support was always available to help. Travello.in took care of all the details, allowing us to relax and enjoy our special time together. We highly recommend Travello.in for a perfect honeymoon experience!",
    img: Img5,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Customer Reviews</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Explore the invaluable insights and heartfelt feedback shared by
              our customers about their unforgettable experiences with us!
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto h-16 w-16"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
