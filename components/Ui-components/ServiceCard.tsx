"use client";

import { useState } from "react";
import Image from "next/image";
import { Service } from "@/types/defaultType";
import ServiceReveal from "../../app/Animations/ServiceReveal";
import { useFunctionalitiesContext } from "@/contexts/Functionalities";

type ServiceCardDesktopProps = {
  service: Service;
  delay?: number;
};

export function ServiceCardDesktop({
  service,
  delay = 0,
}: ServiceCardDesktopProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const { toggleBookingForm, setSelectedService } = useFunctionalitiesContext();

  function bookThisMassage(service: string) {
    toggleBookingForm();
    setSelectedService(service);
  }

  return (
    <ServiceReveal delay={delay}>
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => bookThisMassage(service.name)}
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-stone-200
          bg-white
          shadow-sm
          transition-all
          duration-300
          cursor-pointer

        "
        style={{
          transform: hovered ? "translateY(-7px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 16px 40px rgba(45,74,45,0.13)"
            : "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* IMAGE */}
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={service.img}
            alt={service.name}
            fill
            sizes="
    (max-width:768px) 100vw,
    (max-width:1200px) 50vw,
    33vw
  "
            className={`
              object-cover
              transition-transform
              duration-500
              ${hovered ? "scale-105" : "scale-100"}
            `}
          />

          {/* ICON */}
          <div
            className="
              absolute
              bottom-3
              left-3
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-primary-green
              text-lg
              shadow-lg
            "
          >
            {service.icon}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-5">
          <h3
            className="
              mb-3
              font-serif
              text-lg
              font-bold
              text-stone-900
            "
          >
            {service.name}
          </h3>

          <p
            className="
              mb-auto
              text-sm
              leading-7
              text-stone-500
            "
          >
            {service.desc}
          </p>

          {/* FOOTER */}
          <div
            className="
              mt-5
              flex
              items-center
              gap-3
              border-t
              border-stone-100
              pt-4
            "
          >
            <span className="text-xs text-stone-400">{service.duration}</span>

            <span className="h-3 w-px bg-stone-300" />

            <span
              className="
                text-xs
                font-bold
                text-primary-green
              "
            >
              {service.price}
            </span>
          </div>
        </div>
      </article>
    </ServiceReveal>
  );
}

// ===========================================
type ServiceRowMobileProps = {
  service: Service;
  delay?: number;
};

export function ServiceRowMobile({
  service,
  delay = 0,
}: ServiceRowMobileProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const { toggleBookingForm, setSelectedService } = useFunctionalitiesContext();

  function bookThisMassage(service: string) {
    toggleBookingForm();
    setSelectedService(service);
  }
  return (
    <ServiceReveal delay={delay}>
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => bookThisMassage(service.name)}
        className="
          flex
          gap-4
          rounded-2xl
          border
          border-stone-200
          bg-white
          p-4
          transition-all
          duration-300
          cursor-pointer
        "
        style={{
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 8px 24px rgba(45,74,45,0.1)"
            : "0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        {/* IMAGE */}
        <div
          className="
            relative
            h-24
            w-24
            shrink-0
            overflow-hidden
            rounded-xl
          "
        >
          <Image
            src={service.img}
            alt={service.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw,
       (max-width: 1024px) 33vw,
       16vw"
          />

          <div
            className="
              absolute
              bottom-2
              right-2
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-primary-green
              text-sm
            "
          >
            {service.icon}
          </div>
        </div>

        {/* CONTENT */}
        <div className="min-w-0 flex-1">
          <h3
            className="
              mb-2
              font-serif
              text-base
              font-bold
              text-stone-900
            "
          >
            {service.name}
          </h3>

          <p
            className="
              mb-3
              text-xs
              leading-6
              text-stone-500
            "
          >
            {service.desc}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-stone-400">
              {service.duration}
            </span>

            <span className="h-2.5 w-px bg-stone-300" />

            <span
              className="
                text-[11px]
                font-bold
                text-primary-green
              "
            >
              {service.price}
            </span>
          </div>
        </div>
      </article>
    </ServiceReveal>
  );
}
