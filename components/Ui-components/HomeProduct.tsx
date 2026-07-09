import Reveal from "../../app/Animations/Reveal";
import { shopProducts } from "../../app/data";
import HmProductCard from "./HmProductCard";

export default function Products() {
  return (
    <section
      className="
        bg-white
        px-6
        md:px-12
        py-20
        font-geo
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
        "
      >
        {/* HEADER */}
        <Reveal>
          <div
            className="
              mb-10
              flex
              flex-wrap
              items-end
              justify-between
              gap-4
            "
          >
            <div>
              <p
                className="
                  mb-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-lime-700
                "
              >
                WELLNESS PRODUCTS
              </p>

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-neutral-900
                "
              >
                Enhance Your Wellness at Home
              </h2>
            </div>

            <a
              href="#"
              className="
                flex
                items-center
                gap-1
                whitespace-nowrap
                text-sm
                font-semibold
                text-primary-green
                transition-all
                duration-300
                hover:gap-3
              "
            >
              Shop All Products →
            </a>
          </div>
        </Reveal>

        {/* PRODUCTS GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {shopProducts.slice(0, 4).map((product, index) => (
            <Reveal key={product.id} delay={index * 0.08}>
              <HmProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
