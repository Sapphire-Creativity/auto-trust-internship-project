import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function ForgotPassword({ onBack }) {
  const [step, setStep] = useState("send"); // send | otp | reset | success
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const [passwords, setPasswords] = useState({
    password: "",
    confirm: "",
  });

  const [passError, setPassError] = useState("");

  // Handle email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // OTP logic
  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(false);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleSendCode = () => {
    if (email) {
      setStep("otp");
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code === "123456") setStep("reset");
    else setError(true);
  };

  // Password logic
  const handlePasswordChange = (field, value) => {
    setPasswords((p) => ({ ...p, [field]: value }));

    if (!value.trim()) {
      setPassError("");
      return;
    }

    if (field === "password" && value.length < 8) {
      setPassError("Password must be at least 8 characters");
      return;
    }

    if (field === "confirm" && value !== passwords.password) {
      setPassError("Passwords do not match");
      return;
    }

    setPassError("");
  };

  const canReset =
    passwords.password.length >= 8 &&
    passwords.confirm.length >= 8 &&
    passwords.password === passwords.confirm &&
    passError === "";

  const finishReset = () => {
    if (canReset) setStep("success");
  };

  const handleGoToLogin = () => {
    onBack();
  };

  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-left text-[#1D6ECC] hover:text-blue-700"
      >
        <IoIosArrowRoundBack size={20} /> Back
      </button>

      {/* ===================== SEND RESET EMAIL ===================== */}
      {step === "send" && (
        <div className="text-center space-y-[18px]">
          <div className="flex items-center justify-center mx-auto">
            <img src="/assets/Mail2.png" alt="Mail icon" />
          </div>

          <p className="text-xl font-semibold">Forgot Password?</p>

          <p className="text-sm text-[#727272]">
            Enter your email address and we'll send you a reset code
          </p>

          <div className="text-start">
            <label htmlFor="email" className="text-xs font-normal">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-3 py-3 rounded-lg text-sm text-[#4F4F4F] bg-[#f2f2f2] focus:outline-primary"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <button
            onClick={handleSendCode}
            className="w-full py-4 rounded-lg bg-primary hover:bg-dark text-white text-sm font-medium"
          >
            Send Reset Code
          </button>
        </div>
      )}

      {/* ===================== OTP SCREEN ===================== */}
      {step === "otp" && (
        <div className="text-center space-y-[18px]">
          <div className="flex items-center justify-center mx-auto">
            <img src="/assets/Mail.png" alt="Mail icon" />
          </div>

          <p className="text-2xl font-semibold">Enter Reset Code</p>

          <p className="text-sm text-[#727272]">
            We've sent a 6-digit code to <br />
            <span className="text-gray-600 font-medium">
              {email || "your email"}
            </span>
          </p>

          <div className="flex justify-center gap-3 mt-10">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                className={`w-12 h-12 rounded-lg text-center text-xl border border-[#B9B9B9] focus:outline-[#1D6ECC]
                    ${error ? "border-red-500 text-red-500" : ""}
                  `}
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-sm -mt-3 text-start mx-4">
              Wrong code. Please try again.
            </p>
          )}

          <p className="text-sm text-[#727272]">
            Didn't receive the code?
            <button className="text-[#1D6ECC] cursor-pointer ml-1 hover:underline">
              Resend
            </button>
          </p>

          <button
            onClick={handleVerify}
            className={`w-full py-4 rounded-lg text-[15px] text-white cursor-pointer
                ${
                  otp.join("").length === 6
                    ? "bg-[#1D6ECC] hover:bg-blue-700"
                    : "bg-[#D2DFEE] cursor-not-allowed"
                }
              `}
            disabled={otp.join("").length !== 6}
          >
            Verify Code
          </button>
        </div>
      )}

      {/* ===================== RESET PASSWORD FORM ===================== */}
      {step === "reset" && (
        <div className="text-center space-y-[18px]">
          <div className="flex items-center justify-center mx-auto">
            <img src="/assets/Lock.png" alt="Lock icon" />
          </div>

          <p className="text-2xl font-semibold">Reset Password</p>

          <p className="text-xs sm:text-sm text-[#727272]">
            Create a new password for your account
          </p>

          {/* PASSWORD */}
          <div className="text-left space-y-2">
            <label className="text-xs font-normal">New Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-3 rounded-lg text-sm text-[#4F4F4F] bg-[#f2f2f2] focus:outline-primary"
              value={passwords.password}
              onChange={(e) => handlePasswordChange("password", e.target.value)}
            />
          </div>

          {/* CONFIRM */}
          <div className="text-left space-y-2">
            <label className="text-xs font-normal">Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-3 rounded-lg text-sm text-[#4F4F4F] bg-[#f2f2f2] focus:outline-primary"
              value={passwords.confirm}
              onChange={(e) => handlePasswordChange("confirm", e.target.value)}
            />
          </div>

          {passError && (
            <p className="text-red-500 text-sm text-start">{passError}</p>
          )}

          <button
            onClick={finishReset}
            disabled={!canReset}
            className={`w-full py-4 rounded-lg text-sm text-white
                ${
                  canReset
                    ? "bg-primary hover:bg-dark cursor-pointer"
                    : "bg-[#D2DFEE] cursor-not-allowed"
                }
              `}
          >
            Reset Password
          </button>
        </div>
      )}

      {/* ===================== SUCCESS ===================== */}
      {step === "success" && (
        <div className="text-center space-y-[18px]">
          <div className="flex items-center justify-center mx-auto">
            <img src="/assets/Confetti.png" alt="Success icon" />
          </div>

          <p className="text-2xl font-semibold">Password Reset Successfully</p>

          <p className="text-sm text-[#727272]">
            You can now log in using your new password.
          </p>

          <button
            onClick={handleGoToLogin}
            className="w-full py-4 rounded-lg bg-primary hover:bg-dark text-white text-sm font-medium cursor-pointer"
          >
            Go to Login
          </button>
        </div>
      )}
    </div>
  );
}
