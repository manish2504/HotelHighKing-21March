import React, { useState } from 'react';
import backgroundVideo from '../assets/images/video.mp4'; // Adjust the path as necessary

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessExperience: '',
    investmentCapacity: '',
    preferredLocation: '',
    message: '',
    businessProposal: null,
    termsAgreed: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      businessProposal: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            Franchise Inquiry
          </h1>
          <p className="text-xl text-gray-200 mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Join our growing network of successful franchises
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-yellow-300 focus:border-transparent bg-white shadow-sm transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-yellow-300 focus:border-transparent bg-white shadow-sm transition-all"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-yellow-300 focus:border-transparent bg-white shadow-sm transition-all"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="businessExperience" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Experience (Years)
                </label>
                <input
                  type="number"
                  id="businessExperience"
                  name="businessExperience"
                  value={formData.businessExperience}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-yellow-300 focus:border-transparent bg-white shadow-sm transition-all"
                  placeholder="Enter years of business experience"
                />
              </div>

              <div>
                <label htmlFor="investmentCapacity" className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Capacity
                </label>
                <select
                  id="investmentCapacity"
                  name="investmentCapacity"
                  value={formData.investmentCapacity}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-yellow-300 focus:border-transparent bg-white shadow-sm transition-all"
                >
                  <option value="">Select investment capacity</option>
                  <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                  <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                  <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                  <option value="$1,000,000+">$1,000,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Franchise Location
                </label>
                <input
                  type="text"
                  id="preferredLocation"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-yellow-300 focus:border-transparent bg-white shadow-sm transition-all"
                  placeholder="Enter your preferred location"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to open a Hotel Name franchise?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-yellow-300 focus:border-transparent bg-white shadow-sm transition-all"
                  placeholder="Tell us why you want to partner with us"
                ></textarea>
              </div>

              <div>
                <label htmlFor="businessProposal" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload a Business Proposal (Optional)
                </label>
                <input
                  type="file"
                  id="businessProposal"
                  name="businessProposal"
                  onChange={handleFileChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-yellow-300 focus:border-transparent bg-white shadow-sm transition-all"
                  accept=".pdf,.doc,.docx"
                />
                <p className="text-xs text-gray-500 mt-1">Accepted file types: PDF, DOC, DOCX</p>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="termsAgreed"
                    name="termsAgreed"
                    type="checkbox"
                    checked={formData.termsAgreed}
                    onChange={handleChange}
                    className="focus:ring-yellow-300 h-4 w-4 text-yellow-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="termsAgreed" className="font-medium text-gray-700">
                    Terms & Agreement *
                  </label>
                  <p className="text-gray-500">
                    I confirm that I have read and agree to the terms and conditions.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p className="text-gray-900 text-lg font-semibold">By submitting this form, you agree to be contacted regarding franchise opportunities.</p>
          <p className="mt-2 text-gray-900 text-lg font-semibold">We respect your privacy and will never share your information with third parties.</p>
        </div>
      </div>
    </div>
  );
};

export default Franchise;