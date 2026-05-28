"use client";

import Reveal from "../../app/Animations/Reveal";
import { Heart, Home, Leaf, LucideIcon, User } from "lucide-react";

export interface DiffItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

/* ─────────────────────────────────────────────
   Example data
───────────────────────────────────────────── */

const DIFF_ITEMS: DiffItem[] = [
  {
    Icon: User,
    title: "Expert Therapists",
    desc: "Our certified and experienced therapists bring professional expertise and a passion for wellness to every session.",
  },
  {
    Icon: Leaf,
    title: "Quality You Can Trust",
    desc: "We use premium natural products that nourish your body and promote lasting well-being.",
  },
  {
    Icon: Home,
    title: "We Come to You",
    desc: "No traffic. No stress. We bring everything needed for your perfect spa experience right to your door.",
  },
  {
    Icon: Heart,
    title: "Your Wellness, Our Priority",
    desc: "Your comfort, safety and satisfaction are at the heart of everything we do.",
  },
  //   {
  //     Icon: Icons.Home,
  //     title: "Expert Therapists",
  //     desc: "Enjoy premium wellness treatments without leaving your comfort zone.",
  //   },
  //    {
  //     Icon: Icons.leaf,
  //     title: "Natural Products",
  //     desc: "We use carefully selected natural and skin-safe wellness products.",
  //   },
  //   {
  //     Icon: Icons.heart,
  //     title: "Personalized Care",
  //     desc: "Every session is tailored to your body, mood and wellness goals.",
  //   },

  //   {
  //     Icon: Icons.award,
  //     title: "Trusted Professionals",
  //     desc: "Our therapists are experienced, professional and highly rated.",
  //   },
];

/* ─────────────────────────────────────────────
   SINGLE RESPONSIVE COMPONENT
───────────────────────────────────────────── */

