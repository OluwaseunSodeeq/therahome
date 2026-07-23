import {
  BookingPrice,
  // Product,
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
    name: "Reflexology",
    desc: "Stimulate pressure points to improve circulation and overall wellness.",
  },
  {
    id: 5,
    img: "/service-img.png",
    icon: "💆",
    name: "Full Body Relaxation",
    desc: "A complete relaxation experience for body, mind and soul.",
  },
  // {
  //   id:1,img: "/service-img.png",
  //   icon: "🌱",
  //   name: "Herbal Therapy (with Poultice)",
  //   desc: "Natural herbs to detoxify, ease pain and restore energy flow.",
  // },
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

// export const products: Product[] = [
//   {
//     id: 1,
//     name: "Essential Massage Oil",
//     price: "₦15,000",
//     img: "/product1.png",
//   },

//   {
//     id: 2,
//     name: "Aromatherapy Candle",
//     price: "₦12,000",
//     img: "/product2.png",
//   },

//   {
//     id: 3,
//     name: "Relaxation Kit",
//     price: "₦25,000",
//     img: "/product4.png",
//   },

//   {
//     id: 4,
//     name: "Herbal Therapy Set",
//     price: "₦18,000",
//     img: "/product5.png",
//   },
// ];
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

// SERVICES PAGE
export const singleServices: readonly Service[] = [
  {
    id: 1,
    name: "Full Body Relaxation Massage",
    desc: "Gentle rhythmic strokes for stress relief.",
    img: "/service-img.png",
    icon: "/icons/full-body.svg",
    duration: "60 mins",
    price: "₦35,000",
  },

  {
    id: 2,
    name: "Deep Tissue Massage",
    desc: "Targets chronic tension and muscle knots.",
    img: "/service-img.png",
    icon: "/icons/deep-tissue.svg",
    duration: "60 mins",
    price: "₦40,000",
  },

  {
    id: 3,
    name: "Herbal Lymphatic Detox",
    desc: "Supports circulation and reduces bloating.",
    img: "/service-img.png",
    icon: "/icons/herbal.svg",
    duration: "60 mins",
    price: "₦45,000",
  },

  {
    id: 4,
    name: "Muscle Recovery Therapy",
    desc: "Focused relief for body pain and stiffness.",
    img: "/service-img.png",
    icon: "/icons/muscle-recovery.svg",
    duration: "60 mins",
    price: "₦45,000",
  },

  {
    id: 5,
    name: "Hot Stone Therapy",
    desc: "Deep relaxation using heated stones.",
    img: "/service-img.png",
    icon: "/icons/hot-stone.svg",
    duration: "60 mins",
    price: "₦50,000",
  },

  {
    id: 6,
    name: "Thai Stretch Therapy",
    desc: "Assisted stretching for flexibility and mobility.",
    img: "/service-img.png",
    icon: "/icons/thai-stretch.svg",
    duration: "60 mins",
    price: "₦50,000",
  },

  {
    id: 7,
    name: "Back Relief Therapy",
    desc: "Neck, shoulder and lower back focus.",
    img: "/service-img.png",
    icon: "/icons/back-relief.svg",
    duration: "60 mins",
    price: "₦30,000",
  },

  {
    id: 8,
    name: "Foot Reflexology",
    desc: "Relieves fatigue (30 minutes).",
    img: "/service-img.png",
    icon: "/icons/reflexology.svg",
    duration: "30 mins",
    price: "₦20,000",
  },
];

