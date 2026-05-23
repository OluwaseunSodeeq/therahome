"use client";
import { ReactNode, CSSProperties } from "react";
import { useEffect, useRef } from "react";
function useReveal() {
  // tell TypeScript:
  // this ref points to an HTMLDivElement

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    el.classList.add("opacity-0", "translate-y-7");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-7");

          el.classList.add(
            "opacity-100",
            "translate-y-0",
            "transition-all",
            "duration-700",
          );

          observer.disconnect();
        }
      },

      {
        threshold: 0.1,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}

// import useReveal from "@/hooks/useReveal";

type RevealProps = {
  children: ReactNode;

  delay?: number;

  from?: "bottom" | "left" | "right";

  className?: string;

  style?: CSSProperties;
};

export default function Reveal({
  children,
  delay = 0,
  from = "bottom",
  className = "",
  style = {},
}: RevealProps) {
  const ref = useReveal();

  const directionMap = {
    bottom: "translate-y-7",
    left: "-translate-x-7",
    right: "translate-x-7",
  };

  return (
    <div
      ref={ref}
      className={`
      ${directionMap[from]}
      ${className}
      `}
      style={{
        transitionDelay: `${delay}s`,
        willChange: "opacity,transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
