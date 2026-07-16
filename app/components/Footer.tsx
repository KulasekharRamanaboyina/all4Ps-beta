"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Brand bar (hidden on lg — shown in grid) ===== */}
        <div className="mb-10 lg:hidden">
          <div className="flex items-center gap-5 mb-0">
            <div className="shrink-0">
              <Image src="/images/logo-black.png" alt="all4Ps logo" width={80} height={80} priority />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-3">
                Not an Agency.<br />A Strategic Growth Partner.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/all4ps/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors"><FaLinkedinIn size={17} /></a>
                <a href="https://x.com/all4ps23" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors"><FaXTwitter size={17} /></a>
                <a href="https://www.instagram.com/all4ps/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors"><FaInstagram size={17} /></a>
                <a href="https://www.facebook.com/people/all4Ps/61555985906255/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors"><FaFacebookF size={17} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Main Footer Grid ===== */}
        {/*
          Mobile  : 2 columns
          Tablet  : 3 columns  (md)
          Desktop : 6 columns  (lg)
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 sm:gap-x-6 gap-y-8">

          {/* Brand — desktop only, col 1 */}
          <div className="hidden lg:flex lg:flex-col col-span-1">
            <Image src="/images/logo-black.png" alt="all4Ps logo" width={95} height={95} priority />
            <p className="text-gray-400 text-sm mt-4 mb-5 leading-relaxed">
              Not an Agency.<br />A Strategic Growth Partner.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="https://www.linkedin.com/company/all4ps/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors"><FaLinkedinIn size={19} /></a>
              <a href="https://x.com/all4ps23" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors"><FaXTwitter size={19} /></a>
              <a href="https://www.instagram.com/all4ps/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors"><FaInstagram size={19} /></a>
              <a href="https://www.facebook.com/people/all4Ps/61555985906255/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors"><FaFacebookF size={19} /></a>
            </div>
          </div>

          {/* Company — col 2 on desktop, col 1 on mobile/tablet */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-brand-purple mb-4">Company</h3>
            <ul className="space-y-2 text-[11px] text-gray-300">
              <li><Link href="/" className="hover:text-brand-purple transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-purple transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-purple transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-brand-purple transition-colors">Blogs</Link></li>
              <li><Link href="/careers" className="hover:text-brand-purple transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-brand-purple transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-brand-purple transition-colors">FAQ&apos;s</Link></li>
            </ul>
          </div>

          {/* Build Authority — col 3 on desktop, col 2 on mobile/tablet */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-brand-purple mb-4">Build Authority</h3>
            <ul className="space-y-2 text-[11px] text-gray-300">
              <li><Link href="/services/brand-strategy" className="hover:text-brand-purple transition-colors">Brand Strategy</Link></li>
              <li><Link href="/services/positioning-messaging" className="hover:text-brand-purple transition-colors">Positioning &amp; Messaging</Link></li>
              <li><Link href="/services/thought-leadership" className="hover:text-brand-purple transition-colors">Thought Leadership</Link></li>
              <li><Link href="/services/content-marketing" className="hover:text-brand-purple transition-colors">Content Marketing</Link></li>
            </ul>
          </div>

          {/* Generate Demand — col 4 on desktop, col 1 row-2 on mobile */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-brand-purple mb-4">Generate Demand</h3>
            <ul className="space-y-2 text-[11px] text-gray-300">
              <li><Link href="/services/demand-generation" className="hover:text-brand-purple transition-colors">Demand Generation</Link></li>
              <li><Link href="/services/abm" className="hover:text-brand-purple transition-colors">Account-Based Marketing</Link></li>
              <li><Link href="/services/campaign-execution" className="hover:text-brand-purple transition-colors">Campaign Execution</Link></li>
              <li><Link href="/services/marketing-automation" className="hover:text-brand-purple transition-colors">Marketing Automation</Link></li>
            </ul>
          </div>

          {/* Accelerate Growth — col 5 on desktop, col 2 row-2 on mobile */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-brand-purple mb-4">Accelerate Growth</h3>
            <ul className="space-y-2 text-[11px] text-gray-300">
              <li><Link href="/services/seo-visibility" className="hover:text-brand-purple transition-colors">SEO &amp; Search Visibility</Link></li>
              <li><Link href="/services/website-optimisation" className="hover:text-brand-purple transition-colors">Website Optimisation</Link></li>
              <li><Link href="/services/analytics-reporting" className="hover:text-brand-purple transition-colors">Analytics &amp; Reporting</Link></li>
              <li><Link href="/services/gtm-execution" className="hover:text-brand-purple transition-colors">GTM Execution</Link></li>
            </ul>
          </div>

          {/* Contact & Legal — col 6 on desktop, full row on mobile */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="font-bold text-xs uppercase tracking-widest text-brand-purple mb-4">Where to find us</h3>
            <p className="text-gray-400 text-[11px] mb-5 leading-relaxed">
              Evolve - Coworking Space In Whitefield,<br />
              Doddanakundi, Bengaluru, Karnataka 560048
            </p>

            <div className="flex flex-nowrap gap-6">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-brand-purple mb-2">Legal</h4>
                <ul className="space-y-2 text-[11px] text-gray-300">
                  <li><Link href="/privacy-policy" className="whitespace-nowrap hover:text-brand-purple transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms-and-conditions" className="whitespace-nowrap hover:text-brand-purple transition-colors">Terms &amp; Conditions</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-brand-purple mb-2">Mail us</h4>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=grow@all4ps.co&su=Business%20Enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-purple text-[11px] transition-colors"
                >
                  grow@all4ps.co
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2026 all4Ps. All rights reserved.
          </p>
        </div>

        {/* ================= SEO Crawl-safe Links ================= */}
        <div style={{ display: "none" }}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ's</a>
          <a href="/blog">Blogs</a>
          <a href="/careers">Careers</a>

          <a href="/services/brand-strategy">Brand Strategy</a>
          <a href="/services/positioning-messaging">Positioning & Messaging</a>
          <a href="/services/thought-leadership">Thought Leadership</a>
          <a href="/services/content-marketing">Content Marketing</a>
          <a href="/services/demand-generation">Demand Generation</a>
          <a href="/services/abm">Account-Based Marketing</a>
          <a href="/services/campaign-execution">Campaign Execution</a>
          <a href="/services/marketing-automation">Marketing Automation</a>
          <a href="/services/seo-visibility">SEO & Search Visibility</a>
          <a href="/services/website-optimisation">Website Optimisation</a>
          <a href="/services/analytics-reporting">Analytics & Reporting</a>
          <a href="/services/gtm-execution">GTM Execution</a>
        </div>

        {/* ================= NoScript ================= */}
        <noscript>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blogs</a>
          <a href="/careers">Careers</a>
        </noscript>
      </div>
    </footer>
  );
};

export default Footer;
