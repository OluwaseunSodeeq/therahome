"use client";
import { navLinks, hmservices, contactInfo } from "../data";
import { CSSProperties, useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);

    return () => clearTimeout(timer);
  }, []);

  // TypeScript typing for style object
  const anim = (delay: number): CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(50px)",
    transition: `all .8s ease ${delay}s`,
  });

  return (
    <footer className="relative bottom-0 font-ego bg-white  px-6 md:px-12 pt-16 ">
      {/* <div className="max-w-7xl mx-auto"> */}
      <div className="w-full mx-auto" style={anim(0.06)}>
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 pb-12">
          {/* BRAND */}
          <div>
            <Logo />

            <div className="flex gap-4">
              {["📷", "🌐", "💬"].map((icon, index) => (
                <Link
                  key={index}
                  href={"#"}
                  className="
                    w-9 h-9
                    rounded-full
                    border border-white/20
                    flex items-center justify-center
                    text-sm
                    transition-all duration-200
                    hover:bg-[#6b8c3e]
                    hover:border-[#6b8c3e]
                  "
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    block
                    text-sm
                     text-secondary-green
                    transition-colors duration-200
                    hover:text-primary-green
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm text-secondary-green font-bold tracking-wider mb-5">
              Our Services
            </h3>

            <div className="space-y-3">
              {hmservices.map((service) => (
                <Link
                  key={service}
                  href="#"
                  className="
                    block
                    text-sm
                    text-secondary-green
                    transition-colors duration-200
                    hover:text-primary-green
                  "
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm text-secondary-green font-bold tracking-wider mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="text-sm shrink-0 text-primary-green">
                    {contact.icon}
                  </span>

                  <span className="text-sm text-secondary-green hover:text-primary-green leading-6">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-5 text-secondary-green">
              Newsletter
            </h3>

            <p className="text-sm text-secondary-green leading-7 mb-5">
              Subscribe for wellness tips and offers.
            </p>

            <div className="flex overflow-hidden rounded-lg border border-white/20">
              <input
                type="email"
                placeholder="Your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  flex-
                  bg-secondary-green/10
                  px-4 py-3
                  text-sm
                  outline-none
                  placeholder:text-white/10
                "
              />

              <button
                className="
                  bg-[#6b8c3e]
                  px-4
                  outline-primary-green
                  transition-colors duration-200
                  hover:bg-[#557332]
                "
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            border-t border-white/10
            py-5
            flex flex-col sm:flex-row
            items-center justify-between
            gap-4
          "
        >
          <p className="text-xs text-white/40">
            © 2024 TheraHome. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms & Conditions"].map((item) => (
              <Link
                key={item}
                href="#"
                className="
                  text-xs
                  text-white/40
                  transition-colors duration-200
                  hover:text-white
                "
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
