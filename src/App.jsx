import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Signup from "./Pages/SignUp";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpEmailVerification from "./Pages/SignUpEmailVerification";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/DashboardHome";
import VerifiedMechanics from "./Pages/VerifiedMechanics";
import SpareParts from "./Pages/SpareParts";
import RepairEstimator from "./Pages/RepairEstimator";
import ServiceHistory from "./Pages/ServiceHistory";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/email-verification"
          element={<SignUpEmailVerification />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="verified-mechanics" element={<VerifiedMechanics />} />
          <Route path="spareparts" element={<SpareParts />} />
          <Route path="repair-estimator" element={<RepairEstimator />} />
          <Route path="service-history" element={<ServiceHistory />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
