"use client";

import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { CartItem as CartItemType } from "@/types/cart";
import { useCart } from "@/hooks/useCart";

interface Props {
  item: CartItemType;
}

export default function CartItem({ item }: Props) {
  console.log("CartItem item:", item); // Debugging line
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.25 }}
      className="flex gap-4 border-b border-gray-100 py-5"
    >
      {/* Product Image */}
      <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-gray-100 flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{item.name}</h3>

          <p className="mt-1 text-sm text-gray-500">
            ₦{item.price.toLocaleString()}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          {/* Quantity */}
          <div className="flex items-center gap-3 rounded-full border px-3 py-1.5">
            <button
              onClick={() => decreaseQuantity(item.id)}
              disabled={item.quantity === 1}
              className="disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Minus size={16} />
            </button>

            <span className="min-w-[20px] text-center font-semibold">
              {item.quantity}
            </span>

            <button onClick={() => increaseQuantity(item.id)}>
              <Plus size={16} />
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 transition hover:scale-110 hover:text-red-600"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
