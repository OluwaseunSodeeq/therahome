"use client";

import DirectionReveal from "../../app/Animations/DirectionReveal";
import { shopProducts } from "../../app/data";
import { ShopProductCard } from "./HeroShop";

export default function FeaturedProducts() {
  return (
    <section className="bg-hero-bg px-7 pb-0 pt-18">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <DirectionReveal>
          <div className="mb-2.5 text-center">
            <h2
              className="
                mb-2.5
                font-serif
                text-[clamp(22px,3vw,34px)]
                font-bold
                text-[#1a1a1a]
              "
            >
              Featured Wellness Essentials
            </h2>

            <div
              className="
                mb-3.5
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <div className="h-px w-7 bg-[#c5b99a]" />

              <span className="text-[15px] text-primary-light">🌿</span>

              <div className="h-px w-7 bg-[#c5b99a]" />
            </div>

            <p className="text-sm text-[#999]">
              Handpicked products to elevate your self-care routine.
            </p>
          </div>
        </DirectionReveal>

        {/* Desktop Grid */}
        <div
          className="
            mt-11
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5.5

            "
          // max-[1100px]:grid-cols-2
        >
          {shopProducts.slice(0, 4).map((product, index) => (
            <ShopProductCard
              key={product.id}
              product={product}
              delay={index * 0.08}
            />
          ))}
        </div>

        <DirectionReveal delay={0.1}>
          <div
            className="
              view-all-mobile
              mt-5
              hidden
              max-[900px]:block
            "
          >
            <a
              href="#"
              className="
                text-primary-green
                flex
                items-center
                justify-center
                gap-1.5
                border-y
                border-[#e8e4da]
                py-3.5
                text-sm
                font-bold
                transition-opacity
                duration-200

                hover:opacity-70
              "
            >
              View All Products →
            </a>
          </div>
        </DirectionReveal>
      </div>
    </section>
  );
}
