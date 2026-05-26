import { Phone, Mail, MapPin } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import HeadingLeave from "./HeadingLeave";
import ServiceReveal from "../Animations/ServiceReveal";

// import { LucideIcon } from "lucide-react";

// possible icon names
type IconType = "whatsapp" | "phone" | "mail" | "pin";

// structure of each object
type ContactItem = {
  icon: IconType;
  label: string;
  value: string;
  sub: string | null;
};

const CONTACT_INFO: ContactItem[] = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "0812 345 6789",
    sub: "Chat with us on WhatsApp",
  },

  {
    icon: "phone",
    label: "Call Us",
    value: "0812 345 6789",
    sub: "Mon – Sun: 7:00 AM – 9:00 PM",
  },

  {
    icon: "mail",
    label: "Email Us",
    value: "hello@therahome.com",
    sub: "We'll reply as soon as possible",
  },

  {
    icon: "pin",
    label: "Our Service Areas",
    value:
      "Lagos Mainland, Ikoyi, Victoria Island, Lekki, Ajah, Surulere and more.",

    sub: null,
  },
];

// Record<Key,Value>
const iconMap: Record<IconType, React.ElementType> = {
  whatsapp: FaWhatsapp,
  phone: Phone,
  mail: Mail,
  pin: MapPin,
};

export default function ContactInfo() {
  return (
    <div className="bg-[#faf8f4] pt-6 md:pt-8 ">
      <ServiceReveal from="right">
        {/* heading */}

        <div className="text-center mb-4">
          <h3
            className="
          text-2xl
          font-bold
          text-black
          "
          >
            Contact Information
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

        <div className="flex flex-col gap-4 ">
          {CONTACT_INFO.map((contact, index) => {
            const IconComp = iconMap[contact.icon];

            return (
              <div
                key={index}
                className={`
                flex
                gap-4
                py-5
                px-4 md:px-6
                items-start
                shadow-sm

                ${index !== CONTACT_INFO.length - 1 ? "" : ""}
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

                {/* content */}

                <div className="flex-1">
                  <h4
                    className="
                    text-sm
                    font-bold
                    text-ink
                    mb-1
                    "
                  >
                    {contact.label}
                  </h4>

                  <p
                    className="
                    text-sm
                    font-semibold
                    text-primary-green
                    mb-1
                    "
                  >
                    {contact.value}
                  </p>

                  {contact.sub && (
                    <p
                      className="
                      text-xs
                      text-ghost
                      "
                    >
                      {contact.sub}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ServiceReveal>
    </div>
  );
}
