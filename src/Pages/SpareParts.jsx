import { FaChevronDown } from "react-icons/fa";
import SparePartsCards from "../components/SparePartsCard";
import { spareParts } from "../assets/data";
import SparePartCard from "../components/SparePartCard";
import { useState } from "react";

const SpareParts = () => {
  // To filter options from the data
  const categories = [...new Set(spareParts.map((item) => item.category))];
  const brands = [...new Set(spareParts.map((item) => item.brand))];
  const vehicles = [...new Set(spareParts.map((item) => item.vehicle))];
  const priceRanges = [...new Set(spareParts.map((item) => item.priceRange))];

  //
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: "",
    vehicle: "",
  });

  //
  const handleFilterChange = (prop, value) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };
  //
  //
  const filteredData = spareParts.filter((item) => {
    const matchCategory = filters.category
      ? item.category === filters.category
      : true;
    const matchBrand = filters.brand ? item.brand === filters.brand : true;
    const matchVehicle = filters.vehicle
      ? item.vehicle === filters.vehicle
      : true;
    const matchPrice = filters.priceRange
      ? item.priceRange === filters.priceRange
      : true;

    return matchCategory && matchBrand && matchVehicle && matchPrice;
  });

  return (
    <div className="p-4">
      {/* Page Title */}
       <h1 className="text-2xl font-semibold mt-4 mb-2">Spare Parts</h1>
      <p className="text-base font-medium">Trending Parts </p>

      {/* Trending Parts */}
      <div className="flex gap-4 overflow-x-auto pb-4"></div>

      <div className="w-full  flex justify-between items-center  overflow-x-auto scrollbar-hide gap-3 my-4 py-4">
        {/* LEFT FILTER BUTTONS */}
        <div className="flex gap-3 min-w-max">
          {/* Category */}
          <div className="relative">
            <select
              onChange={(e) => handleFilterChange("category", e.target.value)}
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                 hover:bg-dark hover:text-white transition"
            >
              <option value="">All Categories</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <FaChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Brand */}
          <div className="relative">
            <select
              onChange={(e) => handleFilterChange("brand", e.target.value)}
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                 hover:bg-dark hover:text-white transition"
            >
              <option value="">All Brands</option>
              {brands.map((brand, idx) => (
                <option key={idx} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            <FaChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Price Range */}
          <div className="relative">
            <select
              onChange={(e) => handleFilterChange("priceRange", e.target.value)}
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                 hover:bg-dark hover:text-white transition"
            >
              <option value="">All Prices</option>
              {priceRanges.map((price, idx) => (
                <option key={idx} value={price}>
                  {price}
                </option>
              ))}
            </select>

            <FaChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Vehicle */}
          <div className="relative">
            <select
              onChange={(e) => handleFilterChange("vehicle", e.target.value)}
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                 hover:bg-dark hover:text-white transition"
            >
              <option value="">All Vehicles</option>
              {vehicles.map((vehicle, idx) => (
                <option key={idx} value={vehicle}>
                  {vehicle}
                </option>
              ))}
            </select>

            <FaChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* RIGHT SEARCH BAR */}
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className=" h-10 rounded-2xl px-2 w-xl bg-[#ECECF0] outline-0"
          />
        </div>
      </div>

      {/* Result Count + Sort */}
      {/* <div className="flex items-center justify-between mt-10 mb-4">
        <p className="text-gray-500">Showing 1-8 of 64 results</p>
        <select className="border border-gray-500 rounded-lg px-2 py-2 text-gray-500">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div> */}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg-gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <SparePartCard
              key={item.id}
              name={item.name}
              category={item.category}
              brand={item.brand}
              vehicle={item.vehicle}
              priceRange={item.priceRange}
              rating={item.rating}
              seller={item.seller}
              image={item.image}
            />
          ))
        ) : (
          <p className="text-gray-500">No spare parts match your filters.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button className="text-gray-500">&lt;</button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
          1
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded-lg">2</button>
        <button className="px-3 py-1 bg-gray-200 rounded-lg">3</button>
        <span className="text-gray-600">...</span>
        <button className="px-3 py-1 bg-gray-200 rounded-lg">8</button>
        <button className="text-gray-500">&gt;</button>
      </div>
    </div>
  );
};

export default SpareParts;
