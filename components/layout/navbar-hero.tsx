"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function HeroNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];

  const companyLinks = [
    {
      name: "About Us",
      href: "/about",
      description: "Discover our story and mission",
    },
    {
      name: "Careers",
      href: "/careers",
      description: "Join our innovative team",
    },
    {
      name: "Blog",
      href: "/blog",
      description: "Industry insights and updates",
    },
    {
      name: "FAQs",
      href: "/faqs",
      description: "Quick answers to common questions",
    },
  ];

  return (
    <nav className="absolute top-8 right-8 z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg">
        <div className="flex items-center gap-6">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCompanyMenuOpen(!companyMenuOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
              >
                Company
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    companyMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {companyMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setCompanyMenuOpen(false)}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900 text-sm">
                          {link.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Contact Us Button */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#f2D04E] hover:bg-[#FFCC00] text-black font-bold px-6 py-2 rounded-lg text-sm transition-colors duration-200"
            >
              CONTACT US
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 pt-3 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Company Links in Mobile */}
                <div className="pt-2 border-t border-gray-200">
                  <div className="text-xs font-semibold text-gray-400 mb-2">
                    COMPANY
                  </div>
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        {link.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {link.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
