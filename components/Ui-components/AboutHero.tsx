"use client";

import { CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, Gem, LucideIcon, User } from "lucide-react";
import { Overlay, WhiteOverlay } from "./Overlays";

export interface HeroBullet {
  Icon: LucideIcon;
  text: string;
}

export const HERO_BULLETS: HeroBullet[] = [
  {
    Icon: User,
    text: "Professional Therapists",
  },
  {
    Icon: Gem,
    text: "Premium & Natural Products",
  },
  {
    Icon: ShieldCheck,
    text: "Trusted by Clients Across Lagos",
  },
];
export default function AboutHero() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);

    return () => clearTimeout(timer);
  }, []);

  const anim = (delay: number): CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `all .8s ease ${delay}s`,
  });

  return (
    <section className=" relative mt-17 overflow-hidden min-h-122 font-geo">
      <div className=" relative max-w-360 mx-auto z-20">
        {/* Background image */}
        <div className="relative min-h-122 max-h-125 w-full">
          <Image
            src="/abouthero.png"
            alt="About HeroSection"
            fill
            priority
            sizes="100vw"
            className="hero-img object-cover object-[center_40%]"
          />
          <Image
            src="/mobileabouthero.png"
            alt="Premium wellness products"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 0vw"
            className="lg:hidden object-cover object-[center_40%]"
          />
        </div>
        <WhiteOverlay />
        <Overlay />

        {/* Content */}
        <div
          className="
          absolute
          inset-0
          flex
          max-w-180
          flex-col
          justify-center
          py-8 px-6 md:px-8
          xl:px-12
          xl:py-11
          "
        >
          {/* Badge */}
          <div
            style={anim(0.08)}
            className="
            max-w-[320px]
             py-2
             px-2
            "
          >
            <span className="text-xs">🌿</span>
            <span
              className="
              text-[11px]
              font-semibold
              uppercase
              tracking-wider
              text-hero-bg
              lg:text-primary-green
              ml-4
            "
            >
              ABOUT THERAHOME
            </span>
          </div>

          {/* Heading */}
          <h1
            style={anim(0.18)}
            className="
              mt-3
              font-serif
              text-[clamp(34px,4.8vw,56px)]
              font-bold
              leading-tight
              text-primary-green lg:text-black
            "
          >
            Wellness, Delivered
            <br />
            <span className="italic text-hero-bg lg:text-primary-green">
              With Care
            </span>
          </h1>

          {/* Paragraph */}
          <p
            style={anim(0.3)}
            className="
              mt-4
              max-w-90
              text-base
              leading-relaxed
              text-hero-img lg:text-black
            "
          >
            TheraHome was born from a simple belief that everyone deserves
            premium wellness, without leaving the comfort of home.
          </p>

          {/* Bullet Points */}
          <div style={anim(0.42)} className="mt-4 space-y-4">
            {HERO_BULLETS.map((item, index) => {
              const Icon = item.Icon;

              return (
                <div key={index} className="flex items-center gap-3">
                  <Icon className="text-primary-green" />
                  {/* </div> */}

                  <span
                    className="
                      text-sm
                      font-medium
                      text-hero-bg lg:text-black
                    "
                  >
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
