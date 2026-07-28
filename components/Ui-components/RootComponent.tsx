"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useFunctionalitiesContext } from "@/contexts/Functionalities";
import BookingForm from "../booking/BookingForm";
import BookingPlan from "../booking/BookingPlan";

type RootComponentProps = {
  children: ReactNode;
};

export default function RootComponent({ children }: RootComponentProps) {
  const { showBooking, showPlans } = useFunctionalitiesContext();
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
      {showPlans && <BookingPlan onSuccess={successHandler} />}
    </section>
  );
}
