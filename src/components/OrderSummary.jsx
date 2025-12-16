import React from "react";

const OrderSummary = () => {
    return (
        <div className="w-full mx-auto my-6 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            {/* Header */}
            <div className="flex flex-col items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <img src="/icons/item.svg" alt="items" className="w-4 h-4" />
                  <span>1 item</span>
                </span>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 border-t border-gray-100 pt-4">
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>₦18,500</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                    <span className="flex justify-between items-center gap-2">
                        <img src="/icons/transport.svg" alt="items" className="w-4 h-4" /> <span>Delivery Fee</span>
                    </span>
                    <span>₦2,500</span>
                </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center border-t border-gray-100 mt-4 pt-4">
                <span className="text-base font-medium text-gray-900">Total</span>
                <span className="text-xl font-bold text-gray-900">₦21,000</span>
            </div>

            {/* Estimated Delivery */}
            <div className="mt-6 rounded-lg bg-blue-50 p-4 flex items-start gap-3">
                <div className="flex-shrink-0">
                    <img src="/icons/working-hours.svg" alt="delivery" className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-sm font-medium text-blue-700">Estimated Delivery</p>
                    <p className="text-sm text-blue-600">2–5 business days</p>
                </div>
            </div>

            {/* Secure Checkout */}
            <div className="mt-3 rounded-lg bg-gray-50 p-4 flex items-start gap-3">
                <div className="flex-shrink-0">
                    <img src="/icons/secure.svg" alt="secure" className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-800">Secure Checkout</p>
                    <p className="text-sm text-gray-500">Your information is protected</p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
