import "./globals.css";
import type { Metadata } from "next";
import RootComponent from "../components/Ui-components/RootComponent";
import { MenuContextProvider } from "../contexts/MenuContext";
import { Toaster } from "sonner";
import { FunctionalitiesContextProvider } from "@/contexts/Functionalities";
import { CartContextProvider } from "@/contexts/CartContext";

export const metadata: Metadata = {
  title: "TheraHome",
  description: "A spa that comes to you.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="h-auto bg-main-bg relative">
        <Toaster richColors position="top-right" />
        <CartContextProvider>
          <FunctionalitiesContextProvider>
            <MenuContextProvider>
              <RootComponent>{children}</RootComponent>
            </MenuContextProvider>
          </FunctionalitiesContextProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
