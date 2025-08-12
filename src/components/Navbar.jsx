import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-xl backdrop-blur-lg border-b border-blue-300/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-200 drop-shadow-lg"
          >
            🌟 Daily Task
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-all duration-200 ${
                  isActive
                    ? "text-yellow-300 font-bold border-b-2 border-yellow-300 drop-shadow-md"
                    : "hover:text-yellow-200 hover:drop-shadow-lg"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-all duration-200 ${
                  isActive
                    ? "text-yellow-300 font-bold border-b-2 border-yellow-300 drop-shadow-md"
                    : "hover:text-yellow-200 hover:drop-shadow-lg"
                }`
              }
            >
              About
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-purple-700 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2 pb-4 border-t border-blue-300/50">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded transition-all duration-200 ${
                  isActive
                    ? "bg-yellow-300 text-black font-bold"
                    : "hover:bg-blue-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded transition-all duration-200 ${
                  isActive
                    ? "bg-yellow-300 text-black font-bold"
                    : "hover:bg-blue-600"
                }`
              }
            >
              About
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
