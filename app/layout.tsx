import "./globals.css";
import type { Metadata } from "next";
import RootComponent from "../components/Ui-components/RootComponent";
import { MenuContextProvider } from "../contexts/MenuContext";
import { Toaster } from "sonner";

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
        <MenuContextProvider>
          <RootComponent>{children}</RootComponent>
        </MenuContextProvider>
      </body>
    </html>
  );
}
