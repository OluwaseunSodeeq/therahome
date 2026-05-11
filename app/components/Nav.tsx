"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMenuContext } from "../../contexts/MenuContext";

const navLinks: string[] = [
  "Home",
  "Services",
  "Pricing & Shop",
  "About",
  "Contact",
];

export default function Nav() {
  const { menuOpen, toggleMenu } = useMenuContext();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/95 shadow-lg"
          : "bg-white border-b border-neutral-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-17 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 ">
          <Image
            src="/logo.png"
            alt="TheraHome"
            width={150}
            height={50}
            priority
            sizes="(max-width: 768px) 120px, 150px"
            className="w-30 md:w-36 h-auto object-contain"
          />
          <div className="font-geo flex flex-col  ml-[-35]  ">
            <p className="text-black font-bold text-lg">TheraHome</p>
            <p className=" font-bold text-[12px] text-greeny/90 mt-[-4]">
              The spa that comes to you!
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 font-geo">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="/"
              className={`
                text-sm transition-colors duration-200
                ${
                  link === "Home"
                    ? " font-semibold border-b-2 border-greeny"
                    : "text-neutral-600"
                }
              `}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* BOOK BUTTON */}
          <button
            className="
              hidden md:flex
              items-center gap-2
              bg-greeny
              hover:bg-green-950
              text-white
              px-5 py-2.5
              rounded-lg
              text-sm
              font-semibold
              transition-colors
            "
          >
            📅 Book Now
          </button>

          {/* MOBILE MENU BUTTON */}
          <button onClick={toggleMenu} className="md:hidden">
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="/"
                onClick={toggleMenu}
                className="text-sm text-green-900"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
