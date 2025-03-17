  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
  import { User, Quote } from "lucide-react";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/effect-fade";

  const testimonials = [
    {
      id: 1,
      name: "Anand Kumar",
      review:
        "Clean, reasonably priced hotel close to the airport (hard to find all 3). Staff were friendly and helpful.",
      role: "Business Traveler",
    },
    {
      id: 2,
      name: "Pinki Singh",
      review:
        "I booked this hotel for my solo trip for business. Very comfortable stay, and highly recommended for female solo travelers.",
      role: "Solo Traveler",
    },
    {
      id: 3,
      name: "Heena Pamecha",
      review:
        "I stayed here for 2 weeks on a business trip. The staff is very helpful and humble. I highly suggest this place for business or family trips.",
      role: "Business Traveler",
    },
    {
      id: 4,
      name: "Rajeev Kumar",
      review:
        "Excellent service, great location, and an overall wonderful experience. Highly recommend this hotel for anyone traveling to the area.",
      role: "Family Traveler",
    },
    {
      id: 5,
      name: "Sonal Sharma",
      review:
        "The hotel exceeded my expectations. Comfortable rooms, friendly staff, and the food was amazing! I would definitely stay again.",
      role: "Leisure Traveler",
    },
    {
      id: 6,
      name: "Manoj Patel",
      review:
        "Amazing experience! The location was perfect, and the amenities were top-notch. I felt at home here and would recommend to others.",
      role: "Business Traveler",
    },
  ];


  
  const TestimonialSlider = () => {
    return (
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600">
              Hear From Our Guests
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              The biggest reward is to satisfy our guests and share their experience with us.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl shadow-lg p-8 mx-2 my-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative">
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                        <User className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="pt-8">
                      <Quote className="w-8 h-8 text-yellow-500 mb-4 mx-auto" />
                      <p className="text-gray-600 text-lg mb-6 italic">{`"${item.review}"`}</p>

                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-xl text-gray-900">{item.name}</h4>
                        <p className="text-yellow-600 font-medium">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .testimonial-swiper .swiper-button-next,
          .testimonial-swiper .swiper-button-prev {
            color: #eab308;
            background: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .testimonial-swiper .swiper-button-next:after,
          .testimonial-swiper .swiper-button-prev:after {
            font-size: 16px;
            font-weight: bold;
          }

          .testimonial-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #eab308;
            opacity: 0.5;
            transition: all 0.3s ease;
          }

          .testimonial-swiper .swiper-pagination-bullet-active {
            width: 20px;
            border-radius: 5px;
            opacity: 1;
          }

          .testimonial-swiper .swiper-slide {
            opacity: 0.7;
            transition: all 0.3s ease;
          }

          .testimonial-swiper .swiper-slide-active {
            opacity: 1;
            transform: scale(1.05);
          }

          /* Adding zoom effect to the middle slide */
          .swiper-slide-next,
          .swiper-slide-prev {
            transform: scale(0.95);
          }

          .swiper-slide-active {
            transform: scale(1.05);
          }
        `}</style>
      </div>
    );
  };

  export default TestimonialSlider;
