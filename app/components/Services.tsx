import ServiceReveal from "../Animations/ServiceReveal";
import { services } from "../data";
import { ServiceCardDesktop } from "./ServiceCard";

export default function Services() {
  return (
    <section className="bg-hero-bg px-6 md:px-12 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <ServiceReveal>
          <div className="mb-11 text-center">
            <h2
              className="
                mb-3
                font-serif
                text-3xl
                font-bold
                text-stone-900
                md:text-4xl
              "
            >
              Our Signature Services
            </h2>

            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-7 bg-stone-300" />

              <span className="text-lg text-primary-green">🌿</span>

              <div className="h-px w-7 bg-stone-300" />
            </div>
          </div>
        </ServiceReveal>

        {/* DESKTOP GRID */}
        <div
          className="
            gap-4
            md:gap-5
            grid
            grid-cols-1
            md:grid-cols-3
            xl:grid-cols-5
          "
        >
          {services.map((service, index) => (
            <ServiceCardDesktop
              key={service.id}
              service={service}
              delay={index * 0.07}
            />
          ))}
        </div>

        {/* MOBILE LIST */}
        {/* <div className="flex flex-col gap-4 md:hidden">
          {services.map((service, index) => (
            <ServiceRowMobile
              key={service.id}
              service={service}
              delay={index * 0.06}
            />
          ))}
        </div> */}

        {/* MOBILE BUTTON */}
        <div className="mt-6 md:hidden">
          <a
            href="#"
            className="
              block
              rounded-xl
              bg-primary-green
              px-5
              py-4
              text-center
              text-sm
              font-semibold
              text-white
              transition-colors
              duration-300
              hover:bg-green-950
            "
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
