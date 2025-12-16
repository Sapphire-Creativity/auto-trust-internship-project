import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Signup from "./Pages/SignUp";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpEmailVerification from "./Pages/SignUpEmailVerification";
import Dashboard from "./Pages/DashboardHome";
import VerifiedMechanics from "./Pages/VerifiedMechanics";
import SpareParts from "./Pages/SpareParts";
import RepairEstimator from "./Pages/RepairEstimator";
import ServiceHistory from "./Pages/ServiceHistory";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import CheckoutLayout from "./layout/CheckoutLayout.jsx";
import DeliveryInfo from "./Pages/DeliveryInfo";
import Payment from "./Pages/Payment";
import Review from "./Pages/Review.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route
                    path="/email-verification"
                    element={<SignUpEmailVerification/>}
                />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<LoginPage/>}/>

                {/* Dashboard Routes */}
                <Route path="/dashboard" element={<DashboardLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="verified-mechanics" element={<VerifiedMechanics/>}/>
                    <Route path="verified-mechanics/profile" element={<Profile/>}/>
                    <Route path="spareparts" element={<SpareParts/>}/>
                    <Route path="repair-estimator" element={<RepairEstimator/>}/>
                    <Route path="service-history" element={<ServiceHistory/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="shopping-cart" element={<CheckoutLayout/>}>
                        <Route path="checkout" element={<DeliveryInfo/>}/>
                        <Route path="payment" element={<Payment/>}/>
                        <Route path="review" element={<Review/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
