import React from 'react';
import { Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome back, Admin</h2>
      </div>
      <div className="flex items-center space-x-6">
        <button className="p-3 hover:bg-gray-100 rounded-full transition duration-300 ease-in-out relative">
          <Bell size={22} className="text-gray-700" />
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            <User size={24} className="text-gray-700" />
          </div>
          <span className="text-lg font-medium text-gray-800">Naveen</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
