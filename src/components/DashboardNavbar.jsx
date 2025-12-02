import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiBell, FiUser, FiLogOut, FiSettings } from "react-icons/fi";

export default function DashboardNavbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white py-[15px] flex items-center justify-between shadow-sm px-4">
      {/* Left: Logo */}
      <div>
        <img src="/assets/Logo2.png" alt="Logo" className="h-10" />
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

      {/* Right: Notification + Profile */}
      <div className="flex items-center gap-6 relative">
        {/* Notification Bell */}
        <button className="relative">
          <FiBell className="text-[22px] text-gray-700 hover:text-primary transition" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setOpenDropdown((prev) => !prev)}
            className="flex items-center gap-2"
          >
            <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center text-lg">
              <FiUser />
            </div>
          </button>

          {/* Dropdown Menu */}
          {openDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
              <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 w-full text-sm text-gray-700">
                <FiUser /> Profile
              </button>
              <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 w-full text-sm text-gray-700">
                <FiSettings /> Settings
              </button>
              <hr className="my-2" />
              <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 w-full text-sm text-red-600">
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
