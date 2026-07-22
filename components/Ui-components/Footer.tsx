"use client";
import { comboServices, navLinks } from "../../app/data";
import { CSSProperties, useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

import {
  Clock,
  Globe,
  LucideIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import { useFunctionalitiesContext } from "@/contexts/Functionalities";
export interface HeroBullet {
  Icon: LucideIcon;
  text: string;
  link: string;
}
const message = "Hello, I would like to know more about your singleservices.";
// Phone number used for WhatsApp link (digits only, with country code)
const phone = "+2347064347587";
const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
  message,
)}`;
const SOCIALS = [
  {
    Icon: FaInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/thera_home1/",
  },
  {
    Icon: Globe,
    label: "Website",
    link: "/home",
  },
  {
    Icon: MessageCircle,
    label: "Chat",
    link: whatsappLink,
  },
  {
    Icon: FaFacebook,
    label: "FB",
    link: "https://web.facebook.com/profile.php?id=61579577205712",
  },
];

export const contactInfo = [
  { Icon: MapPin, text: " Berger Lagos, Nigeria" },
  { Icon: Phone, text: "+234 706 434 7587" },
  { Icon: FaWhatsapp, text: "+234 706 434 7587" },
  { Icon: Mail, text: "therahomeng@gmail.com" },
  { Icon: Clock, text: "9:00 AM – 8:00 PM (Daily)" },
];

export default function Footer() {
  // const [email, setEmail] = useState<string>("");
  const [loaded, setLoaded] = useState<boolean>(false);
  const { toggleBookingForm, setSelectedService } = useFunctionalitiesContext();

  function bookThisMassage(service: string) {
    toggleBookingForm();
    setSelectedService(service);
    toast.success(`${service} selected!`);
  }
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);

    return () => clearTimeout(timer);
  }, []);

  const anim = (delay: number): CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(50px)",
    transition: `all .8s ease ${delay}s`,
  });

  return (
    <footer className="relative  font-ego pt-16 max-w-7xl mx-auto px-6 lg:px-0 bg-white ">
      <div className="w-full mx-auto" style={anim(0.06)}>
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:pb-6">
          {/* BRAND */}
          <div>
            <Logo />
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    block
                    text-sm
                     text-secondary-green
                    transition-colors duration-200
                    hover:text-primary-green
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm text-secondary-green font-bold tracking-wider mb-5">
              Our Services
            </h3>

            <div className="space-y-3">
              {comboServices.map((service) => (
                <button
                  key={service.name}
                  onClick={() => bookThisMassage(service.name)}
                  className="
                    block
                    text-sm
                    text-secondary-green
                    transition-colors duration-200
                    hover:text-primary-green
                    cursor-pointer
                  "
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm text-secondary-green font-bold tracking-wider mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const { text, Icon } = contact;
                return (
                  <div key={index} className="flex gap-3 items-center">
                    <span className="text-[14px] text-secondary-green lg:text-primary-green">
                      <Icon size={18} />
                    </span>

                    <span className="text-sm text-secondary-green hover:text-primary-green leading-6">
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-5 text-secondary-green">
              Newsletter
            </h3>

            <p className="text-sm text-secondary-green leading-7 mb-5">
              Subscribe for wellness tips and offers.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map((icon, index) => {
                const { Icon, link } = icon;

                return (
                  <Link
                    key={index}
                    href={link}
                    className="
                    w-9 h-9
                    rounded-full
                    border border-white/20
                    flex items-center justify-center
                    text-sm
                    transition-all duration-200
                    text-primary-green
                    hover:bg-primary-green
                    hover:text-white
                    hover:border-white
                  "
                  >
                    <span className="">
                      <Icon size={18} />
                    </span>
                  </Link>
                );
              })}
            </div>
            {/* <div className="flex overflow-hidden rounded-lg border border-white/20">
              <input
                type="email"
                placeholder="Your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  flex-
                  bg-secondary-green/10
                  px-4 py-3
                  text-sm
                  outline-none
                  placeholder:text-white/10
                "
              />

              <button
                className="
                  bg-[#6b8c3e]
                  px-4
                  outline-primary-green
                  transition-colors duration-200
                  hover:bg-[#557332]
                "
              >
                →
              </button>
            </div> */}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            border-t
            py-4
            w-full mx-auto
            text-primary-green
            text-center
          "
        >
          <p className="text-xs ">© 2026 TheraHome. All rights reserved.</p>

          <div className="gap-6 hidden">
            {["Privacy Policy", "Terms & Conditions"].map((item) => (
              <Link
                key={item}
                href="#"
                className="
                  text-xs
                  
                  transition-colors duration-200
                  hover:text-secondary-green
                "
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
