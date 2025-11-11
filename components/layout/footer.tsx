import { Youtube, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    column1: [
      { text: "Homepage", href: "/" },
      { text: "About Us", href: "/about" },
      { text: "Our Services", href: "/#services" },
      { text: "Case Studies", href: "/blog" },
      { text: "Contact", href: "/contact" },
    ],
    column2: [
      {
        text: "IT System Integration",
        href: "/services/it-system-integration",
      },
      { text: "Software Development", href: "/services/software-development" },
      {
        text: "Professional Services",
        href: "/services/professional-services",
      },
      { text: "Hardware Solutions", href: "/services/hardware-solutions" },
    ],
    column3: [
      { text: "Blog", href: "/blog" },
      { text: "Careers", href: "/careers" },
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms & Conditions", href: "/terms" },
      { text: "FAQs", href: "/faqs" },
    ],
  };

  return (
    <footer className="relative w-full overflow-hidden min-h-[750px] flex items-start">
      {/* Gradient Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/logo/gradientbottom.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Large Bottom Logo Watermark */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-12 pointer-events-none">
        <img
          src="/images/logo/uprightrev.svg"
          alt=""
          className="w-full max-w-5xl h-auto object-contain opacity-80 brightness-0 invert"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section - Logo, Links, and Social Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Logo */}
          <div className="flex items-start">
            <img
              src="/images/logo/uprightlogorevised.png"
              alt="Upright Systems"
              className="h-14 w-auto"
            />
          </div>

          {/* Column 1 */}
          <div>
            <ul className="space-y-3">
              {footerLinks.column1.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-black transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3">
              {footerLinks.column2.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-black transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-3">
              {footerLinks.column3.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-black transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons Grid - 2x3 */}
          <div className="grid grid-cols-3 gap-4 lg:justify-self-end">
            <Link
              href="https://youtube.com/@uprightsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-black transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/company/upright-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/uprightsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://facebook.com/uprightsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-black transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://tiktok.com/@uprightsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-black transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/uprightsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-black transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600">
          © Upright Solutions and System Consultancy Corp. {currentYear}
        </div>
      </div>
    </footer>
  );
}