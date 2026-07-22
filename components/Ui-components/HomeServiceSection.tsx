"use client";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import Reveal from "../../app/Animations/Reveal";
// import { serviceCards } from "../../app/data";
import { comboServices } from "../../app/data";
import { Service } from "@/types/defaultType";
import { useFunctionalitiesContext } from "@/contexts/Functionalities";
import { toast } from "sonner";
// import { useState } from "react";

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  const { toggleBookingForm, setSelectedService } = useFunctionalitiesContext();

  function bookThisMassage(service: string) {
    toggleBookingForm();
    setSelectedService(service);
    toast.success(`${service} selected!`);
  }

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-neutral-200
        bg-stone-50
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-4/5 overflow-hidden">
        <Image
          src={service.img}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="eager"
          className="
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />

        <div
          className="
            absolute
            bottom-3
            left-3
            w-10
            h-10
            rounded-full
            bg-white
            flex
            items-center
            justify-center
          "
        >
          <Image
            src="/current-logo.svg"
            alt="TheraHome"
            width={80}
            height={80}
            className="rounded-full"
          />
          {/* {service.icon} */}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-neutral-900 mb-2">
          {service.name}
        </h3>

        <p className="text-xs text-neutral-500 leading-relaxed mb-4">
          {service.desc}
        </p>

        <button
          onClick={() => bookThisMassage(service.name)}
          className="
            inline-flex
            items-center
            gap-1
            text-xs
            font-semibold
            text-primary-green
            hover:gap-2
            transition-all
            cursor-pointer

          "
        >
          Book Now →
        </button>
      </div>
    </div>
  );
}

export default function HomeServiceSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const prev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const next = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white pt-20 lg:pt-32 pb-24 px-6 font-geo relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <Reveal>
          <div className="text-center lg:mb-14">
            <div
              className="
                 mb-3.5
                 flex
                 items-center
                 justify-center
                 gap-2
               "
            >
              <div className="h-px w-7 bg-[#c5b99a]" />

              <span className="text-[15px] text-primary-light">🌿</span>

              <div className="h-px w-7 bg-[#c5b99a]" />
            </div>

            <p
              className="
                 text-xs
                 font-bold
                 tracking-[0.15em]
                 uppercase
                 text-text-black
                 lg:mb-3
                 mt-5 lg:mt-0
               "
            >
              OUR SIGNATURE SERVICES
            </p>

            <h2
              className="
                 text-4xl
                 md:text-5xl
                 font-bold
                 text-neutral-900
                 mt-5 lg:mt-0
                 leading-relaxed

               "
            >
              Wellness, Tailored for You
            </h2>
          </div>
        </Reveal>

        {/* SLIDER */}
        <div className="overflow-hidden mt-8" ref={emblaRef}>
          <div className="flex">
            {comboServices.map((service, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_100%]
                  md:flex-[0_0_50%]
                  xl:flex-[0_0_25%]
                  px-3
                "
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-neutral-300 hover:bg-black hover:text-white transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-neutral-300 hover:bg-black hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
// export default function HomeServiceSection() {
//  const [active, setActive] = useState<number>(0);
//   const singleServicecount = comboServices.length;

//   const prev = () => {
//     setActive((prev) => (prev - 1 + singleServicecount) % singleServicecount);
//   };

//   const next = () => {
//     setActive((prev) => (prev + 1) % singleServicecount);
//   };
//   return (
//     <section className="bg-white pt-20 lg:pt-32 pb-24 px-6 font-geo relative z-10">
//       <div className="max-w-7xl mx-auto">
//         {/* HEADER */}
//         <Reveal>
//           <div className="text-center lg:mb-14">
//             <div
//               className="
//                 mb-3.5
//                 flex
//                 items-center
//                 justify-center
//                 gap-2
//               "
//             >
//               <div className="h-px w-7 bg-[#c5b99a]" />

//               <span className="text-[15px] text-primary-light">🌿</span>

//               <div className="h-px w-7 bg-[#c5b99a]" />
//             </div>

//             <p
//               className="
//                 text-xs
//                 font-bold
//                 tracking-[0.15em]
//                 uppercase
//                 text-text-black
//                 lg:mb-3
//                 mt-5 lg:mt-0
//               "
//             >
//               OUR SIGNATURE SERVICES
//             </p>

//             <h2
//               className="
//                 text-4xl
//                 md:text-5xl
//                 font-bold
//                 text-neutral-900
//                 mt-5 lg:mt-0
//                 leading-relaxed

//               "
//             >
//               Wellness, Tailored for You
//             </h2>
//           </div>
//         </Reveal>

//         {/* GRID */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             lg:grid-cols-3
//             xl:grid-cols-5
//             gap-5
//             lg:px-5
//             mt-5 lg:mt-0

//           "
//         >
//           {comboServices.map((service, index) => (
//             <Reveal key={index} delay={index * 0.07}>
//               <ServiceCard service={service} />
//             </Reveal>
//           ))}
//         </div>

//         {/* BUTTON */}
//         <Reveal delay={0.3}>
//           <div className="text-center mt-12">
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
// {*

//   <Link
//               href="/services"
//               className="
//                 inline-block
//                 rounded-lg
//                 bg-primary-green
//                 hover:bg-secondary-green
//                 text-white
//                 font-geo
//                 px-8
//                 py-4
//                 font-semibold
//                 transition-all
//               "
//             >
//               View All Services
//             </Link>
//   *}
