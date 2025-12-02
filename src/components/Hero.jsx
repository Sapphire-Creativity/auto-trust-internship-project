import { FiSearch } from "react-icons/fi";
import hero from "/assets/heroImage.png";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-[#1D6ECC] to-blue-300 bg-clip-text text-transparent">
            Your Trusted Partner
          </span>{" "}
          For Car Maintenance
        </h1>

        <p className="max-w-2xl text-gray-200 mb-8 text-base md:text-lg">
          Get transparent pricing on spare parts, find verified mechanics, and
          estimate repair cost with confidence.
        </p>

        {/* Search bar */}
        <div className="flex w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20">
          <input
            type="text"
            placeholder="Search for parts, mechanics or repairs"
            className="flex-1 px-5 py-5 outline-none text-gray-700 placeholder-gray-500"
          />
          <button className="bg-[#1D6ECC] hover:bg-blue-700 px-8 text-white font-semibold flex items-center gap-2 transition-all">
            <FiSearch className="text-lg" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
