import { BadgeCheck, Clock3, House, Gem } from "lucide-react";

const trustItems = [
  {
    icon: <BadgeCheck />,
    title: "Certified Therapists",
    desc: "Trained professionals you can trust",
  },
  {
    icon: <House />,
    title: "We Come to You",
    desc: "Home, office or hotel, your comfort, our priority",
  },
  {
    // icon: "🌿",
    icon: <Gem />,
    title: "Premium Experience",
    desc: "Luxury massage with professional care",
  },
  {
    icon: <Clock3 />,
    title: "Flexible Booking",
    desc: "Choose a time that works for you",
  },
];

export default function HmTrustBar() {
  return (
    <div
      className="
      hidden
     
          bg-white
          xl:w-6xl
          shadow-lg
          md:-mt-12
          rounded-2xl
          px-5 md:px-4
          py-7
          xl:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-6
          absolute
          top-140
          z-30
          left-1/2 -translate-x-1/2
          -ml-3
        "
    >
      {trustItems.map((item, index) => (
        <div key={index} className="flex gap-4 items-start ">
          {/* ICON */}
          <div
            className="
                w-11 h-11
                rounded-xl
                bg-[#f0f5eb]
                flex items-center justify-center
                text-xl
                shrink-0
                text-primary-green
              "
          >
            {item.icon}
          </div>

          {/* TEXT */}
          <div>
            <h3
              className="
                  text-sm
                  font-bold
                  text-neutral
                  mb-1
                "
            >
              {item.title}
            </h3>

            <p
              className="
                  text-xs
                  text-primary-green
                  leading-5
                "
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
