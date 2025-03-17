import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Quote, User } from "lucide-react";

// Import images
import bagru from "../assets/images/bagru.jpg";
import bagrudining from "../assets/images/bagrudining.jpg";
import gallery3 from "../assets/images/wedding.jpg";
import swimming2 from "../assets/images/socialevent.jpg";
import gallery5 from "../assets/images/swimming2.jpg";
import gallery6 from "../assets/images/occassion.jpg";
import gallery7 from "../assets/images/birthdayceleb.jpg";
import gallery8 from "../assets/images/bilaspur1.jpg";

const galleryImages = [
  { url: bagru, alt: "Hotel" },
  { url: bagrudining, alt: "Luxury Dining" },
  { url: gallery3, alt: "Restaurant" },
  { url: swimming2, alt: "Poolside" },
  { url: gallery5, alt: "Fitness Center" },
  { url: gallery6, alt: "Spa" },
  { url: gallery7, alt: "Meeting Room" },
  { url: gallery8, alt: "Garden" },
];

const testimonials = [
  { id: 1, name: "Anand Kumar", review: "Clean, reasonably priced hotel close to the airport. Staff were friendly and helpful.", role: "Business Traveler" },
  { id: 2, name: "Pinki Singh", review: "Very comfortable stay, highly recommended for solo travelers.", role: "Solo Traveler" },
  { id: 3, name: "Heena Pamecha", review: "The staff is very helpful and humble. Great for business or family trips.", role: "Business Traveler" },
  { id: 4, name: "Rajeev Kumar", review: "Excellent service, great location, and a wonderful experience.", role: "Family Traveler" },
  { id: 5, name: "Sonal Sharma", review: "Exceeded expectations! Comfortable rooms and amazing food!", role: "Leisure Traveler" },
];

const TestimonialSlider = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-yellow-400 mb-8">What Our Guests Say</h3>
        <p className="text-gray-300 mb-12">The biggest reward is to satisfy our guests and share their experience.</p>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-6xl mx-auto"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl shadow-lg p-8 mx-2 my-8 transform hover:shadow-2xl hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="pt-8">
                    <Quote className="w-8 h-8 text-yellow-500 mb-4 mx-auto" />
                    <p className="text-gray-600 text-lg mb-6 italic">"{item.review}"</p>
                    <h4 className="font-semibold text-xl text-gray-900">{item.name}</h4>
                    <p className="text-yellow-600 font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="container mx-auto text-center">
      <h1 class="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text animate__animated animate__fadeInUp">GALLERY</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">Explore the beauty and comfort of Hotel Highway King through our curated gallery.</p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl cursor-pointer relative shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img src={image.url} alt={image.alt} className="w-full h-48 object-cover rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        
      </div>
      
      {/* Testimonials */}
      <TestimonialSlider />
    </section>
  );
};

export default Gallery;
