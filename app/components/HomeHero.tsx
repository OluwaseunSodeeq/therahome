"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CalendarDays,
  MapPin,
  BadgeCheck,
  Clock3,
  House,
  // Leaf,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const trustItems = [
  {
    icon: <BadgeCheck />,
    title: "Certified Therapists",
    desc: "Trained professionals you can trust",
  },
  {
    icon: <House />,
    title: "We Come to You",
    desc: "Home, office or hotel, your comfort, our priority",
  },
  {
    icon: "🌿",
    // icon: <Leaf />,
    title: "Premium Experience",
    desc: "Luxury massage with professional care",
  },
  {
    icon: <Clock3 />,
    title: "Flexible Booking",
    desc: "Choose a time that works for you",
  },
];

export default function HomeHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-17.5 bg-linear-to-r from-hero-img via-hero-img/85 to-transparent overflow-hidden relative ">
      {/* HERO CONTENT */}
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          min-h-[calc(100vh-68px)]
          items-center
        "
      >
        {/* LEFT SIDE */}
        <div
          className={`
            pl-6 md:pl-10 py-10 md:py-16 
            transition-all duration-700
            ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }
          `}
        >
          {/* TOP BADGE */}
          <div
            className="
              inline-flex items-center gap-2
              bg-[#eef3eb]
              rounded-full
              px-4 py-2
              mb-6
            "
          >
            <span className="text-xs">🌿</span>

            <span
              className="
                text-[11px]
                font-semibold
                tracking-wider
                uppercase
                text-primary-green
              "
            >
              Premium Mobile Wellness in Lagos
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              font-serif-custom
              text-4xl md:text-6xl
              font-bold
              leading-tight
              text-[#1a1a1a]
              mb-5
            "
          >
            Luxury Spa,
            <br />
            <span className="text-[#6b8c3e]">Delivered to You</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-base
              text-[#666]
              leading-8
              max-w-md
              mb-9
            "
          >
            Experience premium massage and holistic therapy in the comfort of
            your home, office, or hotel.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-5">
            {/* PRIMARY BUTTON */}
            <Link
              href="#"
              className="
                bg-primary-green
                text-white
                rounded-lg
                px-7 py-4
                text-sm font-semibold
                flex items-center gap-2
                shadow-lg
                shadow-primary-green/20
                transition-all duration-200
                hover:bg-secondary-green
                hover:-translate-y-1
              "
            >
              Book Your Session
              <span className="text-sm">
                <CalendarDays />
              </span>
              {/* <span>📅</span> */}
            </Link>

            {/* SECONDARY BUTTON */}
            <Link
              href="#"
              className="
                border-2 border-primary-green
                text-primary-green
                rounded-lg
                px-7 py-4
                text-sm font-semibold
                flex items-center gap-2
                transition-all duration-200
                hover:bg-[#f0f5eb]
                hover:-translate-y-1
              "
            >
              Chat on WhatsApp
              <span className="text-[20px]">
                <FaWhatsapp />
              </span>
              {/* <span>💬</span> */}
            </Link>
          </div>

          {/* SMALL TEXT */}
          <div className="flex items-center gap-2">
            <span className="text-[#6b8c3e] text-sm">✅</span>

            <span className="text-sm text-[#888]">
              Limited slots available weekly
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`
            relative
            min-h-80 md:min-h-130
            pr-6 md:pr-12
            h-full
            transition-all duration-700 delay-200
            ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
          `}
        >
          {/* HERO IMAGE */}
          <Image
            src="/hero-image.png"
            alt="Luxury spa therapist"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
            className="object-cover object-top border-4 border-color-hero-bg rounded-2xl shadow-4xl"
          />

          {/* LOCATION CARD */}
          <div
            className="
              absolute top-12 right-6
              bg-white
              rounded-xl
              p-4
              shadow-xl
              min-w-45
            "
          >
            <div className="flex gap-2 items-start">
              <span className="text-lg mt-1">
                <MapPin />
              </span>

              <div>
                <h3
                  className="
                    text-sm
                    font-bold
                    text-[#1a1a1a]
                    mb-1
                  "
                >
                  Serving Lagos
                </h3>

                <p
                  className="
                    text-xs
                    text-[#777]
                    leading-6
                  "
                >
                  Ikeja, Magodo, Lekki,
                  <br />
                  Victoria Island &
                  <br />
                  surrounding areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div
        className="
          bg-white
          shadow-lg
          mx-4 md:mx-16
          md:-mt-12
          rounded-2xl
          px-5 md:px-4
          py-7
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-6
          relative z-20
        "
      >
        {trustItems.map((item, index) => (
          <div key={index} className="flex gap-4 items-start ">
            {/* ICON */}
            <div
              className="
                w-11 h-11
                rounded-xl
                bg-[#f0f5eb]
                flex items-center justify-center
                text-xl
                shrink-0
                text-primary-green
              "
            >
              {item.icon}
            </div>

            {/* TEXT */}
            <div>
              <h3
                className="
                  text-sm
                  font-bold
                  text-neutral
                  mb-1
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-xs
                  text-primary-green
                  leading-5
                "
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
