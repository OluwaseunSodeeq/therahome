"use client";

import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/formatPrice";
import { Product } from "@/types/product";
import Image from "next/image";
import { useState } from "react";

type ProductCardProps = {
  product: Product;
};

export default function HmProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleCart = () => {
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
    <div
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-stone-200
        bg-stone-50
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* PRODUCT IMAGE */}
      <div
        className="
          relative
          h-16
          w-16
          overflow-hidden
          rounded-lg
          shrink-0
        "
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="
            object-cover
          "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
        />
      </div>

      {/* PRODUCT INFO */}
      <div className="flex-1">
        <h3
          className="
            text-sm
            font-semibold
            text-neutral-900
            mb-1
          "
        >
          {product.name}
        </h3>

        <p
          className="
            text-base
            font-bold
            text-neutral-900
          "
        >
          {formatPrice(product.price)}
        </p>
      </div>

      {/* ACTION BUTTON */}
      <button
        onClick={handleCart}
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-stone-200
          bg-white
          text-lg
          transition-all
          duration-300
          hover:bg-primary-green
          hover:text-white
        "
      >
        {added ? "✓" : "🛒"}
      </button>
    </div>
  );
}
