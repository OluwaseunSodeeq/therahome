"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import CheckoutModal from "./CheckoutModal";

export default function CartDrawer() {
  const { isCartOpen, closeCart, cart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Prevent page scrolling while drawer is open
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCart();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeCart]);

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={closeCart}
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.aside
              className="
              fixed
              top-0
              right-0
              z-[100]
              h-screen
              w-full
              max-w-md
              bg-white
              shadow-2xl
              flex
              flex-col
            "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-5">
                <h2 className="text-xl font-bold">Shopping Cart</h2>

                <button
                  onClick={closeCart}
                  className="
                  rounded-full
                  p-2
                  transition
                  hover:bg-gray-100
                "
                >
                  <X size={22} />
                </button>
              </div>
              {/* Temporary Body */}
              <div className="flex-1 overflow-y-auto px-6">
                {cart.length === 0 ? (
                  <EmptyCart />
                ) : (
                  <AnimatePresence>
                    {cart.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </AnimatePresence>
                )}
              </div>
              <CartSummary
                onCheckout={() => {
                  // closeCart();
                  setTimeout(() => {
                    setCheckoutOpen(true);
                  }, 250);
                  // setCheckoutOpen(true);
                }}
              />
            </motion.aside>
            {/* <CheckoutModal
            open={checkoutOpen}
            onClose={() => setCheckoutOpen(false)}
          /> */}
          </>
        )}
      </AnimatePresence>
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </>
  );
}
