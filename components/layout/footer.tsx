"use client";

import { Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const quickLinks = [
    { text: "About Us", href: "/about" },
    { text: "Our Services", href: "/#services" },
    { text: "Projects", href: "/projects" },
    { text: "Careers", href: "/careers" },
    { text: "Contact", href: "/contact" },
  ];

  // Client logos from public/images/logo/client-logos
  const clientLogos = [
    { name: "BOQ", src: "/images/logo/client-logos/BOQ.png" },
    { name: "Avior", src: "/images/logo/client-logos/avior.png" },
    { name: "Gerrys", src: "/images/logo/client-logos/gerrys.png" },
    { name: "LBC", src: "/images/logo/client-logos/lbc.png" },
  ];

  return (
    <footer className="w-full bg-white" style={{ fontFamily: "'FooterFont', sans-serif" }}>
      {/* Main Footer Content with complete outline border - no margins */}
      <div className="border border-gray-300">
        {/* 4 Column Grid with vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Quick Links */}
          <div className="px-6 lg:px-8 py-8 lg:py-10 border-b lg:border-b-0 lg:border-r border-gray-300">
            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Contact Us */}
          <div className="px-6 lg:px-8 py-8 lg:py-10 border-b lg:border-b-0 lg:border-r border-gray-300">
            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-5">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="tel:+639175551234" className="hover:text-black transition-colors">
                  +63 917 555 1234
                </a>
              </li>
              <li>
                <a href="mailto:info@uprightsystems.ph" className="hover:text-black transition-colors">
                  info@uprightsystems.ph
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Main Office + Branch Office */}
          <div className="px-6 lg:px-8 py-8 lg:py-10 border-b lg:border-b-0 lg:border-r border-gray-300">
            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-5">
              Main Office
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Elias St., Manila City,<br />
              Metro Manila 2100, PH
            </p>

            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3">
              Branch Office
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Bacoor, Cavite 4102,<br />
              Philippines
            </p>
          </div>

          {/* Column 4 - Our Clients with logo dividers */}
          <div className="px-6 lg:px-8 py-8 lg:py-10">
            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-5">
              Our Clients
            </h3>
            <div className="flex flex-wrap border-t border-l border-gray-300">
              {clientLogos.map((client, index) => (
                <div
                  key={client.name}
                  className="w-1/2 flex items-center justify-center p-4 border-r border-b border-gray-300 aspect-square"
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300" />

        {/* Bottom Bar - Social & Legal */}
        <div className="px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - Follow Us */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="https://linkedin.com/company/upright-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="https://facebook.com/uprightsystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right - Legal Links */}
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <Link href="/privacy-policy" className="hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="hover:text-black transition-colors">
                Cookie Policy
              </Link>
              <Link href="/terms" className="hover:text-black transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Very Bottom Bar - Logo & Copyright (outside the border) */}
      <div className="py-6 px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo/uprightlogorevised.png"
              alt="Upright Systems"
              className="h-20 md:h-24 w-auto"
            />
          </div>

          {/* Copyright / Tagline */}
          <p className="text-[10px] text-gray-400 text-center md:text-right max-w-xl leading-relaxed">
            Upright Solutions and Systems Consultancy Corp. is a trusted IT consultancy and technology solutions 
            provider, committed to delivering innovation, reliability, and excellence since 2015.
          </p>
        </div>
      </div>

      {/* Custom Font */}
      <style jsx global>{`
        @font-face {
          font-family: 'FooterFont';
          src: url('/fonts/woffwoff.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </footer>
  );
}
