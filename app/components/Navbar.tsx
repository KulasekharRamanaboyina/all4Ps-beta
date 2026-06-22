"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "../constants";

/* ================= NavLink Active Class ================= */

const navLinkClass = (isActive: boolean) =>
  `transition-all duration-300 ${
    isActive
      ? "text-brand-purple font-semibold"
      : "text-white hover:text-brand-purple"
  }`;

/* ================= Navbar ================= */

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
               className={`flex items-center transition-all duration-300 ${
  isServicesActive
    ? "text-brand-purple font-semibold"
    : "text-white hover:text-brand-purple"
}`}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              <div
  className="
    absolute
    left-0
    top-full
    mt-3
    w-64
    overflow-hidden
    rounded-2xl
    border
    border-white/10
    bg-[#12081F]/95
    shadow-[0_20px_50px_rgba(0,0,0,.45)]
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
    {/* Top Accent */}
  <div className="h-[3px] w-full bg-gradient-to-r from-brand-purple to-fuchsia-500" />
                <div className="py-2">
                  {SERVICES.map((service) => {
                    const isActive = pathname === `/services/${service.id}`;

                    return (
                      <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        onClick={handleLinkClick}
                        // className={`block px-4 py-2 text-sm ${
                        //   isActive
                        //     ? "bg-gray-100 text-[#800080] font-semibold"
                        //     : "hover:bg-gray-100 hover:text-[#800080]"
                        // }`}
                        className={`block px-5 py-3 text-sm transition-all duration-300 ${
  isActive
    ? "bg-brand-purple/15 text-white font-semibold"
    : "text-gray-300 hover:bg-white/5 hover:text-white"
}`}
                      >
                        {service.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className={navLinkClass(pathname === "/portfolio")}
            >
              Portfolio
            </Link>
            <Link href="/blog" className={navLinkClass(pathname === "/blog")}>
              Blogs
            </Link>
            <button
              onClick={() => navigateTo("/contact")}
className="
group
rounded-xl
bg-gradient-to-r
from-brand-purple
to-fuchsia-600
px-6
py-3
font-semibold
text-white
transition-all
duration-300
hover:scale-[1.03]
hover:shadow-[0_10px_35px_rgba(168,85,247,.45)]
active:scale-95
"            >
              Book a Call
            </button>
          </div>

          {/* ================= Mobile Menu Button ================= */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-brand-purple"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      {isOpen && (
        <div className="md:hidden bg-[#12081F]/95 backdrop-blur-xl border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => navigateTo("/")}
              className="block w-full text-left px-3 py-2 hover:text-brand-purple"
            >
              Home
            </button>

            <button
              onClick={() => navigateTo("/about")}
              className="block w-full text-left px-3 py-2 hover:text-brand-purple"
            >
              About
            </button>

            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex w-full justify-between items-center px-3 py-2 hover:text-brand-purple"
            >
              Services
              <ChevronDown
                className={`transform transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
<div className="pl-6">
                  {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => navigateTo(`/services/${service.id}`)}
className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"                  >
                    {service.title}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() => navigateTo("/portfolio")}
              className="block w-full text-left px-3 py-2 hover:text-brand-purple"
            >
              Portfolio
            </button>
            <button
              onClick={() => navigateTo("/blog")}
              className="block w-full text-left px-3 py-2 hover:text-brand-purple"
            >
              Blogs
            </button>
            <button
              onClick={() => navigateTo("/contact")}
              className="block w-full text-left px-3 py-2 text-brand-purple font-bold"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
