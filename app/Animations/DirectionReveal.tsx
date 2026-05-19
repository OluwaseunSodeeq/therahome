"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type RevealDrirection = "bottom" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  from?: RevealDrirection;
  style?: CSSProperties;
  className?: string;
}

function useInView(
  threshold = 0.12,
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function DirectionReveal({
  children,
  delay = 0,
  from = "bottom",
  style = {},
  className = "",
}: RevealProps) {
  const [ref, visible] = useInView();

  const transforms: Record<RevealDrirection, string> = {
    bottom: "translateY(30px)",
    left: "translateX(-30px)",
    right: "translateX(30px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[from],
        transition: `
          opacity 0.72s cubic-bezier(.4,0,.2,1) ${delay}s,
          transform 0.72s cubic-bezier(.4,0,.2,1) ${delay}s
        `,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
