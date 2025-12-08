import React from "react";
import {
  FaStar,
  FaCarSide,
  FaTags,
  FaUserTie,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function SparePartCard({
  id,
  name,
  category,
  brand,
  vehicle,
  priceRange,
  rating,
  seller,
  image,
}) {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-100">
      {/* Top Image - full width */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
            <FaTags className="text-blue-600" />
            {brand}
          </span>

          <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
            <FaCarSide className="text-green-600" />
            {vehicle}
          </span>
        </div>

        {/* Seller */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <FaUserTie className="text-primary" />
          {seller}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaMoneyBillWave className="text-green-600" />
          <span>Avg. Price: {priceRange}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">{rating}</span>
        </div>

        {/* Button */}
        <button className="w-full mt-3 bg-primary text-white py-3 rounded-lg hover:bg-dark transition font-medium">
          Check Details
        </button>
      </div>
    </div>
  );
}
