"use client";

import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useFunctionalitiesContext } from "@/contexts/Functionalities";
import BookingForm from "../forms/BookingForm";

type RootComponentProps = {
  children: ReactNode;
};

export default function RootComponent({ children }: RootComponentProps) {
  const { showBooking } = useFunctionalitiesContext();
  const successHandler = () => {
    // Handle success logic here, e.g., show a success message or redirect
    console.log("Booking form submitted successfully!");
  };

  return (
    <section>
      <Header />
      <main>
        <div className="relative">
          <div>{children}</div>
          {showBooking && <BookingForm onSuccess={successHandler} />}
        </div>
      </main>
      <Footer />
    </section>
  );
}
