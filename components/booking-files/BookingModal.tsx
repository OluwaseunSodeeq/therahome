"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";
import BookingForm from "./BookingForm";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Wrapper */}
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 20,
              }}
              className="
                relative
                flex
                max-h-[95dvh]
                w-full
                max-w-md
                flex-col
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-[0_30px_80px_rgba(0,0,0,.15)]
                sm:max-w-xl
                lg:max-w-4xl
              "
            >
              {/* Header */}

              <div className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur-xl">
                <div className="flex items-start justify-between p-6">
                  <div>
                    <h2 className="text-2xl font-bold">Book Your Massage</h2>

                    <p className="mt-2 text-sm text-neutral-500">
                      Fill in your details and we`&apos;`ll contact you shortly
                      to confirm your appointment.
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-neutral-100
                    transition-all
                    hover:rotate-90
                    hover:bg-red-500
                    hover:text-white
                    active:scale-95
                  "
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Scrollable Form */}
              <div className="overflow-y-auto p-6">
                <BookingForm onSuccess={onClose} />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
