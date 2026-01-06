"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItemType = {
  title: string;
  href: string;
  description?: string;
};

// Company dropdown items
const companyLinks: NavItemType[] = [
  {
    title: "FAQs",
    href: "/faqs",
    description: "Quick answers to your most common questions",
  },
];

// NavLink component with sliding underline animation
function NavLink({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors group",
        isScrolled ? "text-gray-800" : "text-white"
      )}
      style={{ fontFamily: "Graphik, sans-serif" }}
    >
      {children}
      {/* Sliding underline */}
      <span
        className={cn(
          "absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
          isScrolled ? "bg-gray-800" : "bg-[#ffdf20]"
        )}
      />
    </Link>
  );
}

export function TransparentNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Font Definitions */}
      <style jsx global>{`
        @font-face {
          font-family: "Graphik";
          src: url("/fonts/Graphik-Regular.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "NeutraText";
          src: url("/fonts/NeutraTextTF-BoldAlt.woff2") format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Far Left */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo/Upright Logo2.png"
                alt="Upright Logo"
                width={150}
                height={50}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Far Right */}
            <div className="hidden lg:flex items-center gap-1">
              <NavLink href="/about" isScrolled={isScrolled}>
                About
              </NavLink>

              <NavLink href="/services" isScrolled={isScrolled}>
                Our Services
              </NavLink>

              <NavLink href="/projects" isScrolled={isScrolled}>
                Projects
              </NavLink>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                <button
                  className={cn(
                    "relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors group",
                    isScrolled ? "text-gray-800" : "text-white"
                  )}
                  style={{ fontFamily: "Graphik, sans-serif" }}
                >
                  Company
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isCompanyOpen && "rotate-180"
                    )}
                  />
                  {/* Sliding underline */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
                      isScrolled ? "bg-gray-800" : "bg-[#ffdf20]"
                    )}
                  />
                </button>

                {/* Dropdown Menu */}
                {isCompanyOpen && (
                  <div className="absolute top-full right-0 pt-2">
                    <div className="w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                      <div className="p-2">
                        {companyLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <p
                              className="text-sm font-semibold text-gray-900"
                              style={{ fontFamily: "Graphik, sans-serif" }}
                            >
                              {link.title}
                            </p>
                            <p
                              className="text-xs text-gray-500 mt-0.5"
                              style={{ fontFamily: "Graphik, sans-serif" }}
                            >
                              {link.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center overflow-hidden ml-6"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                <span
                  className="relative px-6 py-2.5 bg-[#ffdf20] text-black font-medium text-sm"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 14px) 100%, 0 100%)",
                  }}
                >
                  <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    Contact Us
                  </span>
                </span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <MobileNav isScrolled={isScrolled} />
          </div>
        </div>
      </nav>
    </>
  );
}

function MobileNav({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "rounded-full lg:hidden",
            isScrolled ? "text-gray-900" : "text-white"
          )}
        >
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white w-full gap-0 p-0">
        <div className="flex h-14 items-center justify-between border-b border-gray-200 px-4 pt-4">
          <span
            className="font-semibold text-gray-900"
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Menu
          </span>
        </div>
        <div className="grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
          <SheetClose asChild>
            <Link
              href="/"
              className="hover:bg-gray-100 rounded-lg p-3 text-base font-medium transition-colors text-gray-900"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Home
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/about"
              className="hover:bg-gray-100 rounded-lg p-3 text-base font-medium transition-colors text-gray-900"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              About
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/services"
              className="hover:bg-gray-100 rounded-lg p-3 text-base font-medium transition-colors text-gray-900"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Services
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/projects"
              className="hover:bg-gray-100 rounded-lg p-3 text-base font-medium transition-colors text-gray-900"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Projects
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/use-cases"
              className="hover:bg-gray-100 rounded-lg p-3 text-base font-medium transition-colors text-gray-900"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Use Cases
            </Link>
          </SheetClose>

          <Accordion type="single" collapsible>
            <AccordionItem value="company" className="border-none">
              <AccordionTrigger
                className="hover:no-underline text-gray-900 p-3 hover:bg-gray-100 rounded-lg"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                Company
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                <ul className="grid gap-1">
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="block p-3 rounded-lg hover:bg-gray-100"
                        >
                          <p
                            className="text-sm font-medium text-gray-900"
                            style={{ fontFamily: "Graphik, sans-serif" }}
                          >
                            {link.title}
                          </p>
                          <p
                            className="text-xs text-gray-500"
                            style={{ fontFamily: "Graphik, sans-serif" }}
                          >
                            {link.description}
                          </p>
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <SheetClose asChild>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden mt-4 w-full"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              <span
                className="relative w-full px-6 py-3 bg-[#ffdf20] text-black font-medium text-sm text-center"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 14px) 100%, 0 100%)",
                }}
              >
                <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Contact Us
                </span>
              </span>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
