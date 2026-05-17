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
        relative
        mt-17
        min-h-85
        overflow-hidden
      "
    >
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
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-[#0f190ab8]
          via-[#0f190a80]
          to-transparent
        "
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
          py-10
          sm:px-8
          md:px-14
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
          <span className="text-[13px] text-[#a8c47a]">🌿</span>

          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#a8c47a]
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
            leading-[1.1]
            text-white
            transition-all
            duration-700
            delay-200
            ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
          `}
        >
          Premium Wellness,
          <br />
          <span className="text-[#a8c47a]">Tailored for You</span>
        </h1>

        {/* Description */}
        <p
          className={`
            max-w-90
            text-[clamp(13px,1.8vw,16px)]
            leading-[1.75]
            text-white/80
            transition-all
            duration-700
            delay-300
            ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
          `}
        >
          From deep tissue to full body relaxation, our professional therapists
          bring the spa experience to you.
        </p>
      </div>
    </section>
  );
}
