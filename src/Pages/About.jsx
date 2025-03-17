import React, { useEffect, useState } from "react";
import { FaStar, FaHeadset, FaCrown, FaBed, FaEye, FaRocket, FaHistory, FaAward } from "react-icons/fa";
import aboutImage from "../assets/images/jaipur3.jpg"; // Importing the about image
import ownerImage from "../assets/images/ratanyadav.jpg"; // Importing the owner image
import teamImage1 from "../assets/images/jaipur3.jpg"; // Replace with actual team member images
import teamImage2 from "../assets/images/jaipur3.jpg";
import teamImage3 from "../assets/images/jaipur3.jpg";
import teamImage4 from "../assets/images/jaipur3.jpg";

const teamImages = [
  { src: teamImage1, name: "Vikram Singh", position: "Chief Operating Officer" },
  { src: teamImage2, name: "Priya Sharma", position: "Head of Hospitality" },
  { src: teamImage3, name: "Rajesh Gupta", position: "Executive Chef" },
  { src: teamImage4, name: "Neha Kapoor", position: "Director of Marketing" }
];

const About = () => {
  const [counters, setCounters] = useState({ years: 0, guests: 0, awards: 0, locations: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        years: Math.min(prev.years + 1, 25),
        guests: Math.min(prev.guests + 5000, 500000),
        awards: Math.min(prev.awards + 1, 15),
        locations: Math.min(prev.locations + 1, 6),
      }));
    }, 1000); // Adjusted to 1000ms for better user experience
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center text-white py-16 md:py-28" style={{ backgroundImage: `url(${aboutImage})`, minHeight: '50vh' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text animate__animated animate__fadeInUp">
            OUR STORY
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-gray-200">
            Discover the journey of Hotel Highway King - from a single roadside inn to a hospitality empire
          </p>
        </div>
      </div>

      {/* About Content Container */}
      <div className="bg-gray-800 text-white">
        {/* About Us Section */}
        <section id="about-us" className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-8 text-center">
              About Us
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center bg-white text-gray-800 p-4 md:p-8 rounded-xl shadow-lg border-4 border-teal-400 transform transition-all duration-300">
              {/* Image Section */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8 flex justify-center">
                <img src={aboutImage} alt="Hotel Highway King" className="rounded-lg shadow-lg w-full h-auto object-cover" />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-4 md:mb-6">
                  About Hotel Highway King
                </h3>
                <p className="text-base md:text-lg mb-4">
                  Hotel Highway King is the undisputed King of the highways, both literally and metaphorically. What began as a modest roadside inn 25 years ago has blossomed into a chain of luxury hotels spanning 6 strategic locations across India's busiest highways.
                </p>
                <p className="text-base md:text-lg mb-4">
                  Founded by <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text font-bold text-xl">Mr. Ratan Yadav</span>, our establishment has redefined the concept of highway hospitality, transforming typical rest stops into destinations worth the journey themselves.
                </p>
                <p className="text-base md:text-lg mb-4">
                  Today, Hotel Highway King stands as a modern haven for travelers, offering a comprehensive experience that includes luxurious accommodations, world-class dining, children's play areas, shopping hubs, and entertainment zones – ensuring every family member finds their slice of comfort and joy.
                </p>
                <p className="text-base md:text-lg">
                  Particularly prominent along the Jaipur-Delhi highway, our signature gold crown logo has become a beacon for weary travelers seeking quality rest and exquisite dining – after all, who could resist "King ka Khana"?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section id="leadership" className="py-12 md:py-16 px-4 md:px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-8 md:mb-12 text-center">
              Our Leadership Team
            </h2>

            {/* Owner Highlight */}
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <img src={ownerImage} alt="Mr. Ratan Yadav" className="rounded-lg shadow-lg w-full max-w-sm mx-auto" />
                </div>
                <div className="w-full md:w-2/3 md:pl-8 text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                    Mr. Ratan Yadav
                  </h3>
                  <h4 className="text-xl text-gray-600 mb-4">Founder & Managing Director</h4>
                  <p className="text-base md:text-lg mb-4">
                    With over 30 years of experience in the hospitality industry, Mr. Ratan Yadav has transformed a single roadside dhaba into one of India's most recognized highway hospitality brands. His vision of creating comfortable, accessible luxury for travelers has revolutionized the concept of highway hotels in India.
                  </p>
                  <p className="text-base md:text-lg">
                    A recipient of the prestigious "Hospitality Entrepreneur of the Year" award, Mr. Yadav continues to lead Hotel Highway King with innovation and passion, maintaining the perfect balance between traditional hospitality values and modern luxury expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamImages.map((member, index) => (
                <div key={index} className="bg-white text-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <img src={member.src} alt={member.name} className="rounded-lg w-full h-64 object-cover mb-4" />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section id="vision" className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-8 text-center">
              Vision & Mission
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Section */}
              <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="flex justify-center text-4xl md:text-5xl text-yellow-500 mb-4">
                  <FaEye />
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                  Our Vision
                </h3>
                <p className="text-lg">
                  To transform highway travel in India by creating a network of premium hospitality experiences that travelers eagerly anticipate as destinations in themselves, not merely as rest stops.
                </p>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-xl mb-2">Our Promise</h4>
                  <p>
                    "Every journey deserves a royal rest - where the highway meets hospitality fit for a king."
                  </p>
                </div>
              </div>

              {/* Mission Section */}
              <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="flex justify-center text-4xl md:text-5xl text-red-500 mb-4">
                  <FaRocket />
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                  Our Mission
                </h3>
                <ul className="text-lg space-y-3 text-left">
                  <li>• To provide exceptional comfort and hospitality to highway travelers</li>
                  <li>• To maintain consistent quality across all our locations</li>
                  <li>• To create memorable family experiences through our diverse amenities</li>
                  <li>• To celebrate Indian cuisine with regional specialties and innovations</li>
                  <li>• To contribute to local economies and communities where we operate</li>
                </ul>
              </div>
            </div>

            {/* Values Section */}
            <div className="mt-12">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-8 text-center">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div className="bg-teal-500 p-4 md:p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all">
                  <div className="text-3xl md:text-4xl text-white mb-3 md:mb-4">
                    <FaCrown />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white">Excellence</h4>
                  <p className="mt-2 text-white text-sm md:text-base">We strive for excellence in every aspect of our service and hospitality.</p>
                </div>
                <div className="bg-blue-500 p-4 md:p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all">
                  <div className="text-3xl md:text-4xl text-white mb-3 md:mb-4">
                    <FaHeadset />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white">Support</h4>
                  <p className="mt-2 text-white text-sm md:text-base">We provide 24/7 support to ensure your comfort and convenience.</p>
                </div>
                <div className="bg-yellow-500 p-4 md:p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all">
                  <div className="text-3xl md:text-4xl text-white mb-3 md:mb-4">
                    <FaStar />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white">Quality</h4>
                  <p className="mt-2 text-white text-sm md:text-base">Rated by our customers for providing the best experiences.</p>
                </div>
                <div className="bg-indigo-500 p-4 md:p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all">
                  <div className="text-3xl md:text-4xl text-white mb-3 md:mb-4">
                    <FaBed />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white">Comfort</h4>
                  <p className="mt-2 text-white text-sm md:text-base">Our rooms are designed for maximum comfort and relaxation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section id="journey" className="py-12 md:py-16 px-4 md:px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-8 text-center">
              Our Journey
            </h2>
            
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg mb-8">
              <div className="flex justify-center text-4xl md:text-5xl text-indigo-500 mb-6">
                <FaHistory />
              </div>
              <p className="text-lg mb-6">
                The Hotel Highway King story is one of vision, perseverance, and a deep understanding of travelers' needs. Here's how our journey unfolded over the past 25 years.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-red-500 to-yellow-500"></div>
              
              {/* Timeline events */}
              {[
                {
                  year: "1998",
                  title: "The Beginning", 
                  description: "Mr. Ratan Yadav opened the first Hotel Highway King as a small restaurant and 5-room inn on the Jaipur-Delhi highway."
                },
                {
                  year: "2003",
                  title: "First Expansion", 
                  description: "Success led to our first major renovation, expanding to 25 rooms and adding a family restaurant section."
                },
                {
                  year: "2007",
                  title: "Second Location", 
                  description: "Opened our second hotel on the Agra-Delhi highway, establishing the beginning of our chain concept."
                },
                {
                  year: "2010",
                  title: "Brand Recognition", 
                  description: "Won our first 'Best Highway Hospitality' award and introduced our signature gold crown logo."
                },
                {
                  year: "2015",
                  title: "Luxury Upgrade", 
                  description: "Renovated all properties to include premium amenities like swimming pools, game zones, and shopping arcades."
                },
                {
                  year: "2020",
                  title: "Modern Era", 
                  description: "Reached the milestone of 6 locations across North India's major highways, with over 500,000 guests served."
                }
              ].map((event, index) => (
                <div key={index} className={`relative z-10 mb-8 flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${index % 2 === 0 ? 'mr-6 md:mr-12 text-right' : 'ml-6 md:ml-12 text-left'} w-full md:w-5/12`}>
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-white font-bold mb-3">
                        {event.year}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-red-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Story Section */}
        <section id="success" className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-8 text-center">
              Success Story
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Owner Story */}
              <div className="lg:w-7/12">
                <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                    The King Maker: Mr. Ratan Yadav's Journey
                  </h3>
                  
                  <div className="prose max-w-none text-lg">
                    <p className="mb-4">
                      Born in a small village near Jaipur, Ratan Yadav's journey to becoming a hospitality tycoon is a testament to vision, hard work, and understanding what travelers truly need.
                    </p>
                    
                    <p className="mb-4">
                      <span className="font-semibold">The Humble Beginnings:</span> After working as a cook in various highway dhabas for over a decade, Ratan saved enough to lease a small plot of land by the highway in 1998. With his wife's support and his culinary expertise, he started a modest eatery that quickly gained popularity for its delicious food and clean facilities.
                    </p>
                    
                    <p className="mb-4">
                      <span className="font-semibold">The Turning Point:</span> In 2001, a severe storm left many travelers stranded on the highway. Ratan opened his doors, offering shelter to over 50 people in his small establishment. This experience made him realize the acute need for quality accommodation along India's busy highways.
                    </p>
                    
                    <p className="mb-4">
                      <span className="font-semibold">The Vision:</span> While others saw highway hotels as mere pit stops, Ratan envisioned destinations that travelers would look forward to. He took a bold loan to expand his small dhaba into a 5-room inn with attached bathrooms – luxuries rarely found on highways at that time.
                    </p>
                    
                    <p className="mb-4">
                      <span className="font-semibold">Overcoming Challenges:</span> The journey wasn't without obstacles. From financial constraints to skeptical investors who doubted the viability of luxury highway hotels, Ratan faced numerous setbacks. Yet, his unwavering belief in his concept and the consistently positive guest feedback kept him moving forward.
                    </p>
                    
                    <p>
                      <span className="font-semibold">The Empire Today:</span> What started as one man's dream has evolved into a hospitality empire spanning 6 locations, employing over 500 people, many from rural communities near the highways. Mr. Yadav's focus on employee training and growth has created a loyal workforce, many of whom have been with him for over 15 years.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Achievements & Recognitions */}
              <div className="lg:w-5/12">
                <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg mb-8">
                  <div className="flex justify-center text-4xl md:text-5xl text-yellow-500 mb-4">
                    <FaAward />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Achievements & Recognitions</h3>
                  
                  <ul className="space-y-4">
                    {[
                      "Best Highway Hospitality Chain Award (2018)",
                      "Entrepreneur of the Year in Hospitality Sector (2016)",
                      "Tourism Impact Award for Rural Employment Generation (2019)",
                      "Culinary Excellence Award for Highway Restaurants (2017)",
                      "Traveler's Choice Award for 5 consecutive years (2015-2020)"
                    ].map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block mr-2 mt-1 text-yellow-500">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-700 text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-center">Words from the King</h3>
                  <blockquote className="italic border-l-4 border-yellow-500 pl-4 py-2 mb-4">
                    "When you're on the highway, you're not just looking for a place to eat or sleep. You're looking for a moment of comfort in a journey. That's what we strive to provide – not just services, but experiences."
                  </blockquote>
                  <p className="text-right">- Ratan Yadav</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section - Counters */}
        <section id="milestones" className="py-10 md:py-16 bg-gray-700 text-center text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-8 md:mb-12 px-4">
              Our Milestones
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 px-4 md:px-6">
              {[ 
                { label: "Years of Excellence", value: counters.years, color: "text-teal-400" },
                { label: "Happy Guests", value: counters.guests.toLocaleString(), color: "text-blue-400" },
                { label: "Awards Won", value: counters.awards, color: "text-yellow-400" },
                { label: "Locations Worldwide", value: counters.locations, color: "text-indigo-400" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className={`text-3xl md:text-5xl font-bold ${stat.color}`}>{stat.value}+</h3>
                  <p className="mt-2 text-sm md:text-lg text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add a sidebar navigation for easy scrolling */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
          <div className="bg-gray-900 bg-opacity-80 p-2 rounded-lg shadow-lg">
            <ul className="space-y-2">
              {[
                { id: "about-us", icon: <FaCrown />, name: "About" },
                { id: "leadership", icon: <FaHeadset />, name: "Leadership" },
                { id: "vision", icon: <FaEye />, name: "Vision" },
                { id: "journey", icon: <FaHistory />, name: "Journey" },
                { id: "success", icon: <FaAward />, name: "Success" },
                { id: "milestones", icon: <FaStar />, name: "Milestones" }
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex flex-col items-center w-12 h-12 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-yellow-500 transition-all p-1"
                    title={item.name}
                  >
                    <span className="text-lg mb-1">{item.icon}</span>
                    <span className="text-xs">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;