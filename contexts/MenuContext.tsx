"use client";
import { createContext, useContext, useState } from "react";
import { ModeContextProvider } from "./ModeContext";

type MenuContextProviderProps = {
  children: React.ReactNode;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

type MenuContextType = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

function useMenuContext(): MenuContextType {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }

  return context;
}

export { ModeContextProvider, useMenuContext };
