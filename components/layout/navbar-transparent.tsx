"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, Briefcase, Users, FileText } from "lucide-react";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
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
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

// Company navigation items with enhanced descriptions
const companyLinks: NavItemType[] = [
  {
    title: "About Us",
    href: "/about",
    description:
      "Discover our story, mission, and the team behind Upright Systems",
    icon: Users,
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Explore opportunities and join our innovative team",
    icon: Briefcase,
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Industry insights, tech trends, and company updates",
    icon: FileText,
  },
  {
    title: "FAQs",
    href: "/faqs",
    description: "Quick answers to your most common questions",
    icon: FileText,
  },
];

function NavItemMobile({
  item,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  item: NavItemType;
}) {
  return (
    <a
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground group relative flex gap-1 gap-x-2 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-muted/20 flex size-10 items-center justify-center rounded-lg border"
        )}
      >
        {item.icon && <item.icon />}
      </div>
      <div className={cn("flex h-10 flex-col justify-center")}>
        <p className="text-sm">{item.title}</p>
        <span className="text-muted-foreground line-clamp-1 text-xs leading-snug">
          {item.description}
        </span>
      </div>
    </a>
  );
}

export function TransparentNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/Upright Logo2.png"
              alt="Upright Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Menu setActive={setActive}>
              <Link href="/">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Home"
                  className={cn(
                    "cursor-pointer text-base font-bold transition-colors duration-200 hover:opacity-90",
                    isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
                  )}
                />
              </Link>
              <Link href="/services">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Services"
                  className={cn(
                    "cursor-pointer text-base font-bold transition-colors duration-200 hover:opacity-90",
                    isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
                  )}
                />
              </Link>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Company"
                className={cn(
                  "cursor-pointer text-base font-bold transition-colors duration-200 hover:opacity-90",
                  isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
                )}
              >
                <div className="grid grid-cols-2 gap-4 p-4 w-[600px]">
                  {companyLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex flex-col gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
                      >
                        <div className="flex items-center gap-3">
                          {IconComponent && (
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200 transition-colors">
                              <IconComponent className="w-5 h-5" />
                            </div>
                          )}
                          <h3 className="text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                            {link.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {link.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button
                className="hidden md:inline-flex"
                style={{ backgroundColor: "#ffe319", color: "#000" }}
              >
                Contact Us
              </Button>
            </Link>
            <MobileNav isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function MobileNav({ isScrolled }: { isScrolled: boolean }) {
  const sections = [
    {
      id: "company",
      name: "Company",
      list: companyLinks,
    },
  ];

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
      <SheetContent className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-lg p-0">
        <div className="flex h-14 items-center justify-between border-b px-4 pt-4">
          <span className="font-semibold">Menu</span>
        </div>
        <div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
          <SheetClose asChild>
            <Link
              href="/"
              className="hover:bg-accent rounded-sm p-2 text-base font-medium transition-colors"
            >
              Home
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/services"
              className="hover:bg-accent rounded-sm p-2 text-base font-medium transition-colors"
            >
              Services
            </Link>
          </SheetClose>

          <Accordion type="single" collapsible>
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="capitalize hover:no-underline">
                  {section.name}
                </AccordionTrigger>
                <AccordionContent className="space-y-1">
                  <ul className="grid gap-1">
                    {section.list.map((link) => (
                      <li key={link.href}>
                        <SheetClose asChild>
                          <NavItemMobile item={link} href={link.href} />
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <SheetClose asChild>
            <Link href="/contact" className="mt-4">
              <Button
                className="w-full"
                style={{ backgroundColor: "#ffe319", color: "#000" }}
              >
                Contact Us
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
