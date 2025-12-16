import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {bookingSchema} from "../validations/validations.js";

export default function BookingModal({
                                         onClose,
                                         service,
                                         estimatedPrice,
                                         duration,
                                     }) {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(bookingSchema),
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log("Booking Submitted:", data);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-50 w-full max-w-lg rounded-xl bg-white shadow-lg max-h-[90vh] overflow-y-auto">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 h-6 w-6 flex items-center justify-center"
                >
                    <img
                        src="/icons/cancel-btn.svg"
                        alt="close icon"
                        className="h-full w-full"
                    />
                </button>

                <div className="p-5 sm:p-6">
                    <h2 className="mb-5 text-lg sm:text-xl font-semibold">Book Service</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                        {/* Vehicle */}
                        <div>
                            <label className="text-sm font-medium">Select Vehicle</label>
                            <select
                                className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm
                  ${errors.vehicle ? "border-red-500" : "border-gray-300"}`}
                                {...register("vehicle")}
                            >
                                <option value="Toyota Corolla 2018">Toyota Corolla 2018</option>
                                <option value="Honda Civic 2020">Honda Civic 2020</option>
                            </select>
                            {errors.vehicle && (
                                <p className="mt-1 text-xs text-red-600">{errors.vehicle.message}</p>
                            )}
                        </div>

                        {/* Date */}
                        <div>
                            <label className="text-sm font-medium">Preferred Date</label>
                            <input
                                type="date"
                                className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm
                  ${errors.date ? "border-red-500" : "border-gray-300"}`}
                                {...register("date")}
                            />
                            {errors.date && (
                                <p className="mt-1 text-xs text-red-600">{errors.date.message}</p>
                            )}
                        </div>

                        {/* Time */}
                        <div>
                            <label className="text-sm font-medium">Preferred Time</label>
                            <select
                                className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm
                  ${errors.time ? "border-red-500" : "border-gray-300"}`}
                                {...register("time")}
                            >
                                <option value="8:00AM - 10:00AM">8:00AM - 10:00AM</option>
                                <option value="10:00AM - 12:00PM">10:00AM - 12:00PM</option>
                                <option value="12:00PM - 2:00PM">12:00PM - 2:00PM</option>
                            </select>
                            {errors.time && (
                                <p className="mt-1 text-xs text-red-600">{errors.time.message}</p>
                            )}
                        </div>

                        {/* Notes */}
                        <div>
                            <label className="text-sm font-medium">Additional Notes (Optional)</label>
                            <textarea
                                rows={3}
                                className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm
                  ${errors.notes ? "border-red-500" : "border-gray-300"}`}
                                {...register("notes")}
                            />
                            {errors.notes && (
                                <p className="mt-1 text-xs text-red-600">{errors.notes.message}</p>
                            )}
                        </div>

                        {/* Summary */}
                        <div className="rounded-lg border bg-blue-50 p-4 text-sm">
                            <div className="flex justify-between gap-2">
                                <p className="text-gray-600">Service:</p>
                                <p className="font-medium text-right">{service.title}</p>
                            </div>

                            <div className="mt-2 flex justify-between gap-2">
                                <p className="text-gray-600">Estimated Price:</p>
                                <p className="font-medium">{estimatedPrice}</p>
                            </div>

                            <div className="mt-2 flex justify-between gap-2">
                                <p className="text-gray-600">Duration:</p>
                                <p className="font-medium">{duration}</p>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mt-3 w-full rounded-lg bg-blue-600 py-3 text-sm sm:text-base
                font-medium text-white hover:bg-blue-700 transition"
                        >
                            Confirm Booking
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}
