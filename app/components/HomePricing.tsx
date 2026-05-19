import Reveal from "../Animations/Reveal";
import PricingBoard from "./PricingBoard";

export default function Homepricing() {
  const text =
    "  Due to logistics and to maintain premium service quality, transportation is calculated based on location.";
  return (
    <section className="bg-white py-20 px-6 md:px-12 font-geo">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-12">
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
              TRANSPARENT PRICING
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-neutral-900
              "
            >
              Simple, Clear & Fair
            </h2>
          </div>
        </Reveal>

        {/* PRICING CONTAINER */}
        <Reveal delay={0.1}>
          <PricingBoard text={text} />
        </Reveal>

        {/* FOOTNOTE */}
        <Reveal delay={0.2}>
          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              text-sm
              text-neutral-500
            "
          >
            <span>ℹ️</span>

            <p>Final pricing is confirmed after booking.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
