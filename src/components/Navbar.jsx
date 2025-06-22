import React, { useState, useRef, useEffect } from "react";
import {
  FiMenu,
  FiBell,
  FiSearch,
  FiUser,
  FiSettings,
  FiLogOut,
  FiMessageSquare,
  FiAlertCircle,
  FiCheckCircle
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

  // Sample notification data
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New message',
      content: 'You have received a new message from Alex',
      time: '2 mins ago',
      read: false
    },
    {
      id: 2,
      type: 'alert',
      title: 'System update',
      content: 'Scheduled maintenance tonight at 11 PM',
      time: '1 hour ago',
      read: true
    },
    {
      id: 3,
      type: 'success',
      title: 'Order completed',
      content: 'Your order #12345 has been shipped',
      time: '3 hours ago',
      read: true
    }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNotificationOpen(false); // Close notification if open
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsDropdownOpen(false); // Close profile dropdown if open
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'message':
        return <FiMessageSquare className="text-blue-500" />;
      case 'alert':
        return <FiAlertCircle className="text-yellow-500" />;
      case 'success':
        return <FiCheckCircle className="text-green-500" />;
      default:
        return <FiBell className="text-gray-500" />;
    }
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
          {/* Notification dropdown */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={toggleNotification}
              className="relative text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <FiBell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 border-2 border-white"></span>
            </button>

            {/* Notification dropdown menu */}
            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-all duration-200 ease-out z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Notifications</p>
                </div>
                
                <div className="py-1 max-h-96 overflow-y-auto">
                  {notifications.slice(0, 3).map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-blue-50' : ''}`}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {notification.content}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="py-1 border-t border-gray-100">
                  <Link
                    className="block px-4 py-2 text-sm text-center text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    View all notifications
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* User dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center text-white font-bold">
                K
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
                      navigate("/")
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