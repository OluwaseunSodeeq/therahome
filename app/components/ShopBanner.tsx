"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { bannerShopItems } from "../data";

export default function ShopBanner() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 pb-8">
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#4d5c39] to-[#2f3c22]">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] items-center">
          {/* Image Side */}
          <div className="relative h-55 sm:h-65 lg:h-full min-h-62.5">
            <Image
              src="/bg-leaves.png"
              alt="Massage Therapy"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-between h-full px-6 py-8 md:px-10 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left Content */}
              <div className="max-w-xl">
                <p className="uppercase tracking-[0.25em] text-[11px] md:text-xs text-[#d8dfcf] mb-3">
                  Self-care isn’t selfish
                </p>

                <h2 className="text-white text-2xl md:text-3xl lg:text-[36px] leading-tight font-medium max-w-130">
                  Keep the wellness glowing long after your session.
                </h2>

                <button className="mt-6 inline-flex items-center gap-2 bg-white text-[#334127] px-5 py-3 rounded-lg text-sm font-medium hover:bg-[#f4f1ea] transition-all duration-300 w-fit">
                  Shop All Products
                  <ShoppingBag size={17} />
                </button>
              </div>

              {/* Right Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
                {bannerShopItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 min-w-35"
                    >
                      <div className="mt-1">
                        <Icon
                          size={20}
                          className="text-[#dfe6d5]"
                          strokeWidth={1.8}
                        />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="text-xs text-[#d7ddce] mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
