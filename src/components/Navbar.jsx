import React, { useState, useRef, useEffect } from "react";
import {
  FiMenu,
  FiBell,
  FiSearch,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({ onMenuClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="text-gray-600 hover:text-indigo-600 focus:outline-none transition-colors"
          >
            <FiMenu className="h-6 w-6" />
          </button>
          {/* Search bar - hidden on mobile, visible on md and up */}
          <div className="hidden md:block ml-4 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 w-64 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <button className="relative text-gray-500 hover:text-indigo-600 transition-colors">
            <FiBell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 border-2 border-white"></span>
          </button>

          {/* User dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center text-white font-bold">
                U
              </div>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-all duration-200 ease-out z-50">
                {/* User info section */}
                <div className="px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">Karthick</p>
                  <p className="text-xs text-gray-500 truncate">
                    karthickbs54@gmail.com
                  </p>
                </div>

                {/* Menu items */}
                <div className="py-1">
                  <Link
                    to="/myProfile"
                    className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150 ease-in-out"
                  >
                    <FiUser className="mr-3 h-4 w-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                    My Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150 ease-in-out"
                  >
                    <FiSettings className="mr-3 h-4 w-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                    Settings
                  </Link>
                </div>

                {/* Logout section */}
                <div className="py-1">
                  <button
                    onClick={() => {
                      // Add your logout logic here
                      console.log("Logging out...");
                    }}
                    className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150 ease-in-out"
                  >
                    <FiLogOut className="mr-3 h-4 w-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
