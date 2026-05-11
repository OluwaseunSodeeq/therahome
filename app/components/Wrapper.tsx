import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return React.createElement(
    "section",
    { className: "2xl:w-[1440px] w-full mx-auto px-4" },
    children
  );
}

/*
Colors (Create Color Styles)
Primary Green → #5F6F52
Beige Background → #F5F1EB
White → #FFFFFF
Text Dark → #2B2B2B
Accent Gold → #C8A96A
*/ 