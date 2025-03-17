import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

// Corrected paths to the images based on the current directory structure
import socialEventImage from "../images/socialevent.jpg";
import weddingImage from "../images/wedding.jpg";
import occasionsImage from "../images/occassion.jpg";
import corporateEventsImage from "../images/corporate.jpg";

const EventServices = () => {
  const services = [
    {
      id: 1,
      img: socialEventImage,  // Corrected path
      title: "Social Events",
      description:
        "Curate Unforgettable Social Events with Elegance and Flair, Setting the Stage for Unforgettable Gatherings and Cherished Moments.",
      link: "/social-event", // Link to the new SocialEventPage
    },
    {
      id: 2,
      img: weddingImage,  // Corrected path
      title: "Wedding Functions",
      description:
        "Elevate Your Special Day to Extraordinary Heights, Creating Timeless Memories for Your Wedding and Pre-Wedding Functions.",
      link: "/wedding-event", // You can adjust the link as needed
    },
    {
      id: 3,
      img: occasionsImage,  // Corrected path
      title: "Occasions",
      description:
        "Celebrate Life’s Special Occasions in Style and Grandeur, Crafting Unforgettable Memories in the Lap of Luxury.",
      link: "/occasion-event", // You can adjust the link as needed
    },
    {
      id: 4,
      img: corporateEventsImage,  // Corrected path
      title: "Corporate Events",
      description:
        "Unleash the Power of Productivity and Immerse Your Corporate Events and MICE Gatherings in an Unforgettable Fusion of Luxury and Professionalism.",
      link: "/corporate-event", // You can adjust the link as needed
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Hotel Highway King Party & Events Services
        </h2>
        <p className="text-gray-500 mb-8">
          Explore our selection of premium services
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <Link to={service.link}> {/* Use Link component here */}
                <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventServices;
