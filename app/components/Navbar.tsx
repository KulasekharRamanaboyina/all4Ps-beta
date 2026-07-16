"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { SERVICES } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

/* ================= NavLink Active Class ================= */
const navLinkClass = (isActive: boolean) =>
  `transition-all duration-300 ${isActive
    ? "text-brand-purple font-semibold"
    : "text-white hover:text-brand-purple"
  }`;

/* ================= Navbar Component ================= */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const isServicesActive = pathname.startsWith("/services");

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const navigateTo = (path: string) => {
    router.push(path);
    handleLinkClick();
  };

  return (
    <nav
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-white/10
        bg-[#07050D]
        transition-all
        duration-300
        shadow-[0_8px_25px_rgba(0,0,0,.45)]
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* ================= Logo ================= */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => navigateTo("/")}
          >
            <div className="relative h-[58px] w-[170px]">
              <Image
                src="/images/logo-black.png"
                alt="all4Ps logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* ================= Desktop Menu ================= */}
          <div className="hidden md:flex gap-9 items-center">
            <Link href="/" className={navLinkClass(pathname === "/")}>
              Home
            </Link>

            <Link href="/about" className={navLinkClass(pathname === "/about")}>
              About
            </Link>

            {/* ================= Services Dropdown ================= */}
            <div className="relative group">
              <button
                className={`flex items-center transition-all duration-300 ${isServicesActive
                  ? "text-brand-purple font-semibold"
                  : "text-white hover:text-brand-purple"
                  }`}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  top-full
                  mt-3
                  w-[600px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0C0814]/90
                  backdrop-blur-xl
                  p-6
                  shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                  opacity-0
                  invisible
                  translate-y-2
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                "
              >
                {/* Top Accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-purple via-fuchsia-400 to-transparent" />

                <div className="grid grid-cols-3 gap-6 pt-2 text-left">
                  {/* Category 1: Build Authority */}
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple mb-4 border-b border-white/5 pb-2">
                      Build Authority
                    </h4>
                    <div className="space-y-1">
                      {SERVICES.slice(0, 4).map((service) => {
                        const isActive = pathname === `/services/${service.id}`;
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            onClick={handleLinkClick}
                            className={`block py-1.5 transition-all duration-200 ${isActive
                              ? "text-brand-purple font-bold"
                              : "text-gray-300 hover:text-brand-purple"
                              }`}
                          >
                            <span className="block font-bold text-xs">{service.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Category 2: Generate Demand */}
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple mb-4 border-b border-white/5 pb-2">
                      Generate Demand
                    </h4>
                    <div className="space-y-1">
                      {SERVICES.slice(4, 8).map((service) => {
                        const isActive = pathname === `/services/${service.id}`;
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            onClick={handleLinkClick}
                            className={`block py-1.5 transition-all duration-200 ${isActive
                              ? "text-brand-purple font-bold"
                              : "text-gray-300 hover:text-brand-purple"
                              }`}
                          >
                            <span className="block font-bold text-xs">{service.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Category 3: Accelerate Growth */}
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple mb-4 border-b border-white/5 pb-2">
                      Accelerate Growth
                    </h4>
                    <div className="space-y-1">
                      {SERVICES.slice(8, 12).map((service) => {
                        const isActive = pathname === `/services/${service.id}`;
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            onClick={handleLinkClick}
                            className={`block py-1.5 transition-all duration-200 ${isActive
                              ? "text-brand-purple font-bold"
                              : "text-gray-300 hover:text-brand-purple"
                              }`}
                          >
                            <span className="block font-bold text-xs">{service.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/portfolio" className={navLinkClass(pathname === "/portfolio")} onClick={handleLinkClick}>
              Portfolio
            </Link>
            <Link href="/blog" className={navLinkClass(pathname === "/blog")} onClick={handleLinkClick}>
              Blogs
            </Link>

            <button
              onClick={() => navigateTo("/contact")}
              className="
                group
                rounded-xl
                bg-gradient-to-r
                from-brand-purple
                to-fuchsia-400
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0_10px_35px_rgba(168,85,247,.45)]
                active:scale-95
              "
            >
              Book a Call
            </button>
          </div>

          {/* ================= Mobile Menu Button (Morphing Hamburger Toggler) ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none z-50 md:hidden"
            aria-label="Toggle menu"
          >
            {/* Line 1 */}
            <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1.5"
              }`} />
            {/* Line 2 */}
            <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""
              }`} />
            {/* Line 3 */}
            <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"
              }`} />
          </button>

        </div>
      </div>

      {/* ================= Mobile Menu Drawer (Crazy Staggered Overlay) ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
            />

            {/* Slide-in Menu Drawer */}
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.5 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-[#07050D]/95 backdrop-blur-3xl border-l border-white/10 flex flex-col justify-between p-8 pt-24 shadow-[0_0_50px_rgba(128,0,128,0.25)] md:hidden"
            >
              {/* Background glows */}
              <div className="absolute top-1/4 right-0 w-48 h-48 bg-brand-purple/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
              <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

              {/* Navigation list items */}
              <div className="space-y-6">

                {/* Home */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    onClick={() => navigateTo("/")}
                    className="block w-full text-left text-2xl font-bold text-white hover:text-brand-purple transition-colors font-display"
                  >
                    Home
                  </button>
                </motion.div>

                {/* About */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <button
                    onClick={() => navigateTo("/about")}
                    className="block w-full text-left text-2xl font-bold text-white hover:text-brand-purple transition-colors font-display"
                  >
                    About
                  </button>
                </motion.div>

                {/* Services Collapsible Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex w-full justify-between items-center text-2xl font-bold text-white hover:text-brand-purple transition-colors font-display"
                  >
                    Services
                    <ChevronDown
                      className={`w-6 h-6 transform transition-transform duration-300 text-brand-purple ${isServicesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 border-l border-brand-purple/20 space-y-4 text-left"
                      >
                        {/* Build Authority */}
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple mb-2 mt-2">
                            Build Authority
                          </p>
                          <div className="space-y-1">
                            {SERVICES.slice(0, 4).map((service) => (
                              <button
                                key={service.id}
                                onClick={() => navigateTo(`/services/${service.id}`)}
                                className="block w-full text-left text-sm text-gray-300 hover:text-brand-purple transition-colors py-1"
                              >
                                {service.title}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Generate Demand */}
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple mb-2">
                            Generate Demand
                          </p>
                          <div className="space-y-1">
                            {SERVICES.slice(4, 8).map((service) => (
                              <button
                                key={service.id}
                                onClick={() => navigateTo(`/services/${service.id}`)}
                                className="block w-full text-left text-sm text-gray-300 hover:text-brand-purple transition-colors py-1"
                              >
                                {service.title}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Accelerate Growth */}
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple mb-2">
                            Accelerate Growth
                          </p>
                          <div className="space-y-1">
                            {SERVICES.slice(8, 12).map((service) => (
                              <button
                                key={service.id}
                                onClick={() => navigateTo(`/services/${service.id}`)}
                                className="block w-full text-left text-sm text-gray-300 hover:text-brand-purple transition-colors py-1"
                              >
                                {service.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Portfolio */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <button
                    onClick={() => navigateTo("/portfolio")}
                    className="block w-full text-left text-2xl font-bold text-white hover:text-brand-purple transition-colors font-display"
                  >
                    Portfolio
                  </button>
                </motion.div>

                {/* Blogs */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={() => navigateTo("/blog")}
                    className="block w-full text-left text-2xl font-bold text-white hover:text-brand-purple transition-colors font-display"
                  >
                    Blogs
                  </button>
                </motion.div>

                {/* Careers */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <span
                    className="block w-full text-left text-2xl font-bold text-gray-600 cursor-not-allowed select-none font-display"
                  >
                    Careers
                  </span>
                </motion.div>

              </div>

              {/* Book Call button at drawer bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="pt-6 border-t border-white/5"
              >
                <button
                  onClick={() => navigateTo("/contact")}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-fuchsia-400 font-bold text-sm tracking-wider uppercase text-white shadow-lg shadow-purple-500/20 active:scale-95 transition-transform"
                >
                  Book a Call
                </button>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
