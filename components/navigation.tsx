"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Upright
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </button>
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection("contact")}
              className="shadow-lg"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-white/10 py-4 md:hidden backdrop-blur-xl">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-sm font-medium transition-colors hover:text-primary text-left px-2 py-2 rounded-md hover:bg-accent"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-sm font-medium transition-colors hover:text-primary text-left px-2 py-2 rounded-md hover:bg-accent"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-sm font-medium transition-colors hover:text-primary text-left px-2 py-2 rounded-md hover:bg-accent"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="w-full mt-2"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
