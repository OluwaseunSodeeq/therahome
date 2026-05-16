import { BookingPrice, Step, TransportZone } from "@/types/defaultType";
import { Clock, Mail, MapPin, Phone, Smartphone } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/home" },
  { name: "Services", href: "/services" },
  { name: "Pricing & Shop", href: "/pricing-shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  "Deep Tissue Massage",
  "Swedish Massage",
  "Hot Stone Massage",
  "Reflexology",
  "Herbal Therapy",
  "Full Body Relaxation",
  "Corporate / Home Service",
];

export const serviceCards = [
  {
    img: "/service-img.png",
    icon: "🫧",
    name: "Deep Tissue Massage",
    desc: "Release deep-seated tension and restore balance to your body.",
  },
  {
    img: "/service-img.png",
    icon: "🌿",
    name: "Swedish Massage",
    desc: "Gentle, flowing strokes to calm your mind and ease stress.",
  },
  {
    img: "/service-img.png",
    icon: "🔥",
    name: "Hot Stone Massage",
    desc: "Warm stones melt away tension and bring deep relaxation.",
  },
  {
    img: "/service-img.png",
    icon: "🦶",
    name: "Reflexology",
    desc: "Stimulate pressure points to improve circulation and overall wellness.",
  },
  {
    img: "/service-img.png",
    icon: "💆",
    name: "Full Body Relaxation",
    desc: "A complete relaxation experience for body, mind and soul.",
  },
  // {
  //   img: "/service-img.png",
  //   icon: "🌱",
  //   name: "Herbal Therapy (with Poultice)",
  //   desc: "Natural herbs to detoxify, ease pain and restore energy flow.",
  // },
];

export const contactInfo = [
  { icon: <MapPin />, text: "Lagos, Nigeria" },
  { icon: <Phone />, text: "+234 901 234 5678" },
  { icon: <Smartphone />, text: "+234 901 234 5678" },
  { icon: <Mail />, text: "hello@therahome.com" },
  { icon: <Clock />, text: "9:00 AM – 8:00 PM (Daily)" },
];

export const steps: Step[] = [
  {
    num: 1,
    icon: "📅",
    title: "Book Your Session",
    desc: "Choose your service, date, time and location.",
  },

  {
    num: 2,
    icon: "🚗",
    title: "We Come to You",
    desc: "Our therapist arrives fully equipped and on time.",
  },

  {
    num: 3,
    icon: "🧘",
    title: "You Unwind Completely",
    desc: "Relax and enjoy a premium spa experience.",
  },
];

export const bookingPrices: BookingPrice[] = [
  {
    label: "Weekdays",
    price: "₦35,000",
    description: "Minimum",
  },

  {
    label: "Weekends",
    price: "₦50,000",
    description: "Minimum",
  },
];

export const transportZones: TransportZone[] = [
  {
    zone: "Zone 1 (Close)",
    area: "Ikeja, Magodo",
    fee: "+₦5,000",
  },

  {
    zone: "Zone 2 (Mid)",
    area: "Yaba, Surulere, Gbagada",
    fee: "+₦8,000",
  },

  {
    zone: "Zone 3 (Far / Island)",
    area: "Lekki, Victoria Island, Ikoyi",
    fee: "+₦12K – ₦15K",
  },
];
