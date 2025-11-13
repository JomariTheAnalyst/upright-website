"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

interface Testimonial {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
}

const testimonials: Testimonial[] = [
  {
    tempId: 0,
    testimonial:
      "Upright Systems transformed our IT infrastructure. Their expertise in system integration is unmatched in the industry.",
    by: "Edgar Saavedra, CEO at Megaworld Corporation",
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    tempId: 1,
    testimonial:
      "Working with Upright Systems has been a game-changer for our digital transformation journey. Highly recommended!",
    by: "Jaime Augusto Zobel de Ayala, CEO at Ayala Corporation",
    imgSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    tempId: 2,
    testimonial:
      "Their professional approach and technical expertise helped us streamline our operations significantly.",
    by: "Ramon Ang, President at San Miguel Corporation",
    imgSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    tempId: 3,
    testimonial:
      "Upright Systems delivered beyond our expectations. Their solutions are robust, scalable, and future-proof.",
    by: "Lance Gokongwei, President at JG Summit Holdings",
    imgSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
  },
  {
    tempId: 4,
    testimonial:
      "The team's dedication to excellence and customer satisfaction is truly remarkable. A trusted IT partner.",
    by: "Teresita Sy-Coson, Vice Chairperson at SM Investments",
    imgSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    tempId: 5,
    testimonial:
      "Upright Systems' innovative solutions have given us a competitive edge in the market. Exceptional service!",
    by: "Ernest Cu, President at Globe Telecom",
    imgSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
  },
  {
    tempId: 6,
    testimonial:
      "Their system integration expertise helped us achieve seamless operations across all our business units.",
    by: "Alfredo Ramos, CEO at PLDT Inc.",
    imgSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
  },
  {
    tempId: 7,
    testimonial:
      "Upright Systems understands our business needs and delivers solutions that drive real results.",
    by: "Dennis Uy, Founder at Udenna Corporation",
    imgSrc:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out rounded-lg",
        isCenter
          ? "z-10 bg-black text-white border-black"
          : "z-0 bg-white text-black border-gray-300 hover:border-black/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `translate(-50%, -50%) translateX(${
          (cardSize / 1.5) * position
        }px) translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px) rotate(${
          isCenter ? 0 : position % 2 ? 2.5 : -2.5
        }deg)`,
        boxShadow: isCenter
          ? "0px 8px 0px 4px rgba(0,0,0,0.1)"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-16 w-16 rounded-full object-cover"
        style={{
          boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
        }}
      />
      <h3
        className={cn(
          "text-base sm:text-lg font-medium mb-4",
          isCenter ? "text-white" : "text-black"
        )}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 text-sm italic",
          isCenter ? "text-white/80" : "text-gray-600"
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export const AboutUsTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];

    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }

    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#f1f0ee" }}
    >
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-4">
          Client Testimonials
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by leading companies across the Philippines
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ height: 600, backgroundColor: "#f1f0ee" }}
      >
        {testimonialsList.map((testimonial, index) => {
          const position =
            testimonialsList.length % 2
              ? index - (testimonialsList.length + 1) / 2
              : index - testimonialsList.length / 2;

          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-full",
              "bg-white border-2 border-black hover:bg-blackhover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-full",
              "bg-white border-2 border-black hover:bg-black hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};
