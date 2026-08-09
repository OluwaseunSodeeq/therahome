"use client";

import Carousel from "@/components/carousel/Carousel";
import CarouselSlide from "@/components/carousel/CarouselSlide";

import ServiceReveal from "../../app/Animations/ServiceReveal";
import { comboServices, singleServices } from "../../app/data";
import { ServiceCardDesktop, ServiceRowMobile } from "./ServiceCard";
import { PlanButton } from "./Buttons";

export default function Services() {
  return (
    <section className="bg-hero-bg px-6 md:px-12 py-16 md:py-20">
      <div className="pb-10 md:pb-10">
        <div className="mx-auto max-w-7xl">
          <ServiceReveal>
            <Carousel
              eyebrow="Our Signature Services"
              title="Wellness, Tailored for You"
            >
              {singleServices.map((service, index) => (
                <CarouselSlide key={index}>
                  <div className="hidden md:block">
                    <ServiceCardDesktop service={service} />
                  </div>

                  <div className="block md:hidden">
                    <ServiceRowMobile service={service} />
                  </div>
                </CarouselSlide>
              ))}
            </Carousel>
          </ServiceReveal>
        </div>
      </div>
      <hr className="text-primary-green bg-primary-green" />
      <div className="pt-10 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <ServiceReveal>
            <Carousel
              eyebrow="OUR SIGNATURE COMBOS"
              title="Wellness, Perfectly Paired"
            >
              {comboServices.map((service, index) => (
                <CarouselSlide key={index}>
                  <div className="hidden md:block">
                    <ServiceCardDesktop service={service} />
                  </div>

                  <div className="block md:hidden">
                    <ServiceRowMobile service={service} />
                  </div>
                </CarouselSlide>
              ))}
            </Carousel>
          </ServiceReveal>
        </div>
      </div>
      <div className="mx-auto mt-5 w-fit lg:max-w-56 lg:mt-7 ">
        <PlanButton>Sucscribe to Our VIP Plans</PlanButton>
      </div>
    </section>
  );
}

{
  /* HEADER
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

            <HeadingLeave />
          </div>
        </ServiceReveal>

        <div
          className="
            gap-4
            md:gap-5
            hidden
            lg:grid
            grid-cols-1
            md:grid-cols-3
            xl:grid-cols-5
          "
        >
          {singleServices.map((service, index) => (
            <ServiceCardDesktop
              key={service.id}
              service={service}
              delay={index * 0.07}
            />
          ))}
        </div>

        // MOBILE LIST 
        <div className="flex flex-col gap-4 md:hidden">
          {singleServices.map((service, index) => (
            <ServiceRowMobile
              key={service.id}
              service={service}
              delay={index * 0.06}
            />
          ))}
        </div> 
        */
}
