import React, { useState } from "react";
import RepairCostCard from "../components/RepairCostCard";
import { repairCosts } from "../assets/data";
import { FaChevronDown } from "react-icons/fa";

// {
//     id: 5,
//     name: "Spark Plugs",
//     category: "Ignition System",
//     brand: "Toyota",
//     vehicle: "Camry 2007 - 2011",
//     priceRange: "₦1,500 - ₦4,500",
//     rating: 4.4,
//     seller: "AutoCare Hub",
//     image: "/images/spareparts/spark-plugs.jpg",
//   },

const RepairEstimator = () => {
  const repairCategories = [
    ...new Set(repairCosts.map((item) => item.category)),
  ];
  const brand = [...new Set(repairCosts.map((item) => item.brand))];
  const vehicle = [...new Set(repairCosts.map((item) => item.vehicle))];
  const priceRange = [...new Set(repairCosts.map((item) => item.priceRange))];

  //
  const [filters, setFilters] = useState({
    repairCategory: "",
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
  const filteredData = repairCosts.filter((item) => {
    const matchRepairCategory = filters.category
      ? item.category === filters.category
      : true;
    const matchBrand = filters.brand ? item.brand === filters.brand : true;
    const matchPriceRange = filters.priceRange
      ? item.priceRange === filters.priceRange
      : true;
    const matchVehicle = filters.vechicle
      ? item.vehicle === filters.vehicle
      : true;

    return matchRepairCategory && matchBrand && matchVehicle && matchPriceRange;
  });
  return (
    <section className="p-4">
      <h1 className="text-2xl font-semibold mt-4 mb-2">Repair Cost</h1>
      <p className="text-base font-medium">Cost range of repairs </p>

      {/*  */}

      <div className="w-full  flex justify-between items-center  overflow-x-auto scrollbar-hide gap-3 my-10 py-5">
        {/* LEFT FILTER BUTTONS */}
        <div className="flex gap-3 min-w-max">
          {/* Category */}
          <div className="relative">
            <select
              onChange={(e) =>
                handleFilterChange("repairCategory", e.target.value)
              }
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                       hover:bg-dark hover:text-white transition"
            >
              <option value="">Repair Categories</option>

              {repairCategories.map((cat, idx) => (
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
              <option value="">Brands</option>

              {brand.map((cat, idx) => (
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

          {/* Price Range */}
          <div className="relative">
            <select
              onChange={(e) => handleFilterChange("priceRange", e.target.value)}
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                       hover:bg-dark hover:text-white transition"
            >
              <option value="">Price Range</option>
              {priceRange.map((cat, idx) => (
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

          {/* Vehicle */}
          <div className="relative">
            <select
              onChange={(e) => handleFilterChange("vehicle", e.target.value)}
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                       hover:bg-dark hover:text-white transition"
            >
              <option value="">Vehicles</option>

              {vehicle.map((cat, idx) => (
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

      {/*  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <RepairCostCard
              key={item.id}
              service={item.service}
              brand={item.brand}
              vehicle={item.vehicle}
              priceRange={item.priceRange}
              averageCost={item.averageCost}
              rating={item.rating}
              seller={item.seller}
              image={item.image}
            />
          ))
        ) : (
          <p className="text-gray-500">No repairs match your filters.</p>
        )}
      </div>
    </section>
  );
};

export default RepairEstimator;
