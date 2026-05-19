import ServiceReveal from "../Animations/ServiceReveal";
import PricingBoard from "./PricingBoard";

export default function ServicePricingSection() {
  return (
    <section className="bg-white px-7 py-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <ServiceReveal>
          <div className="mb-12 text-center">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.13em] text-primary-green">
              Transparent Pricing
            </div>

            <h2 className="mb-3 font-serif text-3xl font-bold text-stone-900 md:text-5xl">
              Simple, Clear & Fair
            </h2>

            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-7 bg-stone-300" />
              <span className="text-base text-primary-green">🌿</span>
              <div className="h-px w-7 bg-stone-300" />
            </div>
          </div>
        </ServiceReveal>

        {/* MAIN PRICING CARD */}
        <ServiceReveal delay={0.1}>
          <PricingBoard text="Applies to all services and locations" />
        </ServiceReveal>

        {/* FOOTNOTE */}
        <ServiceReveal delay={0.2}>
          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-stone-200
              bg-amber-50/40
              px-6
              py-3
            "
          >
            <span className="text-sm text-amber-600">ℹ️</span>

            <span className="text-sm text-stone-500">
              Final pricing is confirmed after your booking based on your exact
              location.
            </span>
          </div>
        </ServiceReveal>
      </div>
    </section>
  );
}
