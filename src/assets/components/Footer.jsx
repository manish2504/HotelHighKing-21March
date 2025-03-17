import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Upper Section - Gradient Background */}
      <div className="bg-gradient-to-r from-gray-800 to-black py-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-yellow-500 mb-4">CONTACT US</h3>
            <p className="flex items-center mb-2">
              📧
              <a href="mailto:jaipur@hotelhighwayking.com" className="ml-2 hover:text-yellow-400">
                jaipur@hotelhighwayking.com
              </a>
            </p>
            <p className="flex items-center mb-4">
              📞
              <a href="tel:+919828879333" className="ml-2 hover:text-yellow-400">
                +91 98288 79333
              </a>
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 text-xl">
              <a href="https://www.facebook.com/highwaykingofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/hotelhighwaykingofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="https://in.pinterest.com/hotelhighwaykin/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors duration-300">
                <FaPinterestP />
              </a>
              <a href="https://x.com/hotelhighwayking.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@Hotelhighwaykingofficial/search" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Our Branches */}
          <div>
            <h3 className="text-lg font-bold text-yellow-500 mb-4">OUR BRANCHES</h3>
            <ul className="mt-2 space-y-2">
              <li>JAIPUR - +91 98288 79111</li>
              <li>SHAHPURA - +91 98283 38100</li>
              <li>BAGRU - +91 98288 79222</li>
              <li>BEHROR - +91 98288 01444</li>
              <li>NEELKA - +91 98288 31555</li>
              <li>NEEMRANA - +91 98288 59666</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-yellow-500 mb-4">QUICK LINKS</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300">ABOUT</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300">SERVICES</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300">CUSTOMER SUPPORT</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Section - Black Background */}
      <div className="bg-black text-white text-center py-4">
        <p>© 2025 Kantag Solution All rights reserved.</p>
        <p className="mt-1">
          <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Terms & Conditions</a> |
          <a href="#" className="ml-2 hover:text-yellow-500 transition-colors duration-300">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
