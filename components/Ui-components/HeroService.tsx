"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroService() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
     
        w-full mx-auto relative mt-17 overflow-hidden min-h-90 bg-hero-img font-geo
      "
    >
      <div className=" relative max-w-360 mx-auto z-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero1.png"
            alt="Premium Wellness"
            fill
            priority
            className="
            object-cover
            object-center
            md:object-[center_20%]
          "
          />
        </div>

        {/* Gradient Overlay */}
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
          relative
          z-10
          flex
          min-h-85
          max-w-180
          flex-col
          justify-center
          px-6
          py-8 md:px-8
          xl:px-12
          xl:py-11
        "
        >
          {/* Badge */}
          <div
            className={`
            mb-4 flex items-center gap-2
            transition-all duration-700 delay-100
            ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
          >
            <span className="text-[13px] text-light-green">🌿</span>

            <span
              className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-light-green
              lg:text-primary-green
            "
            >
              Our Services
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`
            mb-5
            font-serif
            text-[clamp(32px,5vw,58px)]
            font-bold
            leading-relaxed
            text-hero-bg lg:text-black
            transition-all
            duration-700
            delay-200
            ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
          `}
          >
            Premium Wellness,
            <br />
            <span className="text-light-green lg:text-primary-green">
              Tailored for You
            </span>
          </h1>

          {/* Description */}
          <p
            className={`
            max-w-90
            text-[clamp(13px,1.8vw,16px)]
            leading-relaxed
            text-hero-bg lg:text-black
            transition-all
            duration-700
            delay-300
            ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
          `}
          >
            From deep tissue to full body relaxation, our professional
            therapists bring the spa experience to you.
          </p>
        </div>
      </div>
    </section>
  );
}
