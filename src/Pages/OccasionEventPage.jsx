import React from "react";

import { useState } from "react";
import bagruRoom from "../assets/images/bagruroom.jpg";
import jaipurRoom from "../assets/images/jaipurroom.jpg";
import bilaspurRoom from "../assets/images/bilaspur.jpg";
import behrorRoom from "../assets/images/behror.jpg";
// import neelkaRoom from "../assets/images/neelka.jpg";
import wedding from "../assets/images/wedding.jpg";
import shahpuraRoom from "../assets/images/shahpuraroom.jpg";


const OccasionEventPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sharon Adams",
      image: bagruRoom,
      text: "We had celebrated our Pearl function here, and for sure Saltstayz made it an unforgettable experience for guests. Your staff's hospitality was next level."
    },
    {
      name: "Priyank Mangukiya",
      image: "/api/placeholder/60/60",
      text: "Everything is flawless - rooms are spacious and location is perfect. The management took care of our party with great attention to detail. Highly recommended!"
    },
    {
      name: "Abhishek Gupta",
      image: "/api/placeholder/60/60",
      text: "I hosted the best couple's evening thanks to Saltstayz's incredible team. From decorations to menu, the overall experience was wonderful!"
    }
  ];
  
  const eventSpaces = [
    {
      title: "Birthday Celebration",
      image: bagruRoom,
      description: "Make your special day truly unforgettable with our tailor-made birthday packages."
    },
    {
      title: "Anniversary",
      image: jaipurRoom,
      description: "Celebrate your journey of love with a romantic setup designed just for you."
    },
    {
      title: "Kitty Party",
      image: bilaspurRoom,
      description: "Host the perfect get-together with friends in our elegantly designed spaces."
    },
    {
      title: "Baby Shower",
      image: shahpuraRoom,
      description: "Welcome your little one with a charming celebration that everyone will cherish."
    }
  ];
  
  const venues = [
    {
      name: "Grand Oasis Rooftop Terrace",
      image: behrorRoom,
      price: "₹1,20,000",
      capacity: "Up to 150 Guests",
      size: "5000 sq.ft",
      features: "Outdoor Space • Sunset View • Private Bar"
    },
    {
      name: "Royal Lotus Banquet Hall",
      // image: "/api/placeholder/400/320",
      image: bagruRoom,
      price: "₹1,50,000",
      capacity: "Up to 300 Guests",
      size: "8000 sq.ft",
      features: "Stage • Dance Floor • Premium Sound"
    },
    {
      name: "Sapphire Garden Space",
      image:shahpuraRoom,
      price: "₹1,00,000",
      capacity: "Up to 80 Guests",
      size: "3000 sq.ft",
      features: "Garden Setting • Fairy Lights • Intimate Feel"
    }
  ];
  
  const services = [
    { title: "Decoration", icon: "🎨" },
    { title: "Buffet", icon: "🍽️" },
    { title: "DJ & Music", icon: "🎵" },
    { title: "Cocktail", icon: "🍹" },
    { title: "Stay", icon: "🛏️" },
    { title: "Parking & Valet Service", icon: "🚗" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section with yellow to red gradient */}
      <div className="relative">
        <div className="bg-gradient-to-r from-yellow-400 to-red-600 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Occasion Event</h1>
              <p className="text-xl mb-8">
                Welcome to the special event hosting page of Saltstayz! Whether you are planning
                a birthday party, anniversary celebration or any other special occasion,
                we are excited to help you make your personal event truly unforgettable.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
 
</div>

      </div>
      
      {/* Main Content with spacing for the overlapping image */}
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16 pt-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Unforgettable Occasion Events Tailored to Perfection
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Salt Stayz specializes in creating unforgettable events that leave a lasting impression. From corporate gatherings to milestone celebrations, our dedicated team brings expertise, creativity, and meticulous attention to detail to create extraordinary experiences.
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {eventSpaces.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">{event.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Venues Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Banquet Hall & Rooftop Terrace</h2>
            <p className="text-lg text-gray-600">Elegant venues designed to create unforgettable moments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <img 
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 font-bold py-1 px-3 rounded-full">
                    {venue.price} <span className="text-xs font-normal">Starting Price/Day</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{venue.name}</h3>
                  <div className="flex flex-wrap text-sm text-gray-600 mb-3">
                    <div className="mr-4 mb-2">
                      <span className="font-semibold">Capacity:</span> {venue.capacity}
                    </div>
                    <div className="mr-4 mb-2">
                      <span className="font-semibold">Area:</span> {venue.size}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{venue.features}</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With our elegant ballrooms, exquisite catering and a dedicated team of professionals who will make sure that every detail is perfect, we take care of everything for your special day.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-md hover:border-blue-100">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-gray-900 font-medium">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Hear From Our Guests</h2>
            <p className="text-lg text-gray-600">The biggest reward is to satisfy our guests and share their experience with us</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-xl text-gray-700 italic mb-6">"{testimonials[activeTestimonial].text}"</p>
                <h3 className="text-lg font-bold text-gray-900">{testimonials[activeTestimonial].name}</h3>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-red-600 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-white mb-4">Want To Talk With Us?</h2>
              <p className="text-blue-100 text-lg mb-6">Let Hotel Highway King  Elevate Your Occasion Event Experience!</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="bg-blue-400/30 text-white placeholder-blue-200 border border-blue-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-blue-400/30 text-white placeholder-blue-200 border border-blue-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="bg-blue-400/30 text-white placeholder-blue-200 border border-blue-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <select className="bg-blue-400/30 text-white border border-blue-300/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white">
                    <option value="">Choose Event</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="kitty">Kitty Party</option>
                    <option value="babyshower">Baby Shower</option>
                  </select>
                </div>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg w-full md:w-auto transition duration-300 transform hover:scale-105">
                  Submit
                </button>
              </form>
            </div>
            <div className="md:w-1/2">
  <img 
    src={wedding}  // Replace with your actual image variable or URL
    alt="Elegant venue interior" 
    className="rounded-xl shadow-lg w-full h-full object-cover"
  />
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OccasionEventPage;
