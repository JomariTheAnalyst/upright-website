"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/components/theme-toggle";

export function UprightNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <Navbar className="top-0">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo on the left */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="relative z-20 flex flex-col items-start px-2 py-1"
          >
            <span className="text-2xl font-heading font-bold tracking-tight text-white">
              UPRIGHT
            </span>
          </a>
        </div>

        {/* Center Navigation Items */}
        <NavItems items={navItems} />

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <NavbarButton
            variant="secondary"
            as="button"
            onClick={() => scrollToSection("#login")}
          >
            Login
          </NavbarButton>
          <NavbarButton
            variant="gradient"
            as="button"
            onClick={() => scrollToSection("#contact")}
          >
            Get Started
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <a
            href="#"
            className="relative z-20 flex flex-col items-start px-2 py-1"
          >
            <span className="text-xl font-heading font-bold tracking-tight text-white">
              UPRIGHT
            </span>
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.link);
              }}
              className="w-full text-left text-base font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-2 pt-4">
            <NavbarButton
              variant="secondary"
              as="button"
              onClick={() => scrollToSection("#login")}
              className="w-full"
            >
              Login
            </NavbarButton>
            <NavbarButton
              variant="gradient"
              as="button"
              onClick={() => scrollToSection("#contact")}
              className="w-full"
            >
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
