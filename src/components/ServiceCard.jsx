import React from "react";

export default function ServiceCard({ item }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-1">
      <div className="h-44 bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-600">{item.location}</span>
          <button className="text-white bg-[#1E73D8] px-3 py-1 rounded-md text-sm">
            View
          </button>
        </div>
      </div>
    </article>
  );
}
