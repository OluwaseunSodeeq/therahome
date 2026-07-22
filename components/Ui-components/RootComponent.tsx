"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useFunctionalitiesContext } from "@/contexts/Functionalities";
import BookingForm from "../booking/BookingForm";

type RootComponentProps = {
  children: ReactNode;
};

export default function RootComponent({ children }: RootComponentProps) {
  const { showBooking } = useFunctionalitiesContext();
  const successHandler = () => {
    // Handle success logic here, e.g., show a success message or redirect
  };

  return (
    <section>
      <Header />
      <main>
        <div className="relative">
          <div>{children}</div>
        </div>
      </main>
      <Footer />
      {showBooking && <BookingForm onSuccess={successHandler} />}
    </section>
  );
}
