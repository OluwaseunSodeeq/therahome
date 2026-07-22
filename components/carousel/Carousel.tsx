"use client";

import { useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import CarouselHeader from "./CarouselHeader";
import CarouselControls from "./CarouselControls";
import { CarouselProps } from "@/types/carousel";

export default function Carousel({
  children,
  title,
  eyebrow,
  autoplay = true,
  delay = 4000,
  showControls = true,
  stopOnMouseEnter = true,
  className = "",
}: CarouselProps) {
  const plugins = useMemo(() => {
    if (!autoplay) return [];

    return [
      Autoplay({
        delay,
        stopOnInteraction: false,
        stopOnMouseEnter,
      }),
    ];
  }, [autoplay, delay, stopOnMouseEnter]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    plugins,
  );

  const prev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const next = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className={className}>
      <CarouselHeader eyebrow={eyebrow} title={title} />

      <div className="overflow-hidden mt-8" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {showControls && <CarouselControls onPrev={prev} onNext={next} />}
    </section>
  );
}

// "use client";

// import { useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// import CarouselHeader from "./CarouselHeader";
// import CarouselSlide from "./CarouselSlide";
// import CarouselControls from "./CarouselControls";
// import { CarouselProps } from "@/types/carousel";

// export default function Carousel<T>({
//  children
//   title,
//   eyebrow,
//   autoplay = true,
//   delay = 4000,
//   showControls = true,
//   className = "",
// }: CarouselProps<T>) {
//   const plugins = autoplay
//     ? [
//         Autoplay({
//           delay,
//           stopOnInteraction: false,
//           stopOnMouseEnter: true,
//         }),
//       ]
//     : [];

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "start",
//       slidesToScroll: 1,
//     },
//     plugins,
//   );

//   const prev = useCallback(() => {
//     emblaApi?.scrollPrev();
//   }, [emblaApi]);

//   const next = useCallback(() => {
//     emblaApi?.scrollNext();
//   }, [emblaApi]);

//   return (
//     <section className={className}>
//       <CarouselHeader eyebrow={eyebrow} title={title} />

//       <div className="overflow-hidden mt-8" ref={emblaRef}>
//         <div className="flex">
//           {children}
//         </div>
//       </div>

//       {showControls && <CarouselControls onPrev={prev} onNext={next} />}
//     </section>
//   );
// }
