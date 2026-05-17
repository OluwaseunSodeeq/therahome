import {
  BookingPrice,
  Product,
  Step,
  Testimonial,
  TransportZone,
  WhyChooseUsItem,
} from "@/types/defaultType";
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

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 1,
    text: "Mobile spa convenience",
  },

  {
    id: 2,
    text: "Discreet & reliable service",
  },

  {
    id: 3,
    text: "High-quality oils & products",
  },

  {
    id: 4,
    text: "Tailored to your needs",
  },

  {
    id: 5,
    text: "Hygienic & professional setup",
  },

  {
    id: 6,
    text: "Your comfort is our priority",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Essential Massage Oil",
    price: "₦15,000",
    img: "/product1.png",
  },

  {
    id: 2,
    name: "Aromatherapy Candle",
    price: "₦12,000",
    img: "/product2.png",
  },

  {
    id: 3,
    name: "Relaxation Kit",
    price: "₦25,000",
    img: "/product4.png",
  },

  {
    id: 4,
    name: "Herbal Therapy Set",
    price: "₦18,000",
    img: "/product5.png",
  },
];
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Oluwatoyin Sarah",
    text: "Absolutely amazing experience. I felt completely relaxed.",
    stars: 5,
  },

  {
    id: 2,
    name: "David Smith",
    text: "Professional therapists and exceptional service.",
    stars: 5,
  },

  {
    id: 3,
    name: "Amaka Grace",
    text: "The convenience of home wellness is unmatched.",
    stars: 5,
  },

  {
    id: 4,
    name: "Ntingso Macaulay",
    text: "Highly recommend TheraHome to anyone.",
    stars: 5,
  },
  // {
  //   id: 5,
  //   name: "Malik Muhammed",
  //   text: "Absolutely amazing experience. I felt completely relaxed.",
  //   stars: 5,
  // },

  // {
  //   id: 6,
  //   name: "Bello Fadekemi",
  //   text: "Professional therapists and exceptional service.",
  //   stars: 5,
  // },

  // {
  //   id: 7,
  //   name: "Oluwaseun Soddeq",
  //   text: "The convenience of home wellness is unmatched.",
  //   stars: 5,
  // },

  // {
  //   id: 8,
  //   name: "David Adeleke",
  //   text: "Highly recommend TheraHome to anyone.",
  //   stars: 5,
  // },
];
export const bannerFeatures: string[] = [
  "🔒 Secure Booking",
  "👩‍⚕️ Professional Therapists",
  "✅ Satisfaction Guaranteed",
];
