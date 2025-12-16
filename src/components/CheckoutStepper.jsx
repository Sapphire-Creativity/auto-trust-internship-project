export default function CheckoutStepper({ currentStep }) {
    const steps = [
        { id: 1, label: "Delivery Info" },
        { id: 2, label: "Payment" },
        { id: 3, label: "Review" },
    ];

    return (
        <div className="w-full flex items-center">
            {steps.map((step, index) => {
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;

                return (
                    <div key={step.id} className="flex items-center w-full">
                        {/* CIRCLE */}
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold
                ${
                                isCompleted
                                    ? "bg-green-600"
                                    : isActive
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-500"
                            }
              `}
                        >
                            {isCompleted ? (
                                <img
                                    src="/icons/check-tracker.svg"
                                    alt="Completed"
                                    className="w-8 h-8"
                                />
                            ) : (
                                step.id
                            )}
                        </div>

                        {/* LABEL */}
                        <span
                            className={`ml-2 text-sm whitespace-nowrap
                ${
                                isCompleted
                                    ? "text-green-600"
                                    : isActive
                                        ? "font-semibold text-blue-600"
                                        : "text-gray-400"
                            }
              `}
                        >
              {step.label}
            </span>

                        {/* LINE */}
                        {index !== steps.length - 1 && (
                            <div className="flex-1 h-[2px] mx-4 bg-gray-200">
                                <div
                                    className={`h-full transition-all duration-300
                    ${
                                        isCompleted ? "bg-green-600 w-full" : "w-0"
                                    }
                  `}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
