import React from "react";

const Hero = ({ text }) => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className="h-full z-10 justify-center">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-5xl"
            >
              {`Explore ${text} with us`}
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4  bg-white rounded-2xl p-4 relative hidden md:flex md:flex-row md:items-start lg:absolute lg:right-8  lg:transform lg:-translate-y-1/2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-1 gap-4 py-3">
              <div>
                <label htmlFor="name" className="opacity-70">
                  Enter your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="opacity-70">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john123@gmail.com"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="opacity-70">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+91 9873216540"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div className="sm:flex  sm:justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 sm:h-10 ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";

// const Hero = ({text}) => {
//   const [priceValue, setPriceValue] = React.useState(30);

//   return (
//     <div className=" h-full z-10 justify-center ">
//       <div className="h-full flex justify-center items-center p-4 ">
//         <div className="container grid grid-cols-1 gap-4">
//           <div className="text-white">
//             <p data-aos="fade-up" className="text-sm">
//               Our Packages
//             </p>
//             <p
//               data-aos="fade-up"
//               data-aos-delay="300"
//               className="font-bold text-3xl"
//             >
//               {`Explore ${text} with us`}
//             </p>
//           </div>
//           <div
//             data-aos="fade-up"
//             data-aos-delay="600"
//             className="space-y-4 bg-white rounded-2xl p-4 relative"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
//               <div>
//                 <label htmlFor="destination" className="opacity-70">
//                   Enter your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="destination"
//                   id="destination"
//                   placeholder="Jhon"
//                   className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="destination" className="opacity-70">
//                   Date
//                 </label>
//                 <input
//                   type="date"
//                   name="destination"
//                   id="destination"
//                   className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="destination" className="opacity-70">
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   name="destination"
//                   id="destination"
//                   placeholder="+91 9873216540"
//                   className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
//                 />
//               </div>
//             </div>
//             <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
//               Search Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
