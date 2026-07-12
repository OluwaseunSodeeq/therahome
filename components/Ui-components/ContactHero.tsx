"use client";

import { CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Leaf,
  LucideIcon,
  User,
  Phone,
  Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CallButton, ChatButton } from "./Buttons";
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
    Icon: Leaf,
    text: "Premium & Natural Products",
  },
  {
    Icon: ShieldCheck,
    text: "Trusted by Clients Across Lagos",
  },
];
export default function ContactHero() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);

    return () => clearTimeout(timer);
  }, []);

  // TypeScript typing for style object
  const anim = (delay: number): CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `all .8s ease ${delay}s`,
  });

  return (
    <section className="relative mt-17 overflow-hidden min-h-122 font-geo">
      <div className=" relative max-w-360 mx-auto z-20">
        {/* Background image */}
        <div className="relative min-h-122 max-h-125 w-full">
          <Image
            src="/contacthero1.png"
            alt="Premium wellness products"
            fill
            priority
            sizes="100vw"
            className="bg-hero-img object-cover object-[center_40%] hidden lg:block"
          />
          {/* Gradient overlay */}
          <WhiteOverlay />

          {/* mobile */}
          <Image
            src="/mobilecontacthero.png"
            alt="Premium wellness products"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 0vw"
            className="lg:hidden object-cover object-[center_40%]"
          />
        </div>
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
              text-primary-green
              ml-4
            "
            >
              Get In Touch
            </span>
          </div>

          {/* Heading */}
          <h1
            style={anim(0.18)}
            className="mb-5 text-[clamp(34px,4.5vw,56px)] font-bold leading-tight"
          >
            <span className="text-hero-bg lg:text-black">
              We&apos;re Here to
            </span>
            <br />
            <span className="italic text-primary-green">Help You Relax</span>
          </h1>

          {/* Description */}
          <p
            style={anim(0.3)}
            className="text-hero-bg lg:text-black lg:mb-8 max-w-md text-base leading-relaxed"
          >
            Have questions or ready to book your session? Reach out to us and
            we&apos;ll take care of the rest.
          </p>

          <div className="flex flex-wrap gap-4 mb-5 mt-5 lg:mt-0">
            {/* PRIMARY BUTTON */}
            <ChatButton>
              <span className="text-light-green lg:text-primary-green text-[18px]">
                <FaWhatsapp />
              </span>
              Chat on WhatsApp
            </ChatButton>

            {/* SECONDARY BUTTON */}
            <CallButton>
              <span className="text-primary-green text-[18px]">
                <Phone />
              </span>
              Call Us Now
            </CallButton>
          </div>

          {/* Response Time */}
          <div style={anim(0.5)} className="flex items-center gap-2">
            <span className="text-primary-green">
              <Clock size={18} />
            </span>

            <span className="text-sm text-hero-bg lg:text-secondary-green">
              We respond within 10 minutes
            </span>
          </div>

          {/* Trust */}
          <div style={anim(0.58)} className="mt-7 flex items-center gap-1">
            <span className="text-primary-green">
              <ShieldCheck size={18} />
            </span>

            <span className="text-sm  text-hero-bg lg:text-secondary-green">
              Trusted by Clients Across Lagos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
