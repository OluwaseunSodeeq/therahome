"use client";

import { createContext, useState, useContext, createElement, ReactNode } from "react";

type Mode = "light" | "dark";

type ModeContextType = {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

type ModeContextProviderProps = {
  children: ReactNode;
};

function ModeContextProvider({ children }: ModeContextProviderProps) {
    const [mode, setMode] = useState<Mode>("light");

    return createElement(ModeContext.Provider, { value: { mode, setMode } }, children);
}

function useModeContext(): ModeContextType {
    const context = useContext(ModeContext);

    if (!context) {
        throw new Error("useModeContext must be used within a ModeContextProvider");
    }
    return context;
}

export { ModeContextProvider, useModeContext };