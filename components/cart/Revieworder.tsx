"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/formatPrice";
// import { s } from "framer-motion/client";

interface ReviewOrderProps {
  onContinue: () => void;
}

export default function ReviewOrder({ onContinue }: ReviewOrderProps) {
  const { cart, subtotal, totalItems } = useCart();

  return (
    <div className="flex max-h-[70vh] flex-col">
      {/* Products */}

      <div className="flex-1 overflow-y-auto px-7 py-6 scrollbar-hide">
        <div className="space-y-5">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 justify-between">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="mt-1 text-sm text-neutral-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="font-semibold">{formatPrice(subtotal)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div className="border-t bg-stone-50 p-7">
        <div className="mb-3 flex justify-between">
          <span>Total Items</span>

          <span>{totalItems}</span>
        </div>

        <div className="mb-6 flex justify-between text-xl font-bold">
          <span>Total</span>

          <span className="text-primary-green">{formatPrice(subtotal)}</span>
        </div>

        <button
          onClick={onContinue}
          className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-primary-green
          py-4
          text-white
          font-semibold
          transition
          hover:bg-secondary-green
        "
        >
          Continue
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
