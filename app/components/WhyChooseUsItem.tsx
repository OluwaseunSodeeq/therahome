import { WhyChooseUsItem } from "@/types/defaultType";

type WhyChooseUsProps = {
  item: WhyChooseUsItem;
};

export default function WhyChooseItem({ item }: WhyChooseUsProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
      "
    >
      <span
        className="
          text-lime-700
          text-sm
          shrink-0
        "
      >
        ✅
      </span>

      <span
        className="
          text-sm
          text-neutral-600
        "
      >
        {item.text}
      </span>
    </div>
  );
}
