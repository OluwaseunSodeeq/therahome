import Reveal from "../Animations/Reveal";
import { bookingPrices, transportZones } from "../data";
import BookingPriceCard from "./BookingPriceCard";
import TransportZoneCard from "./TransportZoneCard";

export default function Homepricing() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 font-geo">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-12">
            <p
              className="
                text-xs
                font-bold
                tracking-[0.15em]
                uppercase
                text-lime-700
                mb-3
              "
            >
              TRANSPARENT PRICING
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-neutral-900
              "
            >
              Simple, Clear & Fair
            </h2>
          </div>
        </Reveal>

        {/* PRICING CONTAINER */}
        <Reveal delay={0.1}>
          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-stone-200
              grid
              grid-cols-1
              md:grid-cols-[1fr_2fr]
            "
          >
            {/* LEFT SIDE */}
            <div
              className="
                bg-stone-50
                p-8
                border-b
                md:border-b-0
                md:border-r
                border-stone-200
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  tracking-[0.12em]
                  uppercase
                  text-neutral-500
                  mb-8
                "
              >
                MINIMUM BOOKING
              </p>

              <div className="grid grid-cols-2 gap-5">
                {bookingPrices.map((item) => (
                  <BookingPriceCard key={item.label} item={item} />
                ))}
              </div>

              <p
                className="
                  mt-8
                  text-xs
                  leading-relaxed
                  text-neutral-500
                "
              >
                Due to logistics and to maintain premium service quality,
                transportation is calculated based on location.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="p-8">
              <p
                className="
                  text-xs
                  font-bold
                  tracking-[0.12em]
                  uppercase
                  text-neutral-500
                  mb-8
                "
              >
                ZONE-BASED TRANSPORT FEES
              </p>

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-3
                  gap-4
                "
              >
                {transportZones.map((zone) => (
                  <TransportZoneCard key={zone.zone} zone={zone} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* FOOTNOTE */}
        <Reveal delay={0.2}>
          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              text-sm
              text-neutral-500
            "
          >
            <span>ℹ️</span>

            <p>Final pricing is confirmed after booking.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
