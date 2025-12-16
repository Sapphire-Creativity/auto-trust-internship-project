import {useState} from "react";
import CheckoutStepper from "../components/CheckoutStepper.jsx";
import OrderSummary from "../components/OrderSummary.jsx";
import {useNavigate} from "react-router";

const methods = [
    {
        id: "card",
        title: "Debit/Credit Card",
        desc: "Pay securely with your card",
        icon: "/icons/atm-card.svg",
    },
    {
        id: "bank",
        title: "Bank Transfer",
        desc: "Transfer to our account directly",
        icon: "/icons/bank.svg",
    },
    {
        id: "cod",
        title: "Cash on Delivery",
        desc: "Pay when you receive your items",
        icon: "/icons/transport.svg",
    },
];

export default function Payment() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate()

    return (
        <>
            <div className="p-4">
                <h1 className="mb-5">Checkout</h1>
                <CheckoutStepper currentStep={2}/>
            </div>
            <div className="mx-5">
                <div className="mx-auto space-y-6">
                    <h2 className="text-lg font-semibold">Select Payment Method</h2>

                    <div className="space-y-4">
                        {methods.map((m) => {
                            const active = selected === m.id;

                            return (
                                <button
                                    key={m.id}
                                    type="button"
                                    onClick={() => setSelected(m.id)}
                                    className={`w-full flex items-center justify-between rounded-lg border p-4 text-left transition
                  ${
                                        active
                                            ? "border-blue-600"
                                            : "border-gray-200 hover:border-gray-300"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* ICON WRAPPER */}
                                        <div
                                            className={`w-10 h-10 flex items-center justify-center rounded-lg transition
                      ${
                                                active
                                                    ? "bg-blue-600"
                                                    : "bg-gray-100"
                                            }`}
                                        >
                                            <img
                                                src={m.icon}
                                                alt={m.title}
                                                className="w-5 h-5 object-contain"
                                            />
                                        </div>

                                        <div>
                                            <p className="font-medium">{m.title}</p>
                                            <p className="text-sm text-gray-500">{m.desc}</p>
                                        </div>
                                    </div>

                                    {active && (
                                        <img
                                            src="/icons/check.svg"
                                            alt="Selected"
                                            className="w-5 h-5"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                    {/* SECURITY NOTICE */}
                    <div className="flex items-start gap-3 rounded-lg border border-yellow-300 bg-yellow-50 p-4">
                        <img
                            src="/icons/caution.svg"
                            alt="Security notice"
                            className="w-5 h-5 mt-0.5"
                        />
                        <p className="text-sm text-yellow-800">
                            All payments are secure and encrypted. Your financial information is never
                            stored on our servers.
                        </p>
                    </div>


                    {/* ACTION BUTTONS */}
                    <div className="flex gap-4">
                        <button className="flex-1 py-3 rounded-lg border cursor-pointer"
                                onClick={() => navigate('/dashboard/shopping-cart/checkout')}>
                            Back
                        </button>

                        <button
                            disabled={!selected}
                            onClick={() => navigate('/dashboard/shopping-cart/review')}
                            className={`flex-1 py-3 rounded-lg text-white transition cursor-pointer
              ${
                                selected
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-blue-300 cursor-not-allowed opacity-60"
                            }`}
                        >
                            Review Order
                        </button>
                    </div>
                </div>


                <OrderSummary/></div>
        </>
    );
}
