import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Globe,
} from 'lucide-react'
import Link from 'next/link'

const data = {
  facebookLink: 'https://facebook.com/uprightsystems',
  linkedinLink: 'https://linkedin.com/company/upright-systems',
  twitterLink: 'https://twitter.com/uprightsystems',
  services: {
    education: '#education',
    lms: '#lms',
    maritime: '#maritime',
    consulting: '#consulting',
  },
  about: {
    history: '#about',
    mission: '#mission',
    vision: '#vision',
    values: '#values',
  },
  help: {
    faqs: '#faqs',
    support: '#support',
    contact: '#contact',
  },
  contact: {
    email: 'info@uprightsystems.com',
    phone: '+63 (2) 8123-4567',
    address: 'Metro Manila, Philippines',
  },
  company: {
    name: 'Upright Systems Inc.',
    description:
      'Providing innovative IT solutions, educational platforms, and professional services since 2015. From online learning to enterprise systems, we deliver excellence across industries.',
    logo: '/images/upright-logo.png',
  },
}

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
]

const aboutLinks = [
  { text: 'About Us', href: '/about' },
  { text: 'Our Services', href: '/#services' },
  { text: 'Case Studies', href: '/blog' },
  { text: 'Careers', href: '/careers' },
]

const serviceLinks = [
  { text: 'IT System Integration', href: '/services/it-system-integration' },
  { text: 'Software Development', href: '/services/software-development' },
  { text: 'Professional Services', href: '/services/professional-services' },
  { text: 'Hardware Solutions', href: '/services/hardware-solutions' },
  { text: 'Maritime Learning', href: '/services/maritime-learning' },
]

const helpfulLinks = [
  { text: 'FAQs', href: '/faqs' },
  { text: 'Blog', href: '/blog' },
  { text: 'Careers', href: '/careers' },
  { text: 'Contact Us', href: '/contact', hasIndicator: true },
]

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900/50 mt-16 w-full rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center items-center gap-2 sm:justify-start">
              <img 
                src="/images/logo/uprightlogoupdated.png" 
                alt="Upright Logo" 
                className="h-8 w-auto"
              />
              <img 
                src="/images/logo/Upright Logo2.png" 
                alt="Upright Systems Inc." 
                className="h-7 w-auto"
              />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-600 dark:text-gray-400 sm:max-w-xs sm:text-left font-body">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium font-heading text-gray-900 dark:text-white">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition font-ui"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium font-heading text-gray-900 dark:text-white">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition font-ui"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium font-heading text-gray-900 dark:text-white">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition font-ui'
                      }`}
                    >
                      <span className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition font-ui">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-yellow-500 dark:bg-yellow-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-yellow-500 dark:bg-yellow-400 relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium font-heading text-gray-900 dark:text-white">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="text-yellow-500 dark:text-yellow-400 size-5 shrink-0" />
                      {isAddress ? (
                        <address className="text-gray-600 dark:text-gray-400 -mt-0.5 flex-1 not-italic transition font-ui">
                          {text}
                        </address>
                      ) : (
                        <span className="text-gray-600 dark:text-gray-400 flex-1 transition font-ui">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-ui">
              <span className="block sm:inline">Empowering businesses through innovative technology.</span>
            </p>

            <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm transition sm:order-first sm:mt-0 font-ui">
              &copy; {currentYear} {data.company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
