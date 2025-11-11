"use client";

import Image from "next/image";

const companyLogos = [
  // Capgreg businesses logos
  { src: "/images/logo/capgreg-businesses/CREATV-LOGO.png", alt: "Capgreg" },
  { src: "/images/logo/capgreg-businesses/NARICA-LOGO.png", alt: "narica" },
  { src: "/images/logo/capgreg-businesses/OPANDI-LOGO.png", alt: "opandi" },
  {
    src: "/images/logo/capgreg-businesses/oceanwide-GROUP-WORD-white-768x179.png",
    alt: "oceanwide-group",
  },
  {
    src: "/images/logo/capgreg-businesses/OCEANWIDE-MARITIME-LOGO.png",
    alt: "oceanwide",
  },
  {
    src: "/images/logo/capgreg-businesses/OCEANSKIPPER-LOGO.png",
    alt: "Capgreg",
  },

  // Main logo folder - company logos only
  { src: "/images/logo/2go.webp", alt: "2go" },
  { src: "/images/logo/gcash.webp", alt: "gcash" },
  { src: "/images/logo/sanmiguelcorp.png", alt: "smb" },
];

export function CareersMarqueeLogo() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Trusted by this companies nationwide
        </h2>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex overflow-hidden">
          {/* First set of logos */}
          <div className="flex animate-marquee whitespace-nowrap">
            {companyLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center mx-8 md:mx-12"
              >
                <div className="relative w-32 h-20 md:w-40 md:h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div
            className="flex animate-marquee whitespace-nowrap"
            aria-hidden="true"
          >
            {companyLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center mx-8 md:mx-12"
              >
                <div className="relative w-32 h-20 md:w-40 md:h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
