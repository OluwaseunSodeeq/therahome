import { ReactNode } from "react";

export interface CarouselProps {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  autoplay?: boolean;
  delay?: number;
  showControls?: boolean;
  stopOnMouseEnter?: boolean;
  className?: string;
}
