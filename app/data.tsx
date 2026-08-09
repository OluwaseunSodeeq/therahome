import {
  BookingPrice,
  Service,
  Step,
  Testimonial,
  TransportZone,
  TrustItem,
  WhyChooseUsItem,
} from "@/types/defaultType";
import { Product as ProductType } from "@/types/product";
import {
  Leaf,
  ShieldCheck,
  BadgeCheck,
  Gift,
  Truck,
  Headphones,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/home" },
  { name: "Services", href: "/services" },
  { name: "Pricing & Shop", href: "/pricing-shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const hmservices = [
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
    id: 1,
    img: "/service-img.png",
    icon: "🫧",
    name: "Deep Tissue Massage",
    desc: "Release deep-seated tension and restore balance to your body.",
  },
  {
    id: 2,
    img: "/service-img.png",
    icon: "🌿",
    name: "Swedish Massage",
    desc: "Gentle, flowing strokes to calm your mind and ease stress.",
  },
  {
    id: 3,
    img: "/service-img.png",
    icon: "🔥",
    name: "Hot Stone Massage",
    desc: "Warm stones melt away tension and bring deep relaxation.",
  },
  {
    id: 4,
    img: "/service-img.png",
    icon: "🦶",
    name: "Foot Reflexology",
    desc: "Stimulate pressure points to improve circulation and overall wellness.",
  },
  {
    id: 5,
    img: "/service-img.png",
    icon: "💆",
    name: "Full Body Relaxation",
    desc: "A complete relaxation experience for body, mind and soul.",
  },
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
    area: "Ogba, Ikeja axis",
    fee: "₦5k - ₦10k",
  },

  {
    zone: "Zone 2 (Mid)",
    area: "Surulere and other Mainlands",
    fee: "₦8k - ₦20k",
  },

  {
    zone: "Zone 3 (Far / Island)",
    area: "Ikoyi and other Lagos islands",
    fee: "₦20K+",
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

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Malik Muhammed",
    text: "Absolutely amazing experience. I felt completely relaxed.",
    stars: 5,
  },
  {
    id: 3,
    name: "Amaka Grace",
    text: "The convenience of home wellness is unmatched.",
    stars: 5,
  },
  {
    id: 2,
    name: "Okoro Martins",
    text: "Professional therapists and exceptional service.",
    stars: 5,
  },

  {
    id: 4,
    name: "Fisayo Joseph",
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

// SERVICES PAGE
export const singleServices: readonly Service[] = [
  {
    id: 1,
    name: "Full Body Relaxation Massage",
    desc: "Gentle rhythmic strokes for stress relief.",
    img: "/services/fullbody.png",
    icon: "/icons/full-body.svg",
    duration: "60 mins",
    price: 35000,
  },
  {
    id: 7,
    name: "Back Relief Therapy",
    desc: "Neck, shoulder and lower back focus.",
    img: "/services/back_relif.png",
    icon: "/icons/back-relief.svg",
    duration: "60 mins",
    price: 30000,
  },
  {
    id: 2,
    name: "Deep Tissue Massage",
    desc: "Targets chronic tension and muscle knots.",
    img: "/services/deepTissues.png",
    icon: "/icons/deep-tissue.svg",
    duration: "60 mins",
    price: 40000,
  },

  {
    id: 3,
    name: "Herbal Lymphatic Detox",
    desc: "Supports circulation and reduces bloating.",
    img: "/services/herbal_detox.png",
    icon: "/icons/herbal.svg",
    duration: "60 mins",
    price: 45000,
  },
  {
    id: 5,
    name: "Hot Stone Therapy",
    desc: "Deep relaxation using heated stones.",
    img: "/services/hot_stones.png",
    icon: "/icons/hot-stone.svg",
    duration: "60 mins",
    price: 50000,
  },

  {
    id: 4,
    name: "Muscle Recovery Therapy",
    desc: "Focused relief for body pain and stiffness.",
    img: "/services/muscle_recovery.png",
    icon: "/icons/muscle-recovery.svg",
    duration: "60 mins",
    price: 45000,
  },

  {
    id: 6,
    name: "Thai Stretch Therapy",
    desc: "Assisted stretching for flexibility and mobility.",
    img: "/services/thai_stretch.png",
    icon: "/icons/thai-stretch.svg",
    duration: "60 mins",
    price: 50000,
  },

  {
    id: 8,
    name: "Foot Reflexology",
    desc: "Relieves fatigue",
    img: "/services/foot_reflex.png",
    icon: "/icons/reflexology.svg",
    duration: "30 mins",
    price: 20000,
  },
];

export const comboServices: readonly Service[] = [
  {
    id: 1,
    name: "Relax & Restore",
    desc: "Relaxation Massage + Hot Stone",
    img: "/services/hot_stones.png",
    icon: "/icons/hot-stone.svg",
    duration: "90 mins",
    price: 65000,
  },

  {
    id: 2,
    name: "Detox & Drain",
    desc: "Lymphatic Therapy + Foot & Leg Therapy",
    img: "/services/detox_and_drain.png",
    icon: "/icons/herbal.svg",
    duration: "90 mins",
    price: 70000,
  },

  {
    id: 3,
    name: "Pain Relief Intensive",
    desc: "Deep Tissue Massage + Muscle Recovery Therapy",
    img: "/service-img.png",
    icon: "/icons/deep-tissue.svg",
    duration: "90 mins",
    price: 75000,
  },

  {
    id: 4,
    name: "Stretch & Release",
    desc: "Thai Stretch Therapy + Relaxation Massage",
    img: "/services/stretch_release.png",
    icon: "/icons/thai-stretch.svg",
    duration: "90 mins",
    price: 70000,
  },

  {
    id: 5,
    name: "Full Body Reset",
    desc: "Relaxation Massage + Deep Tissue Massage + Hot Stone Therapy",
    img: "/services/fullbody.png",
    icon: "/icons/hot-stone.svg",
    duration: "120 mins",
    price: 90000,
  },

  {
    id: 6,
    name: "Advanced Recovery",
    desc: "Lymphatic Therapy + Deep Tissue Massage + Thai Stretch Therapy",
    img: "/services/advanced.png",
    icon: "/icons/lotus.svg",
    duration: "120 mins",
    price: 100000,
  },
];

export const allServices = [...singleServices, ...comboServices] as const;

export const shopProducts: ProductType[] = [
  {
    id: "1",
    name: "Ease Spray",
    desc: "A fine, fast-absorbing mist designed to relieve body pain. Perfect for immediate, hands-free relief from daily fatigue and physical stress.",
    price: 15000,
    image: "/products/ease_spray_oil.png",
  },

  {
    id: "2",
    name: "Serene Massage Oil",
    desc: "A silky, nocturnal elixir crafted to quiet the mind. Envelops the body in a calming aromatic veil to prepare you for deep relaxation and sleep.",
    price: 15000,
    image: "/products/serene_oil.png",
  },
  {
    id: "3",
    name: "Ease Botanical Liniment",
    desc: "A rich, artisanal balm that melts into the skin. Infused with soothing botanicals to gently knead away deep tension and localized discomfort. Effective for joint pains.",
    price: 10000,
    image: "/products/ease_limi.png",
  },
  {
    id: "4",
    name: "Soft Relief Massage Oil",
    desc: "A lightweight body oil formulated for general body aches. Delivers smooth glide and delicate warmth to ease minor physical strain while leaving skin glowing.",
    price: 12000,
    image: "/products/soft_relief_oil.png",
  },
];

export const trustItems: TrustItem[] = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Made with high-quality natural ingredients",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Effective",
    description: "Dermatologically tested and safe for all skin types",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "Professional-grade products for real results.",
  },
  {
    icon: Gift,
    title: "Perfect for Gifting",
    description: "Beautifully packaged for your loved ones.",
  },

  // {
  //   icon: "🚚",
  //   title: "Fast Delivery",
  //   desc: "Quick and reliable delivery straight to your doorstep.",
  // },
  // {
  //   icon: "🌿",
  //   title: "Premium Quality",
  //   desc: "Only carefully selected wellness products and ingredients.",
  // },
  // {
  //   icon: "🔒",
  //   title: "Secure Payments",
  //   desc: "Safe and protected payment experience for every order.",
  // },
  // {
  //   icon: "💚",
  //   title: "Trusted Wellness",
  //   desc: "Loved by clients who value comfort, care and relaxation.",
  // },
];
export const bannerShopItems: TrustItem[] = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Across Lagos",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% Safe Checkout",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "We're here to help",
  },
];
