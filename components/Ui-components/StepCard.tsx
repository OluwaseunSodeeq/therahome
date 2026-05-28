// import { Step } from "../data";

import { Step } from "@/types/defaultType";

type StepCardProps = {
  step: Step;
  isLast: boolean;
};

export default function StepCard({ step, isLast }: StepCardProps) {
  return (
    <div className="relative flex-1 text-center font-geo">
      {/* CONNECTOR LINE */}
      {!isLast && (
        <div
          className="
            hidden md:block
            absolute
            top-7
            left-[55%]
            right-[-45%]
            border-t-2
            border-dashed
            border-lime-200
          "
        />
      )}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
        "
      >
        {/* ICON */}
        <div
          className="
            relative
            w-14
            h-14
            rounded-full
            bg-green-900
            flex
            items-center
            justify-center
            text-2xl
            shadow-lg
          "
        >
          {step.icon}

          {/* NUMBER BADGE */}
          <div
            className="
              absolute
              -top-1
              -right-1
              w-5
              h-5
              rounded-full
              bg-lime-600
              text-white
              text-[10px]
              font-bold
              flex
              items-center
              justify-center
            "
          >
            {step.num}
          </div>
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-3
            mb-2
            text-sm
            font-bold
            text-neutral-900
          "
        >
          {step.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            max-w-40
            text-xs
            leading-relaxed
            text-neutral-500
          "
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}
