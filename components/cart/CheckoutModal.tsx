"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";
import ReviewOrder from "./Revieworder";
// import CheckoutProgress from "./CheckoutProgress";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-120 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{
              duration: 0.25,
            }}
            className="
                 fixed
    left-1/2
    top-5
    z-130
    h-[90vh]
    w-[95%] lg:w-[45%]
    max-w-2xl
    -translate-x-1/2
    rounded-2xl
    bg-white
    shadow-2xl
    flex
    flex-col
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b px-7 py-5">
              <div>
                <h2 className="text-2xl font-bold">
                  {step === 1 ? "Review Your Order" : "Customer Details"}
                </h2>

                <p className="mt-1 text-sm text-neutral-500">
                  {step === 1
                    ? "Please confirm your order before continuing."
                    : "Tell us where to deliver your wellness products."}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 transition hover:bg-neutral-100"
              >
                <X />
              </button>
            </div>

            {/* <div className="border-b">
              <CheckoutProgress step={step} />
            </div> */}

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="review"
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                >
                  <ReviewOrder
                    onContinue={() => {
                      setStep(2);
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="details"
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                >
                  <CheckoutForm
                    onSuccess={() => {
                      setStep(1);
                      onClose();
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
