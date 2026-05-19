import Image from "next/image";
import ServiceReveal from "../Animations/ServiceReveal";

export default function ServiceBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/bg-leaves.png"
          alt="Wellness background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* GREEN OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-[#1e2d14]/90
          via-[#1e2d14]/75
          to-[#1e2d14]/60
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-8
          px-6
          py-14
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* LEFT TEXT */}
        <ServiceReveal from="left">
          <div>
            <h2
              className="
                mb-3
                font-serif
                text-3xl
                font-bold
                leading-tight
                text-white
                md:text-5xl
              "
            >
              Ready to Relax?
            </h2>

            <p
              className="
                max-w-md
                text-base
                leading-7
                text-white/75
              "
            >
              Book your session today and let us bring wellness to you.
            </p>
          </div>
        </ServiceReveal>

        {/* BUTTONS */}
        <ServiceReveal from="right" delay={0.12}>
          <div className="flex flex-wrap gap-4">
            {/* PRIMARY BUTTON */}
            <a
              href="#"
              className="
                flex
                items-center
                gap-2
                rounded-lg
                bg-white
                px-6
                py-4
                text-sm
                font-bold
                text-primary-green
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-stone-100
              "
            >
              Book Your Session
              <span>📅</span>
            </a>

            {/* SECONDARY BUTTON */}
            <a
              href="#"
              className="
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/50
                px-6
                py-4
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white/10
              "
            >
              Chat on WhatsApp
              <span>💬</span>
            </a>
          </div>
        </ServiceReveal>
      </div>
    </section>
  );
}
