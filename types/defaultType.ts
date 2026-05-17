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

export type testimonial = {
  id: number;
  name: string;
  text: string;
  stars: number;
};
