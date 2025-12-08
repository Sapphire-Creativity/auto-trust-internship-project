import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiCheckCircle,
  FiTool,
  FiDollarSign,
  FiClock,
  FiSettings,
  FiHelpCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { IoMdCart } from "react-icons/io";

const menu = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <FiGrid />,
    path: "/dashboard",
  },
  {
    key: "verified",
    label: "Verified Mechanics",
    icon: <FiCheckCircle />,
    path: "/dashboard/verified-mechanics",
  },
  {
    key: "spare",
    label: "Spare Parts & Price",
    icon: <FiTool />,
    path: "/dashboard/spareparts",
  },
  {
    key: "estimator",
    label: "Repair Estimator",
    icon: <FiDollarSign />,
    path: "/dashboard/repair-estimator",
  },
  {
    key: "cart",
    label: "Cart",
    icon: <IoMdCart />,
    path: "/dashboard/cart",
  },
  {
    key: "history",
    label: "Service History",
    icon: <FiClock />,
    path: "/dashboard/service-history",
  },
];

const popular = [
  "Brakes",
  "Batteries",
  "Engines",
  "Tyres",
  "Lights",
  "AC/Heating",
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside
      className={`h-screen bg-white shadow-md  flex flex-col transition-all duration-300 ${
        open ? "w-64" : "w-20"
      }`}
    >
      {/* Top Section */}
      <div className="h-16 flex items-center px-4 border-b border-gray-100">
        <button
          onClick={() => setOpen(!open)}
          className="p-3 my-2 rounded-md hover:bg-gray-100"
        >
          {open ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 py-4 space-y-3">
        {menu.map((m) => {
          const active = location.pathname === m.path;

          return (
            <Link
              key={m.key}
              to={m.path}
              className={`group flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all
                ${
                  active
                    ? "bg-[#1D6ECC] text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <span
                className={`text-xl ${
                  active ? "text-white" : "text-[#1D6ECC]"
                } group-hover:scale-110 transition-all`}
              >
                {m.icon}
              </span>
              {open && <span>{m.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Popular Section */}
      {/* <div className="px-4 py-4">
        {open && (
          <h4 className="text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
            Popular Services
          </h4>
        )}

        <ul className="space-y-2">
          {popular.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 text-gray-700 hover:text-[#1D6ECC] cursor-pointer transition-all"
            >
              <span className="text-[#1D6ECC] text-sm">●</span>
              {open && <span className="text-sm">{p}</span>}
            </li>
          ))}
        </ul>
      </div> */}

      {/* Footer */}
      <div className="mt-auto px-4 py-5 border-t border-gray-100">
        <button
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100 transition-all ${
            !open && "justify-center"
          }`}
        >
          <FiSettings className="text-xl text-gray-600" />
          {open && <span className="text-gray-700">Settings</span>}
        </button>

        <button
          onClick={() => navigate("/login")}
          className={`w-full flex items-center gap-3 px-3 py-3 mt-2 rounded-md hover:bg-gray-100 transition-all ${
            !open && "justify-center"
          }`}
        >
          <TbLogout2 className="text-xl text-red-500" />
          {open && <span className="text-red-500">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
