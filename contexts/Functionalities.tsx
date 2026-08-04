"use client";
import { createContext, useContext, useState } from "react";

type FunctionalitiesContextProviderProps = {
  children: React.ReactNode;
};

const FunctionalitiesContext = createContext<
  FunctionalitiesContextType | undefined
>(undefined);

function FunctionalitiesContextProvider({
  children,
}: FunctionalitiesContextProviderProps) {
  const [showBooking, setShowBooking] = useState(false);
  const [showPlans, setShowPlans] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const toggleBookingForm = () => setShowBooking((prev) => !prev);
  const toggleBookingPlans = () => setShowPlans((prev) => !prev);

  //===================WHasapp Button Link========================

  const phone = "2347064347587";
  const message = "Hello, I would like to know more about your services.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message,
  )}`;

  //===================Call Button Link========================
  const handleCall = async () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      alert("Calling is only available on mobile devices.");
      await navigator.clipboard.writeText(phone);
      alert(`Phone number copied: ${phone}`);
      return;
    }

    window.location.href = `tel:+${phone}`;
  };

  return (
    <FunctionalitiesContext.Provider
      value={{
        whatsappLink,
        handleCall,
        phone,
        showBooking,
        showPlans,
        setShowBooking,
        setShowPlans,
        toggleBookingForm,
        toggleBookingPlans,
        selectedService,
        selectedPlan,
        setSelectedService,
        setSelectedPlan,
      }}
    >
      {children}
    </FunctionalitiesContext.Provider>
  );
}

type FunctionalitiesContextType = {
  whatsappLink: string;
  handleCall: () => Promise<void>;
  phone: string;
  showBooking: boolean;
  showPlans: boolean;
  setShowBooking: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPlans: React.Dispatch<React.SetStateAction<boolean>>;
  toggleBookingForm: () => void;
  toggleBookingPlans: () => void;
  selectedService: string;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
};

function useFunctionalitiesContext(): FunctionalitiesContextType {
  const context = useContext(FunctionalitiesContext);
  if (!context) {
    throw new Error(
      "useFunctionalitiesContext must be used within a FunctionalitiesContextProvider",
    );
  }
  return context;
}
export { FunctionalitiesContextProvider, useFunctionalitiesContext };
