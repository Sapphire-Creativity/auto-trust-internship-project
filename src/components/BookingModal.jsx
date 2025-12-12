import {useForm} from "react-hook-form";

export default function BookingModal({
                                         onClose,
                                         service,
                                         estimatedPrice,
                                         duration,
                                     }) {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log("Booking Submitted:", data);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Brown Background Overlay */}
            <div className="absolute inset-0 bg-[#00000080] backdrop-blur-sm"/>

            {/* Modal */}
            <div className="relative z-50 w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">

                {/* Close Button (YOUR SVG ICON) */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 h-5 w-5 cursor-pointer"
                >
                    <img src="/icons/cancel-btn.svg" alt="close icon" className="h-full w-full"/>
                </button>

                <h2 className="mb-6 text-xl font-semibold">Book Service</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Vehicle */}
                    <div>
                        <label className="text-sm font-medium">Select Vehicle</label>
                        <select
                            className="mt-1 w-full rounded-lg border px-3 py-2"
                            {...register("vehicle")}
                        >
                            <option>Toyota Corolla 2018</option>
                            <option>Honda Civic 2020</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div>
                        <label className="text-sm font-medium">Preferred Date</label>
                        <input
                            type="date"
                            className="mt-1 w-full rounded-lg border px-3 py-2"
                            {...register("date")}
                        />
                    </div>

                    {/* Time */}
                    <div>
                        <label className="text-sm font-medium">Preferred Time</label>
                        <select
                            className="mt-1 w-full rounded-lg border px-3 py-2"
                            {...register("time")}
                        >
                            <option>8:00AM - 10:00AM</option>
                            <option>10:00AM - 12:00PM</option>
                            <option>12:00PM - 2:00PM</option>
                        </select>
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="text-sm font-medium">
                            Additional Notes (Optional)
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Any specific concerns or requests..."
                            className="mt-1 w-full rounded-lg border px-3 py-2"
                            {...register("notes")}
                        />
                    </div>

                    {/* Summary Box */}
                    <div className="rounded-lg border bg-blue-50 p-4 text-sm">
                        <div className="flex justify-between">
                            <p className="text-gray-600">Service:</p>
                            <p className="font-medium">{service.title}</p>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <p className="text-gray-600">Estimated Price:</p>
                            <p className="font-medium">{estimatedPrice}</p>
                        </div>

                        <div className="mt-2 flex justify-between">
                            <p className="text-gray-600">Duration:</p>
                            <p className="font-medium">{duration}</p>
                        </div>
                    </div>


                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-4 w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
}
