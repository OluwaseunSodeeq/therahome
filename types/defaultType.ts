import { LucideIcon } from "lucide-react";

export type Step = {
  num: number;
  icon: string;
  title: string;
  desc: string;
};

export type BookingPrice = {
  label: string;
  price: string;
  description: string;
};

export type TransportZone = {
  zone: string;
  area: string;
  fee: string;
};

export type WhyChooseUsItem = {
  id: number;
  text: string;
};

export type Product = {
  id: number;
  name: string;
  price: string;
  img: string;
};

export type Testimonial = {
  id: number;
  name: string;
  text: string;
  stars: number;
};

export interface Service {
  id: number;
  name: string;
  desc: string;
  img: string;
  icon: string;
  duration: string;
  price: number;
}

export interface ShopProduct {
  id: number;
  name: string;
  desc: string;
  price: string;
  img: string;
}

export interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}
