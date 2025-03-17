import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaWifi, FaParking, FaSwimmingPool, FaUtensils, FaCocktail, FaDumbbell, FaSnowflake } from "react-icons/fa";
import bagruRoom from "../assets/images/bagruroom.jpg";
import jaipurRoom from "../assets/images/jaipurroom.jpg";
import bilaspurRoom from "../assets/images/bilaspur.jpg";
import behrorRoom from "../assets/images/behror.jpg";
import neelkaRoom from "../assets/images/neelka.jpg";
import neemranaRoom from "../assets/images/neemrana.jpg";
import shahpuraRoom from "../assets/images/shahpuraroom.jpg";

const Room = () => {
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [expandedTerms, setExpandedTerms] = useState(false);

  const rooms = [
    { id: 1, name: "Hotel Highway King Millennium", price: "₹1249", location: "Huda City Centre", image: bagruRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Air Conditioning", icon: <FaSnowflake className="text-blue-300" /> }, { name: "Room Service", icon: <FaUtensils className="text-yellow-600" /> }] },
    { id: 2, name: "Hotel Highway King Corporate Suites", price: "₹1299", location: "Golf Course Road", image: jaipurRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Restaurant", icon: <FaUtensils className="text-yellow-600" /> }, { name: "Parking", icon: <FaParking className="text-gray-700" /> }] },
    { id: 3, name: "Hotel Highway King Premier", price: "₹2499", location: "Golf Course Road", image: bilaspurRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "24/7 Room Service", icon: <FaUtensils className="text-yellow-600" /> }, { name: "Swimming Pool", icon: <FaSwimmingPool className="text-blue-400" /> }] },
    { id: 4, name: "Hotel Highway King Basil", price: "₹1249", location: "Golf Course Road", image: behrorRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Air Conditioning", icon: <FaSnowflake className="text-blue-300" /> }, { name: "Restaurant", icon: <FaUtensils className="text-yellow-600" /> }] },
    { id: 5, name: "Hotel Highway King Horizon", price: "₹1599", location: "Cyber Hub", image: neelkaRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Bar", icon: <FaCocktail className="text-purple-500" /> }, { name: "Room Service", icon: <FaUtensils className="text-yellow-600" /> }] },
    { id: 6, name: "Hotel Highway King Grand", price: "₹1999", location: "Subhash Chowk", image: neemranaRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Fitness Center", icon: <FaDumbbell className="text-red-500" /> }, { name: "Restaurant", icon: <FaUtensils className="text-yellow-600" /> }] },
    { id: 7, name: "Hotel Highway King Icon", price: "₹1399", location: "Cyber Hub", image: shahpuraRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Air Conditioning", icon: <FaSnowflake className="text-blue-300" /> }, { name: "Parking", icon: <FaParking className="text-gray-700" /> }] },
  ];

  // Function to sort rooms based on selected order
  const sortedRooms = [...rooms].sort((a, b) => {
    const priceA = parseInt(a.price.replace('₹', '').replace(',', ''));
    const priceB = parseInt(b.price.replace('₹', '').replace(',', ''));
    return sortOrder === "lowToHigh" ? priceA - priceB : priceB - priceA;
  });

  const handleFAQToggle = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const toggleTerms = () => {
    setExpandedTerms(!expandedTerms);
  };

  // FAQ data
  const faqs = [
    { id: 1, question: "What are day-use rooms at Hotel Highway King?", answer: "Day-use rooms at Hotel Highway King are designed for guests who need a comfortable space for a few hours without an overnight stay. They're perfect for business travelers, transit passengers, or anyone looking for a private space to relax or work during the day." },
    { id: 2, question: "Can I book a day-use room for a few hours in Gurgaon?", answer: "Yes, Hotel Highway King offers flexible bookings with a standard 6-hour stay. You can check in and check out on the same day. Extended stays are available with prior confirmation from our front desk." },
    { id: 3, question: "Which locations in Gurgaon offer day-use rooms?", answer: "We have several locations across Gurgaon including Cyber Hub, Huda City Centre, Golf Course Road, and Subhash Chowk. Each property offers the same high-quality service and amenities." },
    { id: 4, question: "What amenities are included with day-use rooms?", answer: "All our day-use rooms include free high-speed Wi-Fi, air conditioning, clean linens, and access to hotel facilities like restaurants (where available). Premium locations may include additional amenities like swimming pools or fitness centers." },
    { id: 5, question: "Is advance booking required for day-use rooms?", answer: "While walk-ins are accepted based on availability, we recommend booking in advance to secure your preferred location and time slot, especially during peak hours or weekdays." },
    { id: 6, question: "How do I book a day-use room?", answer: "You can book through our website, mobile app, or by calling our customer service number at +91-124-XXXXXXX. Online bookings can be made 24/7 and confirmed instantly." }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text animate__animated animate__fadeInUp text-center">
            Our Rooms
          </h1>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {sortedRooms.map((room) => (
            <div key={room.id} className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img src={room.image} alt={room.name} className="w-full h-56 object-cover transition-all duration-500 ease-in-out transform hover:scale-110" />
                <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-3 rounded-bl-lg font-bold">
                  {room.price}/day
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
                <p className="text-gray-600 mt-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {room.location}
                </p>

                <div className="mt-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-3">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center bg-gray-200 rounded-full px-3 py-1">
                        <span className="mr-1">{amenity.icon}</span>
                        <span className="text-xs">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <button className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-2 px-5 rounded-lg font-semibold shadow-md transform hover:scale-105 transition-all duration-300 flex items-center">
                    <span>Book Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="text-xs bg-gray-200 text-gray-700 py-1 px-2 rounded">6-Hour Stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terms and Conditions */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg mt-12">
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleTerms}>
            <h2 className="text-2xl font-semibold text-gray-800">Terms and Conditions</h2>
            {expandedTerms ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          <div className={`mt-4 transition-all duration-300 overflow-hidden ${expandedTerms ? 'max-h-96' : 'max-h-32'}`}>
            <div className="space-y-4 text-gray-700">
              <div className="p-4 bg-gray-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Stay Duration</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Standard booking provides a 6-hour stay within the same day.</li>
                  <li>Check-in and check-out must be completed on the same day.</li>
                  <li>Extended stays beyond 6 hours are subject to additional charges.</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Booking & Payment</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>100% payment is required at the time of check-in.</li>
                  <li>We accept credit/debit cards, UPI, and cash payments.</li>
                  <li>Bookings can be canceled up to 2 hours before check-in with full refund.</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Property & Guest Policies</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Valid ID proof is mandatory for all guests at check-in.</li>
                  <li>Couples with valid ID proof are welcome at all our properties.</li>
                  <li>Hotel reserves the right to admission for maintaining guest safety.</li>
                  <li>Smoking is permitted only in designated areas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-300 pb-4">
                <div onClick={() => handleFAQToggle(faq.id)} className="cursor-pointer text-lg font-medium text-gray-800 flex justify-between items-center">
                  <span>{faq.question}</span>
                  <div className="bg-gray-200 rounded-full p-1">
                    {openFAQ === faq.id ? <IoIosArrowUp className="text-red-500" /> : <IoIosArrowDown className="text-gray-600" />}
                  </div>
                </div>
                {openFAQ === faq.id && (
                  <div className="text-gray-600 mt-3 pl-4 pr-8 text-sm border-l-2 border-red-500">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-200 p-4 rounded-lg">
            <p className="text-center text-gray-700">
              Still have questions? <span className="text-red-600 font-semibold cursor-pointer">Contact our support team</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;