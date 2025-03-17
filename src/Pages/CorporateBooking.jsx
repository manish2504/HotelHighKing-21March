import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images for corporate booking and meeting space
import corporateBookingImage from '../assets/images/corporate.jpg';  // Replace with actual path
import meetingSpaceImage from '../assets/images/occassion.jpg';  // Replace with actual path

const CorporateBooking = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    bookingDetails: ''
  });
  const [faqOpen, setFaqOpen] = useState(null);  // State to track which FAQ is open

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Corporate booking request submitted!');
  };

  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);  // Toggle the FAQ question
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-red-600 cursor-pointer">
      {/* Hero Section */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-extrabold mb-6">
                Welcome To<br />The Corporate<br />Booking At<br />Hotel Highway King
              </h1>
              <p className="text-xl mb-6">
                We understand the unique needs and requirements of corporate travelers. Book with us for a range of exclusive benefits and services tailored specifically for corporate stays.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                src={corporateBookingImage} 
                alt="Corporate Booking" 
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" 
                loading="lazy"
              />
              <motion.img 
                src={meetingSpaceImage} 
                alt="Meeting Space" 
                className="rounded-lg mt-8 shadow-lg transition-transform duration-300 hover:scale-105" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-extrabold text-center mb-12 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Corporate Bookings With Exclusive Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-600 hover:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <motion.h2
            className="text-3xl font-extrabold text-center mb-8 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Want To Talk With Us?
          </motion.h2>
          <p className="text-center text-gray-600 mb-12">
            Book your corporate stay with us today and experience the perfect blend of comfort, convenience, and personalized service.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Booking Details</label>
              <textarea
                name="bookingDetails"
                value={formData.bookingDetails}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-red-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition-colors"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Submit Corporate Booking
            </motion.button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-extrabold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            FAQs
          </motion.h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <motion.h3
                  className="text-lg font-semibold mb-2 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.question}
                </motion.h3>
                {faqOpen === index && (
                  <p className="text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Data for Benefits Section
const benefits = [
  {
    title: "Dedicated Relationship Manager",
    description: "We value your business and provide a dedicated manager who will assist you throughout your booking process and stay. Our relationship managers understand your specific needs and ensure a personalized experience."
  },
  {
    title: "GST Invoicing",
    description: "Simplified and professional GST invoicing for all corporate bookings. Our invoices are compliant with tax regulations, making it easier for you to manage your expenses."
  },
  {
    title: "Bill To Company",
    description: "Seamless corporate billing process with complete transparency. We understand the importance of streamlined payment processes and make it hassle-free."
  },
  {
    title: "Early Check-In",
    description: "We know that business schedules can be demanding, and sometimes you need to check in early. We provide flexible check-in options when you arrive at an unusual hour."
  },
  {
    title: "Complimentary Breakfast",
    description: "Start your day on the right note with our complimentary breakfast. Our specially curated menu ensures a productive start to your day."
  },
  {
    title: "Airport Pickup And Drop",
    description: "To make your travel experience more convenient, we offer airport pickup and drop services with professional drivers to get you to your destination safely."
  }
];

// Data for FAQ Section
const faqs = [
  {
    question: "How Can I Contact My Dedicated Relationship Manager?",
    answer: "Your dedicated relationship manager will be assigned upon your first booking and will reach out to you directly. You can also contact them through our corporate support line."
  },
  {
    question: "Can I Receive GST Invoices For My Corporate Bookings?",
    answer: "Yes, we provide GST invoices for all corporate bookings. These are sent automatically after your stay is completed."
  },
  {
    question: "Is Early Check-In Available For Corporate Bookings?",
    answer: "Yes, we offer flexible check-in times for our corporate guests, subject to availability. Please inform us in advance of your arrival time."
  },
  {
    question: "Do You Provide Complimentary Breakfast For Corporate Guests?",
    answer: "Yes, all corporate bookings include complimentary breakfast at our in-house restaurant."
  },
  {
    question: "What If I Need To Cancel Or Modify My Booking?",
    answer: "We offer a flexible cancellation policy, and any modifications can be made by contacting our customer support team directly. Please review the terms on your booking confirmation."
  },
  {
    question: "Do You Offer Discounts For Long-Term Corporate Stays?",
    answer: "Yes, we provide special rates for long-term stays. Please reach out to our corporate sales team for personalized pricing and packages."
  }
];

export default CorporateBooking;
