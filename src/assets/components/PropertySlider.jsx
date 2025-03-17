import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// Correct the paths to import images from the assets folder
import jaipurroomImage from "../images/jaipurroom.jpg";
import propertyImage1 from "../images/propertyshahpura.jpg"; // Adjust paths accordingly
import propertyImage2 from "../images/room.jpg";
import propertyImage3 from "../images/swimming2.jpg";
import propertyImage4 from "../images/bilaspur1.jpg";
import propertyImage5 from "../images/neelka.jpg";
import propertyImage6 from "../images/neemrana.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const PropertySlider = () => {
  const navigate=useNavigate();
  const [properties, setProperties] = useState([])
  useEffect(() => {
      const fetchHotels = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/hotels");
          setProperties(response.data);
          //console.log(response.data);
        } catch (err) {
          setError("Failed to fetch Hotels");
        } finally {
          setLoading(false);
        }
      };
  
      fetchHotels();
    }, []);
    const img = {
      "/jaipur-property": jaipurroomImage,
      "/behror-property": propertyImage2,
      "/shahpura-property": propertyImage1,
      "/bagru-property": propertyImage3,
      "/bilaspur-property": propertyImage4,
      "/neelka-property": propertyImage5,
      "/neemrana-property": propertyImage6,
    }

  // const properties = [
  //   {
  //     id: 1,
  //     img: jaipurroomImage, // Corrected path
  //     price: "₹2,499.00",
  //     title: "Hotel Highway King Select – JAIPUR CITY",
  //     location: "7-8 PATEL NAGAR MAIN AJMER ROAD, NEAR 200 FEET BYPASS JAIPUR RAJSTHAN-302024",
  //     bedrooms: 1,
  //     baths: 1,
  //     guests: 3,
  //     link:"/jaipur-property",
  //   },
  //   {
  //     id: 2,
  //     img: propertyImage1, // Corrected path
  //     price: "₹2,699.00",
  //     title: "Hotel Highway King Select – Shahpura",
  //     location: "ANTELA, 185 MILESTONE FROM DELHI, NH-8, DELHI - JAIPUR EXPY, NEAR PAOTA, SHAHPURA, RAJASTHAN 303119",
  //     bedrooms: 1,
  //     baths: 1,
  //     guests: 2,
  //     link:"/shahpura-property",
  //   },
  //   {
  //     id: 3,
  //     img: propertyImage2, // Corrected path
  //     price: "₹2,499.00",
  //     title: "Hotel Highway King Select – Behror",
  //     location: "NH 8, 3 KMS FROM BEHROR TOWARDS DELHI, BEHROR, RAJASTHAN 301701",
  //     bedrooms: 1,
  //     baths: 1,
  //     guests: 3,
  //     link:"/behror-property",
  //   },
  //   {
  //     id: 4,
  //     img: propertyImage3, // Corrected path
  //     price: "₹2,499.00",
  //     title: "Hotel Highway King Select – Bagru",
  //     location: "NH-8, AJMER- JAIPUR EXPRESS WAY, NEAR BAGRU POLICE STATION, BAGRU, JAIPUR-303006.",
  //     bedrooms: 1,
  //     baths: 1,
  //     guests: 3,
  //     link:"/bagru-property",
  //   },
  //   {
  //     id: 5,
  //     img: propertyImage4, // Corrected path
  //     price: "₹2,499.00",
  //     title: "Hotel Highway King Select – Bilaspur",
  //     location: "NH-48, BILASPUR, NEAR STAREX UNIVERSITY, GURUGRAM, HARYANA 122413",
  //     bedrooms: 1,
  //     baths: 1,
  //     guests: 3,
  //     link:"/bilaspur-property",
  //   },
  //   {
  //     id: 6,
  //     img: propertyImage5, // Corrected path
  //     price: "₹2,499.00",
  //     title: "Hotel Highway King Select – Neelka",
  //     location: "NH-8, VPO- NEELKA, DELHI – JAIPUR HIGHWAY",
  //     bedrooms: 1,
  //     baths: 1,
  //     guests: 3,
  //     link:"/neelka-property",
  //   },
  //   {
  //     id: 7,
  //     img: propertyImage6, // Corrected path
  //     price: "₹2,499.00",
  //     title: "Hotel Highway King Select – Neemrana",
  //     location: "120 Mile Stone From Delhi Towards Jaipur, Delhi Jaipur Expressway, Mohalariyan, VPO, Neemrana, Rajasthan 301705",
  //     bedrooms: 1,
  //     baths: 1,
  //     guests: 3,
  //     link:"/neemrana-property",
  //   },
  //   // Add more properties as needed
  // ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-4">
        Our Curated Property Selection
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Hand-picked selection of quality Stay
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
        
      >
        {properties.map((property,index) => (
          <SwiperSlide
          key={property._id}
          className="p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2"
          onClick={() => {
            if (property.link) {
              navigate(property.link);
            }
          }} // Only Jaipur property has navigation
        >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 mb-12">
              
              <img
                src={img[property.link]}
                alt={property.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="font-bold text-lg">
                  {property.price} <span className="text-sm">Winter Sale</span>
                </p>
                <div className="flex text-gray-600 text-sm mt-2">
                  <span className="mr-2">🛏 {property.bedrooms} Bedrooms</span>
                  <span className="mr-2">🛁 {property.baths} Baths</span>
                  <span>👥 {property.guests} Guests</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PropertySlider;