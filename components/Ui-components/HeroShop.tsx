"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DirectionReveal from "../../app/Animations/DirectionReveal";
// import { ShopProduct } from "@/types/defaultType";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";
import { Overlay, WhiteOverlay } from "./Overlays";

// interface HeroShopProps {
//   scrollToProducts: () => void;
// }

export default function HeroShop() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 80);

    return () => clearTimeout(timeout);
  }, []);

  const anim = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="w-full mx-auto relative mt-17 overflow-hidden min-h-90 bg-hero-img font-geo">
      <div className="relative max-w-360 mx-auto z-20">
        {/* Background image */}
        <div className="relative min-h-115 max-h-125 w-full">
          <Image
            src="/hero6.png"
            alt="Premium wellness products"
            fill
            priority
            sizes="100vw"
            className="hero-img object-cover object-[center_35%]"
          />
          <Image
            src="/mobileshophero.png"
            alt="Premium wellness products"
            fill
            priority
            sizes="100vw"
            className="bg-hero-img object-cover object-[center_40%]  lg:hidden"
          />
        </div>
        <WhiteOverlay />
        <Overlay />

        {/* Content */}
        <div
          className="
          absolute
          inset-0
          flex
          max-w-180
          flex-col
          justify-center
          py-8 px-6 md:px-8
          xl:px-12
          xl:py-12

        "
        >
          {/* Badge */}
          <div
            style={anim(0.08)}
            className="
            max-w-[320px]
             py-2
             px-2
            "
          >
            <span className="text-xs">🌿</span>
            <span
              className="
              text-[11px]
              font-semibold
              uppercase
              tracking-wider
              text-hero-bg
              lg:text-primary-green
              ml-4
            "
            >
              ENHANCE YOUR WELLNESS AT HOME
            </span>
          </div>

          {/* Heading */}
          <h1
            style={anim(0.2)}
            className="
            // mb-5
            mt-3
            text-[clamp(30px,4.5vw,54px)]
            font-bold
            leading-tight
            text-primary-green lg:text-black
            italic 
            font-geo
          "
          >
            Premium Care,
            <br />
            <span className="text-hero-bg lg:text-primary-green italic">
              Beyond Your Session
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={anim(0.32)}
            className="
            mb-0 lg:mb-8
            max-w-90
            text-base
            leading-relaxed
            text-hero-img lg:text-black
            mt-5
          "
          >
            Our carefully selected wellness essentials help you relax, restore
            and maintain your glow between sessions.
          </p>

          {/* CTA */}
          <div style={anim(0.44)}>
            <button
              onClick={scrollToProducts}
              className="
              cursor-pointer
              inline-flex
              items-center
              gap-2.25
              rounded-lg
              bg-primary-green
              hover:bg-secondary-green
              px-6.5
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-[0_4px_16px_rgba(45,74,45,0.28)]
              transition-all
              duration-200
              mt-5 lg:mt-0
              hover:-translate-y-0.5
              hover:shadow-[0_8px_24px_rgba(45,74,45,0.35)]
            "
            >
              Shop Wellness Essentials
              <span className="text-base ">🛒</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export function ShopProductCard({ product, delay = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      desc: product.desc,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1400);
  };

  return (
    <DirectionReveal delay={delay}>
      <div className="p-card h-full ">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-md">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="p-card-img"
          />
        </div>

        {/* Body */}
        <div className="bg-white rounded-md shadow-lg flex flex-1 flex-col px-4.5 pb-5 pt-4.5">
          <h3
            className="
              mb-2
              font-serif
              text-[17px]
              font-bold
              text-[#1a1a1a]
            "
          >
            {product.name}
          </h3>

          <p
            className="
              text-[13px]
              leading-[1.7]
              text-[#888]
            "
          >
            {product.desc}
          </p>

          {/* Footer */}
          <div
            className="
              mt-4.5
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                font-serif
                text-[18px]
                font-bold
                text-hero-bg lg:text-black
              "
            >
              {formatPrice(product.price)}
            </span>

            <button
              onClick={handleAdd}
              className="
                font-serif
                text-[15px]
                font-bold
                cursor-pointer
                text-primary-green
                transition-all
                duration-300
                hover:text-secondary-green
              "
              title="Add to cart"
            >
              {added ? "✓ Added" : "🛒  "}
            </button>
          </div>
        </div>
      </div>
    </DirectionReveal>
  );
}
