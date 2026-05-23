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
import Link from "next/link";

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
    <section className="hero-section relative mt-17 overflow-hidden min-h-122 font-geo">
      {/* Background image */}
      <div className="relative min-h-122 max-h-125 w-full">
        <Image
          src="/hero3.png"
          alt="Premium wellness products"
          fill
          priority
          sizes="100vw"
          className="bg-hero-img object-cover object-[center_40%]"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
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
          font-geo
          absolute
          inset-0
          flex
          max-w-180
          flex-col
          justify-center
          px-13
          py-11
          max-sm:max-w-full
          max-sm:px-6
          max-sm:py-8
          "
      >
        {/* Badge */}
        <div style={anim(0.06)} className="mb-4 flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-primary-green">
            Get In Touch
          </span>
        </div>

        {/* Heading */}
        <h1
          style={anim(0.18)}
          className="mb-5 text-[clamp(34px,4.5vw,56px)] font-bold leading-[1.1]"
        >
          <span className="text-black">We&apos;re Here to</span>
          <br />
          <span className="italic text-primary-green">Help You Relax</span>
        </h1>

        {/* Description */}
        <p
          style={anim(0.3)}
          className="mb-8 max-w-md text-[15px] leading-[1.8]"
        >
          Have questions or ready to book your session? Reach out to us and
          we&apos;ll take care of the rest.
        </p>

        <div className="flex flex-wrap gap-4 mb-5">
          {/* PRIMARY BUTTON */}
          <Link
            href="https://wa.me/2348123456789"
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
            <span className="text-[18px]">
              <FaWhatsapp />
            </span>
            Chat on WhatsApp
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
            <span className="text-[18px]">
              <Phone />
            </span>
            Call Us Now
          </Link>
        </div>

        {/* Response Time */}
        <div style={anim(0.5)} className="flex items-center gap-2">
          <span className="text-primary-green">
            <Clock size={18} />
          </span>

          <span className="text-sm text-secondary-green">
            We respond within 10 minutes
          </span>
        </div>

        {/* Trust */}
        <div style={anim(0.58)} className="mt-4 flex items-center gap-2">
          <span className="text-primary-green">
            <ShieldCheck size={18} />
          </span>

          <span className="text-sm  text-secondary-green">
            Trusted by Clients Across Lagos
          </span>
        </div>
      </div>
    </section>
  );
}

/*
"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);

    return () => clearTimeout(t);
  }, []);

  const anim = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `all .8s ease ${delay}s`,
  });

  return (
    <section className="mt-[70px] overflow-hidden bg-[var(--cream)]">
      <div className="mx-auto grid min-h-[370px] max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Text Side */
// <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14">
//   {/* Badge */}
//   <div
//     style={anim(0.06)}
//     className="mb-4 flex items-center gap-2"
//   >
//     <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--sage)]">
//       Get In Touch
//     </span>
//   </div>

//   {/* Heading */}
//   <h1
//     style={anim(0.18)}
//     className="serif mb-5 text-[clamp(34px,4.5vw,56px)] font-bold leading-[1.1] text-[var(--ink)]"
//   >
//     We&apos;re Here to
//     <br />
//     <span className="italic text-[var(--leaf)]">
//       Help You Relax
//     </span>
//   </h1>

//   {/* Description */}
//   <p
//     style={anim(0.3)}
//     className="mb-8 max-w-md text-[15px] leading-[1.8] text-[var(--mist)]"
//   >
//     Have questions or ready to book your session? Reach out to us and
//     we&apos;ll take care of the rest.
//   </p>

//   {/* CTA Buttons */}
//   <div
//     style={anim(0.4)}
//     className="mb-5 flex flex-wrap gap-3"
//   >
//     <a
//       href="https://wa.me/2348123456789"
//       className="inline-flex items-center gap-2 rounded-full bg-[var(--leaf)] px-6 py-3 text-[18px] font-medium text-white shadow-lg transition hover:scale-[1.02]"
//     >
//       <Icon.whatsapp />
//       Chat on WhatsApp
//     </a>

//     <a
//       href="tel:+2348123456789"
//       className="inline-flex items-center gap-2 rounded-full border border-[var(--leaf)] px-6 py-3 text-sm font-medium text-[var(--leaf)] transition hover:bg-[var(--leaf)] hover:text-white"
//     >
//       <Icon.phone />
//       Call Us Now
//     </a>
//   </div>

//   {/* Response Time */}
//   <div
//     style={anim(0.5)}
//     className="flex items-center gap-2"
//   >
//     <span className="text-[var(--sage)]">
//       <Icon.clock />
//     </span>

//     <span className="text-[13px] text-[var(--ghost)]">
//       We respond within 5 minutes
//     </span>
//   </div>

//   {/* Trust */}
//   <div
//     style={anim(0.58)}
//     className="mt-4 flex items-center gap-2"
//   >
//     <span className="text-[var(--leaf)]">
//       <ShieldCheck size={18} />
//     </span>

//     <span className="text-[13px] font-medium text-[var(--ghost)]">
//       Trusted by Clients Across Lagos
//     </span>
//   </div>
// </div>

//         {/* Image Side */}
//         <div className="relative min-h-[320px] overflow-hidden">
//           <img
//             src="/herosectionImage.png"
//             alt="Spa wellness contact"
//             className={`h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out ${
//               loaded ? "scale-100" : "scale-[1.04]"
//             }`}
//           />

//           {/* Vignette */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,248,244,0.15)] to-transparent" />
//         </div>
//       </div>
//     </section>
//   );
// }
