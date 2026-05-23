import HeadingLeave from "./HeadingLeave";
import { ShieldCheck, House, Gem, CalendarDays } from "lucide-react";

type IconType = "professional" | "house" | "gem" | "calendar";

type WhyLoveItem = {
  icon: IconType;
  title: string;
  desc: string;
};

const WHY_LOVE: WhyLoveItem[] = [
  {
    icon: "professional",
    title: "Professional Therapists",
    desc: "Trained, certified and experienced therapists you can trust.",
  },

  {
    icon: "house",
    title: "Home Service",
    desc: "We come to you with everything needed for your comfort.",
  },

  {
    icon: "gem",
    title: "Premium Experience",
    desc: "Top-quality oils, products, and equipment for the best care.",
  },

  {
    icon: "calendar",
    title: "Flexible Booking",
    desc: "Book at your convenience, including weekends.",
  },
];

const iconMap: Record<IconType, React.ElementType> = {
  professional: ShieldCheck,
  house: House,
  gem: Gem,
  calendar: CalendarDays,
};
//   {
//     icon: "👩‍⚕️",
//     title: "Professional Therapists",

//     desc: "Trained, certified and experienced therapists you can trust.",
//   },

//   {
//     icon: "🏠",
//     title: "Home Service",

//     desc: "We come to you with everything needed for your comfort.",
//   },

//   {
//     icon: "💆",
//     title: "Premium Experience",

//     desc: "Top-quality oils, products and equipment for the best care.",
//   },

//   {
//     icon: "📅",
//     title: "Flexible Booking",

//     desc: "Book at your convenience including weekends.",
//   },
// ];

export default function WhyLoveUs() {
  return (
    <div className="bg-[#faf8f4] pt-6 md:pt-8 ">
      {/* heading */}

      <div className="text-center mb-4">
        <h3
          className="
          text-2xl
          font-bold
          text-black
          "
        >
          Why Clients Love Us
        </h3>
      </div>
      <div>
        <div
          className="
          flex
          items-center
          justify-center
          gap-2
          "
        >
          <div className="w-6 h-[1px] bg-parchment" />

          <HeadingLeave />

          <div className="w-6 h-[1px] bg-parchment" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {WHY_LOVE.map((item, index) => {
          const IconComp = iconMap[item.icon];
          return (
            <div
              key={index}
              className={`
              flex
              items-start
              px-4 md:px-6
              gap-4 pb-3
              pt-4 shadow-sm
              ${index !== WHY_LOVE.length - 1 ? "" : ""}
              `}
            >
              {/* icon */}
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-warm
                  border
                  border-primary-green
                  flex
                  items-center
                  justify-center
                  shrink-0
                  "
              >
                <IconComp
                  size={18}
                  className="
                    text-primary-green
                    "
                />
              </div>
              {/* <div
                className="
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                text-xl

                shrink-0
                "
              >
                {item.icon}
              </div> */}

              {/* text */}

              <div>
                <h4
                  className="
                  text-sm
                  font-bold
                  text-ink
                  mb-1
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                  text-[13px]
                  text-mist
                  leading-6
                  "
                >
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
