import { z } from "zod";

export const bookingPlansSchema = z.object({
  name: z.string().min(2, "Full name is required"),

  phone: z.string().min(10, "Phone number is too short").optional(),

  plan: z.string().min(1, "Please select a service").optional(),

  location: z.string().min(1, "Please select a location").optional(),

  address: z.string().min(5, "Address is too short").optional(),

  note: z.string().max(500, "Note is too long").optional(),
});

export type BookingPlanData = z.infer<typeof bookingPlansSchema>;
