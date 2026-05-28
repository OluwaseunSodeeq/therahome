import Reveal from "../../app/Animations/Reveal";
import StepCard from "./StepCard";
import { steps } from "../../app/data";

export default function HowItWorks() {
  return (
    <section className="bg-hero-bg py-20 px-6 md:px-12 font-geo">
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[1fr_2fr]
          gap-14
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <Reveal>
          <div className="flex flex-col items-center lg:items-start">
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
              HOW IT WORKS
            </p>

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
              Relaxation in
              <br />3 Simple Steps
            </h2>
            <div className="flex gap-4">
              <div className="w-12 h-0.5 bg-lime-700 mb-3" />
              <div className="text-xl -mt-4">🌿</div>
              <div className="w-12 h-0.5 bg-lime-700 mb-3" />
            </div>
          </div>
        </Reveal>

        {/* STEPS */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-10
          "
        >
          {steps.map((step, index) => (
            <Reveal key={step.num} delay={index * 0.15} className="flex-1">
              <StepCard step={step} isLast={index === steps.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
