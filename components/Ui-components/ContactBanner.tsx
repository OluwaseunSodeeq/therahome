"use client";

import { CalendarIcon } from "lucide-react";
import ServiceReveal from "../../app/Animations/ServiceReveal";
import Link from "next/link";

export default function ContactBanner() {
  return (
    <section
      className="
        relative
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[url('/bg-leaves.png')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      />

      <div
        className="relative h-full px-6 md:px-10 lg:px-12"
        style={{
          background: `
    linear-gradient(
      to right,
      rgba(26,46,26,1) 0%,
      rgba(26,46,26,0.98) 26%,
      rgba(26,46,26,0.88) 46%,
      rgba(26,46,26,0.0) 72%
    )
  `,
        }}
      >
        <ServiceReveal from="left">
          <div className=" ">
            {/*  Content */}
            <div
              className="
                px-6 py-12
                md:px-10 md:py-14
                lg:px-14
                flex flex-col justify-center
              "
            >
              <h2
                className="
                  font-geo
                  text-white
                  font-bold
                  leading-tight
                  text-[28px]
                  md:text-[38px]
                  mb-4
                "
              >
                Ready to Relax ?
              </h2>

              <p
                className="
                  text-white/75
                  leading-8
                  text-sm md:text-[15px]
                  max-w-[380px]
                  mb-8
                "
              >
                Book your session today and let us wellness to you.
              </p>

              <div>
                <Link
                  href="/booking"
                  className="
                    inline-flex items-center gap-2
                    rounded-xl
                    border border-white/30
                    bg-white
                    px-6 py-3
                    text-sm font-semibold
                    text-primary-green
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#f5f3ee]
                  "
                >
                  Book Your Session
                  <CalendarIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </ServiceReveal>
      </div>
    </section>
  );
}
