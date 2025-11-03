"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Building2, Briefcase, Mail, Home } from "lucide-react"
import { motion } from "framer-motion"
import { Button as MovingButton } from "@/components/ui/moving-border"
import { Button } from "@/components/ui/button"
import { SmoothLink } from "@/components/ui/smooth-link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


interface MenuItem {
  title: string
  url?: string
  id?: string
  description?: string
  icon?: React.ReactNode
  items?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: <Home className="size-5 shrink-0" />
  },
  {
    title: "About",
    url: "/about",
    icon: <Building2 className="size-5 shrink-0" />,
    description: "Learn about our company history and mission"
  },
  {
    title: "Services",
    icon: <Briefcase className="size-5 shrink-0" />,
    description: "Explore our IT solutions and services",
    items: [
      {
        title: "IT System Integration",
        url: "/services/it-system-integration",
        description: "Enterprise-grade system integration solutions"
      },
      {
        title: "Software Development",
        url: "/services/software-development",
        description: "Custom software and application development"
      },
      {
        title: "Professional Services",
        url: "/services/professional-services",
        description: "IT consulting and professional expertise"
      },
      {
        title: "Hardware Solutions",
        url: "/services/hardware-solutions",
        description: "Hardware procurement and deployment"
      },
      {
        title: "Maritime Learning",
        url: "/services/maritime-learning",
        description: "Online maritime training and certification"
      }
    ]
  },
  {
    title: "Blog",
    url: "/blog",
    icon: <Briefcase className="size-5 shrink-0" />,
    description: "Read our latest insights and updates"
  },
  {
    title: "Careers",
    url: "/careers",
    icon: <Briefcase className="size-5 shrink-0" />,
    description: "Join our team"
  },
  {
    title: "Support",
    icon: <Mail className="size-5 shrink-0" />,
    description: "Get help and find answers",
    items: [
      {
        title: "FAQs",
        url: "/faqs",
        description: "Frequently asked questions"
      },
      {
        title: "Contact Us",
        url: "/contact",
        description: "Get in touch with our team"
      }
    ]
  },
]

export function ProfessionalNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if we're on the home page
    if (window.location.pathname === "/") {
      e.preventDefault()
      scrollToTop()
    }
    // Otherwise, let the Link component handle navigation
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>, url?: string) => {
    // Check if clicking home button while on home page
    if (url === "/" && window.location.pathname === "/") {
      e.preventDefault()
      scrollToTop()
    }
  }

  const renderMenuItem = (item: MenuItem) => {
    // Dropdown menu with sub-items
    if (item.items && item.items.length > 0) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  {subItem.url ? (
                    <NavigationMenuLink asChild>
                      <SmoothLink 
                        href={subItem.url}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{subItem.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      </SmoothLink>
                    </NavigationMenuLink>
                  ) : subItem.id ? (
                    <NavigationMenuLink asChild>
                      <button
                        onClick={() => scrollToSection(subItem.id!)}
                        className="block w-full text-left select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{subItem.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      </button>
                    </NavigationMenuLink>
                  ) : null}
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      )
    }

    // Regular link
    if (item.url) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuLink asChild>
            <SmoothLink 
              href={item.url}
              onClick={(e) => handleHomeClick(e, item.url)}
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.title}
            </SmoothLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      )
    }

    // Scroll to section button
    if (item.id) {
      return (
        <NavigationMenuItem key={item.title}>
          <button
            onClick={() => scrollToSection(item.id!)}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {item.title}
          </button>
        </NavigationMenuItem>
      )
    }

    return null
  }

  const renderMobileMenuItem = (item: MenuItem) => {
    // Dropdown with sub-items
    if (item.items && item.items.length > 0) {
      return (
        <AccordionItem key={item.title} value={item.title}>
          <AccordionTrigger className="font-semibold">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3 pl-4">
              {item.items.map((subItem) => (
                <div key={subItem.title}>
                  {subItem.url ? (
                    <SmoothLink href={subItem.url} className="block py-2">
                      <div className="font-medium text-sm">{subItem.title}</div>
                      <div className="text-xs text-muted-foreground">{subItem.description}</div>
                    </SmoothLink>
                  ) : subItem.id ? (
                    <button
                      onClick={() => scrollToSection(subItem.id!)}
                      className="block w-full text-left py-2"
                    >
                      <div className="font-medium text-sm">{subItem.title}</div>
                      <div className="text-xs text-muted-foreground">{subItem.description}</div>
                    </button>
                  ) : null}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      )
    }

    // Regular link
    if (item.url) {
      return (
        <SmoothLink 
          key={item.title} 
          href={item.url} 
          onClick={(e) => handleHomeClick(e, item.url)}
          className="font-semibold"
        >
          {item.title}
        </SmoothLink>
      )
    }

    // Scroll to section button
    if (item.id) {
      return (
        <button
          key={item.title}
          onClick={() => scrollToSection(item.id!)}
          className="font-semibold text-left w-full"
        >
          {item.title}
        </button>
      )
    }

    return null
  }

  return (
    <motion.section
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-2 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700 transition-all duration-500"
    >
      <div className="container mx-auto px-6">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-between items-center">
          {/* Logo - Left */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center">
            <img
              src="/images/logo/Upright Logo2.png"
              alt="Upright Systems Inc."
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Menu - Center */}
          <div className="flex-1 flex items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Contact Button */}
            <Link href="/contact">
              <MovingButton
                borderRadius="0.75rem"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-yellow-500 transition-all duration-300 font-semibold"
                containerClassName="h-9 w-28"
                borderClassName="bg-[radial-gradient(var(--yellow-500)_40%,transparent_60%)]"
              >
                Contact Us
              </MovingButton>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center">
            <img
              src="/images/logo/Upright Logo2.png"
              alt="Upright Systems Inc."
              className="h-10 w-auto"
            />
          </Link>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" onClick={handleLogoClick} className="flex items-center">
                      <img
                        src="/images/logo/Upright Logo2.png"
                        alt="Upright Systems Inc."
                        className="h-8 w-auto"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menuItems.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3 pt-4 border-t">
                    <Link href="/contact">
                      <Button
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
