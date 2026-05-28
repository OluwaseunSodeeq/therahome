"use client";

import Image from "next/image";
import ServiceReveal from "../../app/Animations/ServiceReveal";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/bg-leaves.png"
          alt="Wellness background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* GREEN OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-[#1e2d14]/90
          via-[#1e2d14]/75
          to-[#1e2d14]/60
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-8
          px-6
          py-14
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* LEFT TEXT */}
        <ServiceReveal from="left">
          <div>
            <h2
              className="
                mb-3
                font-serif
                text-3xl
                font-bold
                leading-tight
                text-white
                md:text-5xl
              "
            >
              Ready to Relax?
            </h2>

            <p
              className="
                max-w-md
                text-base
                leading-7
                text-white/75
              "
            >
              Book your session today and let us bring wellness to you.
            </p>
          </div>
        </ServiceReveal>

        {/* BUTTONS */}
        <ServiceReveal from="right" delay={0.12}>
          <div className="flex flex-wrap gap-4">
            {/* PRIMARY BUTTON */}
            <a
              href="#"
              className="
                flex
                items-center
                gap-2
                rounded-lg
                bg-white
                px-6
                py-4
                text-sm
                font-bold
                text-primary-green
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-stone-100
              "
            >
              Book Your Session
              <span>📅</span>
            </a>

            {/* SECONDARY BUTTON */}
            <a
              href="#"
              className="
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/50
                px-6
                py-4
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white/10
              "
            >
              Chat on WhatsApp
              <span>💬</span>
            </a>
          </div>
        </ServiceReveal>
      </div>
    </section>
  );
}
// =========================
import Reveal from "../../app/Animations/Reveal";
import PricingBoard from "./PricingBoard";

export default function PricingSection() {
  return (
    <section className="bg-white px-7 py-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <Reveal>
          <div className="mb-12 text-center">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.13em] text-primary-green">
              Transparent Pricing
            </div>

            <h2 className="mb-3 font-serif text-3xl font-bold text-stone-900 md:text-5xl">
              Simple, Clear & Fair
            </h2>

            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-7 bg-stone-300" />
              <span className="text-base text-primary-green">🌿</span>
              <div className="h-px w-7 bg-stone-300" />
            </div>
          </div>
        </Reveal>

        {/* MAIN PRICING CARD */}
        <ServiceReveal delay={0.1}>
          <PricingBoard text="Applies to all services and locations" />
        </ServiceReveal>

        {/* FOOTNOTE */}
        <ServiceReveal delay={0.2}>
          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-stone-200
              bg-amber-50/40
              px-6
              py-3
            "
          >
            <span className="text-sm text-amber-600">ℹ️</span>

            <span className="text-sm text-stone-500">
              Final pricing is confirmed after your booking based on your exact
              location.
            </span>
          </div>
        </ServiceReveal>
      </div>
    </section>
  );
}
{
  /* 

       <div
            className="
              grid
              overflow-hidden
              rounded-2xl
              border
              border-stone-200
              lg:grid-cols-[340px_1fr]
            "
          >
            
            <div
              className="
                border-b
                border-stone-200
                bg-stone-50
                p-10
                lg:border-b-0
                lg:border-r
              "
            >
              <div
                className="
                  mb-7
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-widest
                  text-stone-500
                "
              >
                Minimum Booking
              </div>

              <div className="mb-7 grid grid-cols-2 gap-6">
                {minimumBookings.map((booking) => (
                  <div key={booking.zone}>
                    <div className="mb-1.5 text-sm text-stone-500">
                      {booking.zone}
                    </div>

                    <div className="font-serif text-4xl font-bold leading-none text-stone-900">
                      {booking.amount}
                    </div>

                    <div className="mt-1.5 text-xs text-stone-400">Minimum</div>
                  </div>
                ))}
              </div>

              <div
                className="
                  border-t
                  border-stone-200
                  pt-5
                  text-xs
                  leading-7
                  text-stone-400
                "
              >
                Applies to all services and locations
              </div>
            </div>

            <div className="p-10">
              <div
                className="
                  mb-7
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-widest
                  text-stone-500
                "
              >
                Zone-Based Transport Fees
              </div>

              <div
                className="
                  grid
                  gap-4
                  md:grid-cols-2
                  xl:grid-cols-3
                "
              >
                {transportZones.map((zone) => (
                  <div
                    key={zone.zone}
                    className="
                      rounded-xl
                      border
                      border-stone-200
                      bg-stone-50
                      p-5
                    "
                  >
                    <div className="mb-1 text-sm font-bold text-stone-900">
                      {zone.zone}
                    </div>

                    <div className="mb-4 text-xs leading-6 text-stone-400">
                      {zone.area}
                    </div>

                    <div className="font-serif text-2xl font-bold text-primary-green">
                      {zone.fee}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> 
*/
}
