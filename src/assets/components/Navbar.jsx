import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../contexts/ModalContext"; // Corrected import path
import { Menu, X, ChevronDown, Building2 } from "lucide-react";
import logo from "../images/logo1.png";

const NavLink = ({ to, children, closeMenu }) => (
  <Link
    to={to}
    className="group text-gray-200 hover:text-yellow-400 transition-all duration-300 py-2 relative"
    onClick={closeMenu} // Close the menu when clicked
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link>
);

const Navbar = ({ offers }) => {
  const { openModal } = useModal(); // Get the function to open the modal

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When menu is open, prevent body scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleMobileOfferClick = (e) => {
    // Prevent navigation on mobile for the Offers button
    e.preventDefault();
    openModal(offers); // Open the offers modal
    setIsMenuOpen(false); // Close the menu after opening the modal
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the mobile menu when an item is clicked
  };

  // Route mapping for other links
  const routeMap = {
    "Home": "/",
    "About": "/about",
    "Rooms": "/rooms",
    "Gallery": "/gallery",
    "Blog": "/blog",
    "Career":"/career",
    "Corporate Booking": "/corporate-booking", // Correct URL for corporate booking
  };

  const locationRoutes = [
    { name: "Jaipur", path: "home/Jaipurroute" },
    { name: "Shahpura", path: "home/shahpuraroute" },
    { name: "Behror", path: "home/behrorroute" },
    { name: "Bilaspur", path: "home/bilaspurroute" },
    { name: "Neemrana", path: "home/neemranaroute" },
    { name: "Neelka", path: "home/neelkaroute" },
    { name: "Bagru", path: "home/bagruroute" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-[#1a2332] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 text-2xl font-bold text-white tracking-wide hover:text-yellow-400 transition-all duration-300"
          >
            <img src={logo} alt="Hotel Highway King" className="h-16" />
            <span>Highway King</span>
          </Link>

          {/* Main Navigation Container */}
          <div className="hidden md:flex items-center justify-end flex-1 space-x-8">
            {/* Navigation Links */}
            <nav className="flex items-center space-x-8">
              <NavLink to="/" closeMenu={closeMenu}>Home</NavLink>
              <NavLink to="/about" closeMenu={closeMenu}>About</NavLink>
              <NavLink to="/rooms" closeMenu={closeMenu}>Rooms</NavLink>
              <NavLink to="/gallery" closeMenu={closeMenu}>Gallery</NavLink>
              <NavLink to="/career" closeMenu={closeMenu}>Career</NavLink>

              {/* Location Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsLocationOpen(true)}
                onMouseLeave={() => setIsLocationOpen(false)}
              >
                <button className="text-gray-200 hover:text-yellow-400 font-medium flex items-center space-x-1 transition-all duration-300 py-2 relative">
                  <span>Location</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${isLocationOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-200 ease-in-out ${
                    isLocationOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                  }`}
                >
                  {locationRoutes.map((location) => (
                    <Link
                      key={location.path}
                      to={`/${location.path}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
            
            {/* Offers Link (Modal Trigger) */}
            <button
              onClick={handleMobileOfferClick} // Trigger the modal with offers
              className="group text-gray-200 hover:text-yellow-400 transition-all duration-300 py-2 relative"
            >
              Offers
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>

            {/* Corporate Booking */}
            <NavLink
              to="/corporate-booking"
              closeMenu={closeMenu} // Close menu when Corporate Booking is clicked
            >
              Corporate Booking
            </NavLink>

            {/* Franchise Link */}
            <NavLink
              to="/franchise"
              closeMenu={closeMenu} // Close menu when Franchise is clicked
            >
              Franchise
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop with Blur */}
      <div
        className={`fixed inset-0 backdrop-blur-md bg- bg-opacity-40 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 bg-opacity-90 backdrop-blur-sm z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col px-4 py-2 space-y-4">
            {/* Navigation Links */}
            {["Home", "About", "Rooms", "Gallery", "Location", "Blog", "Career","Corporate Booking"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={routeMap[item]} // Use the routeMap to link the correct path
                  closeMenu={closeMenu} // Close the mobile menu when clicked
                >
                  {item}
                </NavLink>
              )
            )}
            
            {/* Offers Button - Now properly aligned */}
            <button
              onClick={handleMobileOfferClick} // Trigger the modal with offers
              className="text-left text-gray-200 hover:text-yellow-400 transition-all duration-300 py-2 relative group"
            >
              Offers
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>

            {/* Franchise link for mobile */}
            <Link
              to="/franchise"
              className="flex items-center space-x-3 text-gray-200 hover:text-yellow-400 py-2"
              onClick={closeMenu}
            >
              <Building2 className="w-5 h-5" />
              <span>Franchise Opportunities</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;