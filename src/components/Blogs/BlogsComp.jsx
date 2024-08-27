import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/taj-mahal-blog.jpg";
import Img2 from "../../assets/places/munnar-blog.jpg";
import Img3 from "../../assets/places/travel-blog.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Taj Mahal: A Symbol of Eternal Love",
    description: `The Taj Mahal, located in Agra, India, is one of the world's most iconic and beautiful landmarks. This majestic white marble mausoleum is not only a symbol of eternal love but also an architectural marvel that attracts millions of tourists every year. The Taj Mahal was built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Construction began in 1632 and took over 20 years to complete, involving thousands of skilled artisans and craftsmen. The monument is a stunning blend of Persian, Islamic, and Indian architectural styles, making it a must-see destination for travelers and history enthusiasts alike.

    The story behind the Taj Mahal is both romantic and tragic. Shah Jahan was devastated by the death of his wife Mumtaz Mahal during childbirth in 1631. To honor her memory, he commissioned the construction of the Taj Mahal, which stands as a testament to their eternal love. This UNESCO World Heritage Site is renowned for its exquisite design and intricate details. The central dome, which rises to a height of 240 feet, is flanked by four smaller domes. The white marble façade is adorned with delicate carvings, intricate calligraphy, and inlaid gemstones, creating a breathtaking sight that leaves visitors in awe.
    
    When planning your visit to the Taj Mahal, the best time to go is during the cooler months from October to March. The weather during this period is pleasant, and the clear skies provide the perfect backdrop for stunning photographs. Visiting early in the morning or late in the afternoon offers the best light for photography, highlighting the beauty of the marble and creating a magical atmosphere. The Taj Mahal's perfectly aligned gardens, reflecting pools, and minarets add to its charm, making it an unforgettable experience for every traveler.
    
    To make the most of your visit to the Taj Mahal, consider purchasing tickets online in advance to avoid long lines. Dress modestly out of respect for this place of historical and cultural significance. Hiring a knowledgeable guide can enhance your visit by providing insights into the history, architecture, and stories associated with the Taj Mahal. Don't forget to bring a good camera to capture the beauty of this iconic monument, but be aware that tripods are not allowed inside the premises. Staying hydrated is also essential, especially if you're visiting during the warmer months.
    
    While in Agra, take the opportunity to explore other nearby attractions that offer a deeper insight into the rich history and culture of the Mughal era. The Agra Fort, another UNESCO World Heritage Site, is a massive red sandstone fort that served as the main residence of the Mughal emperors. Fatehpur Sikri, a historic city built by Emperor Akbar, is known for its well-preserved Mughal architecture. The Tomb of Itimad-ud-Daulah, often referred to as the "Baby Taj," is a beautiful marble mausoleum that predates the Taj Mahal and showcases intricate pietra dura inlay work.
    
    In conclusion, the Taj Mahal is more than just a monument; it is a symbol of love, a masterpiece of architecture, and a piece of history that continues to inspire awe and admiration. Whether you are a history buff, an architecture enthusiast, or a traveler seeking beauty, a visit to the Taj Mahal is a must. Experience the magic and grandeur of this timeless wonder and create memories that will last a lifetime. The Taj Mahal's unparalleled beauty and historical significance make it one of the top travel destinations in the world, and a true jewel of India.`,
    author: "Gayathri",
    date: "April 22, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Explore the Enchanting Beauty of Munnar",
    description: `Nestled amidst the mist-covered hills of the Western Ghats in Kerala, India, Munnar is a mesmerizing hill station that captivates visitors with its pristine natural beauty and tranquil ambiance. Renowned for its sprawling tea plantations, lush green valleys, and breathtaking vistas, Munnar offers a rejuvenating retreat for nature enthusiasts and adventure seekers alike.

At the heart of Munnar's allure are its expansive tea estates, where rows of vibrant green tea bushes blanket the undulating slopes. Take a leisurely stroll through these estates and witness firsthand the meticulous process of tea cultivation, from plucking the tender leaves to their transformation into the fragrant brew that Munnar is famous for. The aroma of freshly brewed tea wafts through the cool mountain air, creating a sensory experience that is both soothing and invigorating.

For those seeking adventure, Munnar's rugged terrain and diverse flora and fauna provide ample opportunities for exploration. Trekking enthusiasts can embark on trails that lead through verdant forests echoing with the calls of exotic birds and the rustling of leaves. Popular trekking destinations include the trails around Anamudi, the highest peak in South India, offering panoramic views of the surrounding valleys and distant horizons.

Scenic viewpoints such as Mattupetty Dam and Echo Point offer breathtaking panoramas of Munnar's natural splendor. From these vantage points, gaze upon serene lakes nestled amidst rolling hills, reflecting the clear blue skies above. Early mornings and late afternoons transform the landscape into a canvas of hues, with mist veiling the valleys and sunrays casting a golden glow over the tea gardens.

Munnar's allure extends beyond its natural landscapes to its rich cultural heritage and warm hospitality. Discover the traditions of the local communities, known for their craftsmanship in producing handmade artifacts and traditional spices. Delight in the flavors of Kerala cuisine, with its aromatic spices and fresh ingredients that reflect the region's culinary diversity.

To make the most of your visit to Munnar, plan your trip during the cooler months from October to March, when the weather is pleasant and ideal for outdoor activities. Consider staying in eco-friendly resorts or homestays nestled amidst nature, offering a peaceful retreat away from the hustle and bustle of city life.

Whether you're a nature lover, adventure enthusiast, or simply seeking serenity amidst breathtaking landscapes, Munnar promises an unforgettable experience. Embrace the tranquility of its tea-scented breezes, explore its verdant trails, and immerse yourself in the timeless charm of this enchanting hill station.`,
    author: "Sreerag Menon",
    date: "July 15, 2024",
  },
  {
    id: 1,
    image: Img3,
    title:
      "Discover Affordable and Memorable Tour Packages from Kerala with Travello.in",
    description: `Traveling can be a life-changing experience, opening your eyes to new cultures, landscapes, and cuisines. At Travello.in, we offer budget-friendly tour packages that let you explore the world without breaking the bank. Whether you're dreaming of a solo adventure, a romantic escape, or a family vacation, we have the perfect options for you.

Explore the beauty of Lakshadweep with our Lakshadweep tour packages from Kerala. These packages offer a chance to experience the stunning islands and crystal-clear waters of Lakshadweep, all while staying within your budget. Our Lakshadweep travel packages are designed to provide you with an unforgettable experience, from exploring pristine beaches to enjoying local cuisine.

Wander through exciting destinations like Paris, Tokyo, or New York, where history meets modernity, or immerse yourself in nature's splendor by trekking through Costa Rica's rainforests or diving in the Maldives. With our tour packages, you can enjoy diverse landscapes and vibrant cultures without overspending.

Savor delicious local foods with our tour packages, which let you taste street food in Bangkok, seafood in Italy, or experience a traditional tea ceremony in Kyoto. Each meal is a gateway to understanding local traditions and enhancing your travel experience.

Traveling is also about personal growth and connecting with different cultures. Our packages encourage engaging with local communities and participating in eco-friendly tourism, making your journey both enriching and sustainable.

To get the most out of your trip, plan with practical tips in mind: research local customs, pack essentials, and consider travel insurance. Whether you're exploring city streets, relaxing in serene landscapes, or seeking peaceful moments, our affordable tour packages ensure a memorable adventure.

Start your next journey with Travello.in and embrace the world’s wonders with open arms and a curious spirit. Our tour packages from Kerala offer endless possibilities for exploration and unforgettable experiences.`,
    author: "Sreelakshmi",
    date: "June 17, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
