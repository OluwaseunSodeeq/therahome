import { bookingPrices, transportZones } from "../data";
import BookingPriceCard from "./BookingPriceCard";
import TransportZoneCard from "./TransportZoneCard";
type PricingProps = {
  text: string;
};
export default function PricingBoard({ text }: PricingProps) {
  return (
    <div
      className="
                      overflow-hidden
                      rounded-2xl
                      border
                      border-stone-200
                      grid
                      grid-cols-1
                      lg:grid-cols-[1fr_2fr]
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
          {text}
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
  );
}
