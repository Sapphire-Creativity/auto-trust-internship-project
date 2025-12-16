import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {deliverySchema} from "../validations/validations.js";
import CheckoutStepper from "../components/CheckoutStepper.jsx";
import OrderSummary from "../components/OrderSummary.jsx";
import {useNavigate} from "react-router";

const DeliveryForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        resolver: zodResolver(deliverySchema),
        mode: "onChange", // 👈 REQUIRED
    });

    const onSubmit = (data) => {
        console.log("Delivery Info:", data);
        navigate('/dashboard/shopping-cart/payment')
    };

    return (
        <>
            <div className="p-4">
                <h1 className="mb-5">Checkout</h1>
                <CheckoutStepper currentStep={1}/>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="my-6 space-y-4 bg-white rounded-md p-2"
            >
                <h2 className="text-lg font-semibold">Delivery Information</h2>

                {/* Full Name */}
                <div>
                    <label className="text-sm pl-2">Full Name</label>
                    <input
                        {...register("fullName")}
                        placeholder="Enter your full name"
                        className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md outline-none"
                    />
                    {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.fullName.message}
                        </p>
                    )}
                </div>

                {/* Phone Number */}
                <div>
                    <label className="text-sm pl-2">Phone Number</label>
                    <input
                        {...register("phone")}
                        placeholder="080XXXXXXXX"
                        className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md outline-none"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm pl-2">Email Address</label>
                    <input
                        {...register("email")}
                        placeholder="Enter your email address"
                        className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md outline-none"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* State */}
                <div>
                    <label className="text-sm pl-2">State</label>
                    <input
                        {...register("state")}
                        placeholder="Lagos State"
                        className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md outline-none"
                    />
                    {errors.state && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.state.message}
                        </p>
                    )}
                </div>

                {/* City */}
                <div>
                    <label className="text-sm pl-2">City / Area</label>
                    <input
                        {...register("city")}
                        placeholder="Surulere"
                        className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md outline-none"
                    />
                    {errors.city && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.city.message}
                        </p>
                    )}
                </div>

                {/* Address */}
                <div>
                    <label className="text-sm pl-2">Delivery Address</label>
                    <textarea
                        {...register("address")}
                        placeholder="House number, street name, estate"
                        className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md outline-none resize-none"
                    />
                    {errors.address && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.address.message}
                        </p>
                    )}
                </div>

                {/* Landmark */}
                <div>
                    <label className="text-sm pl-2">Nearest Landmark</label>
                    <input
                        {...register("landmark")}
                        placeholder="Opposite Shoprite, Near First Bank"
                        className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md outline-none"
                    />
                </div>

                {/* Notes */}
                <div>
                    <label className="text-sm pl-2">Delivery Notes (Optional)</label>
                    <textarea
                        {...register("notes")}
                        placeholder="Special instructions for delivery"
                        className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md outline-none resize-none"
                    />
                </div>

                {/* Continue Button */}
                <button
                    type="submit"
                    disabled={!isValid}
                    className={`w-full py-3 rounded-lg font-semibold transition
          ${
                        isValid
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-blue-200 text-blue-400 cursor-not-allowed"
                    }
        `}
                >
                    Continue
                </button>
            </form>
            <OrderSummary />
        </>
    );
}

export default DeliveryForm;
