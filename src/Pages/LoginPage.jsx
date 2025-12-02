import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import ForgotPassword from "./ForgotPassword";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();
  // Form state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Validation
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 8;
  };

  // Handle change
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });

    if (field === "email") {
      if (!value.trim()) {
        setErrors((e) => ({ ...e, email: "" }));
      } else if (!validateEmail(value)) {
        setErrors((e) => ({ ...e, email: "Invalid email address" }));
      } else {
        setErrors((e) => ({ ...e, email: "" }));
      }
    }

    if (field === "password") {
      if (!value.trim()) {
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

  // Form completion
  const allFilled =
    form.email &&
    form.password &&
    errors.email === "" &&
    errors.password === "";

  // Form submission

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  // Handler functions
  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleBackFromForgotPassword = () => {
    setShowForgotPassword(false);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-color-light relative overflow-hidden px-4 md:px-6">
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

      {showForgotPassword ? (
        <ForgotPassword onBack={handleBackFromForgotPassword} />
      ) : (
        <>
          {/* Main Card */}
          <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6 relative">
            {/* Segmented Tabs */}
            <div className="flex w-full bg-gray-100 rounded-full p-1 text-sm font-medium">
              <button className="w-1/2 py-1 rounded-full text-[14px] bg-white shadow text-gray-700">
                <Link to={"/login"}>Login</Link>
              </button>

              <button className="w-1/2 py-2 rounded-full text-[14px] text-gray-700">
                <Link to={"/signup"}>Sign Up</Link>
              </button>
            </div>

            {/* Description */}
            <div className="text-center">
              <p className="text-base">Welcome Back</p>
              <p className="text-xs sm:text-sm text-[#727272] mt-1.5 leading-snug">
                Enter your credentials to access your account
              </p>
            </div>

            <div className=" ">
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
              <form onSubmit={handleLogin} action="" className="space-y-4 mt-2">
                {/* Email */}
                <label htmlFor="email" className="text-xs font-normal">
                  Email Address
                </label>
                <input
                  placeholder="Enter your email address"
                  className="w-full px-3 py-3 rounded-lg text-sm text-[#4F4F4F] bg-[#f2f2f2] focus:outline-primary"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px]">{errors.email}</p>
                )}

                {/* Password */}
                <label htmlFor="password" className="text-xs font-normal">
                  Password
                </label>

                <div className="relative">
                  <input
                    placeholder="******"
                    type={showPassword ? "text" : "password"}
                    className="w-full px-3 py-3 rounded-lg text-sm text-[#4F4F4F] bg-[#f2f2f2] focus:outline-primary"
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  />

                  {/* Eye Icon */}
                  <span
                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "👁" : "👁"}
                  </span>
                </div>

                {errors.password && (
                  <p className="text-red-500 text-[12px]">{errors.password}</p>
                )}

                {/* Remember Me + Forgot Password */}
                <div className="flex justify-between items-center mt-1">
                  <label className="flex items-center gap-2 text-[14px] text-[#4F4F4F]">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <button
                    type="button"
                    onClick={handleForgotPasswordClick}
                    className="text-[14px] text-[#1D6ECC]"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={!allFilled}
                  className={`w-full py-4 rounded-lg text-sm cursor-pointer 
              ${
                allFilled
                  ? "bg-[#1D6ECC] hover:bg-blue-700 text-white"
                  : "bg-[#D2DFEE] text-[#FFFFFF] cursor-not-allowed"
              }`}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
