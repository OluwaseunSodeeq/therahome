import Link from "next/link";
import Reveal from "../../app/Animations/Reveal";
import { bannerFeatures } from "../../app/data";
import { FaWhatsapp } from "react-icons/fa";

export default function HmBanner() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        xl:px-12
        py-16
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/bg-leaves.png')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      />

      {/* Green Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-primary-green/85
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-10
          md:grid-cols-[1fr_auto]
        "
      >
        {/* LEFT CONTENT */}
        <Reveal>
          <div>
            <h2
              className="
                mb-4
                text-4xl
                font-bold
                leading-tight
                text-white
                md:text-5xl
              "
            >
              Your Body Deserves
              <br />
              Intentional Care
            </h2>

            <p
              className="
                text-base
                text-white/70
              "
            >
              Book your session today and experience wellness at your
              convenience.
            </p>
          </div>
        </Reveal>

        {/* RIGHT ACTIONS */}
        <Reveal delay={0.15}>
          <div>
            {/* BUTTONS */}
            <div
              className="
                mb-5
                flex
                flex-wrap
                gap-4
              "
            >
              {/* PRIMARY BUTTON */}
              <Link
                href="#"
                className="
                  rounded-lg
                  bg-white
                  px-6
                  md:px-12
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
                Book Your Session 📅
              </Link>

              {/* SECONDARY BUTTON */}
              <Link
                href="#"
                className="
                border-2 border-white/40
                rounded-lg
                px-7 py-4
                text-sm font-semibold
                flex items-center gap-2
                transition-all 
                 text-white
                  duration-300
                  hover:bg-white/10
                hover:-translate-y-1

              "
              >
                Chat on WhatsApp
                <span className="text-[20px]">
                  <FaWhatsapp />
                </span>
                {/* <span>💬</span> */}
              </Link>
            </div>

            {/* FEATURES */}
            <div
              className="
                flex
                flex-wrap
                gap-5
              "
            >
              {bannerFeatures.map((feature) => (
                <span
                  key={feature}
                  className="
                    text-sm
                    text-white/70
                  "
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
