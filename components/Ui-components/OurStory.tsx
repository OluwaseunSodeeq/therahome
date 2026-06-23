"use client";

import Image from "next/image";
import Reveal from "../../app/Animations/Reveal";
import DirectionReveal from "../../app/Animations/DirectionReveal";

// Data Type
interface StoryStat {
  num: string;
  label: string;
}

// The Data Array
const STORY_STATS: StoryStat[] = [
  {
    num: "500+",
    label: "Happy Clients",
  },
  {
    num: "5★",
    label: "Average Rating",
  },
  {
    num: "3 yrs",
    label: "Of Excellence",
  },
];

export default function OurStory() {
  return (
    <section className="font-geo border-t border-[#e8e4da] bg-white px-5 py-14 md:px-7 md:py-20">
      {/* Heading */}
      <div className="block xl:hidden  text-center">
        <h2
          className="
                  mb-3
                  text-[28px]
                  font-bold
                  text-[#1a1a1a]
                  md:text-[38px]
                "
        >
          Our Story
        </h2>

        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-7 bg-[#c5b99a]" />

          <span className="text-base text-[#6b8c3e]">🌿</span>

          <div className="h-px w-7 bg-[#c5b99a]" />
        </div>
      </div>
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-10
          lg:grid-cols-[460px_1fr]
          lg:px-12
          lg:gap-14
        "
      >
        {/* ───────────────── IMAGE ───────────────── */}
        <Reveal>
          <div
            className="
              relative
              mx-auto
              aspect-4/3
              w-full
              max-w-115
              md:max-w-142.5
              lg:max-w-115
              overflow-hidden
              rounded-2xl
              shadow-[0_12px_40px_rgba(0,0,0,0.10)]
            "
          >
            <Image
              src="/abouthero1.png"
              alt="Our story"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 380px"
              className="
                object-cover
                transition-transform
                duration-500
                hover:scale-105
              "
            />
          </div>
        </Reveal>

        {/* ───────────────── CONTENT ───────────────── */}
        <DirectionReveal delay={0.12}>
          <div className="mx-auto max-w-140 ">
            {/* Heading */}
            <div className="hidden xl:block mb-7 text-center">
              <h2
                className="
                  mb-3
                  font-serif
                  text-[28px]
                  font-bold
                  text-[#1a1a1a]
                  md:text-[38px]
                "
              >
                Our Story
              </h2>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-7 bg-[#c5b99a]" />
                <span className="text-base text-[#6b8c3e]">🌿</span>
                <div className="h-px w-7 bg-[#c5b99a]" />
              </div>
            </div>

            {/* Body */}
            <div
              className="
                space-y-5
                text-center
                text-[14px]
                leading-8
                text-[#777]
                md:text-[15px]
              "
            >
              <p>
                We understand that life in Lagos can be fast, stressful and
                demanding. TheraHome brings the spa to you — combining expert
                care, natural products and convenience to help you relax,
                restore and feel your best.
              </p>

              <p className="hidden sm:block">
                Founded by wellness enthusiasts who believe self-care should not
                be a luxury, TheraHome has served hundreds of clients across
                Lagos each one leaving more relaxed, restored, and glowing.
              </p>
            </div>

            {/* ───────────────── STATS ───────────────── */}
            <div
              className="
                mt-10
                grid
                grid-cols-3
                gap-3
                border-t
                border-[#e8e4da]
                pt-7
                md:gap-6
              "
            >
              {STORY_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-xl
                    border
                    border-[#e8e4da]
                    bg-hero-bg
                    px-2
                    py-4
                    text-center
                    md:border-0
                    md:bg-transparent
                    md:p-0
                  "
                >
                  <div
                    className="
                      font-serif
                      text-[22px]
                      font-bold
                      leading-none
                      text-primary-green
                      md:text-[28px]
                    "
                  >
                    {stat.num}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[11px]
                      text-[#999]
                      md:mt-2
                      md:text-[12px]
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DirectionReveal>
      </div>
    </section>
  );
}
