"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "../../app/data";
import { useMenuContext } from "../../contexts/MenuContext";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useFunctionalitiesContext } from "@/contexts/Functionalities";
import { useCart } from "@/hooks/useCart";
import CartDrawer from "../cart/CartDrawer";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function Nav() {
  const { menuOpen, toggleMenu } = useMenuContext();
  const { toggleBookingForm } = useFunctionalitiesContext();
  const { totalItems, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ANIMATION
  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.25,
        ease: "easeIn",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/95 shadow-lg"
          : "bg-white border-b border-neutral-200"
      }`}
      >
        <div className="w-full pl-3 pr-4 md:max-w-360 mx-auto md:px-8 lg:px-12 h-17 flex items-center justify-between ">
          <Logo />

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8 font-geo">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
          text-sm transition-colors duration-200 hover:text-primary-green
          ${
            isActive
              ? "font-semibold border-b-2 border-primary-green text-primary-green"
              : "text-neutral-600"
          }
        `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <div className="flex items-center md:gap-4">
              {mounted && totalItems > 0 && (
                <button
                  onClick={toggleCart}
                  className="
                    relative
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
  "
                >
                  🛒{" "}
                  <span className="absolute -top-2 right-4 bg-primary-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                </button>
              )}
              {/* </Link> */}
              <button
                onClick={toggleBookingForm}
                className="
                hidden lg:flex
                items-center gap-2
                bg-primary-green
                hover:bg-secondary-green
                text-white
                px-5 py-2.5
                rounded-lg
                text-sm
                font-semibold
                transition-colors
                duration-200
            "
              >
                📅 Book Now
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            {menuOpen ? (
              <button
                onClick={toggleMenu}
                className="lg:hidden text-xl text-black  "
              >
                X
              </button>
            ) : (
              <button
                onClick={toggleMenu}
                className="lg:hidden text-xl text-black "
              >
                ☰
              </button>
            )}
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="lg:hidden overflow-hidden bg-white border-t border-stone-100"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        className={`block py-2 pl-4 text-sm transition-colors duration-200 hover:text-primary-green ${
                          isActive
                            ? "font-bold border-l-4 border-primary-green text-primary-green bg-stone-50"
                            : "text-neutral-600 font-semibold"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div variants={itemVariants}>
                  <button
                    onClick={toggleBookingForm}
                    className="
              w-40
              rounded-lg
              py-2.5
              px-0
              text-sm
              font-bold
              text-primary-green
              transition-colors
              duration-200
              hover:bg-secondary-green
              hover:text-white
            "
                  >
                    Book A Session
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <CartDrawer />
    </>
  );
}

// ==================================================
{
  /* <ServiceReveal>
          {menuOpen && (
            <div className="lg:hidden bg-white border-t border-white">
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={toggleMenu}
                      className={`py-2
          pl-4 text-sm transition-colors duration-200 hover:text-primary-green
          ${
            isActive
              ? "font-bold border-l-4 border-primary-green text-primary-green bg-stone-50"
              : "text-neutral-600 semibold"
          }
        `}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div
                onClick={toggleBookingForm}
                className="
              block lg:hidden
              items-center gap-2
              hover:bg-secondary-green
              hover:text-white
              text-primary-green
              font-bold
              px-5 py-2.5
              rounded-lg
              text-sm
              transition-colors
              duration-200
              ml-4
              w-40
              cursor-pointer
            "
              >
                Book A Session
              </div>
            </div>
          )}
        </ServiceReveal> */
}
