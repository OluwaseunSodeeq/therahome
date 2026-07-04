import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

// const context = useContext(CartContext)
// if (!context) {
//   throw new Error("useCart must be used within a CartProvider")
// }

// const {cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, totalItems, subtotal} = context;
