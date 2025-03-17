import React, { useState, useEffect } from "react";
import { BookingWidget } from "./BookingWidget"; // Assuming BookingWidget is also a separate component
import "../../styles/hero.css"; // Correct path to the hero.css file

// Import the images
import img1 from "../images/bagru.jpg";
import img2 from "../images/behror.jpg"; // Update the paths according to your local images
import img3 from "../images/bilaspur.jpg"; // Update the paths according to your local images

export const Hero = () => {
  // Array of background images imported from local files
  const images = [img1, img2, img3];

  // State for current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Update background image every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevIndex => (prevIndex + 1) % images.length); // Cycle through the images
    }, 7000); // 7 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${images[currentImage]}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#00000085] bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 hero-text-animation">
            Rest Easy, Travel Far
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Discover the perfect blend of luxury and comfort, where every journey finds its home at Hotel Highway King.
          </p>
        </div>

        <BookingWidget />
      </div>
    </div>
  );
};
