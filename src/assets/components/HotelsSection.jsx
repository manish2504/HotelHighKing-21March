// src/Component/HotelsSection.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import jaipurImage from "../images/jaipur1.jpg";
import shahpuraImage from "../images/shahpura1.jpg";
import bagruImage from "../images/bagru.jpg";
import behrorImage from "../images/behror.jpg";
import neelkaImage from "../images/neelka.jpg";
import neemranaImage from "../images/neemrana.jpg";
import bilaspurImage from "../images/bilaspur.jpg";

const hotels = [
  { name: "JAIPUR", image: jaipurImage, path: "/home/Jaipurroute" },
  { name: "SHAHPURA", image: shahpuraImage, path: "/home/shahpuraroute" },
  { name: "BAGRU", image: bagruImage, path: "/home/bagruroute" },
  { name: "BEHROR", image: behrorImage, path: "/home/behrorroute" },
  { name: "NEELKA", image: neelkaImage, path: "home/neelkaroute" },
  { name: "NEEMRANA", image: neemranaImage, path: "home/neemranaroute" },
  
];

const extraHotel = {
  name: "BILASPUR",
  image: bilaspurImage,
  path: "home/bilaspurroute",
};

const HotelsSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Our Hotels</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-6 px-6">
        {hotels.map((hotel, index) => (
          <Link to={hotel.path} key={index}>
            <div className="relative overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2"
              />
              <div className="absolute top-3 right-3 bg-white text-gray-900 px-3 py-1 font-bold rounded shadow">
                {hotel.name}
              </div>
            </div>
          </Link>
        ))}

        {showMore && (
          <Link to={extraHotel.path}>
            <div className="relative overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
              <img
                src={extraHotel.image}
                alt={extraHotel.name}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2"
              />
              <div className="absolute top-3 right-3 bg-white text-gray-900 px-3 py-1 font-bold rounded shadow">
                {extraHotel.name}
              </div>
            </div>
          </Link>
        )}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default HotelsSection;
