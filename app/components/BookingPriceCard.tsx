import { BookingPrice } from "@/types/defaultType";

type BookingPriceCardProps = {
  item: BookingPrice;
};

export default function BookingPriceCard({ item }: BookingPriceCardProps) {
  return (
    <div>
      <p className="text-sm text-neutral-500 mb-1">{item.label}</p>

      <h3
        className="
          text-3xl
          font-bold
          text-neutral-900
        "
      >
        {item.price}
      </h3>

      <p className="text-xs text-neutral-400 mt-1">{item.description}</p>
    </div>
  );
}
