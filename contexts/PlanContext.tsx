"use client";
import { createContext, useContext, useState } from "react";

type PlansContextProviderProps = {
  children: React.ReactNode;
};

type PlansContextType = {
  phone: string;
  showPlans: boolean;
  setShowPlans: React.Dispatch<React.SetStateAction<boolean>>;
  toggleBookingPlans: () => void;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
};

const PlansContext = createContext<PlansContextType | undefined>(undefined);

function PlansContextProvider({ children }: PlansContextProviderProps) {
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const phone = "2347064347587";
  const toggleBookingPlans = () => setShowPlans((prev) => !prev);

  return (
    <PlansContext.Provider
      value={{
        phone,
        showPlans,
        setShowPlans,
        selectedPlan,
        toggleBookingPlans,
        setSelectedPlan,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
}

function usePlansContext(): PlansContextType {
  const context = useContext(PlansContext);
  if (!context) {
    throw new Error(
      "usePlansContext must be used within a PlansContextProvider",
    );
  }
  return context;
}
export { PlansContextProvider, usePlansContext };
