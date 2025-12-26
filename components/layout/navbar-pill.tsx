"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NavbarPill = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < 1024;

      // On mobile: logo appears after 1 viewport
      // On desktop with pinned scroll: logo appears after 4 viewports (1vh + 300% pin)
      const threshold = isMobile ? viewportHeight : viewportHeight * 4;

      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-end w-full py-6 px-8">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-6 px-6 py-3 rounded-2xl shadow-lg relative transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        {/* Logo - Slides in when scrolled past hero */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0, x: -30, width: 0 }}
              animate={{ opacity: 1, x: 0, width: "auto" }}
              exit={{ opacity: 0, x: -30, width: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1], // Smooth custom easing
                opacity: { duration: 0.4 },
              }}
              className="hidden md:block overflow-hidden"
            >
              <Link href="/">
                <Image
                  src="/images/logo/Upright Logo2.png"
                  alt="Upright Solutions and Systems Consultancy Corp."
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCompanyMenuOpen(!companyMenuOpen)}
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium"
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
                  className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setCompanyMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm text-black bg-[#f2D04E] hover:bg-[#FF8C00] rounded-lg transition-colors font-bold uppercase"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-6 w-6 text-gray-900" />
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-gray-900" />
            </motion.button>

            <div className="flex flex-col space-y-6">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Link
                    href={item.href}
                    className="text-base text-gray-900 font-medium"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Company Links in Mobile */}
              <div className="pt-2 border-t border-gray-200">
                <div className="text-xs font-semibold text-gray-400 mb-3">
                  COMPANY
                </div>
                {companyLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + i) * 0.1 + 0.1 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="mb-4"
                  >
                    <Link
                      href={link.href}
                      className="text-base text-gray-900 font-medium"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-black rounded-full hover:bg-gray-800 transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { NavbarPill };
