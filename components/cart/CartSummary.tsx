"use client";

import { ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/formatPrice";

interface CartSummaryProps {
  onCheckout: () => void;
}

const DELIVERY_FEE = 0;

export default function CartSummary({ onCheckout }: CartSummaryProps) {
  const { subtotal, totalItems, closeCart } = useCart();
  const total = subtotal + DELIVERY_FEE;

  return (
    <div className="border-t bg-white p-6 shadow-[0_-8px_30px_rgba(0,0,0,.04)]">
      {/* Total Items */}
      <div className="mb-3 flex items-center justify-between text-sm text-neutral-500">
        <span>Items</span>
        <span>{totalItems}</span>
      </div>

      {/* Subtotal */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-neutral-600">Subtotal</span>

        {/* <span className="font-semibold">{formatPrice(subtotal)}</span> */}
        <span className="font-semibold">{formatPrice(subtotal)}</span>
      </div>

      {/* Delivery */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-neutral-600">Delivery</span>

        <span className="font-semibold text-primary-green">
          {DELIVERY_FEE === 0
            ? "Calculated Based on your location"
            : formatPrice(DELIVERY_FEE)}
        </span>
      </div>

      {/* Total */}
      <div className="mb-6 flex items-center justify-between border-t pt-4">
        <span className="text-lg font-bold">Total</span>

        <span className="text-xl font-bold text-primary-green">
          {formatPrice(total)}
        </span>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button
          onClick={closeCart}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-neutral-300
            px-5
            py-3
            font-medium
            transition
            hover:bg-neutral-100
          "
        >
          <ShoppingBag size={18} />
          Continue Shopping
        </button>

        <button
          onClick={onCheckout}
          disabled={totalItems === 0}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-primary-green
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:bg-secondary-green
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Checkout
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
