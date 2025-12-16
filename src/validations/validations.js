import {z} from "zod";

export const bookingSchema = z.object({
    vehicle: z.string().min(1, "Vehicle is required"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
    notes: z.string().optional(),
});

export const deliverySchema = z.object({
    fullName: z
        .string()
        .min(3, "Full name must be at least 3 characters"),

    phone: z
        .string()
        .regex(/^0\d{10}$/, "Enter a valid Nigerian phone number"),

    email: z
        .string()
        .email("Enter a valid email address"),

    state: z
        .string()
        .min(1, "State is required"),

    city: z
        .string()
        .min(1, "City is required"),

    address: z
        .string()
        .min(5, "Delivery address is required"),

    landmark: z
        .string()
        .optional(),

    notes: z
        .string()
        .optional(),
});
