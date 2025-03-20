import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BedDouble,
  Tag,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/" },
    { icon: BedDouble, label: "Rooms", path: "/admin/rooms" },
    { icon: LayoutDashboard, label: "Hotels", path: "/admin/hotels" },
    { icon: Tag, label: "Offers", path: "/admin/offers" },
    { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
    { icon: MessageSquare, label: "Queries", path: "/admin/queries" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];
  if(localStorage.getItem("authToken")) {
    return(<></>);
  }

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-6 shadow-lg">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white">Hotel Admin</h1>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-4 p-3 rounded-lg transition duration-300 ease-in-out ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            }
          >
            <item.icon size={22} className="text-gray-300" />
            <span className="text-lg">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
