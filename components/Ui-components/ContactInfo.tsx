"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
// The Functionalities context exports the hook as the default export
import { useFunctionalitiesContext } from "@/contexts/Functionalities";

import { FaWhatsapp } from "react-icons/fa";
import HeadingLeave from "./HeadingLeave";
import ServiceReveal from "../../app/Animations/ServiceReveal";

// COnatct Info
const emailAddress = "therahomeng@gmail.com";
const phone = "+2347064347587";
const message = "Hello, I would like to know more about your services.";
const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
  message,
)}`;
// possible icon names
type IconType = "whatsapp" | "phone" | "mail" | "pin";

// structure of each object
type ContactItem = {
  icon: IconType;
  label: string;
  value: string;
  sub: string | null;
  link?: string;
};

const CONTACT_INFO: ContactItem[] = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: phone,
    sub: "Chat with us on WhatsApp",
    link: whatsappLink,
  },

  {
    icon: "phone",
    label: "Call Us",
    value: phone,
    sub: "Mon – Sun: 7:00 AM – 9:00 PM",
    link: `tel:${phone}`,
  },

  {
    icon: "mail",
    label: "Email Us",
    value: emailAddress,
    sub: "We'll reply as soon as possible",
    link: `mailto:${emailAddress}`,
  },
  {
    icon: "pin",
    label: "Our Service Areas",
    value:
      "Lagos Mainland, Ikoyi, Victoria Island, Lekki, Ajah, Surulere and more.",

    sub: null,
    link: "#",
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
  const { handleCall } = useFunctionalitiesContext();
  return (
    <div className="min-w-0 bg-hero-bg pt-6 md:pt-8 overflow-hidden">
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
            <div className="w-6 h-px bg-parchment" />

            <HeadingLeave />

            <div className="w-6 h-px bg-parchment" />
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
                  {contact.icon === "phone" ? (
                    <button onClick={handleCall} className="cursor-pointer">
                      <IconComp
                        size={18}
                        className="
                    text-primary-green
                    "
                      />
                    </button>
                  ) : (
                    <Link
                      href={contact.link || "#"}
                      target="_blank"
                      className="cursor-pointer"
                    >
                      <IconComp
                        size={18}
                        className="
                    text-primary-green
                    "
                      />
                    </Link>
                  )}
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
