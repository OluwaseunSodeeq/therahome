import { z } from "zod";

export const customerOrderSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal("")),
  address: z.string().min(5),
  note: z.string().optional(),
});

export type OrderFormData = z.infer<typeof customerOrderSchema>;
