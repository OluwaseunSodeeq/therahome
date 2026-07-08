import { z } from "zod";

export const orderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  image: z.string(),
});
export type OrderItem = z.infer<typeof orderItemSchema>;
export const orderPayloadSchema = z.object({
  items: z.array(orderItemSchema).min(1),
  subtotal: z.number().nonnegative(),
  totalItems: z.number().int().positive(),
  createdAt: z.string(),
});
