import React from "react";
import CheckoutStepper from "../components/CheckoutStepper.jsx";
import OrderSummary from "../components/OrderSummary.jsx";
import {useNavigate} from "react-router";

const Review = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="p-4">
                <h1 className="mb-5">Checkout</h1>
                <CheckoutStepper currentStep={3}/>
            </div>
            <div className="mx-auto p-4 space-y-4 bg-gray-50 rounded-md">

                {/* Delivery Information */}
                <div className="bg-white rounded-lg border p-4">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="font-semibold text-gray-800">
                            Delivery Information
                        </h2>

                        <button className="flex items-center gap-1 text-blue-600 text-sm">
                            <img src="/icons/edit.svg" alt="edit" className="w-4 h-4"/>
                            Edit
                        </button>
                    </div>

                    <div className="space-y-2 text-sm text-gray-700">
                        {/* Name */}
                        <div className="flex items-center gap-3">
                            <img
                                src="/icons/profile.svg"
                                alt=""
                                className="w-4 h-4 flex-shrink-0"
                            />
                            <span>
        <span className="font-medium">Name:</span>{" "}
                                John Adeyemi
      </span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <img
                                src="/icons/phone-call.svg"
                                alt=""
                                className="w-4 h-4 flex-shrink-0"
                            />
                            <span>
        <span className="font-medium">Phone:</span>{" "}
                                09065567548
      </span>
                        </div>

                        {/* Address */}
                        <div className="flex gap-3">
                            <img
                                src="/icons/location.svg"
                                alt=""
                                className="w-4 h-4 mt-0.5 flex-shrink-0"
                            />
                            <span className="leading-snug">
                    <span className="font-medium">
                        Address:</span>{" "}
                                Ozumba Mbadiwe, Victoria Island, Lagos State
                    </span>
                        </div>
                    </div>
                </div>


                {/* Payment Method */}
                <div className="bg-white rounded-lg border p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-gray-800">Payment Method</h2>
                        <button className="flex items-center gap-1 text-blue-600 text-sm">
                            <img src="/icons/edit.svg" alt="edit" className="w-4 h-4"/>
                            Edit
                        </button>
                    </div>

                    <p className="text-sm text-gray-700 mt-2">Cash on Delivery</p>
                </div>

                {/* Order Items */}
                <div className="bg-white rounded-lg border p-4">
                    <h2 className="font-semibold text-gray-800 mb-3">Order Items</h2>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/brake-pads.svg"
                                alt="Toyota Brake Pads"
                                className="w-14 h-14 object-contain border rounded"
                            />

                            <div className="text-sm">
                                <p className="font-medium text-gray-800">
                                    Toyota Camry Brake Pads (Front)
                                </p>
                                <p className="text-gray-500">Qty: 1</p>
                                <div className="flex justify-center items-center gap-2 ml-[-3rem]">
                                    <img src="/icons/stock.svg" alt="shop-stock"/><span className="text-gray-500">AutoParts Hub Lekki</span>
                                </div>
                            </div>
                        </div>

                        <p className="font-semibold text-gray-800">₦18,500</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <button className="w-full border rounded-lg py-2 text-gray-700 hover:bg-gray-100" onClick={()=>navigate('/dashboard/shopping-cart/payment')}>
                        Back
                    </button>

                    <button
                        className="w-full bg-blue-600 text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-blue-700">
                        <img src="/icons/check.svg" alt="" className="w-4 h-4"/>
                        Place Order
                    </button>
                </div>
                <OrderSummary/>
            </div>

        </div>
    );
};

export default Review;
