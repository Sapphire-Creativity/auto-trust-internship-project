import { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export default function Signup() {
  const navigate = useNavigate();
  // form state

  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    carType: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // validation logic

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 8;
  };

  // input change logic

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });

    // Email validation logic
    if (field === "email") {
      if (value.trim() === "") {
        setErrors((e) => ({ ...e, email: "" }));
      } else if (!validateEmail(value)) {
        setErrors((e) => ({ ...e, email: "Invalid email address" }));
      } else {
        setErrors((e) => ({ ...e, email: "" }));
      }
    }

    // Password validation logic
    if (field === "password") {
      if (value.trim() === "") {
        setErrors((e) => ({ ...e, password: "" }));
      } else if (!validatePassword(value)) {
        setErrors((e) => ({
          ...e,
          password: "Password must be at least 8 characters",
        }));
      } else {
        setErrors((e) => ({ ...e, password: "" }));
      }
    }
  };

  const allFilled =
    form.name &&
    form.email &&
    form.location &&
    form.carType &&
    form.password &&
    errors.email === "" &&
    errors.password === "";

  // Form submission

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/email-verification");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-color-light relative overflow-hidden px-4 md:px-6">
      {/* Logo & header */}
      <div className="flex flex-col items-center my-10 gap-3">
        <img src={logo} alt="logo" className="w-32" />
        <p className="text-gray-600 text-sm">
          Transparent Car Maintenance Platform
        </p>
      </div>

      {/* Background Shapes */}
      <div className="absolute -left-20 -top-20 md:-left-40 md:-top-40 w-[250px] md:w-auto">
        <img
          src="/assets/sideBackground.png"
          className="w-full h-auto"
          alt=""
        />
      </div>

      <div className="absolute -right-20 bottom-0 md:-right-32 w-[250px] md:w-auto">
        <img
          src="/assets/sideBackgroundr.png"
          className="w-full h-auto"
          alt=""
        />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6 relative">
        {/* Segmented Tabs */}
        <div className="flex w-full bg-gray-100 rounded-full p-1 text-sm font-medium">
          <button className="w-1/2 py-2 rounded-full text-[14px] text-gray-700">
            <Link to={"/login"}> Login</Link>
          </button>
          <button className="w-1/2 py-1 rounded-full text-[14px] bg-white shadow text-gray-700">
            <Link to={"/signup"}>Sign Up</Link>
          </button>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-base">Create Account</p>
          <p className="text-xs sm:text-sm text-[#727272] mt-1.5 leading-snug">
            Join AutoTrust to access verified Mechanics and transparent pricing
          </p>
        </div>

        {/* Signup Form */}
        <div className="">
          {/* Google Button */}
          <button className="w-full h-11 border rounded-lg flex items-center justify-center gap-2 font-medium text-[16px] border-[#B9B9B9]">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-5 h-5"
              alt="Google"
            />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-sm my-4 text-[#6A7282]">
            <div className="flex-1 h-px bg-gray-200" />
            Or continue with email
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form */}
          <form onSubmit={handleSignUp} action="" className="space-y-4 mt-2">
            {/* Inputs */}
            <label htmlFor="name" className="text-xs font-normal">
              Full Name
            </label>
            <input
              placeholder="Full Name"
              className="w-full px-3 py-3 rounded-lg text-sm text-[#4F4F4F] bg-[#f2f2f2] focus:outline-primary"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />

            <label htmlFor="email" className="text-xs font-normal">
              Email Address
            </label>
            <input
              placeholder="Email Address"
              className="w-full px-3 py-3 rounded-lg text-sm text-[#4F4F4F] bg-[#f2f2f2] focus:outline-primary"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-[12px]">{errors.email}</p>
            )}

            <label htmlFor="location" className="text-xs font-normal">
              Location
            </label>
            <input
              placeholder="Location (City or Zip Code)"
              className="w-full px-3 py-3 rounded-lg text-sm text-[#4F4F4F] bg-[#f2f2f2] focus:outline-primary"
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />

            <label htmlFor="car-type" className="text-xs  font-normal">
              Car Type
            </label>
            <input
              placeholder="Car Type (e.g Toyota 2020)"
              className="w-full px-3 py-3 rounded-lg text-sm text-[#4F4F4F] bg-[#f2f2f2] focus:outline-primary"
              value={form.carType}
              onChange={(e) => handleChange("carType", e.target.value)}
            />

            <label htmlFor="password" className="text-xs font-normal">
              Password
            </label>
            <input
              placeholder="*****"
              type="password"
              className="w-full px-3 py-3 rounded-lg text-sm text-[#4F4F4F] bg-[#f2f2f2] focus:outline-primary"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}

            <p className="text-xs">Min 8 characters</p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!allFilled}
              className={`w-full py-4 rounded-lg text-sm cursor-pointer 
              ${
                allFilled
                  ? "bg-primary hover:bg-dark text-white"
                  : "bg-[#D2DFEE] text-[#FFFFFF] cursor-not-allowed"
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
