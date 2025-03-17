import React, { useEffect } from "react";
import { Phone, Wifi, Utensils, Timer, Clock } from "lucide-react";
import jaipurImage from "../images/jaipur2.jpg";
import LuxuryroomImage from "../images/jaipurroom.jpg";
import FinediningImage from "../images/jaipurdining.jpg";
import EventSpacesImage from "../images/jaipurevent.jpg";

const HeroSection = () => (
  <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${jaipurImage})` }}>
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
    <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-center">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600 mb-4 text-shadow-xl transform transition-all duration-500 hover:scale-110">
        Hotel Highway King Jaipur
      </h1>
      <p className="text-lg text-white text-shadow-xl mb-6">
        A place where comfort meets luxury in the heart of the Pink City.
      </p>
    </div>
  </div>
);

const GalleryCard = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group border-4 border-transparent hover:border-yellow-500">
    <img src={imageUrl} alt={title} className="w-full h-64 object-cover group-hover:opacity-90 transition-all" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-500 transition-all">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition-all">{description}</p>
    </div>
  </div>
);

const AmenityCard = ({ Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:bg-yellow-50 group border-4 border-transparent hover:border-yellow-500">
    <div className="bg-yellow-100 p-3 rounded-full group-hover:bg-yellow-500 group-hover:text-white">
      <Icon className="w-8 h-8 text-yellow-600 group-hover:text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 group-hover:text-yellow-500 transition-all">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const JaipurPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on mount
  }, []);

  const hotelImages = [
    { title: "Luxury Rooms", description: "Spacious rooms with modern amenities and traditional decor.", imageUrl: LuxuryroomImage },
    { title: "Fine Dining", description: "Experience world-class cuisine in our restaurants.", imageUrl: FinediningImage },
    { title: "Event Spaces", description: "Perfect venues for your special occasions.", imageUrl: EventSpacesImage }
  ];

  return (
    <div className="bg-gray-50">
      <HeroSection />

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-8 mb-16 rounded-2xl shadow-lg border-4 border-yellow-500">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-400 to-red-600 mb-6">
              Welcome to Hotel Highway King Jaipur
            </h2>

            <p className="text-lg text-gray-600">
              Hotel Highway King Jaipur is one big proud red spot in the heart of this pink city. Since our inception 25 years ago, we have only one mission – to serve every member of your family.
              <br /><br />
              Keeping that in mind, we have made Hotel Highway King Jaipur more than just a hotel. From fine dining restaurants to luxurious hotel rooms and shopping areas, we have everything you might need to make your stay at the hotel a comfortable one.
              <br /><br />
              Some other amenities that make us one of a kind are our economically priced packages, free 24-hour Wi-Fi, 24-hour fine dining, 3 hours of express laundry services, and on-demand yummy food.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={jaipurImage}
              alt="Hotel Jaipur"
              className="w-full h-64 mx-auto rounded-2xl shadow-2xl object-cover transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hotelImages.map((image, index) => (
            <GalleryCard key={index} {...image} />
          ))}
        </div>

        {/* Map Section with Marker */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 Our Location</h2>
            <p className="text-gray-600 mb-4">Find us in the heart of Jaipur</p>
          </div>
          <iframe
            src="https://www.google.com/maps?q=26.885536,75.731679&hl=en&z=15&output=embed"
            width="100%" height="400" frameBorder="0" style={{ border: 0 }} allowFullScreen=""
            aria-hidden="false" tabIndex="0"
            title="Hotel Highway King Jaipur Location"
          ></iframe>
        </div>

        <div className="bg-yellow-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book Your Stay?</h2>
          <p className="text-gray-600 mb-6">Contact us now to reserve your room</p>
          <a href="tel:+919828879333" className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors">
            <Phone className="w-5 h-5 mr-2" />
            Call us at +91 98288 79333
          </a>
        </div>
      </div>
    </div>
  );
};

export default JaipurPage;
