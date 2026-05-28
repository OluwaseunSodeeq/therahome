import Image from "next/image";
import Reveal from "../../app/Animations/Reveal";
import { whyChooseUsItems } from "../../app/data";
import WhyChooseItem from "./WhyChooseUsItem";

export default function HomeWhyChooseUs() {
  return (
    <section className="overflow-hidden font-geo  bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 xl:px-12">
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
        "
        >
          {/* IMAGE SIDE */}
          <div
            className="
            relative
            min-h-70
            md:min-h-120
          "
          >
            {/* <Reveal delay={0.1}> */}
            <Image
              src="/leave.png"
              alt="Why Choose TheraHome"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
            {/* </Reveal> */}
          </div>

          {/* CONTENT SIDE */}
          <Reveal delay={0.1}>
            <div
              className="
              flex
              flex-col
              justify-center

              px-6
              py-12
              md:px-14
              md:py-20
            "
            >
              {/* SMALL LABEL */}
              <p
                className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-lime-700
                mb-4
              "
              >
                WHY CHOOSE THERAHOME?
              </p>

              {/* HEADING */}
              <h2
                className="
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
                text-neutral-900
                mb-5
              "
              >
                More Than a Massage,
                <br />
                It&apos;s a Lifestyle
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                text-base
                leading-relaxed
                text-neutral-600
                mb-8
              "
              >
                We combine professional techniques, premium products and
                personalized care to deliver an unmatched wellness experience.
              </p>

              {/* POINTS GRID */}
              <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-x-5
                gap-y-3
              "
              >
                {whyChooseUsItems.map((each) => (
                  <WhyChooseItem key={each.id} item={each} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
