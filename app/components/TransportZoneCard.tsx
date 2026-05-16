import { TransportZone } from "@/types/defaultType";

type TransportZoneCardProps = {
  zone: TransportZone;
};

export default function TransportZoneCard({ zone }: TransportZoneCardProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-stone-200
        bg-stone-50
        p-5
      "
    >
      <h3
        className="
          text-sm
          font-bold
          text-neutral-900
          mb-1
        "
      >
        {zone.zone}
      </h3>

      <p
        className="
          text-xs
          text-neutral-400
          mb-4
        "
      >
        {zone.area}
      </p>

      <p
        className="
          text-2xl
          font-bold
          text-green-900
        "
      >
        {zone.fee}
      </p>
    </div>
  );
}
