"use client";
import { useState } from "react";
import { testimonials } from "../../app/data";
import Reveal from "../../app/Animations/Reveal";
import TestimonialCard from "./TestimonialCard";

export default function HmTestimonials() {
  const [active, setActive] = useState<number>(0);
  const count = testimonials.length;

  const prev = () => {
    setActive((prev) => (prev - 1 + count) % count);
  };

  const next = () => {
    setActive((prev) => (prev + 1) % count);
  };

  return (
    <section
      className="
        bg-stone-50
        px-6
        md:px-12
        py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
        "
      >
        {/* HEADING */}
        <Reveal>
          <div
            className="
              mb-12
              text-center
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-lime-700
              "
            >
              WHAT OUR CLIENTS SAY
            </p>
          </div>
        </Reveal>

        {/* DESKTOP GRID */}
        <div
          className="
            hidden
            gap-5
            md:grid
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.08}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[active]} />

          {/* CONTROLS */}
          <div
            className="
              mt-6
              flex
              justify-center
              gap-4
            "
          >
            <button
              onClick={prev}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-primary-green
                bg-white
                transition-all
                duration-300
                hover:bg-primary-border-primary-green
                hover:text-white
              "
            >
              ‹
            </button>

            <button
              onClick={next}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-primary-green
                bg-white
                transition-all
                duration-300
                hover:bg-primary-green
                hover:text-white
              "
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
