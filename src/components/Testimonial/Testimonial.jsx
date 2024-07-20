import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Jishnu",
    text: "Everything was good with Travello.in! Lakshadweep was one of my dream destinations, and they made it a reality. The water activities like snorkeling were wonderful, and it was more than we expected. The team was so friendly and polite. The whole trip was enjoyable, peaceful, and adventurous. Truly a once-in-a-lifetime experience!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Abinanth TK",
    text: "Travello.in provided a fantastic experience! Lakshadweep had always been on my bucket list, and I’m so glad I chose Travello for this trip. The snorkeling and other water activities were simply wonderful. The entire journey was beyond our expectations, peaceful yet full of adventure. Highly recommended!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Amrutha CEO",
    text: "Our trip with Travello.in was exceptional! From the start, everything was good. Lakshadweep, a dream destination for me, did not disappoint. The friendly team made the experience even better. They took special care of my mother, which I deeply appreciated. It was a peaceful and adventurous trip, and I believe everyone should see Lakshadweep at least once with Travello. The best team in the travel industry!",
    img: "https://picsum.photos/103/103",
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
                        className="rounded-full block mx-auto"
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
