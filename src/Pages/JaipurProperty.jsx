import React, { useEffect } from 'react';
import { BookingWidget } from '../assets/components/BookingWidget';

const JaipurProperty = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        {/* Hero Section with Navbar over the image */}
        <div className="relative h-96">
          <img
            src="/src/assets/images/jaipurroom.jpg"
            alt="Hotel Highway King Jaipur"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center items-center p-8 z-20">
            <h1 className="text-white text-4xl font-bold leading-tight text-center">Hotel Highway King Jaipur</h1>
            <p className="text-white/90 text-lg mt-2 text-center">Your luxurious getaway in the Pink City</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> 
            {/* Main Content */}
            <div className="lg:col-span-2" id="about">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">About Hotel Highway King Jaipur</h2>
              <p className="text-gray-600 mb-6">
                Situated in the heart of Jaipur, our hotel offers the perfect blend of traditional Rajasthani
                hospitality with modern amenities. Whether you're visiting for business or leisure, our
                comfortable accommodations and attentive service ensure a memorable stay.
              </p>

              {/* Amenities Section */}
              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Our Amenities</h3>
              <ul className="grid grid-cols-2 gap-4 mb-6">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Free Wi-Fi
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Air Conditioning
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Restaurant
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Room Service
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Free Parking
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Conference Room
                </li>
              </ul>

              {/* Nearby Attractions */}
              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Popular Nearby Attractions</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  Hawa Mahal (12 mins)
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  City Palace (15 mins)
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  Amer Fort (25 mins)
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  Jantar Mantar (10 mins)
                </li>
              </ul>
            </div>

            {/* Booking Widget */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Book Your Stay</h3>
                <p className="text-gray-600 mb-4">Best rates guaranteed when you book directly with us.</p>
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <p className="text-sm font-medium text-yellow-800">Winter Sale: Get 15% off on all bookings!</p>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-4">₹2,499.00 <span className="text-sm font-normal text-gray-600">/night</span></div>
                {/* Enhanced Book Now Button (Longer) */}
                <button className="w-full bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white py-5 rounded-lg transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
                  <span className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 2a7 7 0 11-7 7 7 7 0 017-7zm0 10a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                    </svg>
                    Book Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Location Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16" id="location">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 Our Location</h2>
            <p className="text-gray-600 mb-4">Find us in the heart of Jaipur</p>
          </div>
          <iframe
            src="https://www.google.com/maps?q=26.885536,75.731679&hl=en&z=15&output=embed"
            width="100%"
            height="400"
            className="border-none rounded-lg"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default JaipurProperty;