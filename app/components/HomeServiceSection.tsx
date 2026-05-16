import Image from "next/image";
import Link from "next/link";
import Reveal from "../Animations/Reveal";
import { serviceCards } from "../data";

type Service = {
  name: string;
  desc: string;
  img: string;
  icon: string;
};

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-neutral-200
        bg-stone-50
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-4/5 overflow-hidden">
        <Image
          src={service.img}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="eager"
          className="
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />

        <div
          className="
            absolute
            bottom-3
            left-3
            w-9
            h-9
            rounded-full
            bg-green-900
            flex
            items-center
            justify-center
          "
        >
          {service.icon}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-neutral-900 mb-2">
          {service.name}
        </h3>

        <p className="text-xs text-neutral-500 leading-relaxed mb-4">
          {service.desc}
        </p>

        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-1
            text-xs
            font-semibold
            text-green-900
            hover:gap-2
            transition-all
          "
        >
          Book Now →
        </Link>
      </div>
    </div>
  );
}

export default function HomeServiceSection() {
  return (
    <section className="bg-white py-24 px-6 font-geo relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-14">
            <p
              className="
                text-xs
                font-bold
                tracking-[0.15em]
                uppercase
                text-lime-700
                mb-3
              "
            >
              OUR SIGNATURE SERVICES
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-neutral-900
              "
            >
              Wellness, Tailored for You
            </h2>

            <div className="mt-4 text-xl">🌿</div>
          </div>
        </Reveal>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            gap-5
            px-5
          "
        >
          {serviceCards.map((service, index) => (
            <Reveal key={index} delay={index * 0.07}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {/* BUTTON */}
        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="
                inline-block
                rounded-lg
                bg-green-900
                hover:bg-green-950
                text-white
                px-8
                py-4
                font-semibold
                transition-all
              "
            >
              View All Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