export const comboServices: readonly Service[] = [
  {
    id: 1,
    name: "Relax & Restore",
    desc: "Relaxation Massage + Hot Stone",
    img: "/service-img.png",
    icon: "/icons/hot-stone.svg",
    duration: "90 mins",
    price: "₦65,000",
  },

  {
    id: 2,
    name: "Detox & Drain",
    desc: "Lymphatic Therapy + Foot & Leg Therapy",
    img: "/service-img.png",
    icon: "/icons/herbal.svg",
    duration: "90 mins",
    price: "₦70,000",
  },

  {
    id: 3,
    name: "Pain Relief Intensive",
    desc: "Deep Tissue Massage + Muscle Recovery Therapy",
    img: "/service-img.png",
    icon: "/icons/deep-tissue.svg",
    duration: "90 mins",
    price: "₦75,000",
  },

  {
    id: 4,
    name: "Stretch & Release",
    desc: "Thai Stretch Therapy + Relaxation Massage",
    img: "/service-img.png",
    icon: "/icons/thai-stretch.svg",
    duration: "90 mins",
    price: "₦70,000",
  },

  {
    id: 5,
    name: "Full Body Reset",
    desc: "Relaxation Massage + Deep Tissue Massage + Hot Stone Therapy",
    img: "/service-img.png",
    icon: "/icons/hot-stone.svg",
    duration: "120 mins",
    price: "₦90,000",
  },

  {
    id: 6,
    name: "Advanced Recovery",
    desc: "Lymphatic Therapy + Deep Tissue Massage + Thai Stretch Therapy",
    img: "/service-img.png",
    icon: "/icons/lotus.svg",
    duration: "120 mins",
    price: "₦100,000",
  },
];
// export const singleServices: readonly Service[] = [
//   {
//     id: 1,
//     name: "Deep Tissue Massage",
//     desc: "Targets chronic tension and muscles knots.",
//     img: "/service-img.png",
//     icon: "💆",
//     duration: "60 mins",
//     price: "₦40,000",
//   },

//   {
//     id: 2,
//     name: "Swedish Massage",
//     desc: "A relaxing full-body massage designed to improve circulation and calm the mind.",
//     img: "/service-img.png",
//     icon: "🌿",
//     duration: "60 mins",
//     price: "₦30,000",
//   },

//   {
//     id: 3,
//     name: "Hot Stone Therapy",
//     desc: "Warm stones combined with massage techniques for deep relaxation.",
//     img: "/service-img.png",
//     icon: "🔥",
//     duration: "75 mins",
//     price: "₦40,000",
//   },

//   {
//     id: 4,
//     name: "Aromatherapy",
//     desc: "Essential oils blended with massage for stress relief and relaxation.",
//     img: "/service-img.png",
//     icon: "🌸",
//     duration: "60 mins",
//     price: "₦32,000",
//   },

//   {
//     id: 5,
//     name: "Couples Massage",
//     desc: "Enjoy a luxury wellness experience together with your partner.",
//     img: "/service-img.png",
//     icon: "❤️",
//     duration: "90 mins",
//     price: "₦65,000",
//   },

//   // {
//   //   id: 6,
//   //   name: "Reflexology",
//   //   desc: "Pressure-point foot therapy that promotes total body wellness.",
//   //   img: "/service-img.png",
//   //   icon: "🦶",
//   //   duration: "45 mins",
//   //   price: "₦25,000",
//   // },
// ];

export const shopProducts: ProductType[] = [
  {
    id: "1",
    name: "Relaxation Massage Oil",
    desc: "A calming blend of essential oils designed to ease tension and promote deep relaxation.",
    price: 18000,
    image: "/product1.png",
  },
  {
    id: "2",
    name: "Aromatherapy Candle",
    desc: "Hand-poured wellness candle infused with lavender and eucalyptus for a soothing atmosphere.",
    price: 12500,
    image: "/product2.png",
  },
  {
    id: "3",
    name: "Body Scrub Polish",
    desc: "Gentle exfoliating scrub that leaves your skin soft, refreshed and glowing.",
    price: 15000,
    image: "/product5.png",
  },
  {
    id: "4",
    name: "Herbal Bath Salts",
    desc: "Mineral-rich bath salts crafted to relax muscles and restore your body after a long day.",
    price: 10000,
    image: "/product4.png",
  },
  {
    id: "5",
    name: "Hydrating Body Butter",
    desc: "Deeply nourishing body butter made with shea butter and natural plant extracts.",
    price: 14500,
    image: "/product1.png",
  },
  {
    id: "6",
    name: "Facial Glow Serum",
    desc: "Lightweight facial serum formulated to hydrate and brighten your skin naturally.",
    price: 22000,
    image: "/product.png",
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
