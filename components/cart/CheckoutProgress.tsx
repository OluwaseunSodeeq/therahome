"use client";
import { motion } from "framer-motion";

interface Props {
  step: 1 | 2;
}

export default function CheckoutProgress({ step }: Props) {
  return (
    <div className="px-8 pt-6 pb-3">
      <div className="flex items-center">
        {/* Circle 1 */}

        <motion.div
          animate={{
            backgroundColor: "#2D8C63",
          }}
          className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          text-sm
          font-bold
          text-white
        "
        >
          1
        </motion.div>

        {/* Line */}

        <div className="relative mx-2 h-1 flex-1 rounded-full bg-neutral-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: step === 2 ? "100%" : "0%",
            }}
            transition={{
              duration: 0.4,
            }}
            className="
            absolute
            left-0
            top-0
            h-full
            rounded-full
            bg-primary-green
          "
          />
        </div>

        {/* Circle 2 */}

        <motion.div
          animate={{
            backgroundColor: step === 2 ? "#2D8C63" : "#E5E5E5",

            color: step === 2 ? "#fff" : "#555",
          }}
          transition={{
            duration: 0.3,
          }}
          className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          text-sm
          font-bold
        "
        >
          2
        </motion.div>
      </div>

      <div className="mt-3 flex justify-between text-xs">
        <span className="font-medium">Review</span>

        <span className="font-medium">Details</span>
      </div>
    </div>
  );
}
