import "./globals.css";
import type { Metadata } from "next";
import RootComponent from "./components/RootComponent";
import { MenuContextProvider } from "../contexts/MenuContext";

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
      <body
        // suppressHydrationWarning
        // cz-shortcut-listen="true"
        className="h-auto bg-main-bg relative"
      >
        <MenuContextProvider>
          <RootComponent>{children}</RootComponent>
        </MenuContextProvider>
      </body>
    </html>
  );
}