export default function WhatMakesDifferent() {
  return (
    <section className="bg-white px-5 py-14 md:px-7 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* ───────────────── HEADER ───────────────── */}
        <Reveal>
          <div className="mb-12 text-center md:mb-16">
            <h2
              className="
                mb-3
                font-serif
                text-[28px]
                font-bold
                leading-tight
                text-[#1a1a1a]
                md:text-[40px]
              "
            >
              What Makes Us Different
            </h2>

            {/* divider */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-7 bg-[#c5b99a]" />

              <span className="text-base text-[#6b8c3e]">🌿</span>

              <div className="h-px w-7 bg-[#c5b99a]" />
            </div>
          </div>
        </Reveal>

        {/* ───────────────── RESPONSIVE GRID ───────────────── */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
            px-6
            xl:px-12
          "
        >
          {DIFF_ITEMS.map((item, index) => {
            const Icon = item.Icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div
                  className="
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    rounded-2xl
                    border
                    border-[#e8e4da]
                   bg-[#faf8f4]
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_16px_40px_rgba(45,74,45,0.12)]
                    md:p-7
                  "
                >
                  {/* ───────── TOP ROW ───────── */}
                  <div className="mb-5 flex justify-center">
                    {/* icon */}
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-secondary-green
                        shadow-[0_6px_20px_rgba(45,74,45,0.20)]
                        transition-transform
                        duration-300
                        group-hover:scale-105
                        md:h-16
                        md:w-16
                      "
                    >
                      <Icon className="text-white text-[18px]" />
                    </div>

                    {/* chevron */}
                    {/* <ChevronIcon
                      width={18}
                      height={18}
                      className="
                        mt-1
                        flex-shrink-0
                        text-[#a1a1a1]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    /> */}
                  </div>

                  {/* ───────── TITLE ───────── */}
                  <h3
                    className="
                      mb-3
                      font-geo
                      text-[16px]
                      font-bold
                      leading-snug
                      text-[#1a1a1a]
                      md:text-[18px]
                      text-center

                    "
                  >
                    {item.title}
                  </h3>

                  {/* ───────── DESCRIPTION ───────── */}
                  <p
                    className="
                      text-[13px]
                      leading-7
                      text-[#777]
                      md:text-[14px]
                      text-center
                      w-[98%]
                      mx-auto

                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// export default function WhatMakesDifferent() {
//   return (
//     <section className="bg-white px-5 py-14 md:px-7 md:py-20">
//       <div className="mx-auto max-w-7xl">
//         {/* ───────────────── HEADER ───────────────── */}
//         <Reveal>
//           <div className="mb-12 text-center md:mb-14">
//             <h2
//               className="
//                 mb-3
//                 font-serif
//                 text-[28px]
//                 font-bold
//                 text-[#1a1a1a]
//                 md:text-[40px]
//               "
//             >
//               What Makes Us Different
//             </h2>

//             {/* divider */}
//             <div className="flex items-center justify-center gap-2">
//               <div className="h-px w-7 bg-[#c5b99a]" />

//               <span className="text-base text-[#6b8c3e]">🌿</span>

//               <div className="h-px w-7 bg-[#c5b99a]" />
//             </div>
//           </div>
//         </Reveal>

//         {/* ───────────────── MOBILE LAYOUT ─────────────────
//             Hidden on desktop
//         */}
//         <div className="overflow-hidden rounded-2xl border border-[#e8e4da] bg-white md:hidden">
//           {DIFF_ITEMS.map((item, index) => {
//             const Icon = item.Icon;

//             return (
//               <Reveal key={item.title} delay={index * 0.06}>
//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-4
//                     border-b
//                     border-[#e8e4da]
//                     px-5
//                     py-4
//                     transition-colors
//                     duration-200
//                     last:border-b-0
//                     hover:bg-[#f5f1e8]
//                     bg-[#faf8f4]
//                   "
//                 >
//                   {/* icon */}
//                   <div
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       flex-shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-secondary-green
//                     "
//                   >
//                     <Icon width={20} height={20} className="text-white" />
//                   </div>

//                   {/* text */}
//                   <div className="min-w-0 flex-1">
//                     <h3
//                       className="
//                         mb-1
//                         text-[14px]
//                         font-bold
//                         text-[#1a1a1a]
//                         text-nowrap
//                       "
//                     >
//                       {item.title}
//                     </h3>

//                     <p
//                       className="
//                         text-[12px]
//                         leading-6
//                         text-[#777]
//                       "
//                     >
//                       {item.desc}
//                     </p>
//                   </div>

//                   {/* chevron */}
//                   <ChevronIcon
//                     width={18}
//                     height={18}
//                     className="flex-shrink-0 text-[#999]"
//                   />
//                 </div>
//               </Reveal>
//             );
//           })}
//         </div>

//         {/* ───────────────── DESKTOP GRID ─────────────────
//             Hidden on mobile
//         */}
//         <div
//           className="
//             hidden
//             gap-5
//             md:grid
//             md:grid-cols-2
//             xl:grid-cols-4
//           "
//         >
//           {DIFF_ITEMS.map((item, index) => {
//             const Icon = item.Icon;

//             return (
//               <Reveal key={item.title} delay={index * 0.08}>
//                 <div
//                   className="
//                     h-full
//                     rounded-2xl
//                     border
//                     border-[#e8e4da]
//                     bg-white
//                     p-8
//                     transition-all
//                     duration-300
//                     hover:-translate-y-2
//                     hover:shadow-[0_16px_40px_rgba(45,74,45,0.12)]
//                   "
//                 >
//                   {/* icon circle */}
//                   <div
//                     className="
//                       mb-6
//                       flex
//                       h-16
//                       w-16
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-[#2d4a2d]
//                       shadow-[0_6px_20px_rgba(45,74,45,0.25)]
//                     "
//                   >
//                     <Icon width={28} height={28} className="text-white" />
//                   </div>

//                   {/* title */}
//                   <h3
//                     className="
//                       mb-4
//                       font-serif
//                       text-[20px]
//                       font-bold
//                       leading-snug
//                       text-[#1a1a1a]
//                     "
//                   >
//                     {item.title}
//                   </h3>

//                   {/* desc */}
//                   <p
//                     className="
//                       text-[13px]
//                       leading-7
//                       text-[#777]
//                     "
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//               </Reveal>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
