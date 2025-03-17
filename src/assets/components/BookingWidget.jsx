import React from "react";
import { Calendar, Users, Bed, MapPin } from "lucide-react";

export const BookingWidget = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* Added a semi-transparent dark overlay to the container */}
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-100">
        <h1 className="text-4xl font-bold mb-8">
          Book Your <span className="text-yellow-500 font-extrabold">Perfect Stay</span>
        </h1>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Property Selection */}
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Select Property
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-red-600">
                  <MapPin size={20} />
                </div>
                <select className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-sm">
                  <option value="" disabled selected>Select </option>
                  <option>Hotel Highway King Bagru</option>
                  <option>Hotel Highway King Bheror</option>
                  <option>Hotel Highway King Shahpura</option>
                  <option>Hotel Highway King Jaipur</option>
                  <option>Hotel Highway King Neelka</option>
                  <option>Hotel Highway King NeemRana</option>
                </select>
                <div className="absolute right-4 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Check In */}
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Check In
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-red-600">
                  <Calendar size={20} />
                </div>
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-sm"
                />
              </div>
            </div>

            {/* Check Out */}
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Check Out
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-red-600">
                  <Calendar size={20} />
                </div>
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-sm"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Guests
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-red-600">
                  <Users size={20} />
                </div>
                <select className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-sm">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
                <div className="absolute right-4 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Rooms - Full Width */}
          <div>
            <label className="block text-gray-600 mb-2 font-medium">
              Rooms
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-red-600">
                <Bed size={20} />
              </div>
              <select className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-sm">
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
                <option>4 Rooms</option>
                <option>5 Rooms</option>
              </select>
              <div className="absolute right-4 pointer-events-none text-gray-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-gradient-to-r from-red-600 to-yellow-500 hover:bg-gradient-to-r hover:from-red-700 hover:to-yellow-600 text-white py-4 rounded-2xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transform">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
