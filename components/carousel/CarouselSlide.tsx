import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CarouselSlide({ children }: Props) {
  return (
    <div
      className="
        min-w-0
        flex-[0_0_100%]
        md:flex-[0_0_50%]
        xl:flex-[0_0_25%]
        px-3
      "
    >
      {children}
    </div>
  );
}
