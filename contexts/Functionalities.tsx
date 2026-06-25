"use client";
import { createContext, useContext } from "react";

type FunctionalitiesContextProviderProps = {
  children: React.ReactNode;
};

const FunctionalitiesContext = createContext<
  FunctionalitiesContextType | undefined
>(undefined);

function FunctionalitiesContextProvider({
  children,
}: FunctionalitiesContextProviderProps) {
  //   const [isLoading, setIsLoading] = useState(false);
  //===================WHasapp Button Link========================
  // Whatsapp Button Link
  // const phoneNumber = "+2347064347587";
  const phone = "+2347064347587";
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

    window.location.href = `tel:${phone}`;
  };

  return (
    <FunctionalitiesContext.Provider
      value={{ whatsappLink, handleCall, phone }}
    >
      {children}
    </FunctionalitiesContext.Provider>
  );
}

type FunctionalitiesContextType = {
  whatsappLink: string;
  handleCall: () => Promise<void>;
  phone: string;
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
