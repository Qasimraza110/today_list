import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
<nav className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-xl backdrop-blur-lg border-b border-blue-300/50">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          
          <NavLink
            to="/"
            className="text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-200 drop-shadow-lg"
          >
            🌟 Daily Task
          </NavLink>

        
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

    
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-purple-700 transition">
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
      </div>
    </nav>
  );
}

export default Navbar;
