"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Overlay, WhiteOverlay } from "./Overlays";

import { PrimaryButton, SecondaryButton } from "./Buttons";

export default function HomeHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 80);

    return () => clearTimeout(timeout);
  }, []);

  const anim = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section className="w-full mx-auto relative mt-17 overflow-hidden min-h-90 bg-hero-img font-geo">
      <div className=" relative max-w-360 mx-auto z-20">
        {/* Background image */}
        <div className="relative h-[90vh] min-h-135 max-h-140 ">
          <Image
            src="/homehero1.png"
            alt="Premium wellness products"
            fill
            priority
            sizes="(max-width: 1023px) 0px, 100vw"
            className="hidden lg:block object-cover object-[center_40%] bg-hero-img"
          />
          <Image
            src="/homeheromobile.png"
            alt="Premium wellness products"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 0vw"
            className="lg:hidden object-cover object-[center_40%]"
          />
        </div>
        {/* Gradient overlay */}
        <WhiteOverlay />
        <Overlay />

        {/* Content */}
        <div
          className={`
          absolute
          inset-0
          flex
          max-w-180
          flex-col
          justify-center
          px-6 md:px-8
          xl:px-12
        
          
          `}
        >
          {/* TOP BADGE */}
          <div
            style={anim(0.08)}
            className="
            max-w-[320px]
            mb-3.5 
             py-2
             px-2
            "
          >
            <span className="text-xs">🌿</span>

            <span
              className="
                text-[11px]
                font-semibold
                tracking-wider
                uppercase
                text-hero-bg
                lg:text-primary-green
                ml-4
              "
            >
              Premium Mobile Wellness in Lagos
            </span>
          </div>

          {/* HEADING */}
          <h1
            style={anim(0.2)}
            className="
              text-4xl md:text-6xl
              font-bold
              leading-tight
              text-primary-green lg:text-black
              mb-5
              font-geo
            "
          >
            Luxury Spa,
            <br />
            <span className=" text-hero-bg lg:text-primary-green italic">
              Delivered to You
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            style={anim(0.08)}
            className="
              text-base
              text-hero-img lg:text-black
              leading-relaxed
              max-w-md
              mb-9
            "
          >
            Experience premium massage and holistic therapy in the comfort of
            your home, office, or hotel.
          </p>

          {/* BUTTONS */}
          <div style={anim(0.08)} className="flex flex-wrap gap-4 mb-5">
            {/* PRIMARY BUTTON */}
            <PrimaryButton>
              Book Your Session
              <span className="text-sm">
                <CalendarDays />
              </span>
            </PrimaryButton>

            {/* SECONDARY BUTTON */}
            <SecondaryButton>
              Chat on WhatsApp
              <span className="text-[20px]">
                <FaWhatsapp />
              </span>
              {/* <span>💬</span> */}
            </SecondaryButton>
          </div>

          {/* SMALL TEXT */}
          <div style={anim(0.2)} className="flex items-center gap-2">
            <span className="text-primary-green text-sm">✅</span>

            <span className="text-sm text-hero-bg lg:text-black">
              Limited slots available weekly
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="relative h-[90vh] min-h-[540px] max-h-[560px]">
  <picture>
    <source
      media="(min-width: 1024px)"
      srcSet="/homehero1.png"
    />

    <Image
      src="/homeheromobile.png"
      alt="Premium wellness products"
      fill
      priority
      sizes="100vw"
      className="object-cover object-[center_40%]"
    />
  </picture>
</div> */
}
