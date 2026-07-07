"use client";

import { CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, Leaf, LucideIcon, User } from "lucide-react";

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
    Icon: Leaf,
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
            sizes="100vw"
            className="bg-hero-img object-cover object-[center_40%]  lg:hidden"
          />
        </div>
        <div
          className="absolute inset-0  lg:hidden"
          style={{
            background: `
      linear-gradient(
        90deg,
        rgba(12,12,12,0.88) 0%,
        rgba(12,12,12,0.78) 30%,
        rgba(12,12,12,0.45) 55%,
        rgba(12,12,12,0.15) 75%,
        rgba(12,12,12,0) 100%
      )
    `,
          }}
        />

        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: `
             linear-gradient(
               to right,
               rgba(250,248,244,1) 0%,
               rgba(250,248,244,0.95) 28%,
               rgba(250,248,244,0.70) 46%,
               rgba(250,248,244,0.0) 68%
             )
           `,
          }}
        />

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
          <div style={anim(0.06)} className="mb-4">
            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.13em]
                text-primary-green

              "
            >
              ABOUT THERAHOME
            </span>
          </div>

          {/* Heading */}
          <h1
            style={anim(0.18)}
            className="
              mb-5
              font-serif
              text-[clamp(34px,4.8vw,56px)]
              font-bold
              leading-tight
              text-hero-bg lg:text-black
            "
          >
            Wellness, Delivered
            <br />
            <span className="italic text-primary-green">With Care</span>
          </h1>

          {/* Paragraph */}
          <p
            style={anim(0.3)}
            className="
              mb-7
              max-w-90
              text-base
              leading-relaxed
              text-hero-bg lg:text-black
            "
          >
            TheraHome was born from a simple belief — that everyone deserves
            premium wellness, without leaving the comfort of home.
          </p>

          {/* Bullet Points */}
          <div style={anim(0.42)} className="space-y-4">
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
