import { z } from "zod";

export const bookingsSchema = z.object({
  name: z.string().min(2, "Full name is required"),

  email: z.string().email("Please enter a valid email address"),

  phone: z.string().min(10, "Phone number is too short").optional(),

  service: z.string().min(1, "Please select a service").optional(),

  location: z.string().min(1, "Please select a location").optional(),

  address: z.string().min(5, "Address is too short").optional(),

  date: z.string().min(1, "Please select a date").optional(),

  time: z.string().min(1, "Please select a time").optional(),

  note: z.string().max(500, "Note is too long").optional(),
});

export type BookingFormData = z.infer<typeof bookingsSchema>;
