import React, { useState } from "react";
import { FaWifi, FaParking, FaSwimmingPool, FaUtensils, FaCocktail, FaDumbbell, FaSnowflake } from "react-icons/fa";
import bagruRoom from "../assets/images/bagruroom.jpg";
import jaipurRoom from "../assets/images/jaipurroom.jpg";
import bilaspurRoom from "../assets/images/bilaspur.jpg";
import behrorRoom from "../assets/images/behror.jpg";
import neelkaRoom from "../assets/images/neelka.jpg";
import neemranaRoom from "../assets/images/neemrana.jpg";
import shahpuraRoom from "../assets/images/shahpuraroom.jpg";
import { Clock, CreditCard, Shield, BookmarkCheck, HelpCircle, MessageCircleQuestion, ChevronDown, ChevronUp } from "lucide-react";

const Room = () => {
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [expandedTerms, setExpandedTerms] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const rooms = [
    { id: 1, name: "Hotel Highway King Jaipur", location: "Jaipur", image: jaipurRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Air Conditioning", icon: <FaSnowflake className="text-blue-300" /> }, { name: "Room Service", icon: <FaUtensils className="text-yellow-600" /> }] },
    { id: 2, name: "Hotel Highway King Bagru", location: "Bagru", image: bagruRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Restaurant", icon: <FaUtensils className="text-yellow-600" /> }, { name: "Parking", icon: <FaParking className="text-gray-700" /> }] },
    { id: 3, name: "Hotel Highway King Behror", location: "Behror", image: behrorRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "24/7 Room Service", icon: <FaUtensils className="text-yellow-600" /> }, { name: "Swimming Pool", icon: <FaSwimmingPool className="text-blue-400" /> }] },
    { id: 4, name: "Hotel Highway King Bilaspur", location: "Bilaspur", image: bilaspurRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Air Conditioning", icon: <FaSnowflake className="text-blue-300" /> }, { name: "Restaurant", icon: <FaUtensils className="text-yellow-600" /> }] },
    { id: 5, name: "Hotel Highway King Shahpura", location: "Shahpura", image: shahpuraRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Bar", icon: <FaCocktail className="text-purple-500" /> }, { name: "Room Service", icon: <FaUtensils className="text-yellow-600" /> }] },
    { id: 6, name: "Hotel Highway King Neelka", location: "Neelka", image: neelkaRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Fitness Center", icon: <FaDumbbell className="text-red-500" /> }, { name: "Restaurant", icon: <FaUtensils className="text-yellow-600" /> }] },
    { id: 7, name: "Hotel Highway King Neemrana", location: "Neemrana", image: neemranaRoom, amenities: [{ name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500" /> }, { name: "Air Conditioning", icon: <FaSnowflake className="text-blue-300" /> }, { name: "Parking", icon: <FaParking className="text-gray-700" /> }] },
  ];

  const sortedRooms = [...rooms].sort((a, b) => {
    const priceA = a.price ? parseInt(a.price.replace('₹', '').replace(',', '')) : 0;
    const priceB = b.price ? parseInt(b.price.replace('₹', '').replace(',', '')) : 0;

    return sortOrder === "lowToHigh" ? priceA - priceB : priceB - priceA;
  });

  const handleFAQToggle = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const toggleTerms = () => {
    setExpandedTerms(!expandedTerms);
  };

  const termsAndConditions = [
    {
      title: "Stay Duration",
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      details: [
        "Standard day-use booking provides a 6-hour stay within the same day.",
        "Flexible check-in times between 6 AM to 9 PM.",
        "Extended stays available upon request with prorated pricing.",
        "Early check-in and late check-out subject to availability."
      ]
    },
    {
      title: "Booking & Payment",
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      details: [
        "Secure online booking with instant confirmation.",
        "100% payment required at the time of booking.",
        "Multiple payment options: Credit/Debit Cards, UPI, Net Banking, and Cash.",
        "Cancellation allowed up to 2 hours before check-in with full refund.",
        "Cancellations after the 2-hour window may incur partial charges."
      ]
    },
    {
      title: "Guest Policies",
      icon: <Shield className="w-6 h-6 text-red-500" />,
      details: [
        "Valid government-issued photo ID mandatory for all guests.",
        "Age restriction: Guests must be 18 years or older.",
        "Couples with valid ID proof welcome at all properties.",
        "Hotel reserves the right to refuse admission without explanation.",
        "Strict no-drugs and no-alcohol policy in non-designated areas.",
        "Smoking permitted only in specific designated outdoor areas."
      ]
    }
  ];

  const faqs = [
    {
      category: "Booking Queries",
      questions: [
        {
          question: "How do I book a day-use room?",
          answer: "You can book through our website, mobile app, or by calling our customer service. Online bookings are instant, and we offer real-time availability checks.",
          icon: <BookmarkCheck className="w-5 h-5 text-blue-600" />
        },
        {
          question: "Can I modify or cancel my booking?",
          answer: "Yes, you can modify or cancel your booking up to 2 hours before check-in. Modifications are subject to availability and potential price differences.",
          icon: <Clock className="w-5 h-5 text-yellow-600" />
        }
      ]
    },
    {
      category: "Room & Amenities",
      questions: [
        {
          question: "What amenities are included?",
          answer: "Standard amenities include free Wi-Fi, clean linens, air conditioning, and access to common areas. Specific amenities vary by property location.",
          icon: <Shield className="w-5 h-5 text-green-600" />
        },
        {
          question: "Are the rooms clean and sanitized?",
          answer: "We follow stringent hygiene protocols. Each room is thoroughly cleaned and sanitized between guests, with special attention to high-touch surfaces.",
          icon: <BookmarkCheck className="w-5 h-5 text-purple-600" />
        }
      ]
    }
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const redirectToBookingJaipur = () => {
    window.location.href = "https://bookings.resavenue.com/resBooking/availsearch?regCode=XIRT0513";
  };

  const redirectToBookingBagru = () => {
    window.location.href = "https://bookings.resavenue.com/resBooking/availsearch?regCode=XIRX0513";
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center">
            Our Rooms
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {sortedRooms.map((room) => (
            <div key={room.id} className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img src={room.image} alt={room.name} className="w-full h-56 object-cover transition-all duration-500 ease-in-out transform hover:scale-110" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
                <p className="text-gray-600 mt-1 flex items-center">{room.location}</p>

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
                  {room.name === "Hotel Highway King Jaipur" && (
                    <button
                      onClick={redirectToBookingJaipur}
                      className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-2 px-5 rounded-lg font-semibold shadow-md transform hover:scale-105 transition-all duration-300 flex items-center"
                    >
                      <span>Book Now</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}

                  {room.name === "Hotel Highway King Bagru" && (
                    <button
                      onClick={redirectToBookingBagru}
                      className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-2 px-5 rounded-lg font-semibold shadow-md transform hover:scale-105 transition-all duration-300 flex items-center"
                    >
                      <span>Book Now</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}

                  <span className="text-xs bg-gray-200 text-gray-700 py-1 px-2 rounded">6-Hour Stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terms and Conditions Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 text-transparent bg-clip-text mb-8 text-center">
            Terms & Conditions
          </h2>

          <div className="space-y-6">
            {termsAndConditions.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div onClick={() => toggleSection(`terms-${index}`)} className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold text-gray-700">{section.title}</h3>
                  </div>
                  {expandedSection === `terms-${index}` ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                </div>

                {expandedSection === `terms-${index}` && (
                  <div className="p-6 bg-gray-50 border-t">
                    <ul className="space-y-3 text-gray-600">
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 text-transparent bg-clip-text mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div onClick={() => toggleSection(`faq-${categoryIndex}`)} className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <MessageCircleQuestion className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-700">{category.category}</h3>
                  </div>
                  {expandedSection === `faq-${categoryIndex}` ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                </div>

                {expandedSection === `faq-${categoryIndex}` && (
                  <div className="p-6 bg-gray-50 border-t space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center space-x-3 mb-2">
                          {faq.icon}
                          <h4 className="text-lg font-medium text-gray-700">{faq.question}</h4>
                        </div>
                        <p className="text-gray-600 pl-8">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Room;
