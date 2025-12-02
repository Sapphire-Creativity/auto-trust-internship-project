import React from "react";

import { FiSearch, FiBell, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import logo from "../assets/Logo.png";
import { useNavigate } from "react-router";

const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-white py-[15px] flex items-center justify-between shadow-sm px-4">
      {/* Left: Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-2xl mx-6 hidden md:block">
        <div className="relative">
          <input
            type="text"
            placeholder="Search mechanics..."
            className="w-full h-10 rounded-full bg-gray-100 px-6 text-sm placeholder-gray-500 focus:outline-none"
          />
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div>
        <button
          onClick={() => navigate("/signup")}
          className="flex items-center justify-center gap-2 px-3 py-4 rounded-lg text-xs cursor-pointer 
            bg-primary hover:bg-dark text-white"
        >
          <FiUser size={20} /> Login / Sign Up
        </button>
      </div>
    </header>
  );
};

export default HomeNavbar;
