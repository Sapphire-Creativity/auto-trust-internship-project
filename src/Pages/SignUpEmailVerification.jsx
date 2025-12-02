import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUpEmailVerification() {
  const navigate = useNavigate();
  const [step, setStep] = useState("send"); // send | otp | success
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    setError(false);

    // Auto focus next box
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code === "123456") {
      setStep("success");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#f5f7fa] relative overflow-hidden px-4 md:px-6">
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

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6">
        {/* ================== SEND VERIFICATION SCREEN ================== */}
        {step === "send" && (
          <div className="text-center space-y-[18px]">
            <div className=" flex items-center justify-center mx-auto">
              <img src="/assets/Mail2.png" alt="" />
            </div>

            <p className="text-4">Verify your Account</p>

            <p className="text-[15px] text-[#727272]">
              We need to verify your email address to complete your registration
            </p>

            <div className="bg-[#EEF2FF] p-4  rounded-lg border border-[#BEDBFF]">
              <p className="text-4 text-[#0E65C9]">
                We'll send a 6-digit verification code to
                michaeloyedele@gmail.com
              </p>
            </div>

            <button
              onClick={() => setStep("otp")}
              className="w-full py-4  rounded-lg bg-primary hover:bg-dark text-white text-[15px] font-medium"
            >
              Send Verification Code
            </button>
          </div>
        )}

        {/* ================== OTP SCREEN ================== */}
        {step === "otp" && (
          <div className="text-center space-y-[18px]">
            <div className=" flex items-center justify-center mx-auto">
              <img src="/assets/Mail.png" alt="" />
            </div>

            <p className="text-4">Enter verification Code</p>

            <p className="text-[15px] text-[#727272]">
              We’ve sent a 6-digit verification code to <br />
              <span className="text-gray-600">michaeloyedele@gmail.com</span>
            </p>

            {/* OTP BOXES */}
            <div className="flex justify-center gap-3 mt-10">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  className={`w-12 h-12 rounded-lg text-center text-xl border border-[#B9B9B9] focus:outline-[#1D6ECC] 
                    ${error ? "border border-red-500 text-red-500" : ""}
                   `}
                />
              ))}
            </div>
            {error && (
              <p className="text-red-500 text-sm -mt-3 text-start mx-4">
                Wrong code
              </p>
            )}
            <p className="text-[15px] text-[#727272]">
              Didn't receive the email?
              <span className="text-[#1D6ECC] cursor-pointer"> Resend</span>
            </p>

            <button
              onClick={handleVerify}
              className="w-full py-4  rounded-lg bg-primary hover:bg-dark text-white text-[15px] font-medium cursor-pointer"
            >
              Verify & Complete Registraton
            </button>
          </div>
        )}

        {/* ================== SUCCESS SCREEN ================== */}
        {step === "success" && (
          <div className="text-center space-y-[18px]">
            <div className=" flex items-center justify-center mx-auto">
              <img src="/assets/Confetti.png" alt="" />
            </div>

            <p className="text-4">Account Created Successfully</p>

            <p className="text-[15px] text-[#727272]">
              Welcome to AutoTrust, Michael! Your account has been verified and
              you are ready to get started.
            </p>
            <div className="bg-[#EEF2FF] p-4 text-start rounded-lg space-y-[8.5px]">
              <p className="text-4 text-[#0E65C9]">What's Next</p>
              <div className="flex items-center space-x-2 text-4 text-[#4F4F4F]">
                <img src="/assets/Checkmark.png" alt="" className="w-5 h-5" />
                <p className="text-4 text-[#4F4F4F]">
                  Find verified mechanics near you
                </p>
              </div>
              <div className="flex items-center space-x-2 text-4 text-[#4F4F4F]">
                <img src="/assets/Checkmark.png" alt="" className="w-5 h-5" />
                <p className="text-4 text-[#4F4F4F]">
                  Compare spare parts prices
                </p>
              </div>
              <div className="flex items-center space-x-2 text-4 text-[#4F4F4F]">
                <img src="/assets/Checkmark.png" alt="" className="w-5 h-5" />
                <p className="text-4 text-[#4F4F4F]">
                  Get instant repair cost estimates
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/dashboard")}
              className="w-full py-4  rounded-lg bg-primary hover:bg-dark text-white text-[15px] font-medium cursor-pointer"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
