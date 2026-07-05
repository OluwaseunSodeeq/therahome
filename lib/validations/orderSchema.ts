import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().trim().min(2, "Please enter your your name"),
  phone: z.string().trim().min(10, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  address: z.string().trim().min(5, "Please enter a valid address"),
  note: z.string().trim().optional(),
});

export type OrderFormData = z.infer<typeof orderSchema>;
