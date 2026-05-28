"use client";

import useInview from "@/hooks/useView";
import { ReactNode, CSSProperties } from "react";

type RevealDirection = "bottom" | "left" | "right" | "fade";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  from?: RevealDirection;
  className?: string;
  style?: CSSProperties;
};

export default function ServiceReveal({
  children,
  delay = 0,
  from = "bottom",
  className = "",
  style,
}: RevealProps) {
  const [ref, visible] = useInview();

  const transforms: Record<RevealDirection, string> = {
    bottom: visible ? "translateY(0)" : "translateY(36px)",

    left: visible ? "translateX(0)" : "translateX(-36px)",

    right: visible ? "translateX(0)" : "translateX(36px)",

    fade: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,

        transform: transforms[from],

        transition: `
          opacity 0.75s cubic-bezier(.4,0,.2,1) ${delay}s,
          transform 0.75s cubic-bezier(.4,0,.2,1) ${delay}s
        `,

        ...style,
      }}
    >
      {children}
    </div>
  );
}
