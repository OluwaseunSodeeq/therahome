"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  OrderFormData,
  customerOrderSchema,
} from "@/lib/validations/orderSchema";

import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { formatPrice } from "@/lib/formatPrice";
import { useState } from "react";
// import CheckoutProgress from "./CheckoutProgress";

interface CheckoutFormProps {
  onSuccess: () => void;
}

const inputClass = `
w-full
rounded-xl
border
border-neutral-300
bg-white
px-4
py-3
text-sm
outline-none
transition
focus:border-primary-green
focus:ring-2
focus:ring-primary-green/20
`;

const labelClass = `
mb-2
block
text-sm
font-semibold
text-neutral-700
`;

export default function CheckoutForm({ onSuccess }: CheckoutFormProps) {
  const [loading, setLoading] = useState(false);

  const { cart, subtotal, clearCart, totalItems, closeCart } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<OrderFormData>({
    resolver: zodResolver(customerOrderSchema),
  });

  const onSubmit = async (data: OrderFormData) => {
    if (!cart.length) {
      toast.error("Your cart is empty.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        customer: data,
        order: {
          items: cart,
          subtotal,
          totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
          createdAt: new Date().toISOString(),
        },
      };

      console.log("ORDER ITEMS");
      console.table(
        cart.map((item) => ({
          name: item.name,
          price: item.price,
          type: typeof item.price,
          quantity: item.quantity,
        })),
      );

      console.log("FULL PAYLOAD", {
        customer: data,
        order: {
          items: cart,
          subtotal,
          totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
          createdAt: new Date().toISOString(),
        },
      });

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order.");
      }

      toast.success("Your order has been received! We'll contact you shortly.");
      clearCart();
      reset();
      onSuccess();
      closeCart();
      // close the shopping cart modal if it's open
    } catch (error) {
      console.error(error);
      toast.error("Unable to submit order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex h-[75vh] flex-col">
      <div className="flex-1 overflow-y-auto p-7 space-y-6">
        {/* Customer Details */}

        <div className="space-y-5">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">👤 Customer Details</h3>

              <p className="text-sm text-neutral-500">
                Tell us how to reach you.
              </p>
            </div>
            {/* <CheckoutProgress step={2} /> */}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass}>Full Name *</label>

              <input
                {...register("name")}
                placeholder="John Doe"
                className={inputClass}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className={labelClass}>Phone Number *</label>

              <input
                {...register("phone")}
                placeholder="08012345678"
                className={inputClass}
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className={labelClass}>Email (Optional)</label>

            <input
              {...register("email")}
              placeholder="ade@example.com"
              className={inputClass}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        {/* Delivery Details */}
        <div className="border-t pt-7">
          <div className="mb-5">
            <h3 className="text-lg font-bold">🏠 Delivery Details</h3>

            <p className="text-sm text-neutral-500">
              Where should we deliver your order?
            </p>
          </div>

          <div>
            <label className={labelClass}>Delivery Address *</label>

            <textarea
              rows={4}
              {...register("address")}
              placeholder="15 Admiralty Way, Lekki Phase 1, Lagos"
              className={`${inputClass} resize-none`}
            />

            {errors.address && (
              <p className="mt-1 text-sm text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>
        {/* Order Notes */}
        <div className="hidden border-t pt-7">
          <div className="mb-5">
            <h3 className="text-lg font-bold">📝 Order Notes</h3>

            <p className="text-sm text-neutral-500">
              Optional instructions for your order.
            </p>
          </div>

          <textarea
            rows={4}
            {...register("note")}
            placeholder="Any special request..."
            className={`${inputClass} resize-none`}
          />
        </div>
        {/* Order Summary */}
        <div className="rounded-2xl bg-stone-50 p-5">
          <div className="mb-3 flex justify-between">
            <span>Items</span>

            <span>{totalItems}</span>
          </div>

          <div className="mb-3 flex justify-between">
            <span>Subtotal</span>

            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className="flex justify-between border-t pt-4 text-lg font-bold">
            <span>Total</span>

            <span className="text-primary-green">{formatPrice(subtotal)}</span>
          </div>
        </div>
      </div>
      {/* Submit Button */}
      <div className="px-7 pb-5">
        <button
          type="submit"
          disabled={loading || isSubmitting}
          className="
            w-full
            rounded-xl
            bg-primary-green
            py-4
            text-lg
            font-semibold
            text-white
            transition
            hover:bg-secondary-green
            disabled:cursor-not-allowed
            disabled:opacity-50

  "
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Placing Order...
            </div>
          ) : (
            "Place Order"
          )}
        </button>
      </div>
    </form>
  );
}
