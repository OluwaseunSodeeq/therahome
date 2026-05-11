import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type RootComponentProps = {
  children: ReactNode;
};

export default function RootComponent({ children }: RootComponentProps) {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
