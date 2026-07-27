"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useFunctionalitiesContext } from "@/contexts/Functionalities";

interface ButtonProps {
  children?: ReactNode;
}

export function PrimaryButton({ children = "Book Your Session" }: ButtonProps) {
  const { toggleBookingForm } = useFunctionalitiesContext();

  return (
    <button
      onClick={toggleBookingForm}
      className="
               bg-primary-green
                text-white
                rounded-lg
                px-7 py-4
                text-sm font-semibold
                flex items-center gap-2
                shadow-lg
                shadow-primary-green/20
                transition-all duration-200
                hover:bg-secondary-green
                hover:-translate-y-1
              "
    >
      {children}
    </button>
  );
}
export function SecondaryButton({ children }: ButtonProps) {
  const { whatsappLink } = useFunctionalitiesContext();

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
                border-2 border-secondary-green
               text-white lg:text-primary-green
                rounded-lg
                px-7 py-4
                text-sm font-semibold
                flex items-center gap-2
                transition-all duration-200
                hover:bg-[#f0f5eb]
                hover:text-secondary-green
                hover:-translate-y-1
              "
    >
      {children}
    </Link>
  );
}
export function ChatButton({ children }: ButtonProps) {
  const { whatsappLink } = useFunctionalitiesContext();

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
               bg-primary-green
                text-white
                rounded-lg
                px-7 py-4
                text-sm font-semibold
                flex items-center gap-2
                shadow-lg
                shadow-primary-green/20
                transition-all duration-200
                hover:bg-secondary-green
                hover:-translate-y-1
              "
    >
      {children}
    </Link>
  );
}
export function CallButton({ children }: ButtonProps) {
  const { handleCall } = useFunctionalitiesContext();

  return (
    <button
      onClick={handleCall}
      className="
                border-2 border-secondary-green
               text-white lg:text-primary-green
                rounded-lg
                px-7 py-4
                text-sm font-semibold
                flex items-center gap-2
                transition-all duration-200
                hover:bg-[#f0f5eb]
                hover:text-secondary-green
                hover:-translate-y-1
              "
    >
      {children}
    </button>
  );
}
export function PlanButton({
  children = "Subscribe to Our VIP Plan",
}: ButtonProps) {
  const { toggleBookingPlans } = useFunctionalitiesContext();

  return (
    <button
      onClick={toggleBookingPlans}
      className="
               bg-primary-green
                text-white
                rounded-lg
                px-7 py-4
                text-sm font-semibold
                flex items-center gap-2
                shadow-lg
                shadow-primary-green/20
                transition-all duration-200
                hover:bg-secondary-green
                hover:-translate-y-1
              "
    >
      {children}
    </button>
  );
}
