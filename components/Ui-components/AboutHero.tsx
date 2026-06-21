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
    <section className=" relative mt-17 overflow-hidden min-h-125 font-geo">
      <div className=" relative max-w-360 mx-auto z-20">
        {/* Background image */}
        <div className="relative min-h-122 max-h-125 w-full">
          <Image
            src="/abouthero.png"
            alt="Premium wellness products"
            fill
            priority
            sizes="100vw"
            className="hero-img object-cover object-[center_40%]"
          />
        </div>

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
                text-primary-light

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
              text-[#1a1a1a]
            "
          >
            Wellness, Delivered
            <br />
            <span className="italic text-secondary-green">With Care</span>
          </h1>

          {/* Paragraph */}
          <p
            style={anim(0.3)}
            className="
              mb-7
              max-w-90
              text-[15px]
              leading-8
              text-[#777]
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
                  {/* Icon box */}
                  <div
                    className="
                      flex
                      h-7
                      w-7
                     shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#e7e2d9]
                      bg-[#f3efe7]
                    "
                  >
                    <Icon className="text-primary-green" />
                  </div>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#1a1a1a]
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

// "use client";

// import { CSSProperties, useEffect, useState } from "react";
// import Image from "next/image";
// // import DirectionReveal from "../Animations/DirectionReveal";
// import { ComponentType, SVGProps } from "react";
// import { Icons } from "@/lib/icons";

// // import { Icons, IconType } from "@/lib/icons";

// type IconType = ComponentType<SVGProps<SVGSVGElement>>;

// export interface HeroBullet {
//   Icon: IconType;
//   text: string;
// }

// export const HERO_BULLETS: HeroBullet[] = [
//   {
//     Icon: Icons.user,
//     text: "Professional Therapists",
//   },
//   {
//     Icon: Icons.leaf,
//     text: "Premium & Natural Products",
//   },
//   {
//     Icon: Icons.award,
//     text: "Trusted by Clients Across Lagos",
//   },
// ];
// export default function AboutHero() {
//   const [loaded, setLoaded] = useState<boolean>(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoaded(true), 80);

//     return () => clearTimeout(timer);
//   }, []);

//   // TypeScript typing for style object
//   const anim = (delay: number): CSSProperties => ({
//     opacity: loaded ? 1 : 0,
//     transform: loaded ? "translateY(0)" : "translateY(22px)",
//     transition: `all .8s ease ${delay}s`,
//   });

//   return (
//     <section className="mt-17.5 overflow-hidden bg-hero-img">
//       <div
//         className="
//           mx-auto
//           grid
//           max-w-7xl
//           items-stretch
//           md:grid-cols-2
//           min-h-95
//         "
//       >
//         {/* LEFT CONTENT */}
//         <div
//           className="
//             flex
//             flex-col
//             justify-center
//             px-6
//             py-16
//             md:px-10
//             lg:px-14
//           "
//         >
//           {/* Badge */}
//           <div style={anim(0.06)} className="mb-4">
//             <span
//               className="
//                 text-[11px]
//                 font-bold
//                 uppercase
//                 tracking-[0.13em]
//                 text-[#6b8c3e]
//               "
//             >
//               ABOUT THERAHOME
//             </span>
//           </div>

//           {/* Heading */}
//           <h1
//             style={anim(0.18)}
//             className="
//               mb-5
//               font-serif
//               text-[clamp(34px,4.8vw,56px)]
//               font-bold
//               leading-tight
//               text-[#1a1a1a]
//             "
//           >
//             Wellness, Delivered
//             <br />
//             <span className="italic text-[#4a7c2a]">With Care</span>
//           </h1>

//           {/* Paragraph */}
//           <p
//             style={anim(0.3)}
//             className="
//               mb-7
//               max-w-90
//               text-[15px]
//               leading-8
//               text-[#777]
//             "
//           >
//             TheraHome was born from a simple belief — that everyone deserves
//             premium wellness, without leaving the comfort of home.
//           </p>

//           {/* Bullet Points */}
//           <div style={anim(0.42)} className="space-y-4">
//             {HERO_BULLETS.map((item, index) => {
//               const Icon = item.Icon;

//               return (
//                 <div key={index} className="flex items-center gap-3">
//                   {/* Icon box */}
//                   <div
//                     className="
//                       flex
//                       h-7
//                       w-7
//                      shrink-0
//                       items-center
//                       justify-center
//                       rounded-lg
//                       border
//                       border-[#e7e2d9]
//                       bg-[#f3efe7]
//                     "
//                   >
//                     <Icon
//                       width={16}
//                       height={16}
//                       className="text-primary-green"
//                     />
//                   </div>

//                   <span
//                     className="
//                       text-sm
//                       font-medium
//                       text-[#1a1a1a]
//                     "
//                   >
//                     {item.text}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative min-h-80 overflow-hidden">
//           <Image
//             src="/hero3.png"
//             alt="TheraHome therapist"
//             fill
//             priority
//             sizes="(max-width: 768px) 100vw, 50vw"
//             className={`
//               object-cover
//               object-[center_20%]
//               transition-transform
//               duration-1300
//               ease-in-out
//               ${loaded ? "scale-100" : "scale-105"}
//             `}
//           />

//           {/* Gradient Overlay */}
//           <div
//             className="
//               absolute
//               inset-0
//               bg-linear-to-r
//               from-[#faf8f430]
//               to-transparent
//             "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
