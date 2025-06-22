import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { 
  FiHome, 
  FiMessageSquare, 
  FiShoppingBag, 
  FiCreditCard, 
  FiUsers,
  FiChevronLeft,
  FiChevronRight,
  FiLogOut
} from 'react-icons/fi'

const Sidebar = ({ isOpen, isMobile, toggleSidebar }) => {
  const [hovered, setHovered] = useState(false)
  
  // Navigation items
  const navItems = [
    { to: "/dashboard", icon: <FiHome />, text: "Dashboard" },
    { to: "/chat", icon: <FiMessageSquare />, text: "Chat" },
    { to: "/product", icon: <FiShoppingBag />, text: "Products" },
    { to: "/payment", icon: <FiCreditCard />, text: "Payments" },
    { to: "/customerList", icon: <FiUsers />, text: "Customers" },
    { to: "/settings", icon: <FiUsers />, text: "settings" },
    { to: "/myProfile", icon: <FiUsers />, text: "myProfile" },
  ]

  return (
    <div 
      className={`bg-gradient-to-br from-indigo-800 to-purple-900 text-white 
        fixed md:relative h-full transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64 shadow-xl' : 'w-20'} 
        ${hovered && !isOpen && !isMobile ? 'w-64 shadow-xl' : ''}
        ${isMobile ? 'left-0 z-20' : ''}
        flex flex-col`}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
    >
      {/* Logo/Brand Section */}
      <div className="p-4 flex items-center justify-between border-b border-white/10">
        {isOpen || (hovered && !isMobile) ? (
          <h1 className="text-xl font-bold whitespace-nowrap bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
            AI Product
          </h1>
        ) : (
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
            AI
          </h1>
        )}
        
        {/* Close button - always visible in mobile, conditionally visible in desktop */}
        <button 
          onClick={toggleSidebar} 
          className="text-purple-200 hover:text-white"
        >
          {isMobile ? (
            <FiChevronLeft className="h-5 w-5" />
          ) : (
            <div className={`transition-transform duration-300 ${isOpen || hovered ? 'rotate-0' : 'rotate-180'}`}>
              {isOpen || hovered ? (
                <FiChevronLeft className="h-5 w-5" />
              ) : (
                <FiChevronRight className="h-5 w-5" />
              )}
            </div>
          )}
        </button>
      </div>
      
      {/* Navigation Items */}
      <nav className="mt-6 flex-1">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) => 
              `flex items-center px-4 py-3 mx-3 my-1 rounded-xl transition-all duration-200
              ${isActive ? 
                'bg-white/10 text-white shadow-md' : 
                'hover:bg-white/5 text-white/80 hover:text-white'}
              ${isOpen || (hovered && !isMobile) ? 'justify-start' : 'justify-center'}`
            }
            onClick={isMobile ? toggleSidebar : undefined}
          >
            <span className={`text-xl ${item.to === window.location.pathname ? 'text-cyan-300' : 'text-purple-200'}`}>
              {item.icon}
            </span>
            {(isOpen || (hovered && !isMobile)) && (
              <span className="ml-3 whitespace-nowrap font-medium">
                {item.text}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-white/10">
        <div className={`flex items-center ${isOpen || (hovered && !isMobile) ? 'justify-between' : 'justify-center'}`}>
          {(isOpen || (hovered && !isMobile)) && (
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center text-white font-bold">
                K
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Karthick</p>
                <p className="text-xs text-white/60">Admin</p>
              </div>
            </div>
          )}
          <button className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${isOpen || (hovered && !isMobile) ? 'ml-2' : ''}`}>
            <FiLogOut className="h-5 w-5 text-purple-200" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar